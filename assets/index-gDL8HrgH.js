(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var ac={exports:{}},Ao={},lc={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function D_(){if(gp)return st;gp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function g(U,ne,we){this.props=U,this.context=ne,this.refs=R,this.updater=we||y}g.prototype.isReactComponent={},g.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},g.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=g.prototype;function I(U,ne,we){this.props=U,this.context=ne,this.refs=R,this.updater=we||y}var P=I.prototype=new _;P.constructor=I,w(P,g.prototype),P.isPureReactComponent=!0;var D=Array.isArray,Z=Object.prototype.hasOwnProperty,B={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function q(U,ne,we){var Y,ce={},xe=null,Se=null;if(ne!=null)for(Y in ne.ref!==void 0&&(Se=ne.ref),ne.key!==void 0&&(xe=""+ne.key),ne)Z.call(ne,Y)&&!N.hasOwnProperty(Y)&&(ce[Y]=ne[Y]);var Pe=arguments.length-2;if(Pe===1)ce.children=we;else if(1<Pe){for(var Le=Array(Pe),Je=0;Je<Pe;Je++)Le[Je]=arguments[Je+2];ce.children=Le}if(U&&U.defaultProps)for(Y in Pe=U.defaultProps,Pe)ce[Y]===void 0&&(ce[Y]=Pe[Y]);return{$$typeof:o,type:U,key:xe,ref:Se,props:ce,_owner:B.current}}function ge(U,ne){return{$$typeof:o,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function E(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function C(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(we){return ne[we]})}var re=/\/+/g;function X(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):ne.toString(36)}function oe(U,ne,we,Y,ce){var xe=typeof U;(xe==="undefined"||xe==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(xe){case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case o:case e:Se=!0}}if(Se)return Se=U,ce=ce(Se),U=Y===""?"."+X(Se,0):Y,D(ce)?(we="",U!=null&&(we=U.replace(re,"$&/")+"/"),oe(ce,ne,we,"",function(Je){return Je})):ce!=null&&(E(ce)&&(ce=ge(ce,we+(!ce.key||Se&&Se.key===ce.key?"":(""+ce.key).replace(re,"$&/")+"/")+U)),ne.push(ce)),1;if(Se=0,Y=Y===""?".":Y+":",D(U))for(var Pe=0;Pe<U.length;Pe++){xe=U[Pe];var Le=Y+X(xe,Pe);Se+=oe(xe,ne,we,Le,ce)}else if(Le=x(U),typeof Le=="function")for(U=Le.call(U),Pe=0;!(xe=U.next()).done;)xe=xe.value,Le=Y+X(xe,Pe++),Se+=oe(xe,ne,we,Le,ce);else if(xe==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Se}function ae(U,ne,we){if(U==null)return U;var Y=[],ce=0;return oe(U,Y,"","",function(xe){return ne.call(we,xe,ce++)}),Y}function te(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(we){(U._status===0||U._status===-1)&&(U._status=1,U._result=we)},function(we){(U._status===0||U._status===-1)&&(U._status=2,U._result=we)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},O={transition:null},ue={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:O,ReactCurrentOwner:B};function ie(){throw Error("act(...) is not supported in production builds of React.")}return st.Children={map:ae,forEach:function(U,ne,we){ae(U,function(){ne.apply(this,arguments)},we)},count:function(U){var ne=0;return ae(U,function(){ne++}),ne},toArray:function(U){return ae(U,function(ne){return ne})||[]},only:function(U){if(!E(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},st.Component=g,st.Fragment=n,st.Profiler=a,st.PureComponent=I,st.StrictMode=r,st.Suspense=p,st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,st.act=ie,st.cloneElement=function(U,ne,we){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Y=w({},U.props),ce=U.key,xe=U.ref,Se=U._owner;if(ne!=null){if(ne.ref!==void 0&&(xe=ne.ref,Se=B.current),ne.key!==void 0&&(ce=""+ne.key),U.type&&U.type.defaultProps)var Pe=U.type.defaultProps;for(Le in ne)Z.call(ne,Le)&&!N.hasOwnProperty(Le)&&(Y[Le]=ne[Le]===void 0&&Pe!==void 0?Pe[Le]:ne[Le])}var Le=arguments.length-2;if(Le===1)Y.children=we;else if(1<Le){Pe=Array(Le);for(var Je=0;Je<Le;Je++)Pe[Je]=arguments[Je+2];Y.children=Pe}return{$$typeof:o,type:U.type,key:ce,ref:xe,props:Y,_owner:Se}},st.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},st.createElement=q,st.createFactory=function(U){var ne=q.bind(null,U);return ne.type=U,ne},st.createRef=function(){return{current:null}},st.forwardRef=function(U){return{$$typeof:d,render:U}},st.isValidElement=E,st.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:te}},st.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},st.startTransition=function(U){var ne=O.transition;O.transition={};try{U()}finally{O.transition=ne}},st.unstable_act=ie,st.useCallback=function(U,ne){return le.current.useCallback(U,ne)},st.useContext=function(U){return le.current.useContext(U)},st.useDebugValue=function(){},st.useDeferredValue=function(U){return le.current.useDeferredValue(U)},st.useEffect=function(U,ne){return le.current.useEffect(U,ne)},st.useId=function(){return le.current.useId()},st.useImperativeHandle=function(U,ne,we){return le.current.useImperativeHandle(U,ne,we)},st.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},st.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},st.useMemo=function(U,ne){return le.current.useMemo(U,ne)},st.useReducer=function(U,ne,we){return le.current.useReducer(U,ne,we)},st.useRef=function(U){return le.current.useRef(U)},st.useState=function(U){return le.current.useState(U)},st.useSyncExternalStore=function(U,ne,we){return le.current.useSyncExternalStore(U,ne,we)},st.useTransition=function(){return le.current.useTransition()},st.version="18.3.1",st}var _p;function Uf(){return _p||(_p=1,lc.exports=D_()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function U_(){if(vp)return Ao;vp=1;var o=Uf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,S={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(S[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)S[v]===void 0&&(S[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:y,props:S,_owner:a.current}}return Ao.Fragment=n,Ao.jsx=f,Ao.jsxs=f,Ao}var xp;function I_(){return xp||(xp=1,ac.exports=U_()),ac.exports}var ni=I_(),dn=Uf(),Xa={},uc={exports:{}},Tn={},cc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function N_(){return Sp||(Sp=1,(function(o){function e(O,ue){var ie=O.length;O.push(ue);e:for(;0<ie;){var U=ie-1>>>1,ne=O[U];if(0<a(ne,ue))O[U]=ue,O[ie]=ne,ie=U;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var ue=O[0],ie=O.pop();if(ie!==ue){O[0]=ie;e:for(var U=0,ne=O.length,we=ne>>>1;U<we;){var Y=2*(U+1)-1,ce=O[Y],xe=Y+1,Se=O[xe];if(0>a(ce,ie))xe<ne&&0>a(Se,ce)?(O[U]=Se,O[xe]=ie,U=xe):(O[U]=ce,O[Y]=ie,U=Y);else if(xe<ne&&0>a(Se,ie))O[U]=Se,O[xe]=ie,U=xe;else break e}}return ue}function a(O,ue){var ie=O.sortIndex-ue.sortIndex;return ie!==0?ie:O.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,S=null,x=3,y=!1,w=!1,R=!1,g=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(O){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=O)r(m),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(m)}}function D(O){if(R=!1,P(O),!w)if(n(p)!==null)w=!0,te(Z);else{var ue=n(m);ue!==null&&le(D,ue.startTime-O)}}function Z(O,ue){w=!1,R&&(R=!1,_(q),q=-1),y=!0;var ie=x;try{for(P(ue),S=n(p);S!==null&&(!(S.expirationTime>ue)||O&&!C());){var U=S.callback;if(typeof U=="function"){S.callback=null,x=S.priorityLevel;var ne=U(S.expirationTime<=ue);ue=o.unstable_now(),typeof ne=="function"?S.callback=ne:S===n(p)&&r(p),P(ue)}else r(p);S=n(p)}if(S!==null)var we=!0;else{var Y=n(m);Y!==null&&le(D,Y.startTime-ue),we=!1}return we}finally{S=null,x=ie,y=!1}}var B=!1,N=null,q=-1,ge=5,E=-1;function C(){return!(o.unstable_now()-E<ge)}function re(){if(N!==null){var O=o.unstable_now();E=O;var ue=!0;try{ue=N(!0,O)}finally{ue?X():(B=!1,N=null)}}else B=!1}var X;if(typeof I=="function")X=function(){I(re)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ae=oe.port2;oe.port1.onmessage=re,X=function(){ae.postMessage(null)}}else X=function(){g(re,0)};function te(O){N=O,B||(B=!0,X())}function le(O,ue){q=g(function(){O(o.unstable_now())},ue)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_continueExecution=function(){w||y||(w=!0,te(Z))},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var ie=x;x=ue;try{return O()}finally{x=ie}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(O,ue){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ie=x;x=O;try{return ue()}finally{x=ie}},o.unstable_scheduleCallback=function(O,ue,ie){var U=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?U+ie:U):ie=U,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ie+ne,O={id:v++,callback:ue,priorityLevel:O,startTime:ie,expirationTime:ne,sortIndex:-1},ie>U?(O.sortIndex=ie,e(m,O),n(p)===null&&O===n(m)&&(R?(_(q),q=-1):R=!0,le(D,ie-U))):(O.sortIndex=ne,e(p,O),w||y||(w=!0,te(Z))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var ue=x;return function(){var ie=x;x=ue;try{return O.apply(this,arguments)}finally{x=ie}}}})(fc)),fc}var yp;function F_(){return yp||(yp=1,cc.exports=N_()),cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function O_(){if(Mp)return Tn;Mp=1;var o=Uf(),e=F_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(t){return p.call(S,t)?!0:p.call(v,t)?!1:m.test(t)?S[t]=!0:(v[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);g[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);g[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);g[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,s,l){var c=g.hasOwnProperty(i)?g[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var D=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),B=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),O=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var we=!1;function Y(t,i){if(!t||we)return"";we=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var c=ee.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,b=h.length-1;1<=M&&0<=b&&c[M]!==h[b];)b--;for(;1<=M&&0<=b;M--,b--)if(c[M]!==h[b]){if(M!==1||b!==1)do if(M--,b--,0>b||c[M]!==h[b]){var F=`
`+c[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=b);break}}}finally{we=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ne(t):""}function ce(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Y(t.type,!1),t;case 11:return t=Y(t.type.render,!1),t;case 1:return t=Y(t.type,!0),t;default:return""}}function xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case B:return"Portal";case ge:return"Profiler";case q:return"StrictMode";case X:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case re:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(t){var i=Le(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=Je(t))}function at(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function k(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function en(t,i){var s=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function ot(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Pe(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Ke(t,i){ct(t,i);var s=Pe(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ze(t,i.type,s):i.hasOwnProperty("defaultValue")&&Ze(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Ze(t,i,s){(i!=="number"||k(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var L=Array.isArray;function T(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Pe(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function K(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function de(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(L(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Pe(s)}}function _e(t,i){var s=Pe(i.value),l=Pe(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function fe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ne,ft=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ye(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){et.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fe[i]=Fe[t]})});function Qe(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+i).trim():i+"px"}function ke(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Qe(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var lt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(t,i){if(i){if(lt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function yt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function be(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var se=null,he=null,Re=null;function Ue(t){if(t=co(t)){if(typeof se!="function")throw Error(n(280));var i=t.stateNode;i&&(i=oa(i),se(t.stateNode,t.type,i))}}function ut(t){he?Re?Re.push(t):Re=[t]:he=t}function Nt(){if(he){var t=he,i=Re;if(Re=he=null,Ue(t),i)for(t=0;t<i.length;t++)Ue(i[t])}}function tn(t,i){return t(i)}function dt(){}var jt=!1;function On(t,i,s){if(jt)return t(i,s);jt=!0;try{return tn(t,i,s)}finally{jt=!1,(he!==null||Re!==null)&&(dt(),Nt())}}function Oi(t,i){var s=t.stateNode;if(s===null)return null;var l=oa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Yr=!1;if(d)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Yr=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Yr=!1}function Xs(t,i,s,l,c,h,M,b,F){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(s,ee)}catch(me){this.onError(me)}}var ki=!1,_r=null,mi=!1,qr=null,jr={onError:function(t){ki=!0,_r=t}};function Ho(t,i,s,l,c,h,M,b,F){ki=!1,_r=null,Xs.apply(jr,arguments)}function Vo(t,i,s,l,c,h,M,b,F){if(Ho.apply(this,arguments),ki){if(ki){var ee=_r;ki=!1,_r=null}else throw Error(n(198));mi||(mi=!0,qr=ee)}}function gi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Go(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Wo(t){if(gi(t)!==t)throw Error(n(188))}function A(t){var i=t.alternate;if(!i){if(i=gi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Wo(c),t;if(h===l)return Wo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,b=c.child;b;){if(b===s){M=!0,s=c,l=h;break}if(b===l){M=!0,l=c,s=h;break}b=b.sibling}if(!M){for(b=h.child;b;){if(b===s){M=!0,s=h,l=c;break}if(b===l){M=!0,l=h,s=c;break}b=b.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function V(t){return t=A(t),t!==null?Q(t):null}function Q(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Q(t);if(i!==null)return i;t=t.sibling}return null}var J=e.unstable_scheduleCallback,G=e.unstable_cancelCallback,Ee=e.unstable_shouldYield,De=e.unstable_requestPaint,Te=e.unstable_now,Ve=e.unstable_getCurrentPriorityLevel,je=e.unstable_ImmediatePriority,$e=e.unstable_UserBlockingPriority,Ge=e.unstable_NormalPriority,xt=e.unstable_LowPriority,wt=e.unstable_IdlePriority,Rt=null,Ut=null;function gt(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Rt,t,void 0,(t.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Pn,Gt=Math.log,_t=Math.LN2;function Pn(t){return t>>>=0,t===0?32:31-(Gt(t)/_t|0)|0}var Yn=64,Kt=4194304;function _i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ct(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var b=M&~c;b!==0?l=_i(b):(h&=M,h!==0&&(l=_i(h)))}else M=s&~c,M!==0?l=_i(M):h!==0&&(l=_i(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-Oe(i),c=1<<s,l|=t[s],i&=~c;return l}function oi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ys(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Oe(h),b=1<<M,F=c[M];F===-1?((b&s)===0||(b&l)!==0)&&(c[M]=oi(b,i)):F<=i&&(t.expiredLanes|=b),h&=~b}}function sn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kr(){var t=Yn;return Yn<<=1,(Yn&4194240)===0&&(Yn=64),t}function qs(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Bi(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Oe(i),t[i]=s}function Jm(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-Oe(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Ll(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var Et=0;function jf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Kf,bl,$f,Zf,Qf,Dl=!1,Xo=[],zi=null,Hi=null,Vi=null,js=new Map,Ks=new Map,Gi=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jf(t,i){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(i.pointerId)}}function $s(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=co(i),i!==null&&bl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function tg(t,i,s,l,c){switch(i){case"focusin":return zi=$s(zi,t,i,s,l,c),!0;case"dragenter":return Hi=$s(Hi,t,i,s,l,c),!0;case"mouseover":return Vi=$s(Vi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return js.set(h,$s(js.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Ks.set(h,$s(Ks.get(h)||null,t,i,s,l,c)),!0}return!1}function ed(t){var i=vr(t.target);if(i!==null){var s=gi(i);if(s!==null){if(i=s.tag,i===13){if(i=Go(s),i!==null){t.blockedOn=i,Qf(t.priority,function(){$f(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Il(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);H=l,s.target.dispatchEvent(l),H=null}else return i=co(s),i!==null&&bl(i),t.blockedOn=s,!1;i.shift()}return!0}function td(t,i,s){Yo(t)&&s.delete(i)}function ng(){Dl=!1,zi!==null&&Yo(zi)&&(zi=null),Hi!==null&&Yo(Hi)&&(Hi=null),Vi!==null&&Yo(Vi)&&(Vi=null),js.forEach(td),Ks.forEach(td)}function Zs(t,i){t.blockedOn===i&&(t.blockedOn=null,Dl||(Dl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ng)))}function Qs(t){function i(c){return Zs(c,t)}if(0<Xo.length){Zs(Xo[0],t);for(var s=1;s<Xo.length;s++){var l=Xo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(zi!==null&&Zs(zi,t),Hi!==null&&Zs(Hi,t),Vi!==null&&Zs(Vi,t),js.forEach(i),Ks.forEach(i),s=0;s<Gi.length;s++)l=Gi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Gi.length&&(s=Gi[0],s.blockedOn===null);)ed(s),s.blockedOn===null&&Gi.shift()}var $r=D.ReactCurrentBatchConfig,qo=!0;function ig(t,i,s,l){var c=Et,h=$r.transition;$r.transition=null;try{Et=1,Ul(t,i,s,l)}finally{Et=c,$r.transition=h}}function rg(t,i,s,l){var c=Et,h=$r.transition;$r.transition=null;try{Et=4,Ul(t,i,s,l)}finally{Et=c,$r.transition=h}}function Ul(t,i,s,l){if(qo){var c=Il(t,i,s,l);if(c===null)Zl(t,i,l,jo,s),Jf(t,l);else if(tg(c,t,i,s,l))l.stopPropagation();else if(Jf(t,l),i&4&&-1<eg.indexOf(t)){for(;c!==null;){var h=co(c);if(h!==null&&Kf(h),h=Il(t,i,s,l),h===null&&Zl(t,i,l,jo,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else Zl(t,i,l,null,s)}}var jo=null;function Il(t,i,s,l){if(jo=null,t=be(l),t=vr(t),t!==null)if(i=gi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Go(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return jo=t,null}function nd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ve()){case je:return 1;case $e:return 4;case Ge:case xt:return 16;case wt:return 536870912;default:return 16}default:return 16}}var Wi=null,Nl=null,Ko=null;function id(){if(Ko)return Ko;var t,i=Nl,s=i.length,l,c="value"in Wi?Wi.value:Wi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return Ko=c.slice(t,1<l?1-l:void 0)}function $o(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function rd(){return!1}function Ln(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(s=t[b],this[b]=s?s(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Zo:rd,this.isPropagationStopped=rd,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Ln(Zr),Js=ie({},Zr,{view:0,detail:0}),sg=Ln(Js),Ol,kl,eo,Qo=ie({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Ol=t.screenX-eo.screenX,kl=t.screenY-eo.screenY):kl=Ol=0,eo=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:kl}}),sd=Ln(Qo),og=ie({},Qo,{dataTransfer:0}),ag=Ln(og),lg=ie({},Js,{relatedTarget:0}),Bl=Ln(lg),ug=ie({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),cg=Ln(ug),fg=ie({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dg=Ln(fg),hg=ie({},Zr,{data:0}),od=Ln(hg),pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _g(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=gg[t])?!!i[t]:!1}function zl(){return _g}var vg=ie({},Js,{key:function(t){if(t.key){var i=pg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xg=Ln(vg),Sg=ie({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=Ln(Sg),yg=ie({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),Mg=Ln(yg),Eg=ie({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tg=Ln(Eg),wg=ie({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=Ln(wg),Rg=[9,13,27,32],Hl=d&&"CompositionEvent"in window,to=null;d&&"documentMode"in document&&(to=document.documentMode);var Cg=d&&"TextEvent"in window&&!to,ld=d&&(!Hl||to&&8<to&&11>=to),ud=" ",cd=!1;function fd(t,i){switch(t){case"keyup":return Rg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function Pg(t,i){switch(t){case"compositionend":return dd(i);case"keypress":return i.which!==32?null:(cd=!0,ud);case"textInput":return t=i.data,t===ud&&cd?null:t;default:return null}}function Lg(t,i){if(Qr)return t==="compositionend"||!Hl&&fd(t,i)?(t=id(),Ko=Nl=Wi=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ld&&i.locale!=="ko"?null:i.data;default:return null}}var bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!bg[t.type]:i==="textarea"}function pd(t,i,s,l){ut(l),i=ia(i,"onChange"),0<i.length&&(s=new Fl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var no=null,io=null;function Dg(t){Dd(t,0)}function Jo(t){var i=is(t);if(at(i))return t}function Ug(t,i){if(t==="change")return i}var md=!1;if(d){var Vl;if(d){var Gl="oninput"in document;if(!Gl){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),Gl=typeof gd.oninput=="function"}Vl=Gl}else Vl=!1;md=Vl&&(!document.documentMode||9<document.documentMode)}function _d(){no&&(no.detachEvent("onpropertychange",vd),io=no=null)}function vd(t){if(t.propertyName==="value"&&Jo(io)){var i=[];pd(i,io,t,be(t)),On(Dg,i)}}function Ig(t,i,s){t==="focusin"?(_d(),no=i,io=s,no.attachEvent("onpropertychange",vd)):t==="focusout"&&_d()}function Ng(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jo(io)}function Fg(t,i){if(t==="click")return Jo(i)}function Og(t,i){if(t==="input"||t==="change")return Jo(i)}function kg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var qn=typeof Object.is=="function"?Object.is:kg;function ro(t,i){if(qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!qn(t[c],i[c]))return!1}return!0}function xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sd(t,i){var s=xd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=xd(s)}}function yd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Md(){for(var t=window,i=k();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=k(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Bg(t){var i=Md(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&yd(s.ownerDocument.documentElement,s)){if(l!==null&&Wl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Sd(s,h);var M=Sd(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zg=d&&"documentMode"in document&&11>=document.documentMode,Jr=null,Xl=null,so=null,Yl=!1;function Ed(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Yl||Jr==null||Jr!==k(l)||(l=Jr,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),so&&ro(so,l)||(so=l,l=ia(Xl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Jr)))}function ea(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},ql={},Td={};d&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function ta(t){if(ql[t])return ql[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Td)return ql[t]=i[s];return t}var wd=ta("animationend"),Ad=ta("animationiteration"),Rd=ta("animationstart"),Cd=ta("transitionend"),Pd=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,i){Pd.set(t,i),u(i,[t])}for(var jl=0;jl<Ld.length;jl++){var Kl=Ld[jl],Hg=Kl.toLowerCase(),Vg=Kl[0].toUpperCase()+Kl.slice(1);Xi(Hg,"on"+Vg)}Xi(wd,"onAnimationEnd"),Xi(Ad,"onAnimationIteration"),Xi(Rd,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(Cd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function bd(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Vo(l,i,void 0,t),t.currentTarget=null}function Dd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var b=l[M],F=b.instance,ee=b.currentTarget;if(b=b.listener,F!==h&&c.isPropagationStopped())break e;bd(c,b,ee),h=F}else for(M=0;M<l.length;M++){if(b=l[M],F=b.instance,ee=b.currentTarget,b=b.listener,F!==h&&c.isPropagationStopped())break e;bd(c,b,ee),h=F}}}if(mi)throw t=qr,mi=!1,qr=null,t}function Lt(t,i){var s=i[iu];s===void 0&&(s=i[iu]=new Set);var l=t+"__bubble";s.has(l)||(Ud(i,t,2,!1),s.add(l))}function $l(t,i,s){var l=0;i&&(l|=4),Ud(s,t,l,i)}var na="_reactListening"+Math.random().toString(36).slice(2);function ao(t){if(!t[na]){t[na]=!0,r.forEach(function(s){s!=="selectionchange"&&(Gg.has(s)||$l(s,!1,t),$l(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[na]||(i[na]=!0,$l("selectionchange",!1,i))}}function Ud(t,i,s,l){switch(nd(i)){case 1:var c=ig;break;case 4:c=rg;break;default:c=Ul}s=c.bind(null,i,s,t),c=void 0,!Yr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function Zl(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var b=l.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;M=M.return}for(;b!==null;){if(M=vr(b),M===null)return;if(F=M.tag,F===5||F===6){l=h=M;continue e}b=b.parentNode}}l=l.return}On(function(){var ee=h,me=be(s),ve=[];e:{var pe=Pd.get(t);if(pe!==void 0){var Ie=Fl,ze=t;switch(t){case"keypress":if($o(s)===0)break e;case"keydown":case"keyup":Ie=xg;break;case"focusin":ze="focus",Ie=Bl;break;case"focusout":ze="blur",Ie=Bl;break;case"beforeblur":case"afterblur":Ie=Bl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Mg;break;case wd:case Ad:case Rd:Ie=cg;break;case Cd:Ie=Tg;break;case"scroll":Ie=sg;break;case"wheel":Ie=Ag;break;case"copy":case"cut":case"paste":Ie=dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=ad}var He=(i&4)!==0,zt=!He&&t==="scroll",W=He?pe!==null?pe+"Capture":null:pe;He=[];for(var z=ee,j;z!==null;){j=z;var Me=j.stateNode;if(j.tag===5&&Me!==null&&(j=Me,W!==null&&(Me=Oi(z,W),Me!=null&&He.push(lo(z,Me,j)))),zt)break;z=z.return}0<He.length&&(pe=new Ie(pe,ze,null,s,me),ve.push({event:pe,listeners:He}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",pe&&s!==H&&(ze=s.relatedTarget||s.fromElement)&&(vr(ze)||ze[vi]))break e;if((Ie||pe)&&(pe=me.window===me?me:(pe=me.ownerDocument)?pe.defaultView||pe.parentWindow:window,Ie?(ze=s.relatedTarget||s.toElement,Ie=ee,ze=ze?vr(ze):null,ze!==null&&(zt=gi(ze),ze!==zt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=ee),Ie!==ze)){if(He=sd,Me="onMouseLeave",W="onMouseEnter",z="mouse",(t==="pointerout"||t==="pointerover")&&(He=ad,Me="onPointerLeave",W="onPointerEnter",z="pointer"),zt=Ie==null?pe:is(Ie),j=ze==null?pe:is(ze),pe=new He(Me,z+"leave",Ie,s,me),pe.target=zt,pe.relatedTarget=j,Me=null,vr(me)===ee&&(He=new He(W,z+"enter",ze,s,me),He.target=j,He.relatedTarget=zt,Me=He),zt=Me,Ie&&ze)t:{for(He=Ie,W=ze,z=0,j=He;j;j=ts(j))z++;for(j=0,Me=W;Me;Me=ts(Me))j++;for(;0<z-j;)He=ts(He),z--;for(;0<j-z;)W=ts(W),j--;for(;z--;){if(He===W||W!==null&&He===W.alternate)break t;He=ts(He),W=ts(W)}He=null}else He=null;Ie!==null&&Id(ve,pe,Ie,He,!1),ze!==null&&zt!==null&&Id(ve,zt,ze,He,!0)}}e:{if(pe=ee?is(ee):window,Ie=pe.nodeName&&pe.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&pe.type==="file")var We=Ug;else if(hd(pe))if(md)We=Og;else{We=Ng;var Ye=Ig}else(Ie=pe.nodeName)&&Ie.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(We=Fg);if(We&&(We=We(t,ee))){pd(ve,We,s,me);break e}Ye&&Ye(t,pe,ee),t==="focusout"&&(Ye=pe._wrapperState)&&Ye.controlled&&pe.type==="number"&&Ze(pe,"number",pe.value)}switch(Ye=ee?is(ee):window,t){case"focusin":(hd(Ye)||Ye.contentEditable==="true")&&(Jr=Ye,Xl=ee,so=null);break;case"focusout":so=Xl=Jr=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Ed(ve,s,me);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":Ed(ve,s,me)}var qe;if(Hl)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Qr?fd(t,s)&&(tt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(tt="onCompositionStart");tt&&(ld&&s.locale!=="ko"&&(Qr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Qr&&(qe=id()):(Wi=me,Nl="value"in Wi?Wi.value:Wi.textContent,Qr=!0)),Ye=ia(ee,tt),0<Ye.length&&(tt=new od(tt,t,null,s,me),ve.push({event:tt,listeners:Ye}),qe?tt.data=qe:(qe=dd(s),qe!==null&&(tt.data=qe)))),(qe=Cg?Pg(t,s):Lg(t,s))&&(ee=ia(ee,"onBeforeInput"),0<ee.length&&(me=new od("onBeforeInput","beforeinput",null,s,me),ve.push({event:me,listeners:ee}),me.data=qe))}Dd(ve,i)})}function lo(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ia(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Oi(t,s),h!=null&&l.unshift(lo(t,h,c)),h=Oi(t,i),h!=null&&l.push(lo(t,h,c))),t=t.return}return l}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Id(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var b=s,F=b.alternate,ee=b.stateNode;if(F!==null&&F===l)break;b.tag===5&&ee!==null&&(b=ee,c?(F=Oi(s,h),F!=null&&M.unshift(lo(s,F,b))):c||(F=Oi(s,h),F!=null&&M.push(lo(s,F,b)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Wg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function Nd(t){return(typeof t=="string"?t:""+t).replace(Wg,`
`).replace(Xg,"")}function ra(t,i,s){if(i=Nd(i),Nd(t)!==i&&s)throw Error(n(425))}function sa(){}var Ql=null,Jl=null;function eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Yg=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(t){return Fd.resolve(null).then(t).catch(jg)}:tu;function jg(t){setTimeout(function(){throw t})}function nu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),Qs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);Qs(i)}function Yi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Od(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),ai="__reactFiber$"+ns,uo="__reactProps$"+ns,vi="__reactContainer$"+ns,iu="__reactEvents$"+ns,Kg="__reactListeners$"+ns,$g="__reactHandles$"+ns;function vr(t){var i=t[ai];if(i)return i;for(var s=t.parentNode;s;){if(i=s[vi]||s[ai]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Od(t);t!==null;){if(s=t[ai])return s;t=Od(t)}return i}t=s,s=t.parentNode}return null}function co(t){return t=t[ai]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function oa(t){return t[uo]||null}var ru=[],rs=-1;function qi(t){return{current:t}}function bt(t){0>rs||(t.current=ru[rs],ru[rs]=null,rs--)}function Pt(t,i){rs++,ru[rs]=t.current,t.current=i}var ji={},on=qi(ji),xn=qi(!1),xr=ji;function ss(t,i){var s=t.type.contextTypes;if(!s)return ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Sn(t){return t=t.childContextTypes,t!=null}function aa(){bt(xn),bt(on)}function kd(t,i,s){if(on.current!==ji)throw Error(n(168));Pt(on,i),Pt(xn,s)}function Bd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,Se(t)||"Unknown",c));return ie({},s,l)}function la(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,xr=on.current,Pt(on,t),Pt(xn,xn.current),!0}function zd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Bd(t,i,xr),l.__reactInternalMemoizedMergedChildContext=t,bt(xn),bt(on),Pt(on,t)):bt(xn),Pt(xn,s)}var xi=null,ua=!1,su=!1;function Hd(t){xi===null?xi=[t]:xi.push(t)}function Zg(t){ua=!0,Hd(t)}function Ki(){if(!su&&xi!==null){su=!0;var t=0,i=Et;try{var s=xi;for(Et=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}xi=null,ua=!1}catch(c){throw xi!==null&&(xi=xi.slice(t+1)),J(je,Ki),c}finally{Et=i,su=!1}}return null}var os=[],as=0,ca=null,fa=0,kn=[],Bn=0,Sr=null,Si=1,yi="";function yr(t,i){os[as++]=fa,os[as++]=ca,ca=t,fa=i}function Vd(t,i,s){kn[Bn++]=Si,kn[Bn++]=yi,kn[Bn++]=Sr,Sr=t;var l=Si;t=yi;var c=32-Oe(l)-1;l&=~(1<<c),s+=1;var h=32-Oe(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Si=1<<32-Oe(i)+c|s<<c|l,yi=h+t}else Si=1<<h|s<<c|l,yi=t}function ou(t){t.return!==null&&(yr(t,1),Vd(t,1,0))}function au(t){for(;t===ca;)ca=os[--as],os[as]=null,fa=os[--as],os[as]=null;for(;t===Sr;)Sr=kn[--Bn],kn[Bn]=null,yi=kn[--Bn],kn[Bn]=null,Si=kn[--Bn],kn[Bn]=null}var bn=null,Dn=null,It=!1,jn=null;function Gd(t,i){var s=Gn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function Wd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,bn=t,Dn=Yi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,bn=t,Dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Sr!==null?{id:Si,overflow:yi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Gn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,bn=t,Dn=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(It){var i=Dn;if(i){var s=i;if(!Wd(t,i)){if(lu(t))throw Error(n(418));i=Yi(s.nextSibling);var l=bn;i&&Wd(t,i)?Gd(l,s):(t.flags=t.flags&-4097|2,It=!1,bn=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,It=!1,bn=t}}}function Xd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function da(t){if(t!==bn)return!1;if(!It)return Xd(t),It=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!eu(t.type,t.memoizedProps)),i&&(i=Dn)){if(lu(t))throw Yd(),Error(n(418));for(;i;)Gd(t,i),i=Yi(i.nextSibling)}if(Xd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Dn=Yi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Dn=null}}else Dn=bn?Yi(t.stateNode.nextSibling):null;return!0}function Yd(){for(var t=Dn;t;)t=Yi(t.nextSibling)}function ls(){Dn=bn=null,It=!1}function cu(t){jn===null?jn=[t]:jn.push(t)}var Qg=D.ReactCurrentBatchConfig;function fo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var b=c.refs;M===null?delete b[h]:b[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ha(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function qd(t){var i=t._init;return i(t._payload)}function jd(t){function i(W,z){if(t){var j=W.deletions;j===null?(W.deletions=[z],W.flags|=16):j.push(z)}}function s(W,z){if(!t)return null;for(;z!==null;)i(W,z),z=z.sibling;return null}function l(W,z){for(W=new Map;z!==null;)z.key!==null?W.set(z.key,z):W.set(z.index,z),z=z.sibling;return W}function c(W,z){return W=ir(W,z),W.index=0,W.sibling=null,W}function h(W,z,j){return W.index=j,t?(j=W.alternate,j!==null?(j=j.index,j<z?(W.flags|=2,z):j):(W.flags|=2,z)):(W.flags|=1048576,z)}function M(W){return t&&W.alternate===null&&(W.flags|=2),W}function b(W,z,j,Me){return z===null||z.tag!==6?(z=tc(j,W.mode,Me),z.return=W,z):(z=c(z,j),z.return=W,z)}function F(W,z,j,Me){var We=j.type;return We===N?me(W,z,j.props.children,Me,j.key):z!==null&&(z.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===te&&qd(We)===z.type)?(Me=c(z,j.props),Me.ref=fo(W,z,j),Me.return=W,Me):(Me=Oa(j.type,j.key,j.props,null,W.mode,Me),Me.ref=fo(W,z,j),Me.return=W,Me)}function ee(W,z,j,Me){return z===null||z.tag!==4||z.stateNode.containerInfo!==j.containerInfo||z.stateNode.implementation!==j.implementation?(z=nc(j,W.mode,Me),z.return=W,z):(z=c(z,j.children||[]),z.return=W,z)}function me(W,z,j,Me,We){return z===null||z.tag!==7?(z=Pr(j,W.mode,Me,We),z.return=W,z):(z=c(z,j),z.return=W,z)}function ve(W,z,j){if(typeof z=="string"&&z!==""||typeof z=="number")return z=tc(""+z,W.mode,j),z.return=W,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Z:return j=Oa(z.type,z.key,z.props,null,W.mode,j),j.ref=fo(W,null,z),j.return=W,j;case B:return z=nc(z,W.mode,j),z.return=W,z;case te:var Me=z._init;return ve(W,Me(z._payload),j)}if(L(z)||ue(z))return z=Pr(z,W.mode,j,null),z.return=W,z;ha(W,z)}return null}function pe(W,z,j,Me){var We=z!==null?z.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return We!==null?null:b(W,z,""+j,Me);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:return j.key===We?F(W,z,j,Me):null;case B:return j.key===We?ee(W,z,j,Me):null;case te:return We=j._init,pe(W,z,We(j._payload),Me)}if(L(j)||ue(j))return We!==null?null:me(W,z,j,Me,null);ha(W,j)}return null}function Ie(W,z,j,Me,We){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return W=W.get(j)||null,b(z,W,""+Me,We);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case Z:return W=W.get(Me.key===null?j:Me.key)||null,F(z,W,Me,We);case B:return W=W.get(Me.key===null?j:Me.key)||null,ee(z,W,Me,We);case te:var Ye=Me._init;return Ie(W,z,j,Ye(Me._payload),We)}if(L(Me)||ue(Me))return W=W.get(j)||null,me(z,W,Me,We,null);ha(z,Me)}return null}function ze(W,z,j,Me){for(var We=null,Ye=null,qe=z,tt=z=0,Qt=null;qe!==null&&tt<j.length;tt++){qe.index>tt?(Qt=qe,qe=null):Qt=qe.sibling;var vt=pe(W,qe,j[tt],Me);if(vt===null){qe===null&&(qe=Qt);break}t&&qe&&vt.alternate===null&&i(W,qe),z=h(vt,z,tt),Ye===null?We=vt:Ye.sibling=vt,Ye=vt,qe=Qt}if(tt===j.length)return s(W,qe),It&&yr(W,tt),We;if(qe===null){for(;tt<j.length;tt++)qe=ve(W,j[tt],Me),qe!==null&&(z=h(qe,z,tt),Ye===null?We=qe:Ye.sibling=qe,Ye=qe);return It&&yr(W,tt),We}for(qe=l(W,qe);tt<j.length;tt++)Qt=Ie(qe,W,tt,j[tt],Me),Qt!==null&&(t&&Qt.alternate!==null&&qe.delete(Qt.key===null?tt:Qt.key),z=h(Qt,z,tt),Ye===null?We=Qt:Ye.sibling=Qt,Ye=Qt);return t&&qe.forEach(function(rr){return i(W,rr)}),It&&yr(W,tt),We}function He(W,z,j,Me){var We=ue(j);if(typeof We!="function")throw Error(n(150));if(j=We.call(j),j==null)throw Error(n(151));for(var Ye=We=null,qe=z,tt=z=0,Qt=null,vt=j.next();qe!==null&&!vt.done;tt++,vt=j.next()){qe.index>tt?(Qt=qe,qe=null):Qt=qe.sibling;var rr=pe(W,qe,vt.value,Me);if(rr===null){qe===null&&(qe=Qt);break}t&&qe&&rr.alternate===null&&i(W,qe),z=h(rr,z,tt),Ye===null?We=rr:Ye.sibling=rr,Ye=rr,qe=Qt}if(vt.done)return s(W,qe),It&&yr(W,tt),We;if(qe===null){for(;!vt.done;tt++,vt=j.next())vt=ve(W,vt.value,Me),vt!==null&&(z=h(vt,z,tt),Ye===null?We=vt:Ye.sibling=vt,Ye=vt);return It&&yr(W,tt),We}for(qe=l(W,qe);!vt.done;tt++,vt=j.next())vt=Ie(qe,W,tt,vt.value,Me),vt!==null&&(t&&vt.alternate!==null&&qe.delete(vt.key===null?tt:vt.key),z=h(vt,z,tt),Ye===null?We=vt:Ye.sibling=vt,Ye=vt);return t&&qe.forEach(function(b_){return i(W,b_)}),It&&yr(W,tt),We}function zt(W,z,j,Me){if(typeof j=="object"&&j!==null&&j.type===N&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:e:{for(var We=j.key,Ye=z;Ye!==null;){if(Ye.key===We){if(We=j.type,We===N){if(Ye.tag===7){s(W,Ye.sibling),z=c(Ye,j.props.children),z.return=W,W=z;break e}}else if(Ye.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===te&&qd(We)===Ye.type){s(W,Ye.sibling),z=c(Ye,j.props),z.ref=fo(W,Ye,j),z.return=W,W=z;break e}s(W,Ye);break}else i(W,Ye);Ye=Ye.sibling}j.type===N?(z=Pr(j.props.children,W.mode,Me,j.key),z.return=W,W=z):(Me=Oa(j.type,j.key,j.props,null,W.mode,Me),Me.ref=fo(W,z,j),Me.return=W,W=Me)}return M(W);case B:e:{for(Ye=j.key;z!==null;){if(z.key===Ye)if(z.tag===4&&z.stateNode.containerInfo===j.containerInfo&&z.stateNode.implementation===j.implementation){s(W,z.sibling),z=c(z,j.children||[]),z.return=W,W=z;break e}else{s(W,z);break}else i(W,z);z=z.sibling}z=nc(j,W.mode,Me),z.return=W,W=z}return M(W);case te:return Ye=j._init,zt(W,z,Ye(j._payload),Me)}if(L(j))return ze(W,z,j,Me);if(ue(j))return He(W,z,j,Me);ha(W,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,z!==null&&z.tag===6?(s(W,z.sibling),z=c(z,j),z.return=W,W=z):(s(W,z),z=tc(j,W.mode,Me),z.return=W,W=z),M(W)):s(W,z)}return zt}var us=jd(!0),Kd=jd(!1),pa=qi(null),ma=null,cs=null,fu=null;function du(){fu=cs=ma=null}function hu(t){var i=pa.current;bt(pa),t._currentValue=i}function pu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function fs(t,i){ma=t,fu=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yn=!0),t.firstContext=null)}function zn(t){var i=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(ma===null)throw Error(n(308));cs=t,ma.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var Mr=null;function mu(t){Mr===null?Mr=[t]:Mr.push(t)}function $d(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,mu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Mi(t,l)}function Mi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var $i=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Zi(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Mi(t,s)}return c=l.interleaved,c===null?(i.next=i,mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Mi(t,s)}function ga(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ll(t,s)}}function Qd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function _a(t,i,s,l){var c=t.updateQueue;$i=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var F=b,ee=F.next;F.next=null,M===null?h=ee:M.next=ee,M=F;var me=t.alternate;me!==null&&(me=me.updateQueue,b=me.lastBaseUpdate,b!==M&&(b===null?me.firstBaseUpdate=ee:b.next=ee,me.lastBaseUpdate=F))}if(h!==null){var ve=c.baseState;M=0,me=ee=F=null,b=h;do{var pe=b.lane,Ie=b.eventTime;if((l&pe)===pe){me!==null&&(me=me.next={eventTime:Ie,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var ze=t,He=b;switch(pe=i,Ie=s,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ve=ze.call(Ie,ve,pe);break e}ve=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,pe=typeof ze=="function"?ze.call(Ie,ve,pe):ze,pe==null)break e;ve=ie({},ve,pe);break e;case 2:$i=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,pe=c.effects,pe===null?c.effects=[b]:pe.push(b))}else Ie={eventTime:Ie,lane:pe,tag:b.tag,payload:b.payload,callback:b.callback,next:null},me===null?(ee=me=Ie,F=ve):me=me.next=Ie,M|=pe;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;pe=b,b=pe.next,pe.next=null,c.lastBaseUpdate=pe,c.shared.pending=null}}while(!0);if(me===null&&(F=ve),c.baseState=F,c.firstBaseUpdate=ee,c.lastBaseUpdate=me,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);wr|=M,t.lanes=M,t.memoizedState=ve}}function Jd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var ho={},li=qi(ho),po=qi(ho),mo=qi(ho);function Er(t){if(t===ho)throw Error(n(174));return t}function _u(t,i){switch(Pt(mo,i),Pt(po,t),Pt(li,ho),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ae(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ae(i,t)}bt(li),Pt(li,i)}function ds(){bt(li),bt(po),bt(mo)}function eh(t){Er(mo.current);var i=Er(li.current),s=Ae(i,t.type);i!==s&&(Pt(po,t),Pt(li,s))}function vu(t){po.current===t&&(bt(li),bt(po))}var Ft=qi(0);function va(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function Su(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var xa=D.ReactCurrentDispatcher,yu=D.ReactCurrentBatchConfig,Tr=0,Ot=null,Wt=null,$t=null,Sa=!1,go=!1,_o=0,Jg=0;function an(){throw Error(n(321))}function Mu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!qn(t[s],i[s]))return!1;return!0}function Eu(t,i,s,l,c,h){if(Tr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xa.current=t===null||t.memoizedState===null?i_:r_,t=s(l,c),go){h=0;do{if(go=!1,_o=0,25<=h)throw Error(n(301));h+=1,$t=Wt=null,i.updateQueue=null,xa.current=s_,t=s(l,c)}while(go)}if(xa.current=Ea,i=Wt!==null&&Wt.next!==null,Tr=0,$t=Wt=Ot=null,Sa=!1,i)throw Error(n(300));return t}function Tu(){var t=_o!==0;return _o=0,t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Ot.memoizedState=$t=t:$t=$t.next=t,$t}function Hn(){if(Wt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var i=$t===null?Ot.memoizedState:$t.next;if(i!==null)$t=i,Wt=t;else{if(t===null)throw Error(n(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},$t===null?Ot.memoizedState=$t=t:$t=$t.next=t}return $t}function vo(t,i){return typeof i=="function"?i(t):i}function wu(t){var i=Hn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Wt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var b=M=null,F=null,ee=h;do{var me=ee.lane;if((Tr&me)===me)F!==null&&(F=F.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var ve={lane:me,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};F===null?(b=F=ve,M=l):F=F.next=ve,Ot.lanes|=me,wr|=me}ee=ee.next}while(ee!==null&&ee!==h);F===null?M=l:F.next=b,qn(l,i.memoizedState)||(yn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=F,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,wr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Au(t){var i=Hn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);qn(h,i.memoizedState)||(yn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function th(){}function nh(t,i){var s=Ot,l=Hn(),c=i(),h=!qn(l.memoizedState,c);if(h&&(l.memoizedState=c,yn=!0),l=l.queue,Ru(sh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||$t!==null&&$t.memoizedState.tag&1){if(s.flags|=2048,xo(9,rh.bind(null,s,l,c,i),void 0,null),Zt===null)throw Error(n(349));(Tr&30)!==0||ih(s,i,c)}return c}function ih(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function rh(t,i,s,l){i.value=s,i.getSnapshot=l,oh(i)&&ah(t)}function sh(t,i,s){return s(function(){oh(i)&&ah(t)})}function oh(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!qn(t,s)}catch{return!0}}function ah(t){var i=Mi(t,1);i!==null&&Qn(i,t,1,-1)}function lh(t){var i=ui();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},i.queue=t,t=t.dispatch=n_.bind(null,Ot,t),[i.memoizedState,t]}function xo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function uh(){return Hn().memoizedState}function ya(t,i,s,l){var c=ui();Ot.flags|=t,c.memoizedState=xo(1|i,s,void 0,l===void 0?null:l)}function Ma(t,i,s,l){var c=Hn();l=l===void 0?null:l;var h=void 0;if(Wt!==null){var M=Wt.memoizedState;if(h=M.destroy,l!==null&&Mu(l,M.deps)){c.memoizedState=xo(i,s,h,l);return}}Ot.flags|=t,c.memoizedState=xo(1|i,s,h,l)}function ch(t,i){return ya(8390656,8,t,i)}function Ru(t,i){return Ma(2048,8,t,i)}function fh(t,i){return Ma(4,2,t,i)}function dh(t,i){return Ma(4,4,t,i)}function hh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ph(t,i,s){return s=s!=null?s.concat([t]):null,Ma(4,4,hh.bind(null,i,t),s)}function Cu(){}function mh(t,i){var s=Hn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function gh(t,i){var s=Hn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function _h(t,i,s){return(Tr&21)===0?(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=s):(qn(s,i)||(s=Kr(),Ot.lanes|=s,wr|=s,t.baseState=!0),i)}function e_(t,i){var s=Et;Et=s!==0&&4>s?s:4,t(!0);var l=yu.transition;yu.transition={};try{t(!1),i()}finally{Et=s,yu.transition=l}}function vh(){return Hn().memoizedState}function t_(t,i,s){var l=tr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},xh(t))Sh(i,s);else if(s=$d(t,i,s,l),s!==null){var c=mn();Qn(s,t,l,c),yh(s,i,l)}}function n_(t,i,s){var l=tr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(xh(t))Sh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,b=h(M,s);if(c.hasEagerState=!0,c.eagerState=b,qn(b,M)){var F=i.interleaved;F===null?(c.next=c,mu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}s=$d(t,i,c,l),s!==null&&(c=mn(),Qn(s,t,l,c),yh(s,i,l))}}function xh(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function Sh(t,i){go=Sa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function yh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ll(t,s)}}var Ea={readContext:zn,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},i_={readContext:zn,useCallback:function(t,i){return ui().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:ch,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,ya(4194308,4,hh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return ya(4194308,4,t,i)},useInsertionEffect:function(t,i){return ya(4,2,t,i)},useMemo:function(t,i){var s=ui();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=ui();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=t_.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=ui();return t={current:t},i.memoizedState=t},useState:lh,useDebugValue:Cu,useDeferredValue:function(t){return ui().memoizedState=t},useTransition:function(){var t=lh(!1),i=t[0];return t=e_.bind(null,t[1]),ui().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ot,c=ui();if(It){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Zt===null)throw Error(n(349));(Tr&30)!==0||ih(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,ch(sh.bind(null,l,h,t),[t]),l.flags|=2048,xo(9,rh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=ui(),i=Zt.identifierPrefix;if(It){var s=yi,l=Si;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=_o++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Jg++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},r_={readContext:zn,useCallback:mh,useContext:zn,useEffect:Ru,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:wu,useRef:uh,useState:function(){return wu(vo)},useDebugValue:Cu,useDeferredValue:function(t){var i=Hn();return _h(i,Wt.memoizedState,t)},useTransition:function(){var t=wu(vo)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1},s_={readContext:zn,useCallback:mh,useContext:zn,useEffect:Ru,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Au,useRef:uh,useState:function(){return Au(vo)},useDebugValue:Cu,useDeferredValue:function(t){var i=Hn();return Wt===null?i.memoizedState=t:_h(i,Wt.memoizedState,t)},useTransition:function(){var t=Au(vo)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:th,useSyncExternalStore:nh,useId:vh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=ie({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Pu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:ie({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ta={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=mn(),c=tr(t),h=Ei(l,c);h.payload=i,s!=null&&(h.callback=s),i=Zi(t,h,c),i!==null&&(Qn(i,t,c,l),ga(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=mn(),c=tr(t),h=Ei(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Zi(t,h,c),i!==null&&(Qn(i,t,c,l),ga(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=mn(),l=tr(t),c=Ei(s,l);c.tag=2,i!=null&&(c.callback=i),i=Zi(t,c,l),i!==null&&(Qn(i,t,l,s),ga(i,t,l))}};function Mh(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!ro(s,l)||!ro(c,h):!0}function Eh(t,i,s){var l=!1,c=ji,h=i.contextType;return typeof h=="object"&&h!==null?h=zn(h):(c=Sn(i)?xr:on.current,l=i.contextTypes,h=(l=l!=null)?ss(t,c):ji),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ta,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Th(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Ta.enqueueReplaceState(i,i.state,null)}function Lu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},gu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=zn(h):(h=Sn(i)?xr:on.current,c.context=ss(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Pu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ta.enqueueReplaceState(c,c.state,null),_a(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,i){try{var s="",l=i;do s+=ce(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function bu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Du(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var o_=typeof WeakMap=="function"?WeakMap:Map;function wh(t,i,s){s=Ei(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){ba||(ba=!0,qu=l),Du(t,i)},s}function Ah(t,i,s){s=Ei(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Du(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Du(t,i),typeof l!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Rh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new o_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=S_.bind(null,t,i,s),i.then(t,t))}function Ch(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ph(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ei(-1,1),i.tag=2,Zi(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var a_=D.ReactCurrentOwner,yn=!1;function pn(t,i,s,l){i.child=t===null?Kd(i,null,s,l):us(i,t.child,s,l)}function Lh(t,i,s,l,c){s=s.render;var h=i.ref;return fs(i,c),l=Eu(t,i,s,l,h,c),s=Tu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ti(t,i,c)):(It&&s&&ou(i),i.flags|=1,pn(t,i,l,c),i.child)}function bh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Dh(t,i,h,l,c)):(t=Oa(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:ro,s(M,l)&&t.ref===i.ref)return Ti(t,i,c)}return i.flags|=1,t=ir(h,l),t.ref=i.ref,t.return=i,i.child=t}function Dh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(ro(h,l)&&t.ref===i.ref)if(yn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(yn=!0);else return i.lanes=t.lanes,Ti(t,i,c)}return Uu(t,i,s,l,c)}function Uh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(ms,Un),Un|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(ms,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Pt(ms,Un),Un|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Pt(ms,Un),Un|=l;return pn(t,i,c,s),i.child}function Ih(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Uu(t,i,s,l,c){var h=Sn(s)?xr:on.current;return h=ss(i,h),fs(i,c),s=Eu(t,i,s,l,h,c),l=Tu(),t!==null&&!yn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ti(t,i,c)):(It&&l&&ou(i),i.flags|=1,pn(t,i,s,c),i.child)}function Nh(t,i,s,l,c){if(Sn(s)){var h=!0;la(i)}else h=!1;if(fs(i,c),i.stateNode===null)Aa(t,i),Eh(i,s,l),Lu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,b=i.memoizedProps;M.props=b;var F=M.context,ee=s.contextType;typeof ee=="object"&&ee!==null?ee=zn(ee):(ee=Sn(s)?xr:on.current,ee=ss(i,ee));var me=s.getDerivedStateFromProps,ve=typeof me=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==l||F!==ee)&&Th(i,M,l,ee),$i=!1;var pe=i.memoizedState;M.state=pe,_a(i,l,M,c),F=i.memoizedState,b!==l||pe!==F||xn.current||$i?(typeof me=="function"&&(Pu(i,s,me,l),F=i.memoizedState),(b=$i||Mh(i,s,b,l,pe,F,ee))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),M.props=l,M.state=F,M.context=ee,l=b):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Zd(t,i),b=i.memoizedProps,ee=i.type===i.elementType?b:Kn(i.type,b),M.props=ee,ve=i.pendingProps,pe=M.context,F=s.contextType,typeof F=="object"&&F!==null?F=zn(F):(F=Sn(s)?xr:on.current,F=ss(i,F));var Ie=s.getDerivedStateFromProps;(me=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==ve||pe!==F)&&Th(i,M,l,F),$i=!1,pe=i.memoizedState,M.state=pe,_a(i,l,M,c);var ze=i.memoizedState;b!==ve||pe!==ze||xn.current||$i?(typeof Ie=="function"&&(Pu(i,s,Ie,l),ze=i.memoizedState),(ee=$i||Mh(i,s,ee,l,pe,ze,F)||!1)?(me||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=F,l=ee):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),l=!1)}return Iu(t,i,s,l,h,c)}function Iu(t,i,s,l,c,h){Ih(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&zd(i,s,!1),Ti(t,i,h);l=i.stateNode,a_.current=i;var b=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=us(i,t.child,null,h),i.child=us(i,null,b,h)):pn(t,i,b,h),i.memoizedState=l.state,c&&zd(i,s,!0),i.child}function Fh(t){var i=t.stateNode;i.pendingContext?kd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kd(t,i.context,!1),_u(t,i.containerInfo)}function Oh(t,i,s,l,c){return ls(),cu(c),i.flags|=256,pn(t,i,s,l),i.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,s){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,b;if((b=M)||(b=t!==null&&t.memoizedState===null?!1:(c&2)!==0),b?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Pt(Ft,c&1),t===null)return uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ka(M,l,0,null),t=Pr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fu(s),i.memoizedState=Nu,t):Ou(i,M));if(c=t.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return l_(t,i,M,l,b,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,b=c.sibling;var F={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=ir(c,F),l.subtreeFlags=c.subtreeFlags&14680064),b!==null?h=ir(b,h):(h=Pr(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Fu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Nu,l}return h=t.child,t=h.sibling,l=ir(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Ou(t,i){return i=ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function wa(t,i,s,l){return l!==null&&cu(l),us(i,t.child,null,s),t=Ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function l_(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=bu(Error(n(422))),wa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ka({mode:"visible",children:l.children},c,0,null),h=Pr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&us(i,t.child,null,M),i.child.memoizedState=Fu(M),i.memoizedState=Nu,h);if((i.mode&1)===0)return wa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var b=l.dgst;return l=b,h=Error(n(419)),l=bu(h,l,void 0),wa(t,i,M,l)}if(b=(M&t.childLanes)!==0,yn||b){if(l=Zt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Mi(t,c),Qn(l,t,c,-1))}return Ju(),l=bu(Error(n(421))),wa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=y_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Dn=Yi(c.nextSibling),bn=i,It=!0,jn=null,t!==null&&(kn[Bn++]=Si,kn[Bn++]=yi,kn[Bn++]=Sr,Si=t.id,yi=t.overflow,Sr=i),i=Ou(i,l.children),i.flags|=4096,i)}function Bh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pu(t.return,i,s)}function ku(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function zh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(pn(t,i,l.children,s),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,s,i);else if(t.tag===19)Bh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&va(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),ku(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&va(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}ku(i,!0,s,null,h);break;case"together":ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Aa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ti(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),wr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=ir(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ir(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function u_(t,i,s){switch(i.tag){case 3:Fh(i),ls();break;case 5:eh(i);break;case 1:Sn(i.type)&&la(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Pt(pa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Pt(Ft,Ft.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?kh(t,i,s):(Pt(Ft,Ft.current&1),t=Ti(t,i,s),t!==null?t.sibling:null);Pt(Ft,Ft.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return zh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Uh(t,i,s)}return Ti(t,i,s)}var Hh,Bu,Vh,Gh;Hh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Bu=function(){},Vh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Er(li.current);var h=null;switch(s){case"input":c=en(t,c),l=en(t,l),h=[];break;case"select":c=ie({},c,{value:void 0}),l=ie({},l,{value:void 0}),h=[];break;case"textarea":c=K(t,c),l=K(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=sa)}nt(s,l);var M;s=null;for(ee in c)if(!l.hasOwnProperty(ee)&&c.hasOwnProperty(ee)&&c[ee]!=null)if(ee==="style"){var b=c[ee];for(M in b)b.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var F=l[ee];if(b=c!=null?c[ee]:void 0,l.hasOwnProperty(ee)&&F!==b&&(F!=null||b!=null))if(ee==="style")if(b){for(M in b)!b.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in F)F.hasOwnProperty(M)&&b[M]!==F[M]&&(s||(s={}),s[M]=F[M])}else s||(h||(h=[]),h.push(ee,s)),s=F;else ee==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,b=b?b.__html:void 0,F!=null&&b!==F&&(h=h||[]).push(ee,F)):ee==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(ee,""+F):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(F!=null&&ee==="onScroll"&&Lt("scroll",t),h||b===F||(h=[])):(h=h||[]).push(ee,F))}s&&(h=h||[]).push("style",s);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},Gh=function(t,i,s,l){s!==l&&(i.flags|=4)};function So(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function c_(t,i,s){var l=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return Sn(i.type)&&aa(),ln(i),null;case 3:return l=i.stateNode,ds(),bt(xn),bt(on),Su(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(da(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,jn!==null&&($u(jn),jn=null))),Bu(t,i),ln(i),null;case 5:vu(i);var c=Er(mo.current);if(s=i.type,t!==null&&i.stateNode!=null)Vh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return ln(i),null}if(t=Er(li.current),da(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ai]=i,l[uo]=h,t=(i.mode&1)!==0,s){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(c=0;c<oo.length;c++)Lt(oo[c],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":ot(l,h),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Lt("invalid",l);break;case"textarea":de(l,h),Lt("invalid",l)}nt(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var b=h[M];M==="children"?typeof b=="string"?l.textContent!==b&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,b,t),c=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(h.suppressHydrationWarning!==!0&&ra(l.textContent,b,t),c=["children",""+b]):a.hasOwnProperty(M)&&b!=null&&M==="onScroll"&&Lt("scroll",l)}switch(s){case"input":pt(l),Tt(l,h,!0);break;case"textarea":pt(l),fe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=sa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[ai]=i,t[uo]=l,Hh(t,i,!1,!1),i.stateNode=t;e:{switch(M=yt(s,l),s){case"dialog":Lt("cancel",t),Lt("close",t),c=l;break;case"iframe":case"object":case"embed":Lt("load",t),c=l;break;case"video":case"audio":for(c=0;c<oo.length;c++)Lt(oo[c],t);c=l;break;case"source":Lt("error",t),c=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),c=l;break;case"details":Lt("toggle",t),c=l;break;case"input":ot(t,l),c=en(t,l),Lt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ie({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":de(t,l),c=K(t,l),Lt("invalid",t);break;default:c=l}nt(s,c),b=c;for(h in b)if(b.hasOwnProperty(h)){var F=b[h];h==="style"?ke(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&ft(t,F)):h==="children"?typeof F=="string"?(s!=="textarea"||F!=="")&&ye(t,F):typeof F=="number"&&ye(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Lt("scroll",t):F!=null&&P(t,h,F,M))}switch(s){case"input":pt(t),Tt(t,l,!1);break;case"textarea":pt(t),fe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?T(t,!!l.multiple,h,!1):l.defaultValue!=null&&T(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=sa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ln(i),null;case 6:if(t&&i.stateNode!=null)Gh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Er(mo.current),Er(li.current),da(i)){if(l=i.stateNode,s=i.memoizedProps,l[ai]=i,(h=l.nodeValue!==s)&&(t=bn,t!==null))switch(t.tag){case 3:ra(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ai]=i,i.stateNode=l}return ln(i),null;case 13:if(bt(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(It&&Dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Yd(),ls(),i.flags|=98560,h=!1;else if(h=da(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ai]=i}else ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),h=!1}else jn!==null&&($u(jn),jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?Xt===0&&(Xt=3):Ju())),i.updateQueue!==null&&(i.flags|=4),ln(i),null);case 4:return ds(),Bu(t,i),t===null&&ao(i.stateNode.containerInfo),ln(i),null;case 10:return hu(i.type._context),ln(i),null;case 17:return Sn(i.type)&&aa(),ln(i),null;case 19:if(bt(Ft),h=i.memoizedState,h===null)return ln(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)So(h,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=va(t),M!==null){for(i.flags|=128,So(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Pt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&Te()>gs&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304)}else{if(!l)if(t=va(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),So(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!It)return ln(i),null}else 2*Te()-h.renderingStartTime>gs&&s!==1073741824&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Te(),i.sibling=null,s=Ft.current,Pt(Ft,l?s&1|2:s&1),i):(ln(i),null);case 22:case 23:return Qu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function f_(t,i){switch(au(i),i.tag){case 1:return Sn(i.type)&&aa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),bt(xn),bt(on),Su(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return vu(i),null;case 13:if(bt(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return bt(Ft),null;case 4:return ds(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Ra=!1,un=!1,d_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ps(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Bt(t,i,l)}else s.current=null}function zu(t,i,s){try{s()}catch(l){Bt(t,i,l)}}var Wh=!1;function h_(t,i){if(Ql=qo,t=Md(),Wl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,b=-1,F=-1,ee=0,me=0,ve=t,pe=null;t:for(;;){for(var Ie;ve!==s||c!==0&&ve.nodeType!==3||(b=M+c),ve!==h||l!==0&&ve.nodeType!==3||(F=M+l),ve.nodeType===3&&(M+=ve.nodeValue.length),(Ie=ve.firstChild)!==null;)pe=ve,ve=Ie;for(;;){if(ve===t)break t;if(pe===s&&++ee===c&&(b=M),pe===h&&++me===l&&(F=M),(Ie=ve.nextSibling)!==null)break;ve=pe,pe=ve.parentNode}ve=Ie}s=b===-1||F===-1?null:{start:b,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jl={focusedElem:t,selectionRange:s},qo=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,zt=ze.memoizedState,W=i.stateNode,z=W.getSnapshotBeforeUpdate(i.elementType===i.type?He:Kn(i.type,He),zt);W.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){Bt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return ze=Wh,Wh=!1,ze}function yo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&zu(i,s,h)}c=c.next}while(c!==l)}}function Ca(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Hu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Xh(t){var i=t.alternate;i!==null&&(t.alternate=null,Xh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ai],delete i[uo],delete i[iu],delete i[Kg],delete i[$g])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yh(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=sa));else if(l!==4&&(t=t.child,t!==null))for(Vu(t,i,s),t=t.sibling;t!==null;)Vu(t,i,s),t=t.sibling}function Gu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Gu(t,i,s),t=t.sibling;t!==null;)Gu(t,i,s),t=t.sibling}var nn=null,$n=!1;function Qi(t,i,s){for(s=s.child;s!==null;)jh(t,i,s),s=s.sibling}function jh(t,i,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Rt,s)}catch{}switch(s.tag){case 5:un||ps(s,i);case 6:var l=nn,c=$n;nn=null,Qi(t,i,s),nn=l,$n=c,nn!==null&&($n?(t=nn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):nn.removeChild(s.stateNode));break;case 18:nn!==null&&($n?(t=nn,s=s.stateNode,t.nodeType===8?nu(t.parentNode,s):t.nodeType===1&&nu(t,s),Qs(t)):nu(nn,s.stateNode));break;case 4:l=nn,c=$n,nn=s.stateNode.containerInfo,$n=!0,Qi(t,i,s),nn=l,$n=c;break;case 0:case 11:case 14:case 15:if(!un&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&zu(s,i,M),c=c.next}while(c!==l)}Qi(t,i,s);break;case 1:if(!un&&(ps(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(b){Bt(s,i,b)}Qi(t,i,s);break;case 21:Qi(t,i,s);break;case 22:s.mode&1?(un=(l=un)||s.memoizedState!==null,Qi(t,i,s),un=l):Qi(t,i,s);break;default:Qi(t,i,s)}}function Kh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new d_),i.forEach(function(l){var c=M_.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Zn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,b=M;e:for(;b!==null;){switch(b.tag){case 5:nn=b.stateNode,$n=!1;break e;case 3:nn=b.stateNode.containerInfo,$n=!0;break e;case 4:nn=b.stateNode.containerInfo,$n=!0;break e}b=b.return}if(nn===null)throw Error(n(160));jh(h,M,c),nn=null,$n=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(ee){Bt(c,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$h(i,t),i=i.sibling}function $h(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(i,t),ci(t),l&4){try{yo(3,t,t.return),Ca(3,t)}catch(He){Bt(t,t.return,He)}try{yo(5,t,t.return)}catch(He){Bt(t,t.return,He)}}break;case 1:Zn(i,t),ci(t),l&512&&s!==null&&ps(s,s.return);break;case 5:if(Zn(i,t),ci(t),l&512&&s!==null&&ps(s,s.return),t.flags&32){var c=t.stateNode;try{ye(c,"")}catch(He){Bt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,b=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{b==="input"&&h.type==="radio"&&h.name!=null&&ct(c,h),yt(b,M);var ee=yt(b,h);for(M=0;M<F.length;M+=2){var me=F[M],ve=F[M+1];me==="style"?ke(c,ve):me==="dangerouslySetInnerHTML"?ft(c,ve):me==="children"?ye(c,ve):P(c,me,ve,ee)}switch(b){case"input":Ke(c,h);break;case"textarea":_e(c,h);break;case"select":var pe=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ie=h.value;Ie!=null?T(c,!!h.multiple,Ie,!1):pe!==!!h.multiple&&(h.defaultValue!=null?T(c,!!h.multiple,h.defaultValue,!0):T(c,!!h.multiple,h.multiple?[]:"",!1))}c[uo]=h}catch(He){Bt(t,t.return,He)}}break;case 6:if(Zn(i,t),ci(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){Bt(t,t.return,He)}}break;case 3:if(Zn(i,t),ci(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Qs(i.containerInfo)}catch(He){Bt(t,t.return,He)}break;case 4:Zn(i,t),ci(t);break;case 13:Zn(i,t),ci(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Yu=Te())),l&4&&Kh(t);break;case 22:if(me=s!==null&&s.memoizedState!==null,t.mode&1?(un=(ee=un)||me,Zn(i,t),un=ee):Zn(i,t),ci(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!me&&(t.mode&1)!==0)for(Be=t,me=t.child;me!==null;){for(ve=Be=me;Be!==null;){switch(pe=Be,Ie=pe.child,pe.tag){case 0:case 11:case 14:case 15:yo(4,pe,pe.return);break;case 1:ps(pe,pe.return);var ze=pe.stateNode;if(typeof ze.componentWillUnmount=="function"){l=pe,s=pe.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Bt(l,s,He)}}break;case 5:ps(pe,pe.return);break;case 22:if(pe.memoizedState!==null){Jh(ve);continue}}Ie!==null?(Ie.return=pe,Be=Ie):Jh(ve)}me=me.sibling}e:for(me=null,ve=t;;){if(ve.tag===5){if(me===null){me=ve;try{c=ve.stateNode,ee?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(b=ve.stateNode,F=ve.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,b.style.display=Qe("display",M))}catch(He){Bt(t,t.return,He)}}}else if(ve.tag===6){if(me===null)try{ve.stateNode.nodeValue=ee?"":ve.memoizedProps}catch(He){Bt(t,t.return,He)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;me===ve&&(me=null),ve=ve.return}me===ve&&(me=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:Zn(i,t),ci(t),l&4&&Kh(t);break;case 21:break;default:Zn(i,t),ci(t)}}function ci(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Yh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ye(c,""),l.flags&=-33);var h=qh(t);Gu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,b=qh(t);Vu(t,b,M);break;default:throw Error(n(161))}}catch(F){Bt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function p_(t,i,s){Be=t,Zh(t)}function Zh(t,i,s){for(var l=(t.mode&1)!==0;Be!==null;){var c=Be,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ra;if(!M){var b=c.alternate,F=b!==null&&b.memoizedState!==null||un;b=Ra;var ee=un;if(Ra=M,(un=F)&&!ee)for(Be=c;Be!==null;)M=Be,F=M.child,M.tag===22&&M.memoizedState!==null?ep(c):F!==null?(F.return=M,Be=F):ep(c);for(;h!==null;)Be=h,Zh(h),h=h.sibling;Be=c,Ra=b,un=ee}Qh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Be=h):Qh(t)}}function Qh(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Ca(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Kn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Jd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Jd(i,M,s)}break;case 5:var b=i.stateNode;if(s===null&&i.flags&4){s=b;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&s.focus();break;case"img":F.src&&(s.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var me=ee.memoizedState;if(me!==null){var ve=me.dehydrated;ve!==null&&Qs(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Hu(i)}catch(pe){Bt(i,i.return,pe)}}if(i===t){Be=null;break}if(s=i.sibling,s!==null){s.return=i.return,Be=s;break}Be=i.return}}function Jh(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Be=s;break}Be=i.return}}function ep(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Ca(4,i)}catch(F){Bt(i,s,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){Bt(i,c,F)}}var h=i.return;try{Hu(i)}catch(F){Bt(i,h,F)}break;case 5:var M=i.return;try{Hu(i)}catch(F){Bt(i,M,F)}}}catch(F){Bt(i,i.return,F)}if(i===t){Be=null;break}var b=i.sibling;if(b!==null){b.return=i.return,Be=b;break}Be=i.return}}var m_=Math.ceil,Pa=D.ReactCurrentDispatcher,Wu=D.ReactCurrentOwner,Vn=D.ReactCurrentBatchConfig,mt=0,Zt=null,Ht=null,rn=0,Un=0,ms=qi(0),Xt=0,Mo=null,wr=0,La=0,Xu=0,Eo=null,Mn=null,Yu=0,gs=1/0,wi=null,ba=!1,qu=null,Ji=null,Da=!1,er=null,Ua=0,To=0,ju=null,Ia=-1,Na=0;function mn(){return(mt&6)!==0?Te():Ia!==-1?Ia:Ia=Te()}function tr(t){return(t.mode&1)===0?1:(mt&2)!==0&&rn!==0?rn&-rn:Qg.transition!==null?(Na===0&&(Na=Kr()),Na):(t=Et,t!==0||(t=window.event,t=t===void 0?16:nd(t.type)),t)}function Qn(t,i,s,l){if(50<To)throw To=0,ju=null,Error(n(185));Bi(t,s,l),((mt&2)===0||t!==Zt)&&(t===Zt&&((mt&2)===0&&(La|=s),Xt===4&&nr(t,rn)),En(t,l),s===1&&mt===0&&(i.mode&1)===0&&(gs=Te()+500,ua&&Ki()))}function En(t,i){var s=t.callbackNode;Ys(t,i);var l=Ct(t,t===Zt?rn:0);if(l===0)s!==null&&G(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&G(s),i===1)t.tag===0?Zg(np.bind(null,t)):Hd(np.bind(null,t)),qg(function(){(mt&6)===0&&Ki()}),s=null;else{switch(jf(l)){case 1:s=je;break;case 4:s=$e;break;case 16:s=Ge;break;case 536870912:s=wt;break;default:s=Ge}s=cp(s,tp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function tp(t,i){if(Ia=-1,Na=0,(mt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=Ct(t,t===Zt?rn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Fa(t,l);else{i=l;var c=mt;mt|=2;var h=rp();(Zt!==t||rn!==i)&&(wi=null,gs=Te()+500,Rr(t,i));do try{v_();break}catch(b){ip(t,b)}while(!0);du(),Pa.current=h,mt=c,Ht!==null?i=0:(Zt=null,rn=0,i=Xt)}if(i!==0){if(i===2&&(c=sn(t),c!==0&&(l=c,i=Ku(t,c))),i===1)throw s=Mo,Rr(t,0),nr(t,l),En(t,Te()),s;if(i===6)nr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!g_(c)&&(i=Fa(t,l),i===2&&(h=sn(t),h!==0&&(l=h,i=Ku(t,h))),i===1))throw s=Mo,Rr(t,0),nr(t,l),En(t,Te()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Cr(t,Mn,wi);break;case 3:if(nr(t,l),(l&130023424)===l&&(i=Yu+500-Te(),10<i)){if(Ct(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){mn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=tu(Cr.bind(null,t,Mn,wi),i);break}Cr(t,Mn,wi);break;case 4:if(nr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-Oe(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*m_(l/1960))-l,10<l){t.timeoutHandle=tu(Cr.bind(null,t,Mn,wi),l);break}Cr(t,Mn,wi);break;case 5:Cr(t,Mn,wi);break;default:throw Error(n(329))}}}return En(t,Te()),t.callbackNode===s?tp.bind(null,t):null}function Ku(t,i){var s=Eo;return t.current.memoizedState.isDehydrated&&(Rr(t,i).flags|=256),t=Fa(t,i),t!==2&&(i=Mn,Mn=s,i!==null&&$u(i)),t}function $u(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function g_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!qn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function nr(t,i){for(i&=~Xu,i&=~La,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Oe(i),l=1<<s;t[s]=-1,i&=~l}}function np(t){if((mt&6)!==0)throw Error(n(327));_s();var i=Ct(t,0);if((i&1)===0)return En(t,Te()),null;var s=Fa(t,i);if(t.tag!==0&&s===2){var l=sn(t);l!==0&&(i=l,s=Ku(t,l))}if(s===1)throw s=Mo,Rr(t,0),nr(t,i),En(t,Te()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Cr(t,Mn,wi),En(t,Te()),null}function Zu(t,i){var s=mt;mt|=1;try{return t(i)}finally{mt=s,mt===0&&(gs=Te()+500,ua&&Ki())}}function Ar(t){er!==null&&er.tag===0&&(mt&6)===0&&_s();var i=mt;mt|=1;var s=Vn.transition,l=Et;try{if(Vn.transition=null,Et=1,t)return t()}finally{Et=l,Vn.transition=s,mt=i,(mt&6)===0&&Ki()}}function Qu(){Un=ms.current,bt(ms)}function Rr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Yg(s)),Ht!==null)for(s=Ht.return;s!==null;){var l=s;switch(au(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&aa();break;case 3:ds(),bt(xn),bt(on),Su();break;case 5:vu(l);break;case 4:ds();break;case 13:bt(Ft);break;case 19:bt(Ft);break;case 10:hu(l.type._context);break;case 22:case 23:Qu()}s=s.return}if(Zt=t,Ht=t=ir(t.current,null),rn=Un=i,Xt=0,Mo=null,Xu=La=wr=0,Mn=Eo=null,Mr!==null){for(i=0;i<Mr.length;i++)if(s=Mr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Mr=null}return t}function ip(t,i){do{var s=Ht;try{if(du(),xa.current=Ea,Sa){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Sa=!1}if(Tr=0,$t=Wt=Ot=null,go=!1,_o=0,Wu.current=null,s===null||s.return===null){Xt=1,Mo=i,Ht=null;break}e:{var h=t,M=s.return,b=s,F=i;if(i=rn,b.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ee=F,me=b,ve=me.tag;if((me.mode&1)===0&&(ve===0||ve===11||ve===15)){var pe=me.alternate;pe?(me.updateQueue=pe.updateQueue,me.memoizedState=pe.memoizedState,me.lanes=pe.lanes):(me.updateQueue=null,me.memoizedState=null)}var Ie=Ch(M);if(Ie!==null){Ie.flags&=-257,Ph(Ie,M,b,h,i),Ie.mode&1&&Rh(h,ee,i),i=Ie,F=ee;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(F),i.updateQueue=He}else ze.add(F);break e}else{if((i&1)===0){Rh(h,ee,i),Ju();break e}F=Error(n(426))}}else if(It&&b.mode&1){var zt=Ch(M);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Ph(zt,M,b,h,i),cu(hs(F,b));break e}}h=F=hs(F,b),Xt!==4&&(Xt=2),Eo===null?Eo=[h]:Eo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var W=wh(h,F,i);Qd(h,W);break e;case 1:b=F;var z=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Ji===null||!Ji.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Ah(h,b,i);Qd(h,Me);break e}}h=h.return}while(h!==null)}op(s)}catch(We){i=We,Ht===s&&s!==null&&(Ht=s=s.return);continue}break}while(!0)}function rp(){var t=Pa.current;return Pa.current=Ea,t===null?Ea:t}function Ju(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Zt===null||(wr&268435455)===0&&(La&268435455)===0||nr(Zt,rn)}function Fa(t,i){var s=mt;mt|=2;var l=rp();(Zt!==t||rn!==i)&&(wi=null,Rr(t,i));do try{__();break}catch(c){ip(t,c)}while(!0);if(du(),mt=s,Pa.current=l,Ht!==null)throw Error(n(261));return Zt=null,rn=0,Xt}function __(){for(;Ht!==null;)sp(Ht)}function v_(){for(;Ht!==null&&!Ee();)sp(Ht)}function sp(t){var i=up(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?op(t):Ht=i,Wu.current=null}function op(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=c_(s,i,Un),s!==null){Ht=s;return}}else{if(s=f_(s,i),s!==null){s.flags&=32767,Ht=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Ht=null;return}}if(i=i.sibling,i!==null){Ht=i;return}Ht=i=t}while(i!==null);Xt===0&&(Xt=5)}function Cr(t,i,s){var l=Et,c=Vn.transition;try{Vn.transition=null,Et=1,x_(t,i,s,l)}finally{Vn.transition=c,Et=l}return null}function x_(t,i,s,l){do _s();while(er!==null);if((mt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(Jm(t,h),t===Zt&&(Ht=Zt=null,rn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Da||(Da=!0,cp(Ge,function(){return _s(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Vn.transition,Vn.transition=null;var M=Et;Et=1;var b=mt;mt|=4,Wu.current=null,h_(t,s),$h(s,t),Bg(Jl),qo=!!Ql,Jl=Ql=null,t.current=s,p_(s),De(),mt=b,Et=M,Vn.transition=h}else t.current=s;if(Da&&(Da=!1,er=t,Ua=c),h=t.pendingLanes,h===0&&(Ji=null),gt(s.stateNode),En(t,Te()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(ba)throw ba=!1,t=qu,qu=null,t;return(Ua&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===ju?To++:(To=0,ju=t):To=0,Ki(),null}function _s(){if(er!==null){var t=jf(Ua),i=Vn.transition,s=Et;try{if(Vn.transition=null,Et=16>t?16:t,er===null)var l=!1;else{if(t=er,er=null,Ua=0,(mt&6)!==0)throw Error(n(331));var c=mt;for(mt|=4,Be=t.current;Be!==null;){var h=Be,M=h.child;if((Be.flags&16)!==0){var b=h.deletions;if(b!==null){for(var F=0;F<b.length;F++){var ee=b[F];for(Be=ee;Be!==null;){var me=Be;switch(me.tag){case 0:case 11:case 15:yo(8,me,h)}var ve=me.child;if(ve!==null)ve.return=me,Be=ve;else for(;Be!==null;){me=Be;var pe=me.sibling,Ie=me.return;if(Xh(me),me===ee){Be=null;break}if(pe!==null){pe.return=Ie,Be=pe;break}Be=Ie}}}var ze=h.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var zt=He.sibling;He.sibling=null,He=zt}while(He!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Be=M;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var W=h.sibling;if(W!==null){W.return=h.return,Be=W;break e}Be=h.return}}var z=t.current;for(Be=z;Be!==null;){M=Be;var j=M.child;if((M.subtreeFlags&2064)!==0&&j!==null)j.return=M,Be=j;else e:for(M=z;Be!==null;){if(b=Be,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:Ca(9,b)}}catch(We){Bt(b,b.return,We)}if(b===M){Be=null;break e}var Me=b.sibling;if(Me!==null){Me.return=b.return,Be=Me;break e}Be=b.return}}if(mt=c,Ki(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Rt,t)}catch{}l=!0}return l}finally{Et=s,Vn.transition=i}}return!1}function ap(t,i,s){i=hs(s,i),i=wh(t,i,1),t=Zi(t,i,1),i=mn(),t!==null&&(Bi(t,1,i),En(t,i))}function Bt(t,i,s){if(t.tag===3)ap(t,t,s);else for(;i!==null;){if(i.tag===3){ap(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ji===null||!Ji.has(l))){t=hs(s,t),t=Ah(i,t,1),i=Zi(i,t,1),t=mn(),i!==null&&(Bi(i,1,t),En(i,t));break}}i=i.return}}function S_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=mn(),t.pingedLanes|=t.suspendedLanes&s,Zt===t&&(rn&s)===s&&(Xt===4||Xt===3&&(rn&130023424)===rn&&500>Te()-Yu?Rr(t,0):Xu|=s),En(t,i)}function lp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Kt,Kt<<=1,(Kt&130023424)===0&&(Kt=4194304)));var s=mn();t=Mi(t,i),t!==null&&(Bi(t,i,s),En(t,s))}function y_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),lp(t,s)}function M_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),lp(t,s)}var up;up=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||xn.current)yn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return yn=!1,u_(t,i,s);yn=(t.flags&131072)!==0}else yn=!1,It&&(i.flags&1048576)!==0&&Vd(i,fa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Aa(t,i),t=i.pendingProps;var c=ss(i,on.current);fs(i,s),c=Eu(null,i,l,t,c,s);var h=Tu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(l)?(h=!0,la(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,gu(i),c.updater=Ta,i.stateNode=c,c._reactInternals=i,Lu(i,l,t,s),i=Iu(null,i,l,!0,h,s)):(i.tag=0,It&&h&&ou(i),pn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Aa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=T_(l),t=Kn(l,t),c){case 0:i=Uu(null,i,l,t,s);break e;case 1:i=Nh(null,i,l,t,s);break e;case 11:i=Lh(null,i,l,t,s);break e;case 14:i=bh(null,i,l,Kn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Uu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Nh(t,i,l,c,s);case 3:e:{if(Fh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Zd(t,i),_a(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=hs(Error(n(423)),i),i=Oh(t,i,l,s,c);break e}else if(l!==c){c=hs(Error(n(424)),i),i=Oh(t,i,l,s,c);break e}else for(Dn=Yi(i.stateNode.containerInfo.firstChild),bn=i,It=!0,jn=null,s=Kd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ls(),l===c){i=Ti(t,i,s);break e}pn(t,i,l,s)}i=i.child}return i;case 5:return eh(i),t===null&&uu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,eu(l,c)?M=null:h!==null&&eu(l,h)&&(i.flags|=32),Ih(t,i),pn(t,i,M,s),i.child;case 6:return t===null&&uu(i),null;case 13:return kh(t,i,s);case 4:return _u(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=us(i,null,l,s):pn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Lh(t,i,l,c,s);case 7:return pn(t,i,i.pendingProps,s),i.child;case 8:return pn(t,i,i.pendingProps.children,s),i.child;case 12:return pn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Pt(pa,l._currentValue),l._currentValue=M,h!==null)if(qn(h.value,M)){if(h.children===c.children&&!xn.current){i=Ti(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var b=h.dependencies;if(b!==null){M=h.child;for(var F=b.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ei(-1,s&-s),F.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var me=ee.pending;me===null?F.next=F:(F.next=me.next,me.next=F),ee.pending=F}}h.lanes|=s,F=h.alternate,F!==null&&(F.lanes|=s),pu(h.return,s,i),b.lanes|=s;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,b=M.alternate,b!==null&&(b.lanes|=s),pu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}pn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,fs(i,s),c=zn(c),l=l(c),i.flags|=1,pn(t,i,l,s),i.child;case 14:return l=i.type,c=Kn(l,i.pendingProps),c=Kn(l.type,c),bh(t,i,l,c,s);case 15:return Dh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Aa(t,i),i.tag=1,Sn(l)?(t=!0,la(i)):t=!1,fs(i,s),Eh(i,l,c),Lu(i,l,c,s),Iu(null,i,l,!0,t,s);case 19:return zh(t,i,s);case 22:return Uh(t,i,s)}throw Error(n(156,i.tag))};function cp(t,i){return J(t,i)}function E_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,s,l){return new E_(t,i,s,l)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function T_(t){if(typeof t=="function")return ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===ae)return 14}return 2}function ir(t,i){var s=t.alternate;return s===null?(s=Gn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Oa(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")ec(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return Pr(s.children,c,h,i);case q:M=8,c|=8;break;case ge:return t=Gn(12,s,i,c|2),t.elementType=ge,t.lanes=h,t;case X:return t=Gn(13,s,i,c),t.elementType=X,t.lanes=h,t;case oe:return t=Gn(19,s,i,c),t.elementType=oe,t.lanes=h,t;case le:return ka(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case C:M=9;break e;case re:M=11;break e;case ae:M=14;break e;case te:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Pr(t,i,s,l){return t=Gn(7,t,l,i),t.lanes=s,t}function ka(t,i,s,l){return t=Gn(22,t,l,i),t.elementType=le,t.lanes=s,t.stateNode={isHidden:!1},t}function tc(t,i,s){return t=Gn(6,t,null,i),t.lanes=s,t}function nc(t,i,s){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function w_(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qs(0),this.expirationTimes=qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qs(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ic(t,i,s,l,c,h,M,b,F){return t=new w_(t,i,s,b,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Gn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(h),t}function A_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function fp(t){if(!t)return ji;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Sn(s))return Bd(t,s,i)}return i}function dp(t,i,s,l,c,h,M,b,F){return t=ic(s,l,!0,t,c,h,M,b,F),t.context=fp(null),s=t.current,l=mn(),c=tr(s),h=Ei(l,c),h.callback=i??null,Zi(s,h,c),t.current.lanes=c,Bi(t,c,l),En(t,l),t}function Ba(t,i,s,l){var c=i.current,h=mn(),M=tr(c);return s=fp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ei(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Zi(c,i,M),t!==null&&(Qn(t,c,M,h),ga(t,c,M)),M}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function rc(t,i){hp(t,i),(t=t.alternate)&&hp(t,i)}function R_(){return null}var pp=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}Ha.prototype.render=sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Ha.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ar(function(){Ba(null,t,null,null)}),i[vi]=null}};function Ha(t){this._internalRoot=t}Ha.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Gi.length&&i!==0&&i<Gi[s].priority;s++);Gi.splice(s,0,t),s===0&&ed(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function C_(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ee=za(M);h.call(ee)}}var M=dp(i,l,t,0,null,!1,!1,"",mp);return t._reactRootContainer=M,t[vi]=M.current,ao(t.nodeType===8?t.parentNode:t),Ar(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var b=l;l=function(){var ee=za(F);b.call(ee)}}var F=ic(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=F,t[vi]=F.current,ao(t.nodeType===8?t.parentNode:t),Ar(function(){Ba(i,F,s,l)}),F}function Ga(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var b=c;c=function(){var F=za(M);b.call(F)}}Ba(i,M,t,c)}else M=C_(s,i,t,c,l);return za(M)}Kf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=_i(i.pendingLanes);s!==0&&(Ll(i,s|1),En(i,Te()),(mt&6)===0&&(gs=Te()+500,Ki()))}break;case 13:Ar(function(){var l=Mi(t,1);if(l!==null){var c=mn();Qn(l,t,1,c)}}),rc(t,1)}},bl=function(t){if(t.tag===13){var i=Mi(t,134217728);if(i!==null){var s=mn();Qn(i,t,134217728,s)}rc(t,134217728)}},$f=function(t){if(t.tag===13){var i=tr(t),s=Mi(t,i);if(s!==null){var l=mn();Qn(s,t,i,l)}rc(t,i)}},Zf=function(){return Et},Qf=function(t,i){var s=Et;try{return Et=t,i()}finally{Et=s}},se=function(t,i,s){switch(i){case"input":if(Ke(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=oa(l);if(!c)throw Error(n(90));at(l),Ke(l,c)}}}break;case"textarea":_e(t,s);break;case"select":i=s.value,i!=null&&T(t,!!s.multiple,i,!1)}},tn=Zu,dt=Ar;var P_={usingClientEntryPoint:!1,Events:[co,is,oa,ut,Nt,Zu]},wo={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L_={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||R_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Rt=Wa.inject(L_),Ut=Wa}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_,Tn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(i))throw Error(n(200));return A_(t,i,null,s)},Tn.createRoot=function(t,i){if(!oc(t))throw Error(n(299));var s=!1,l="",c=pp;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ic(t,1,!1,null,null,s,!1,l,c),t[vi]=i.current,ao(t.nodeType===8?t.parentNode:t),new sc(i)},Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=V(i),t=t===null?null:t.stateNode,t},Tn.flushSync=function(t){return Ar(t)},Tn.hydrate=function(t,i,s){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!0,s)},Tn.hydrateRoot=function(t,i,s){if(!oc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=pp;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=dp(i,null,t,1,s??null,c,!1,h,M),t[vi]=i.current,ao(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Ha(i)},Tn.render=function(t,i,s){if(!Va(i))throw Error(n(200));return Ga(null,t,i,!1,s)},Tn.unmountComponentAtNode=function(t){if(!Va(t))throw Error(n(40));return t._reactRootContainer?(Ar(function(){Ga(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1},Tn.unstable_batchedUpdates=Zu,Tn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Va(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ga(t,i,s,!1,l)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var Ep;function k_(){if(Ep)return uc.exports;Ep=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uc.exports=O_(),uc.exports}var Tp;function B_(){if(Tp)return Xa;Tp=1;var o=k_();return Xa.createRoot=o.createRoot,Xa.hydrateRoot=o.hydrateRoot,Xa}var z_=B_();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const If="169",H_=0,wp=1,V_=2,Mm=1,G_=2,bi=3,pr=0,Rn=1,Di=2,dr=0,Us=1,Ap=2,Rp=3,Cp=4,W_=5,kr=100,X_=101,Y_=102,q_=103,j_=104,K_=200,$_=201,Z_=202,Q_=203,Xc=204,Yc=205,J_=206,ev=207,tv=208,nv=209,iv=210,rv=211,sv=212,ov=213,av=214,qc=0,jc=1,Kc=2,Fs=3,$c=4,Zc=5,Qc=6,Jc=7,Nf=0,lv=1,uv=2,hr=0,cv=1,fv=2,dv=3,hv=4,pv=5,mv=6,gv=7,Em=300,Os=301,ks=302,ef=303,tf=304,Rl=306,nf=1e3,zr=1001,rf=1002,Xn=1003,_v=1004,Ya=1005,ii=1006,dc=1007,Hr=1008,Fi=1009,Tm=1010,wm=1011,No=1012,Ff=1013,Gr=1014,Ui=1015,Fo=1016,Of=1017,kf=1018,Bs=1020,Am=35902,Rm=1021,Cm=1022,si=1023,Pm=1024,Lm=1025,Is=1026,zs=1027,bm=1028,Bf=1029,Dm=1030,zf=1031,Hf=1033,ml=33776,gl=33777,_l=33778,vl=33779,sf=35840,of=35841,af=35842,lf=35843,uf=36196,cf=37492,ff=37496,df=37808,hf=37809,pf=37810,mf=37811,gf=37812,_f=37813,vf=37814,xf=37815,Sf=37816,yf=37817,Mf=37818,Ef=37819,Tf=37820,wf=37821,xl=36492,Af=36494,Rf=36495,Um=36283,Cf=36284,Pf=36285,Lf=36286,vv=3200,xv=3201,Im=0,Sv=1,fr="",fi="srgb",gr="srgb-linear",Vf="display-p3",Cl="display-p3-linear",Ml="linear",Dt="srgb",El="rec709",Tl="p3",vs=7680,Pp=519,yv=512,Mv=513,Ev=514,Nm=515,Tv=516,wv=517,Av=518,Rv=519,Lp=35044,bp="300 es",Ii=2e3,wl=2001;class Gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,bf=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(cn[o&255]+cn[o>>8&255]+cn[o>>16&255]+cn[o>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]).toLowerCase()}function An(o,e,n){return Math.max(e,Math.min(n,o))}function Cv(o,e){return(o%e+e)%e}function pc(o,e,n){return(1-n)*o+n*e}function Ro(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function wn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,n=0){St.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,n,r,a,u,f,d,p,m){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],S=r[7],x=r[2],y=r[5],w=r[8],R=a[0],g=a[3],_=a[6],I=a[1],P=a[4],D=a[7],Z=a[2],B=a[5],N=a[8];return u[0]=f*R+d*I+p*Z,u[3]=f*g+d*P+p*B,u[6]=f*_+d*D+p*N,u[1]=m*R+v*I+S*Z,u[4]=m*g+v*P+S*B,u[7]=m*_+v*D+S*N,u[2]=x*R+y*I+w*Z,u[5]=x*g+y*P+w*B,u[8]=x*_+y*D+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],S=v*f-d*m,x=d*p-v*u,y=m*u-f*p,w=n*S+r*x+a*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(a*m-v*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(v*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=y*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new rt;function Fm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Al(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Pv(){const o=Al("canvas");return o.style.display="block",o}const Dp={};function Sl(o){o in Dp||(Dp[o]=!0,console.warn(o))}function Lv(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function bv(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dv(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Up=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ip=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[gr]:{transfer:Ml,primaries:El,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[fi]:{transfer:Dt,primaries:El,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Cl]:{transfer:Ml,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(Ip),fromReference:o=>o.applyMatrix3(Up)},[Vf]:{transfer:Dt,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(Ip),fromReference:o=>o.applyMatrix3(Up).convertLinearToSRGB()}},Uv=new Set([gr,Cl]),Mt={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Uv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=Co[e].toReference,a=Co[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Co[o].primaries},getTransfer:function(o){return o===fr?Ml:Co[o].transfer},getLuminanceCoefficients:function(o,e=this._workingColorSpace){return o.fromArray(Co[e].luminanceCoefficients)}};function Ns(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xs;class Iv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Al("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Al("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Ns(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ns(n[r]/255)*255):n[r]=Ns(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nv=0;class Om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(_c(a[f].image)):u.push(_c(a[f]))}else u=_c(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function _c(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Iv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fv=0;class _n extends Gs{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,r=zr,a=zr,u=ii,f=Hr,d=si,p=Fi,m=_n.DEFAULT_ANISOTROPY,v=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Oo(),this.name="",this.source=new Om(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Em;_n.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,r=0,a=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],S=p[8],x=p[1],y=p[5],w=p[9],R=p[2],g=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(S-R)<.01&&Math.abs(w-g)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+R)<.1&&Math.abs(w+g)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,D=(y+1)/2,Z=(_+1)/2,B=(v+x)/4,N=(S+R)/4,q=(w+g)/4;return P>D&&P>Z?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=B/r,u=N/r):D>Z?D<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(D),r=B/a,u=q/a):Z<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Z),r=N/u,a=q/u),this.set(r,a,u,n),this}let I=Math.sqrt((g-w)*(g-w)+(S-R)*(S-R)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(g-w)/I,this.y=(S-R)/I,this.z=(x-v)/I,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ov extends Gs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new _n(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Om(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends Ov{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class km extends _n{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kv extends _n{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],S=r[a+3];const x=u[f+0],y=u[f+1],w=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=w,e[n+3]=R;return}if(S!==R||p!==x||m!==y||v!==w){let g=1-d;const _=p*x+m*y+v*w+S*R,I=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const Z=Math.sqrt(P),B=Math.atan2(Z,_*I);g=Math.sin(g*B)/Z,d=Math.sin(d*B)/Z}const D=d*I;if(p=p*g+x*D,m=m*g+y*D,v=v*g+w*D,S=S*g+R*D,g===1-d){const Z=1/Math.sqrt(p*p+m*m+v*v+S*S);p*=Z,m*=Z,v*=Z,S*=Z}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],S=u[f],x=u[f+1],y=u[f+2],w=u[f+3];return e[n]=d*w+v*S+p*y-m*x,e[n+1]=p*w+v*x+m*S-d*y,e[n+2]=m*w+v*y+d*x-p*S,e[n+3]=v*w-d*S-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),S=d(u/2),x=p(r/2),y=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*v*S+m*y*w,this._y=m*y*S-x*v*w,this._z=m*v*w+x*y*S,this._w=m*v*S-x*y*w;break;case"YXZ":this._x=x*v*S+m*y*w,this._y=m*y*S-x*v*w,this._z=m*v*w-x*y*S,this._w=m*v*S+x*y*w;break;case"ZXY":this._x=x*v*S-m*y*w,this._y=m*y*S+x*v*w,this._z=m*v*w+x*y*S,this._w=m*v*S-x*y*w;break;case"ZYX":this._x=x*v*S-m*y*w,this._y=m*y*S+x*v*w,this._z=m*v*w-x*y*S,this._w=m*v*S+x*y*w;break;case"YZX":this._x=x*v*S+m*y*w,this._y=m*y*S+x*v*w,this._z=m*v*w-x*y*S,this._w=m*v*S-x*y*w;break;case"XZY":this._x=x*v*S-m*y*w,this._y=m*y*S-x*v*w,this._z=m*v*w+x*y*S,this._w=m*v*S+x*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],S=n[10],x=r+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(v-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),S=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*S+this._w*x,this._x=r*S+this._x*x,this._y=a*S+this._y*x,this._z=u*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),S=2*(u*r-f*n);return this.x=n+p*m+f*S-d*v,this.y=r+p*v+d*m-u*S,this.z=a+p*S+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(An(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new $,Np=new ko;class Bo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Jn):Jn.fromBufferAttribute(u,f),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qa.copy(r.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),ja.subVectors(this.max,Po),Ss.subVectors(e.a,Po),ys.subVectors(e.b,Po),Ms.subVectors(e.c,Po),sr.subVectors(ys,Ss),or.subVectors(Ms,ys),Lr.subVectors(Ss,Ms);let n=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Lr.z,Lr.y,sr.z,0,-sr.x,or.z,0,-or.x,Lr.z,0,-Lr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Lr.y,Lr.x,0];return!xc(n,Ss,ys,Ms,ja)||(n=[1,0,0,0,1,0,0,0,1],!xc(n,Ss,ys,Ms,ja))?!1:(Ka.crossVectors(sr,or),n=[Ka.x,Ka.y,Ka.z],xc(n,Ss,ys,Ms,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new $,new $,new $,new $,new $,new $,new $,new $],Jn=new $,qa=new Bo,Ss=new $,ys=new $,Ms=new $,sr=new $,or=new $,Lr=new $,Po=new $,ja=new $,Ka=new $,br=new $;function xc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){br.fromArray(o,u);const d=a.x*Math.abs(br.x)+a.y*Math.abs(br.y)+a.z*Math.abs(br.z),p=e.dot(br),m=n.dot(br),v=r.dot(br);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const Bv=new Bo,Lo=new $,Sc=new $;class Gf{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Bv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Lo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Sc)),this.expandByPoint(Lo.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new $,yc=new $,$a=new $,ar=new $,Mc=new $,Za=new $,Ec=new $;class zv{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){yc.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(yc);const u=e.distanceTo(n)*.5,f=-this.direction.dot($a),d=ar.dot(this.direction),p=-ar.dot($a),m=ar.lengthSq(),v=Math.abs(1-f*f);let S,x,y,w;if(v>0)if(S=f*p-d,x=f*d-p,w=u*v,S>=0)if(x>=-w)if(x<=w){const R=1/v;S*=R,x*=R,y=S*(S+f*x+2*d)+x*(f*S+x+2*p)+m}else x=u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x=-u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x<=-w?(S=Math.max(0,-(-f*u+d)),x=S>0?-u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m):x<=w?(S=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(S=Math.max(0,-(f*u+d)),x=S>0?u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m);else x=f>0?-u:u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(yc).addScaledVector($a,x),y}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const r=Ri.dot(this.direction),a=Ri.dot(Ri)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),S>=0?(d=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,r,a,u){Mc.subVectors(n,e),Za.subVectors(r,e),Ec.crossVectors(Mc,Za);let f=this.direction.dot(Ec),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ar.subVectors(this.origin,e);const p=d*this.direction.dot(Za.crossVectors(ar,Za));if(p<0)return null;const m=d*this.direction.dot(Mc.cross(ar));if(m<0||p+m>f)return null;const v=-d*ar.dot(Ec);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,n,r,a,u,f,d,p,m,v,S,x,y,w,R,g){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,S,x,y,w,R,g)}set(e,n,r,a,u,f,d,p,m,v,S,x,y,w,R,g){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=S,_[14]=x,_[3]=y,_[7]=w,_[11]=R,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Es.setFromMatrixColumn(e,0).length(),u=1/Es.setFromMatrixColumn(e,1).length(),f=1/Es.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const x=f*v,y=f*S,w=d*v,R=d*S;n[0]=p*v,n[4]=-p*S,n[8]=m,n[1]=y+w*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=w+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,y=p*S,w=m*v,R=m*S;n[0]=x+R*d,n[4]=w*d-y,n[8]=f*m,n[1]=f*S,n[5]=f*v,n[9]=-d,n[2]=y*d-w,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,y=p*S,w=m*v,R=m*S;n[0]=x-R*d,n[4]=-f*S,n[8]=w+y*d,n[1]=y+w*d,n[5]=f*v,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,y=f*S,w=d*v,R=d*S;n[0]=p*v,n[4]=w*m-y,n[8]=x*m+R,n[1]=p*S,n[5]=R*m+x,n[9]=y*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,w=d*p,R=d*m;n[0]=p*v,n[4]=R-x*S,n[8]=w*S+y,n[1]=S,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*S+w,n[10]=x-R*S}else if(e.order==="XZY"){const x=f*p,y=f*m,w=d*p,R=d*m;n[0]=p*v,n[4]=-S,n[8]=m*v,n[1]=x*S+R,n[5]=f*v,n[9]=y*S-w,n[2]=w*S-y,n[6]=d*v,n[10]=R*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hv,e,Vv)}lookAt(e,n,r){const a=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),lr.crossVectors(r,In),lr.lengthSq()===0&&(Math.abs(r.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),lr.crossVectors(r,In)),lr.normalize(),Qa.crossVectors(In,lr),a[0]=lr.x,a[4]=Qa.x,a[8]=In.x,a[1]=lr.y,a[5]=Qa.y,a[9]=In.y,a[2]=lr.z,a[6]=Qa.z,a[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],S=r[5],x=r[9],y=r[13],w=r[2],R=r[6],g=r[10],_=r[14],I=r[3],P=r[7],D=r[11],Z=r[15],B=a[0],N=a[4],q=a[8],ge=a[12],E=a[1],C=a[5],re=a[9],X=a[13],oe=a[2],ae=a[6],te=a[10],le=a[14],O=a[3],ue=a[7],ie=a[11],U=a[15];return u[0]=f*B+d*E+p*oe+m*O,u[4]=f*N+d*C+p*ae+m*ue,u[8]=f*q+d*re+p*te+m*ie,u[12]=f*ge+d*X+p*le+m*U,u[1]=v*B+S*E+x*oe+y*O,u[5]=v*N+S*C+x*ae+y*ue,u[9]=v*q+S*re+x*te+y*ie,u[13]=v*ge+S*X+x*le+y*U,u[2]=w*B+R*E+g*oe+_*O,u[6]=w*N+R*C+g*ae+_*ue,u[10]=w*q+R*re+g*te+_*ie,u[14]=w*ge+R*X+g*le+_*U,u[3]=I*B+P*E+D*oe+Z*O,u[7]=I*N+P*C+D*ae+Z*ue,u[11]=I*q+P*re+D*te+Z*ie,u[15]=I*ge+P*X+D*le+Z*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],S=e[6],x=e[10],y=e[14],w=e[3],R=e[7],g=e[11],_=e[15];return w*(+u*p*S-a*m*S-u*d*x+r*m*x+a*d*y-r*p*y)+R*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*v-u*p*v)+g*(+n*m*S-n*d*y-u*f*S+r*f*y+u*d*v-r*m*v)+_*(-a*d*v-n*p*S+n*d*x+a*f*S-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],S=e[9],x=e[10],y=e[11],w=e[12],R=e[13],g=e[14],_=e[15],I=S*g*m-R*x*m+R*p*y-d*g*y-S*p*_+d*x*_,P=w*x*m-v*g*m-w*p*y+f*g*y+v*p*_-f*x*_,D=v*R*m-w*S*m+w*d*y-f*R*y-v*d*_+f*S*_,Z=w*S*p-v*R*p-w*d*x+f*R*x+v*d*g-f*S*g,B=n*I+r*P+a*D+u*Z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=I*N,e[1]=(R*x*u-S*g*u-R*a*y+r*g*y+S*a*_-r*x*_)*N,e[2]=(d*g*u-R*p*u+R*a*m-r*g*m-d*a*_+r*p*_)*N,e[3]=(S*p*u-d*x*u-S*a*m+r*x*m+d*a*y-r*p*y)*N,e[4]=P*N,e[5]=(v*g*u-w*x*u+w*a*y-n*g*y-v*a*_+n*x*_)*N,e[6]=(w*p*u-f*g*u-w*a*m+n*g*m+f*a*_-n*p*_)*N,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*y+n*p*y)*N,e[8]=D*N,e[9]=(w*S*u-v*R*u-w*r*y+n*R*y+v*r*_-n*S*_)*N,e[10]=(f*R*u-w*d*u+w*r*m-n*R*m-f*r*_+n*d*_)*N,e[11]=(v*d*u-f*S*u-v*r*m+n*S*m+f*r*y-n*d*y)*N,e[12]=Z*N,e[13]=(v*R*a-w*S*a+w*r*x-n*R*x-v*r*g+n*S*g)*N,e[14]=(w*d*a-f*R*a-w*r*p+n*R*p+f*r*g-n*d*g)*N,e[15]=(f*S*a-v*d*a+v*r*p-n*S*p-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,S=d+d,x=u*m,y=u*v,w=u*S,R=f*v,g=f*S,_=d*S,I=p*m,P=p*v,D=p*S,Z=r.x,B=r.y,N=r.z;return a[0]=(1-(R+_))*Z,a[1]=(y+D)*Z,a[2]=(w-P)*Z,a[3]=0,a[4]=(y-D)*B,a[5]=(1-(x+_))*B,a[6]=(g+I)*B,a[7]=0,a[8]=(w+P)*N,a[9]=(g-I)*N,a[10]=(1-(x+R))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Es.set(a[0],a[1],a[2]).length();const f=Es.set(a[4],a[5],a[6]).length(),d=Es.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ei.copy(this);const m=1/u,v=1/f,S=1/d;return ei.elements[0]*=m,ei.elements[1]*=m,ei.elements[2]*=m,ei.elements[4]*=v,ei.elements[5]*=v,ei.elements[6]*=v,ei.elements[8]*=S,ei.elements[9]*=S,ei.elements[10]*=S,n.setFromRotationMatrix(ei),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Ii){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),S=(n+e)/(n-e),x=(r+a)/(r-a);let y,w;if(d===Ii)y=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===wl)y=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Ii){const p=this.elements,m=1/(n-e),v=1/(r-a),S=1/(f-u),x=(n+e)*m,y=(r+a)*v;let w,R;if(d===Ii)w=(f+u)*S,R=-2*S;else if(d===wl)w=u*S,R=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=R,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Es=new $,ei=new kt,Hv=new $(0,0,0),Vv=new $(1,1,1),lr=new $,Qa=new $,In=new $,Fp=new kt,Op=new ko;class pi{constructor(e=0,n=0,r=0,a=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],S=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(An(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-An(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(An(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-An(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(An(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-An(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gv=0;const kp=new $,Ts=new ko,Ci=new kt,Ja=new $,bo=new $,Wv=new $,Xv=new ko,Bp=new $(1,0,0),zp=new $(0,1,0),Hp=new $(0,0,1),Vp={type:"added"},Yv={type:"removed"},ws={type:"childadded",child:null},Tc={type:"childremoved",child:null};class vn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new $,n=new pi,r=new ko,a=new $(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new kt},normalMatrix:{value:new rt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Hp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ja.copy(e):Ja.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(bo,Ja,this.up):Ci.lookAt(Ja,bo,this.up),this.quaternion.setFromRotationMatrix(Ci),a&&(Ci.extractRotation(a.matrixWorld),Ts.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vp),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yv),Tc.child=e,this.dispatchEvent(Tc),Tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vp),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,Wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Xv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const S=p[m];u(e.shapes,S)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),S=f(e.shapes),x=f(e.skeletons),y=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}vn.DEFAULT_UP=new $(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new $,Pi=new $,wc=new $,Li=new $,As=new $,Rs=new $,Gp=new $,Ac=new $,Rc=new $,Cc=new $,Pc=new At,Lc=new At,bc=new At;class ri{constructor(e=new $,n=new $,r=new $){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ti.subVectors(e,n),a.cross(ti);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ti.subVectors(a,n),Pi.subVectors(r,n),wc.subVectors(e,n);const f=ti.dot(ti),d=ti.dot(Pi),p=ti.dot(wc),m=Pi.dot(Pi),v=Pi.dot(wc),S=f*m-d*d;if(S===0)return u.set(0,0,0),null;const x=1/S,y=(m*p-d*v)*x,w=(f*v-d*p)*x;return u.set(1-y-w,w,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Li)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Li.x),p.addScaledVector(f,Li.y),p.addScaledVector(d,Li.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Pc.setScalar(0),Lc.setScalar(0),bc.setScalar(0),Pc.fromBufferAttribute(e,n),Lc.fromBufferAttribute(e,r),bc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Pc,u.x),f.addScaledVector(Lc,u.y),f.addScaledVector(bc,u.z),f}static isFrontFacing(e,n,r,a){return ti.subVectors(r,n),Pi.subVectors(e,n),ti.cross(Pi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ti.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ri.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;As.subVectors(a,r),Rs.subVectors(u,r),Ac.subVectors(e,r);const p=As.dot(Ac),m=Rs.dot(Ac);if(p<=0&&m<=0)return n.copy(r);Rc.subVectors(e,a);const v=As.dot(Rc),S=Rs.dot(Rc);if(v>=0&&S<=v)return n.copy(a);const x=p*S-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(As,f);Cc.subVectors(e,u);const y=As.dot(Cc),w=Rs.dot(Cc);if(w>=0&&y<=w)return n.copy(u);const R=y*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Rs,d);const g=v*w-y*S;if(g<=0&&S-v>=0&&y-w>=0)return Gp.subVectors(u,a),d=(S-v)/(S-v+(y-w)),n.copy(a).addScaledVector(Gp,d);const _=1/(g+R+x);return f=R*_,d=x*_,n.copy(r).addScaledVector(As,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},el={h:0,s:0,l:0};function Dc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class ht{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=Cv(e,1),n=An(n,0,1),r=An(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Dc(f,u,e+1/3),this.g=Dc(f,u,e),this.b=Dc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fi){const r=zm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Mt.fromWorkingColorSpace(fn.copy(this),e),Math.round(An(fn.r*255,0,255))*65536+Math.round(An(fn.g*255,0,255))*256+Math.round(An(fn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,a=fn.g,u=fn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const S=f-d;switch(m=v<=.5?S/(f+d):S/(2-f-d),f){case r:p=(a-u)/S+(a<u?6:0);break;case a:p=(u-r)/S+2;break;case u:p=(r-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=fi){Mt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,a=fn.b;return e!==fi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(el);const r=pc(ur.h,el.h,n),a=pc(ur.s,el.s,n),u=pc(ur.l,el.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ht;ht.NAMES=zm;let qv=0;class zo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=Us,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Yc,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xc&&(r.blendSrc=this.blendSrc),this.blendDst!==Yc&&(r.blendDst=this.blendDst),this.blendEquation!==kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wf extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new $,tl=new St;class hi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Lp,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=wn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array),a=wn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),r=wn(r,this.array),a=wn(a,this.array),u=wn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lp&&(e.usage=this.usage),e}}class Hm extends hi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Vm extends hi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Vr extends hi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let jv=0;const Wn=new kt,Uc=new vn,Cs=new $,Nn=new Bo,Do=new Bo,Jt=new $;class Xr extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fm(e)?Vm:Hm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new rt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,r){return Wn.makeTranslation(e,n,r),this.applyMatrix4(Wn),this}scale(e,n,r){return Wn.makeScale(e,n,r),this.applyMatrix4(Wn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Vr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Nn.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(Jt.addVectors(Nn.min,Do.min),Nn.expandByPoint(Jt),Jt.addVectors(Nn.max,Do.max),Nn.expandByPoint(Jt)):(Nn.expandByPoint(Do.min),Nn.expandByPoint(Do.max))}Nn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)Jt.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(Jt));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Jt.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),Jt.add(Cs)),a=Math.max(a,r.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<r.count;q++)d[q]=new $,p[q]=new $;const m=new $,v=new $,S=new $,x=new St,y=new St,w=new St,R=new $,g=new $;function _(q,ge,E){m.fromBufferAttribute(r,q),v.fromBufferAttribute(r,ge),S.fromBufferAttribute(r,E),x.fromBufferAttribute(u,q),y.fromBufferAttribute(u,ge),w.fromBufferAttribute(u,E),v.sub(m),S.sub(m),y.sub(x),w.sub(x);const C=1/(y.x*w.y-w.x*y.y);isFinite(C)&&(R.copy(v).multiplyScalar(w.y).addScaledVector(S,-y.y).multiplyScalar(C),g.copy(S).multiplyScalar(y.x).addScaledVector(v,-w.x).multiplyScalar(C),d[q].add(R),d[ge].add(R),d[E].add(R),p[q].add(g),p[ge].add(g),p[E].add(g))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let q=0,ge=I.length;q<ge;++q){const E=I[q],C=E.start,re=E.count;for(let X=C,oe=C+re;X<oe;X+=3)_(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const P=new $,D=new $,Z=new $,B=new $;function N(q){Z.fromBufferAttribute(a,q),B.copy(Z);const ge=d[q];P.copy(ge),P.sub(Z.multiplyScalar(Z.dot(ge))).normalize(),D.crossVectors(B,ge);const C=D.dot(p[q])<0?-1:1;f.setXYZW(q,P.x,P.y,P.z,C)}for(let q=0,ge=I.length;q<ge;++q){const E=I[q],C=E.start,re=E.count;for(let X=C,oe=C+re;X<oe;X+=3)N(e.getX(X+0)),N(e.getX(X+1)),N(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new $,u=new $,f=new $,d=new $,p=new $,m=new $,v=new $,S=new $;if(e)for(let x=0,y=e.count;x<y;x+=3){const w=e.getX(x+0),R=e.getX(x+1),g=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,g),v.subVectors(f,u),S.subVectors(a,u),v.cross(S),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,g),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),S.subVectors(a,u),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,S=d.normalized,x=new m.constructor(p.length*v);let y=0,w=0;for(let R=0,g=p.length;R<g;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*v;for(let _=0;_<v;_++)x[w++]=m[y++]}return new hi(x,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,S=m.length;v<S;v++){const x=m[v],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let S=0,x=m.length;S<x;S++){const y=m[S];v.push(y.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],S=u[m];for(let x=0,y=S.length;x<y;x++)v.push(S[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const S=f[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wp=new kt,Dr=new zv,nl=new Gf,Xp=new $,il=new $,rl=new $,sl=new $,Ic=new $,ol=new $,Yp=new $,al=new $;class hn extends vn{constructor(e=new Xr,n=new Wf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){ol.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],S=u[p];v!==0&&(Ic.fromBufferAttribute(S,e),f?ol.addScaledVector(Ic,v):ol.addScaledVector(Ic.sub(n),v))}n.add(ol)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(u),Dr.copy(e.ray).recast(e.near),!(nl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(nl,Xp)===null||Dr.origin.distanceToSquared(Xp)>(e.far-e.near)**2))&&(Wp.copy(u).invert(),Dr.copy(e.ray).applyMatrix4(Wp),!(r.boundingBox!==null&&Dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const g=x[w],_=f[g.materialIndex],I=Math.max(g.start,y.start),P=Math.min(d.count,Math.min(g.start+g.count,y.start+y.count));for(let D=I,Z=P;D<Z;D+=3){const B=d.getX(D),N=d.getX(D+1),q=d.getX(D+2);a=ll(this,_,e,r,m,v,S,B,N,q),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let g=w,_=R;g<_;g+=3){const I=d.getX(g),P=d.getX(g+1),D=d.getX(g+2);a=ll(this,f,e,r,m,v,S,I,P,D),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const g=x[w],_=f[g.materialIndex],I=Math.max(g.start,y.start),P=Math.min(p.count,Math.min(g.start+g.count,y.start+y.count));for(let D=I,Z=P;D<Z;D+=3){const B=D,N=D+1,q=D+2;a=ll(this,_,e,r,m,v,S,B,N,q),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let g=w,_=R;g<_;g+=3){const I=g,P=g+1,D=g+2;a=ll(this,f,e,r,m,v,S,I,P,D),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function Kv(o,e,n,r,a,u,f,d){let p;if(e.side===Rn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===pr,d),p===null)return null;al.copy(d),al.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(al);return m<n.near||m>n.far?null:{distance:m,point:al.clone(),object:o}}function ll(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,il),o.getVertexPosition(p,rl),o.getVertexPosition(m,sl);const v=Kv(o,e,n,r,il,rl,sl,Yp);if(v){const S=new $;ri.getBarycoord(Yp,il,rl,sl,S),a&&(v.uv=ri.getInterpolatedAttribute(a,d,p,m,S,new St)),u&&(v.uv1=ri.getInterpolatedAttribute(u,d,p,m,S,new St)),f&&(v.normal=ri.getInterpolatedAttribute(f,d,p,m,S,new $),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new $,materialIndex:0};ri.getNormal(il,rl,sl,x.normal),v.face=x,v.barycoord=S}return v}class Ni extends Xr{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],S=[];let x=0,y=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Vr(m,3)),this.setAttribute("normal",new Vr(v,3)),this.setAttribute("uv",new Vr(S,2));function w(R,g,_,I,P,D,Z,B,N,q,ge){const E=D/N,C=Z/q,re=D/2,X=Z/2,oe=B/2,ae=N+1,te=q+1;let le=0,O=0;const ue=new $;for(let ie=0;ie<te;ie++){const U=ie*C-X;for(let ne=0;ne<ae;ne++){const we=ne*E-re;ue[R]=we*I,ue[g]=U*P,ue[_]=oe,m.push(ue.x,ue.y,ue.z),ue[R]=0,ue[g]=0,ue[_]=B>0?1:-1,v.push(ue.x,ue.y,ue.z),S.push(ne/N),S.push(1-ie/q),le+=1}}for(let ie=0;ie<q;ie++)for(let U=0;U<N;U++){const ne=x+U+ae*ie,we=x+U+ae*(ie+1),Y=x+(U+1)+ae*(ie+1),ce=x+(U+1)+ae*ie;p.push(ne,we,ce),p.push(we,Y,ce),O+=6}d.addGroup(y,O,ge),y+=O,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function gn(o){const e={};for(let n=0;n<o.length;n++){const r=Hs(o[n]);for(const a in r)e[a]=r[a]}return e}function $v(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Gm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Zv={clone:Hs,merge:gn};var Qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=$v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Wm extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new $,qp=new St,jp=new St;class Fn extends Wm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bf*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,qp,jp),n.subVectors(jp,qp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class e0 extends vn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Fn(Ps,Ls,e,n);a.layers=this.layers,this.add(a);const u=new Fn(Ps,Ls,e,n);u.layers=this.layers,this.add(u);const f=new Fn(Ps,Ls,e,n);f.layers=this.layers,this.add(f);const d=new Fn(Ps,Ls,e,n);d.layers=this.layers,this.add(d);const p=new Fn(Ps,Ls,e,n);p.layers=this.layers,this.add(p);const m=new Fn(Ps,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(S,x,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Xm extends _n{constructor(e,n,r,a,u,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t0 extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Xm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ni(5,5,5),u=new mr({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rn,blending:dr});u.uniforms.tEquirect.value=n;const f=new hn(a,u),d=n.minFilter;return n.minFilter===Hr&&(n.minFilter=ii),new e0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Nc=new $,n0=new $,i0=new rt;class Fr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Nc.subVectors(r,n).cross(n0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Nc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||i0.getNormalMatrix(e),a=this.coplanarPoint(Nc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Gf,ul=new $;class Xf{constructor(e=new Fr,n=new Fr,r=new Fr,a=new Fr,u=new Fr,f=new Fr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ii){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],S=a[6],x=a[7],y=a[8],w=a[9],R=a[10],g=a[11],_=a[12],I=a[13],P=a[14],D=a[15];if(r[0].setComponents(p-u,x-m,g-y,D-_).normalize(),r[1].setComponents(p+u,x+m,g+y,D+_).normalize(),r[2].setComponents(p+f,x+v,g+w,D+I).normalize(),r[3].setComponents(p-f,x-v,g-w,D-I).normalize(),r[4].setComponents(p-d,x-S,g-R,D-P).normalize(),n===Ii)r[5].setComponents(p+d,x+S,g+R,D+P).normalize();else if(n===wl)r[5].setComponents(d,S,R,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ul.x=a.normal.x>0?e.max.x:e.min.x,ul.y=a.normal.y>0?e.max.y:e.min.y,ul.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ym(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function r0(o){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,S=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const v=p.array,S=p.updateRanges;if(o.bindBuffer(m,d),S.length===0)o.bufferSubData(m,0,v);else{S.sort((y,w)=>y.start-w.start);let x=0;for(let y=1;y<S.length;y++){const w=S[x],R=S[y];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,S[x]=R)}S.length=x+1;for(let y=0,w=S.length;y<w;y++){const R=S[y];o.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Vs extends Xr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,S=e/d,x=n/p,y=[],w=[],R=[],g=[];for(let _=0;_<v;_++){const I=_*x-f;for(let P=0;P<m;P++){const D=P*S-u;w.push(D,-I,0),R.push(0,0,1),g.push(P/d),g.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<d;I++){const P=I+m*_,D=I+m*(_+1),Z=I+1+m*(_+1),B=I+1+m*_;y.push(P,D,B),y.push(D,Z,B)}this.setIndex(y),this.setAttribute("position",new Vr(w,3)),this.setAttribute("normal",new Vr(R,3)),this.setAttribute("uv",new Vr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
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
#endif`,a0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,C0=`#define PI 3.141592653589793
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
} // validated`,P0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`
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
}`,O0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y0=`#ifdef USE_GRADIENTMAP
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
}`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$0=`uniform bool receiveShadow;
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
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nx=`PhysicalMaterial material;
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
#endif`,ix=`struct PhysicalMaterial {
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
}`,rx=`
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ax=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,px=`#if defined( USE_POINTS_UV )
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
#endif`,mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
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
#endif`,yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
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
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gx=`float getShadowMask() {
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
}`,Wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#ifdef USE_TRANSMISSION
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sS=`uniform sampler2D t2D;
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
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`#include <common>
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
}`,fS=`#if DEPTH_PACKING == 3200
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
}`,dS=`#define DISTANCE
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
}`,hS=`#define DISTANCE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`uniform float scale;
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
}`,_S=`uniform vec3 diffuse;
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
}`,vS=`#include <common>
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
}`,xS=`uniform vec3 diffuse;
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
}`,SS=`#define LAMBERT
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
}`,yS=`#define LAMBERT
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
}`,MS=`#define MATCAP
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
}`,ES=`#define MATCAP
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
}`,TS=`#define NORMAL
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
}`,wS=`#define NORMAL
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
}`,AS=`#define PHONG
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
}`,RS=`#define PHONG
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
}`,CS=`#define STANDARD
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
}`,PS=`#define STANDARD
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
}`,LS=`#define TOON
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
}`,bS=`#define TOON
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
}`,DS=`uniform float size;
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
}`,US=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,NS=`uniform vec3 color;
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
}`,FS=`uniform float rotation;
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
}`,OS=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:s0,alphahash_pars_fragment:o0,alphamap_fragment:a0,alphamap_pars_fragment:l0,alphatest_fragment:u0,alphatest_pars_fragment:c0,aomap_fragment:f0,aomap_pars_fragment:d0,batching_pars_vertex:h0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:_0,iridescence_fragment:v0,bumpmap_pars_fragment:x0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:y0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:E0,color_fragment:T0,color_pars_fragment:w0,color_pars_vertex:A0,color_vertex:R0,common:C0,cube_uv_reflection_fragment:P0,defaultnormal_vertex:L0,displacementmap_pars_vertex:b0,displacementmap_vertex:D0,emissivemap_fragment:U0,emissivemap_pars_fragment:I0,colorspace_fragment:N0,colorspace_pars_fragment:F0,envmap_fragment:O0,envmap_common_pars_fragment:k0,envmap_pars_fragment:B0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:Z0,envmap_vertex:H0,fog_vertex:V0,fog_pars_vertex:G0,fog_fragment:W0,fog_pars_fragment:X0,gradientmap_pars_fragment:Y0,lightmap_pars_fragment:q0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:K0,lights_pars_begin:$0,lights_toon_fragment:Q0,lights_toon_pars_fragment:J0,lights_phong_fragment:ex,lights_phong_pars_fragment:tx,lights_physical_fragment:nx,lights_physical_pars_fragment:ix,lights_fragment_begin:rx,lights_fragment_maps:sx,lights_fragment_end:ox,logdepthbuf_fragment:ax,logdepthbuf_pars_fragment:lx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:cx,map_fragment:fx,map_pars_fragment:dx,map_particle_fragment:hx,map_particle_pars_fragment:px,metalnessmap_fragment:mx,metalnessmap_pars_fragment:gx,morphinstance_vertex:_x,morphcolor_vertex:vx,morphnormal_vertex:xx,morphtarget_pars_vertex:Sx,morphtarget_vertex:yx,normal_fragment_begin:Mx,normal_fragment_maps:Ex,normal_pars_fragment:Tx,normal_pars_vertex:wx,normal_vertex:Ax,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Px,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:bx,opaque_fragment:Dx,packing:Ux,premultiplied_alpha_fragment:Ix,project_vertex:Nx,dithering_fragment:Fx,dithering_pars_fragment:Ox,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Bx,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Hx,shadowmap_vertex:Vx,shadowmask_pars_fragment:Gx,skinbase_vertex:Wx,skinning_pars_vertex:Xx,skinning_vertex:Yx,skinnormal_vertex:qx,specularmap_fragment:jx,specularmap_pars_fragment:Kx,tonemapping_fragment:$x,tonemapping_pars_fragment:Zx,transmission_fragment:Qx,transmission_pars_fragment:Jx,uv_pars_fragment:eS,uv_pars_vertex:tS,uv_vertex:nS,worldpos_vertex:iS,background_vert:rS,background_frag:sS,backgroundCube_vert:oS,backgroundCube_frag:aS,cube_vert:lS,cube_frag:uS,depth_vert:cS,depth_frag:fS,distanceRGBA_vert:dS,distanceRGBA_frag:hS,equirect_vert:pS,equirect_frag:mS,linedashed_vert:gS,linedashed_frag:_S,meshbasic_vert:vS,meshbasic_frag:xS,meshlambert_vert:SS,meshlambert_frag:yS,meshmatcap_vert:MS,meshmatcap_frag:ES,meshnormal_vert:TS,meshnormal_frag:wS,meshphong_vert:AS,meshphong_frag:RS,meshphysical_vert:CS,meshphysical_frag:PS,meshtoon_vert:LS,meshtoon_frag:bS,points_vert:DS,points_frag:US,shadow_vert:IS,shadow_frag:NS,sprite_vert:FS,sprite_frag:OS},Ce={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},di={basic:{uniforms:gn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:gn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:gn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:gn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:gn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:gn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:gn([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:gn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:gn([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:gn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:gn([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:gn([Ce.common,Ce.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:gn([Ce.lights,Ce.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};di.physical={uniforms:gn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const cl={r:0,b:0,g:0},Ir=new pi,kS=new kt;function BS(o,e,n,r,a,u,f){const d=new ht(0);let p=u===!0?0:1,m,v,S=null,x=0,y=null;function w(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?n:e).get(P)),P}function R(I){let P=!1;const D=w(I);D===null?_(d,p):D&&D.isColor&&(_(D,1),P=!0);const Z=o.xr.getEnvironmentBlendMode();Z==="additive"?r.buffers.color.setClear(0,0,0,1,f):Z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function g(I,P){const D=w(P);D&&(D.isCubeTexture||D.mapping===Rl)?(v===void 0&&(v=new hn(new Ni(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Hs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(Z,B,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Ir.copy(P.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(Ir)),v.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Dt,(S!==D||x!==D.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,S=D,x=D.version,y=o.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new hn(new Vs(2,2),new mr({name:"BackgroundMaterial",uniforms:Hs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||x!==D.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,x=D.version,y=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,P){I.getRGB(cl,Gm(o)),r.buffers.color.setClear(cl.r,cl.g,cl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(I,P=1){d.set(I),p=P,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,_(d,p)},render:R,addToRenderList:g}}function zS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(E,C,re,X,oe){let ae=!1;const te=S(X,re,C);u!==te&&(u=te,m(u.object)),ae=y(E,X,re,oe),ae&&w(E,X,re,oe),oe!==null&&e.update(oe,o.ELEMENT_ARRAY_BUFFER),(ae||f)&&(f=!1,D(E,C,re,X),oe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return o.createVertexArray()}function m(E){return o.bindVertexArray(E)}function v(E){return o.deleteVertexArray(E)}function S(E,C,re){const X=re.wireframe===!0;let oe=r[E.id];oe===void 0&&(oe={},r[E.id]=oe);let ae=oe[C.id];ae===void 0&&(ae={},oe[C.id]=ae);let te=ae[X];return te===void 0&&(te=x(p()),ae[X]=te),te}function x(E){const C=[],re=[],X=[];for(let oe=0;oe<n;oe++)C[oe]=0,re[oe]=0,X[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:re,attributeDivisors:X,object:E,attributes:{},index:null}}function y(E,C,re,X){const oe=u.attributes,ae=C.attributes;let te=0;const le=re.getAttributes();for(const O in le)if(le[O].location>=0){const ie=oe[O];let U=ae[O];if(U===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(U=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(U=E.instanceColor)),ie===void 0||ie.attribute!==U||U&&ie.data!==U.data)return!0;te++}return u.attributesNum!==te||u.index!==X}function w(E,C,re,X){const oe={},ae=C.attributes;let te=0;const le=re.getAttributes();for(const O in le)if(le[O].location>=0){let ie=ae[O];ie===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor));const U={};U.attribute=ie,ie&&ie.data&&(U.data=ie.data),oe[O]=U,te++}u.attributes=oe,u.attributesNum=te,u.index=X}function R(){const E=u.newAttributes;for(let C=0,re=E.length;C<re;C++)E[C]=0}function g(E){_(E,0)}function _(E,C){const re=u.newAttributes,X=u.enabledAttributes,oe=u.attributeDivisors;re[E]=1,X[E]===0&&(o.enableVertexAttribArray(E),X[E]=1),oe[E]!==C&&(o.vertexAttribDivisor(E,C),oe[E]=C)}function I(){const E=u.newAttributes,C=u.enabledAttributes;for(let re=0,X=C.length;re<X;re++)C[re]!==E[re]&&(o.disableVertexAttribArray(re),C[re]=0)}function P(E,C,re,X,oe,ae,te){te===!0?o.vertexAttribIPointer(E,C,re,oe,ae):o.vertexAttribPointer(E,C,re,X,oe,ae)}function D(E,C,re,X){R();const oe=X.attributes,ae=re.getAttributes(),te=C.defaultAttributeValues;for(const le in ae){const O=ae[le];if(O.location>=0){let ue=oe[le];if(ue===void 0&&(le==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),le==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor)),ue!==void 0){const ie=ue.normalized,U=ue.itemSize,ne=e.get(ue);if(ne===void 0)continue;const we=ne.buffer,Y=ne.type,ce=ne.bytesPerElement,xe=Y===o.INT||Y===o.UNSIGNED_INT||ue.gpuType===Ff;if(ue.isInterleavedBufferAttribute){const Se=ue.data,Pe=Se.stride,Le=ue.offset;if(Se.isInstancedInterleavedBuffer){for(let Je=0;Je<O.locationSize;Je++)_(O.location+Je,Se.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Je=0;Je<O.locationSize;Je++)g(O.location+Je);o.bindBuffer(o.ARRAY_BUFFER,we);for(let Je=0;Je<O.locationSize;Je++)P(O.location+Je,U/O.locationSize,Y,ie,Pe*ce,(Le+U/O.locationSize*Je)*ce,xe)}else{if(ue.isInstancedBufferAttribute){for(let Se=0;Se<O.locationSize;Se++)_(O.location+Se,ue.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Se=0;Se<O.locationSize;Se++)g(O.location+Se);o.bindBuffer(o.ARRAY_BUFFER,we);for(let Se=0;Se<O.locationSize;Se++)P(O.location+Se,U/O.locationSize,Y,ie,U*ce,U/O.locationSize*Se*ce,xe)}}else if(te!==void 0){const ie=te[le];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(O.location,ie);break;case 3:o.vertexAttrib3fv(O.location,ie);break;case 4:o.vertexAttrib4fv(O.location,ie);break;default:o.vertexAttrib1fv(O.location,ie)}}}}I()}function Z(){q();for(const E in r){const C=r[E];for(const re in C){const X=C[re];for(const oe in X)v(X[oe].object),delete X[oe];delete C[re]}delete r[E]}}function B(E){if(r[E.id]===void 0)return;const C=r[E.id];for(const re in C){const X=C[re];for(const oe in X)v(X[oe].object),delete X[oe];delete C[re]}delete r[E.id]}function N(E){for(const C in r){const re=r[C];if(re[E.id]===void 0)continue;const X=re[E.id];for(const oe in X)v(X[oe].object),delete X[oe];delete re[E.id]}}function q(){ge(),f=!0,u!==a&&(u=a,m(u.object))}function ge(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:q,resetDefaultState:ge,dispose:Z,releaseStatesOfGeometry:B,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:g,disableUnusedAttributes:I}}function HS(o,e,n){let r;function a(m){r=m}function u(m,v){o.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,S){S!==0&&(o.drawArraysInstanced(r,m,v,S),n.update(v,r,S))}function d(m,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,S);let y=0;for(let w=0;w<S;w++)y+=v[w];n.update(y,r,1)}function p(m,v,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<m.length;w++)f(m[w],v[w],x[w]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,S);let w=0;for(let R=0;R<S;R++)w+=v[R];for(let R=0;R<x.length;R++)n.update(w,r,x[R])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function VS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==si&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const q=N===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Fi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ui&&!q)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const S=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const N=e.get("EXT_clip_control");N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT)}const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Z=w>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:D,vertexTextures:Z,maxSamples:B}}function GS(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Fr,d=new rt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||r!==0||a;return a=x,r=S.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,x){n=v(S,x,0)},this.setState=function(S,x,y){const w=S.clippingPlanes,R=S.clipIntersection,g=S.clipShadows,_=o.get(S);if(!a||w===null||w.length===0||u&&!g)u?v(null):m();else{const I=u?0:r,P=I*4;let D=_.clippingState||null;p.value=D,D=v(w,x,P,y);for(let Z=0;Z!==P;++Z)D[Z]=n[Z];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,y,w){const R=S!==null?S.length:0;let g=null;if(R!==0){if(g=p.value,w!==!0||g===null){const _=y+R*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(g===null||g.length<_)&&(g=new Float32Array(_));for(let P=0,D=y;P!==R;++P,D+=4)f.copy(S[P]).applyMatrix4(I,d),f.normal.toArray(g,D),g[D+3]=f.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,g}}function WS(o){let e=new WeakMap;function n(f,d){return d===ef?f.mapping=Os:d===tf&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ef||d===tf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new t0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class XS extends Wm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Kp=[.125,.215,.35,.446,.526,.582],Br=20,Fc=new XS,$p=new ht;let Oc=null,kc=0,Bc=0,zc=!1;const Or=(1+Math.sqrt(5))/2,bs=1/Or,Zp=[new $(-Or,bs,0),new $(Or,bs,0),new $(-bs,0,Or),new $(bs,0,Or),new $(0,Or,-bs),new $(0,Or,bs),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Oc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,kc,Bc),this._renderer.xr.enabled=zc,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Fo,format:si,colorSpace:gr,depthBuffer:!1},a=Jp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YS(u)),this._blurMaterial=qS(u,e,n)}return a}_compileMaterial(e){const n=new hn(this._lodPlanes[0],e);this._renderer.compile(n,Fc)}_sceneToCubeUV(e,n,r,a){const d=new Fn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,x=v.toneMapping;v.getClearColor($p),v.toneMapping=hr,v.autoClear=!1;const y=new Wf({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),w=new hn(new Ni,y);let R=!1;const g=e.background;g?g.isColor&&(y.color.copy(g),e.background=null,R=!0):(y.color.copy($p),R=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(d.up.set(0,p[_],0),d.lookAt(m[_],0,0)):I===1?(d.up.set(0,0,p[_]),d.lookAt(0,m[_],0)):(d.up.set(0,p[_],0),d.lookAt(0,0,m[_]));const P=this._cubeSize;fl(a,I*P,_>2?P:0,P,P),v.setRenderTarget(a),R&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=x,v.autoClear=S,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Os||e.mapping===ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new hn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;fl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Fc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Zp[(a-u-1)%Zp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new hn(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Br-1),R=u/w,g=isFinite(u)?1+Math.floor(v*R):Br;g>Br&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Br}`);const _=[];let I=0;for(let N=0;N<Br;++N){const q=N/R,ge=Math.exp(-q*q/2);_.push(ge),N===0?I+=ge:N<g&&(I+=2*ge)}for(let N=0;N<_.length;N++)_[N]=_[N]/I;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=w,x.mipInt.value=P-r;const D=this._sizeLods[a],Z=3*D*(a>P-Ds?a-P+Ds:0),B=4*(this._cubeSize-D);fl(n,Z,B,3*D,2*D),p.setRenderTarget(n),p.render(S,Fc)}}function YS(o){const e=[],n=[],r=[];let a=o;const u=o-Ds+1+Kp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Ds?p=Kp[f-o+Ds-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,S=1+m,x=[v,v,S,v,S,S,v,v,S,S,v,S],y=6,w=6,R=3,g=2,_=1,I=new Float32Array(R*w*y),P=new Float32Array(g*w*y),D=new Float32Array(_*w*y);for(let B=0;B<y;B++){const N=B%3*2/3-1,q=B>2?0:-1,ge=[N,q,0,N+2/3,q,0,N+2/3,q+1,0,N,q,0,N+2/3,q+1,0,N,q+1,0];I.set(ge,R*w*B),P.set(x,g*w*B);const E=[B,B,B,B,B,B];D.set(E,_*w*B)}const Z=new Xr;Z.setAttribute("position",new hi(I,R)),Z.setAttribute("uv",new hi(P,g)),Z.setAttribute("faceIndex",new hi(D,_)),e.push(Z),a>Ds&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Jp(o,e,n){const r=new Wr(o,e,n);return r.texture.mapping=Rl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function qS(o,e,n){const r=new Float32Array(Br),a=new $(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function em(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yf(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function tm(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Yf(){return`

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
	`}function jS(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ef||p===tf,v=p===Os||p===ks;if(m||v){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Qp(o)),S=m?n.fromEquirectangular(d,S):n.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new Qp(o)),S=m?n.fromEquirectangular(d):n.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function KS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Sl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function $S(o,e,n,r){const a={},u=new WeakMap;function f(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const R=x.morphAttributes[w];for(let g=0,_=R.length;g<_;g++)e.remove(R[g])}x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(S,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(S){const x=S.attributes;for(const w in x)e.update(x[w],o.ARRAY_BUFFER);const y=S.morphAttributes;for(const w in y){const R=y[w];for(let g=0,_=R.length;g<_;g++)e.update(R[g],o.ARRAY_BUFFER)}}function m(S){const x=[],y=S.index,w=S.attributes.position;let R=0;if(y!==null){const I=y.array;R=y.version;for(let P=0,D=I.length;P<D;P+=3){const Z=I[P+0],B=I[P+1],N=I[P+2];x.push(Z,B,B,N,N,Z)}}else if(w!==void 0){const I=w.array;R=w.version;for(let P=0,D=I.length/3-1;P<D;P+=3){const Z=P+0,B=P+1,N=P+2;x.push(Z,B,B,N,N,Z)}}else return;const g=new(Fm(x)?Vm:Hm)(x,1);g.version=R;const _=u.get(S);_&&e.remove(_),u.set(S,g)}function v(S){const x=u.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&m(S)}else m(S);return u.get(S)}return{get:d,update:p,getWireframeAttribute:v}}function ZS(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,w){w!==0&&(o.drawElementsInstanced(r,y,u,x*f,w),n.update(y,r,w))}function v(x,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,w);let g=0;for(let _=0;_<w;_++)g+=y[_];n.update(g,r,1)}function S(x,y,w,R){if(w===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<x.length;_++)m(x[_]/f,y[_],R[_]);else{g.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,R,0,w);let _=0;for(let I=0;I<w;I++)_+=y[I];for(let I=0;I<R.length;I++)n.update(_,r,R[I])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function QS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function JS(o,e,n){const r=new WeakMap,a=new At;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let E=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var y=E;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;w===!0&&(D=1),R===!0&&(D=2),g===!0&&(D=3);let Z=d.attributes.position.count*D,B=1;Z>e.maxTextureSize&&(B=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const N=new Float32Array(Z*B*4*S),q=new km(N,Z,B,S);q.type=Ui,q.needsUpdate=!0;const ge=D*4;for(let C=0;C<S;C++){const re=_[C],X=I[C],oe=P[C],ae=Z*B*4*C;for(let te=0;te<re.count;te++){const le=te*ge;w===!0&&(a.fromBufferAttribute(re,te),N[ae+le+0]=a.x,N[ae+le+1]=a.y,N[ae+le+2]=a.z,N[ae+le+3]=0),R===!0&&(a.fromBufferAttribute(X,te),N[ae+le+4]=a.x,N[ae+le+5]=a.y,N[ae+le+6]=a.z,N[ae+le+7]=0),g===!0&&(a.fromBufferAttribute(oe,te),N[ae+le+8]=a.x,N[ae+le+9]=a.y,N[ae+le+10]=a.z,N[ae+le+11]=oe.itemSize===4?a.w:1)}}x={count:S,texture:q,size:new St(Z,B)},r.set(d,x),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let g=0;g<m.length;g++)w+=m[g];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function ey(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,S=e.get(p,v);if(a.get(S)!==m&&(e.update(S),a.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return S}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class qm extends _n{constructor(e,n,r,a,u,f,d,p,m,v=Is){if(v!==Is&&v!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Is&&(r=Gr),r===void 0&&v===zs&&(r=Bs),super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Xn,this.minFilter=p!==void 0?p:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const jm=new _n,nm=new qm(1,1),Km=new km,$m=new kv,Zm=new Xm,im=[],rm=[],sm=new Float32Array(16),om=new Float32Array(9),am=new Float32Array(4);function Ws(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=im[a];if(u===void 0&&(u=new Float32Array(a),im[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Yt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function qt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Pl(o,e){let n=rm[e];n===void 0&&(n=new Int32Array(e),rm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function ty(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function ny(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;o.uniform2fv(this.addr,e),qt(n,e)}}function iy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;o.uniform3fv(this.addr,e),qt(n,e)}}function ry(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;o.uniform4fv(this.addr,e),qt(n,e)}}function sy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;am.set(r),o.uniformMatrix2fv(this.addr,!1,am),qt(n,r)}}function oy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;om.set(r),o.uniformMatrix3fv(this.addr,!1,om),qt(n,r)}}function ay(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Yt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,r))return;sm.set(r),o.uniformMatrix4fv(this.addr,!1,sm),qt(n,r)}}function ly(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function uy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;o.uniform2iv(this.addr,e),qt(n,e)}}function cy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;o.uniform3iv(this.addr,e),qt(n,e)}}function fy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;o.uniform4iv(this.addr,e),qt(n,e)}}function dy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function hy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;o.uniform2uiv(this.addr,e),qt(n,e)}}function py(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;o.uniform3uiv(this.addr,e),qt(n,e)}}function my(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;o.uniform4uiv(this.addr,e),qt(n,e)}}function gy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(nm.compareFunction=Nm,u=nm):u=jm,n.setTexture2D(e||u,a)}function _y(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||$m,a)}function vy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Zm,a)}function xy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Km,a)}function Sy(o){switch(o){case 5126:return ty;case 35664:return ny;case 35665:return iy;case 35666:return ry;case 35674:return sy;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return uy;case 35668:case 35672:return cy;case 35669:case 35673:return fy;case 5125:return dy;case 36294:return hy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return xy}}function yy(o,e){o.uniform1fv(this.addr,e)}function My(o,e){const n=Ws(e,this.size,2);o.uniform2fv(this.addr,n)}function Ey(o,e){const n=Ws(e,this.size,3);o.uniform3fv(this.addr,n)}function Ty(o,e){const n=Ws(e,this.size,4);o.uniform4fv(this.addr,n)}function wy(o,e){const n=Ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Ay(o,e){const n=Ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Ry(o,e){const n=Ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Cy(o,e){o.uniform1iv(this.addr,e)}function Py(o,e){o.uniform2iv(this.addr,e)}function Ly(o,e){o.uniform3iv(this.addr,e)}function by(o,e){o.uniform4iv(this.addr,e)}function Dy(o,e){o.uniform1uiv(this.addr,e)}function Uy(o,e){o.uniform2uiv(this.addr,e)}function Iy(o,e){o.uniform3uiv(this.addr,e)}function Ny(o,e){o.uniform4uiv(this.addr,e)}function Fy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Yt(r,u)||(o.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||jm,u[f])}function Oy(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Yt(r,u)||(o.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||$m,u[f])}function ky(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Yt(r,u)||(o.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Zm,u[f])}function By(o,e,n){const r=this.cache,a=e.length,u=Pl(n,a);Yt(r,u)||(o.uniform1iv(this.addr,u),qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Km,u[f])}function zy(o){switch(o){case 5126:return yy;case 35664:return My;case 35665:return Ey;case 35666:return Ty;case 35674:return wy;case 35675:return Ay;case 35676:return Ry;case 5124:case 35670:return Cy;case 35667:case 35671:return Py;case 35668:case 35672:return Ly;case 35669:case 35673:return by;case 5125:return Dy;case 36294:return Uy;case 36295:return Iy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return By}}class Hy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Sy(n.type)}}class Vy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zy(n.type)}}class Gy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function lm(o,e){o.seq.push(e),o.map[e.id]=e}function Wy(o,e,n){const r=o.name,a=r.length;for(Hc.lastIndex=0;;){const u=Hc.exec(r),f=Hc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){lm(n,m===void 0?new Hy(d,o,e):new Vy(d,o,e));break}else{let S=n.map[d];S===void 0&&(S=new Gy(d),lm(n,S)),n=S}}}class yl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);Wy(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function um(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const Xy=37297;let Yy=0;function qy(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function jy(o){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(o);let r;switch(e===n?r="":e===Tl&&n===El?r="LinearDisplayP3ToLinearSRGB":e===El&&n===Tl&&(r="LinearSRGBToLinearDisplayP3"),o){case gr:case Cl:return[r,"LinearTransferOETF"];case fi:case Vf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function cm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+qy(o.getShaderSource(e),f)}else return a}function Ky(o,e){const n=jy(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $y(o,e){let n;switch(e){case cv:n="Linear";break;case fv:n="Reinhard";break;case dv:n="Cineon";break;case hv:n="ACESFilmic";break;case mv:n="AgX";break;case gv:n="Neutral";break;case pv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dl=new $;function Zy(){Mt.getLuminanceCoefficients(dl);const o=dl.x.toFixed(4),e=dl.y.toFixed(4),n=dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qy(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Jy(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function eM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Io(o){return o!==""}function fm(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(o){return o.replace(tM,iM)}const nM=new Map;function iM(o,e){let n=it[e];if(n===void 0){const r=nM.get(e);if(r!==void 0)n=it[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}const rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(o){return o.replace(rM,sM)}function sM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function pm(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function oM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Mm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===G_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function aM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case Rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function uM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Nf:e="ENVMAP_BLENDING_MULTIPLY";break;case lv:e="ENVMAP_BLENDING_MIX";break;case uv:e="ENVMAP_BLENDING_ADD";break}return e}function cM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function fM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=oM(n),m=aM(n),v=lM(n),S=uM(n),x=cM(n),y=Qy(n),w=Jy(u),R=a.createProgram();let g,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Io).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Io).join(`
`),_.length>0&&(_+=`
`)):(g=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),_=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hr?"#define TONE_MAPPING":"",n.toneMapping!==hr?it.tonemapping_pars_fragment:"",n.toneMapping!==hr?$y("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Ky("linearToOutputTexel",n.outputColorSpace),Zy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),f=Df(f),f=fm(f,n),f=dm(f,n),d=Df(d),d=fm(d,n),d=dm(d,n),f=hm(f),d=hm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,g=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",n.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=I+g+f,D=I+_+d,Z=um(a,a.VERTEX_SHADER,P),B=um(a,a.FRAGMENT_SHADER,D);a.attachShader(R,Z),a.attachShader(R,B),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(C){if(o.debug.checkShaderErrors){const re=a.getProgramInfoLog(R).trim(),X=a.getShaderInfoLog(Z).trim(),oe=a.getShaderInfoLog(B).trim();let ae=!0,te=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,R,Z,B);else{const le=cm(a,Z,"vertex"),O=cm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+re+`
`+le+`
`+O)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(X===""||oe==="")&&(te=!1);te&&(C.diagnostics={runnable:ae,programLog:re,vertexShader:{log:X,prefix:g},fragmentShader:{log:oe,prefix:_}})}a.deleteShader(Z),a.deleteShader(B),q=new yl(a,R),ge=eM(a,R)}let q;this.getUniforms=function(){return q===void 0&&N(this),q};let ge;this.getAttributes=function(){return ge===void 0&&N(this),ge};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(R,Xy)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Yy++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Z,this.fragmentShader=B,this}let dM=0;class hM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new pM(e),n.set(e,r)),r}}class pM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function mM(o,e,n,r,a,u,f){const d=new Bm,p=new hM,m=new Set,v=[],S=a.logarithmicDepthBuffer,x=a.reverseDepthBuffer,y=a.vertexTextures;let w=a.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return m.add(E),E===0?"uv":`uv${E}`}function _(E,C,re,X,oe){const ae=X.fog,te=oe.geometry,le=E.isMeshStandardMaterial?X.environment:null,O=(E.isMeshStandardMaterial?n:e).get(E.envMap||le),ue=O&&O.mapping===Rl?O.image.height:null,ie=R[E.type];E.precision!==null&&(w=a.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const U=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ne=U!==void 0?U.length:0;let we=0;te.morphAttributes.position!==void 0&&(we=1),te.morphAttributes.normal!==void 0&&(we=2),te.morphAttributes.color!==void 0&&(we=3);let Y,ce,xe,Se;if(ie){const jt=di[ie];Y=jt.vertexShader,ce=jt.fragmentShader}else Y=E.vertexShader,ce=E.fragmentShader,p.update(E),xe=p.getVertexShaderID(E),Se=p.getFragmentShaderID(E);const Pe=o.getRenderTarget(),Le=oe.isInstancedMesh===!0,Je=oe.isBatchedMesh===!0,pt=!!E.map,at=!!E.matcap,k=!!O,en=!!E.aoMap,ot=!!E.lightMap,ct=!!E.bumpMap,Ke=!!E.normalMap,Tt=!!E.displacementMap,Ze=!!E.emissiveMap,L=!!E.metalnessMap,T=!!E.roughnessMap,K=E.anisotropy>0,de=E.clearcoat>0,_e=E.dispersion>0,fe=E.iridescence>0,Xe=E.sheen>0,Ae=E.transmission>0,Ne=K&&!!E.anisotropyMap,ft=de&&!!E.clearcoatMap,ye=de&&!!E.clearcoatNormalMap,Fe=de&&!!E.clearcoatRoughnessMap,et=fe&&!!E.iridescenceMap,Qe=fe&&!!E.iridescenceThicknessMap,ke=Xe&&!!E.sheenColorMap,lt=Xe&&!!E.sheenRoughnessMap,nt=!!E.specularMap,yt=!!E.specularColorMap,H=!!E.specularIntensityMap,be=Ae&&!!E.transmissionMap,se=Ae&&!!E.thicknessMap,he=!!E.gradientMap,Re=!!E.alphaMap,Ue=E.alphaTest>0,ut=!!E.alphaHash,Nt=!!E.extensions;let tn=hr;E.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(tn=o.toneMapping);const dt={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:Y,fragmentShader:ce,defines:E.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:Je,batchingColor:Je&&oe._colorsTexture!==null,instancing:Le,instancingColor:Le&&oe.instanceColor!==null,instancingMorph:Le&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Pe===null?o.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:gr,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:at,envMap:k,envMapMode:k&&O.mapping,envMapCubeUVHeight:ue,aoMap:en,lightMap:ot,bumpMap:ct,normalMap:Ke,displacementMap:y&&Tt,emissiveMap:Ze,normalMapObjectSpace:Ke&&E.normalMapType===Sv,normalMapTangentSpace:Ke&&E.normalMapType===Im,metalnessMap:L,roughnessMap:T,anisotropy:K,anisotropyMap:Ne,clearcoat:de,clearcoatMap:ft,clearcoatNormalMap:ye,clearcoatRoughnessMap:Fe,dispersion:_e,iridescence:fe,iridescenceMap:et,iridescenceThicknessMap:Qe,sheen:Xe,sheenColorMap:ke,sheenRoughnessMap:lt,specularMap:nt,specularColorMap:yt,specularIntensityMap:H,transmission:Ae,transmissionMap:be,thicknessMap:se,gradientMap:he,opaque:E.transparent===!1&&E.blending===Us&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:Ue,alphaHash:ut,combine:E.combine,mapUv:pt&&g(E.map.channel),aoMapUv:en&&g(E.aoMap.channel),lightMapUv:ot&&g(E.lightMap.channel),bumpMapUv:ct&&g(E.bumpMap.channel),normalMapUv:Ke&&g(E.normalMap.channel),displacementMapUv:Tt&&g(E.displacementMap.channel),emissiveMapUv:Ze&&g(E.emissiveMap.channel),metalnessMapUv:L&&g(E.metalnessMap.channel),roughnessMapUv:T&&g(E.roughnessMap.channel),anisotropyMapUv:Ne&&g(E.anisotropyMap.channel),clearcoatMapUv:ft&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:lt&&g(E.sheenRoughnessMap.channel),specularMapUv:nt&&g(E.specularMap.channel),specularColorMapUv:yt&&g(E.specularColorMap.channel),specularIntensityMapUv:H&&g(E.specularIntensityMap.channel),transmissionMapUv:be&&g(E.transmissionMap.channel),thicknessMapUv:se&&g(E.thicknessMap.channel),alphaMapUv:Re&&g(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ke||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!te.attributes.uv&&(pt||Re),fog:!!ae,useFog:E.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:x,skinning:oe.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:we,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&re.length>0,shadowMapType:o.shadowMap.type,toneMapping:tn,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Di,flipSided:E.side===Rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&E.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=m.has(1),dt.vertexUv2s=m.has(2),dt.vertexUv3s=m.has(3),m.clear(),dt}function I(E){const C=[];if(E.shaderID?C.push(E.shaderID):(C.push(E.customVertexShaderID),C.push(E.customFragmentShaderID)),E.defines!==void 0)for(const re in E.defines)C.push(re),C.push(E.defines[re]);return E.isRawShaderMaterial===!1&&(P(C,E),D(C,E),C.push(o.outputColorSpace)),C.push(E.customProgramCacheKey),C.join()}function P(E,C){E.push(C.precision),E.push(C.outputColorSpace),E.push(C.envMapMode),E.push(C.envMapCubeUVHeight),E.push(C.mapUv),E.push(C.alphaMapUv),E.push(C.lightMapUv),E.push(C.aoMapUv),E.push(C.bumpMapUv),E.push(C.normalMapUv),E.push(C.displacementMapUv),E.push(C.emissiveMapUv),E.push(C.metalnessMapUv),E.push(C.roughnessMapUv),E.push(C.anisotropyMapUv),E.push(C.clearcoatMapUv),E.push(C.clearcoatNormalMapUv),E.push(C.clearcoatRoughnessMapUv),E.push(C.iridescenceMapUv),E.push(C.iridescenceThicknessMapUv),E.push(C.sheenColorMapUv),E.push(C.sheenRoughnessMapUv),E.push(C.specularMapUv),E.push(C.specularColorMapUv),E.push(C.specularIntensityMapUv),E.push(C.transmissionMapUv),E.push(C.thicknessMapUv),E.push(C.combine),E.push(C.fogExp2),E.push(C.sizeAttenuation),E.push(C.morphTargetsCount),E.push(C.morphAttributeCount),E.push(C.numDirLights),E.push(C.numPointLights),E.push(C.numSpotLights),E.push(C.numSpotLightMaps),E.push(C.numHemiLights),E.push(C.numRectAreaLights),E.push(C.numDirLightShadows),E.push(C.numPointLightShadows),E.push(C.numSpotLightShadows),E.push(C.numSpotLightShadowsWithMaps),E.push(C.numLightProbes),E.push(C.shadowMapType),E.push(C.toneMapping),E.push(C.numClippingPlanes),E.push(C.numClipIntersection),E.push(C.depthPacking)}function D(E,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),E.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.alphaToCoverage&&d.enable(20),E.push(d.mask)}function Z(E){const C=R[E.type];let re;if(C){const X=di[C];re=Zv.clone(X.uniforms)}else re=E.uniforms;return re}function B(E,C){let re;for(let X=0,oe=v.length;X<oe;X++){const ae=v[X];if(ae.cacheKey===C){re=ae,++re.usedTimes;break}}return re===void 0&&(re=new fM(o,C,E,u),v.push(re)),re}function N(E){if(--E.usedTimes===0){const C=v.indexOf(E);v[C]=v[v.length-1],v.pop(),E.destroy()}}function q(E){p.remove(E)}function ge(){p.dispose()}return{getParameters:_,getProgramCacheKey:I,getUniforms:Z,acquireProgram:B,releaseProgram:N,releaseShaderCache:q,programs:v,dispose:ge}}function gM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function _M(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function mm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function gm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(S,x,y,w,R,g){let _=o[e];return _===void 0?(_={id:S.id,object:S,geometry:x,material:y,groupOrder:w,renderOrder:S.renderOrder,z:R,group:g},o[e]=_):(_.id=S.id,_.object=S,_.geometry=x,_.material=y,_.groupOrder=w,_.renderOrder=S.renderOrder,_.z=R,_.group=g),e++,_}function d(S,x,y,w,R,g){const _=f(S,x,y,w,R,g);y.transmission>0?r.push(_):y.transparent===!0?a.push(_):n.push(_)}function p(S,x,y,w,R,g){const _=f(S,x,y,w,R,g);y.transmission>0?r.unshift(_):y.transparent===!0?a.unshift(_):n.unshift(_)}function m(S,x){n.length>1&&n.sort(S||_M),r.length>1&&r.sort(x||mm),a.length>1&&a.sort(x||mm)}function v(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function vM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new gm,o.set(r,[f])):a>=u.length?(f=new gm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function xM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new ht};break;case"SpotLight":n={position:new $,direction:new $,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=n,n}}}function SM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let yM=0;function MM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function EM(o){const e=new xM,n=SM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const a=new $,u=new kt,f=new kt;function d(m){let v=0,S=0,x=0;for(let ge=0;ge<9;ge++)r.probe[ge].set(0,0,0);let y=0,w=0,R=0,g=0,_=0,I=0,P=0,D=0,Z=0,B=0,N=0;m.sort(MM);for(let ge=0,E=m.length;ge<E;ge++){const C=m[ge],re=C.color,X=C.intensity,oe=C.distance,ae=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)v+=re.r*X,S+=re.g*X,x+=re.b*X;else if(C.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(C.sh.coefficients[te],X);N++}else if(C.isDirectionalLight){const te=e.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const le=C.shadow,O=n.get(C);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.directionalShadow[y]=O,r.directionalShadowMap[y]=ae,r.directionalShadowMatrix[y]=C.shadow.matrix,I++}r.directional[y]=te,y++}else if(C.isSpotLight){const te=e.get(C);te.position.setFromMatrixPosition(C.matrixWorld),te.color.copy(re).multiplyScalar(X),te.distance=oe,te.coneCos=Math.cos(C.angle),te.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),te.decay=C.decay,r.spot[R]=te;const le=C.shadow;if(C.map&&(r.spotLightMap[Z]=C.map,Z++,le.updateMatrices(C),C.castShadow&&B++),r.spotLightMatrix[R]=le.matrix,C.castShadow){const O=n.get(C);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,r.spotShadow[R]=O,r.spotShadowMap[R]=ae,D++}R++}else if(C.isRectAreaLight){const te=e.get(C);te.color.copy(re).multiplyScalar(X),te.halfWidth.set(C.width*.5,0,0),te.halfHeight.set(0,C.height*.5,0),r.rectArea[g]=te,g++}else if(C.isPointLight){const te=e.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity),te.distance=C.distance,te.decay=C.decay,C.castShadow){const le=C.shadow,O=n.get(C);O.shadowIntensity=le.intensity,O.shadowBias=le.bias,O.shadowNormalBias=le.normalBias,O.shadowRadius=le.radius,O.shadowMapSize=le.mapSize,O.shadowCameraNear=le.camera.near,O.shadowCameraFar=le.camera.far,r.pointShadow[w]=O,r.pointShadowMap[w]=ae,r.pointShadowMatrix[w]=C.shadow.matrix,P++}r.point[w]=te,w++}else if(C.isHemisphereLight){const te=e.get(C);te.skyColor.copy(C.color).multiplyScalar(X),te.groundColor.copy(C.groundColor).multiplyScalar(X),r.hemi[_]=te,_++}}g>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==y||q.pointLength!==w||q.spotLength!==R||q.rectAreaLength!==g||q.hemiLength!==_||q.numDirectionalShadows!==I||q.numPointShadows!==P||q.numSpotShadows!==D||q.numSpotMaps!==Z||q.numLightProbes!==N)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=g,r.point.length=w,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+Z-B,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=N,q.directionalLength=y,q.pointLength=w,q.spotLength=R,q.rectAreaLength=g,q.hemiLength=_,q.numDirectionalShadows=I,q.numPointShadows=P,q.numSpotShadows=D,q.numSpotMaps=Z,q.numLightProbes=N,r.version=yM++)}function p(m,v){let S=0,x=0,y=0,w=0,R=0;const g=v.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const P=m[_];if(P.isDirectionalLight){const D=r.directional[S];D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(g),S++}else if(P.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(g),y++}else if(P.isRectAreaLight){const D=r.rectArea[w];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),f.identity(),u.copy(P.matrixWorld),u.premultiply(g),f.extractRotation(u),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),w++}else if(P.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(g),x++}else if(P.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(g),R++}}}return{setup:d,setupView:p,state:r}}function _m(o){const e=new EM(o),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function TM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new _m(o),e.set(a,[d])):u>=f.length?(d=new _m(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class wM extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AM extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
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
}`;function PM(o,e,n){let r=new Xf;const a=new St,u=new St,f=new At,d=new wM({depthPacking:xv}),p=new AM,m={},v=n.maxTextureSize,S={[pr]:Rn,[Rn]:pr,[Di]:Di},x=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const w=new Xr;w.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new hn(w,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mm;let _=this.type;this.render=function(B,N,q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||B.length===0)return;const ge=o.getRenderTarget(),E=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),re=o.state;re.setBlending(dr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const X=_!==bi&&this.type===bi,oe=_===bi&&this.type!==bi;for(let ae=0,te=B.length;ae<te;ae++){const le=B[ae],O=le.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const ue=O.getFrameExtents();if(a.multiply(ue),u.copy(O.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/ue.x),a.x=u.x*ue.x,O.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/ue.y),a.y=u.y*ue.y,O.mapSize.y=u.y)),O.map===null||X===!0||oe===!0){const U=this.type!==bi?{minFilter:Xn,magFilter:Xn}:{};O.map!==null&&O.map.dispose(),O.map=new Wr(a.x,a.y,U),O.map.texture.name=le.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const ie=O.getViewportCount();for(let U=0;U<ie;U++){const ne=O.getViewport(U);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),re.viewport(f),O.updateMatrices(le,U),r=O.getFrustum(),D(N,q,O.camera,le,this.type)}O.isPointLightShadow!==!0&&this.type===bi&&I(O,q),O.needsUpdate=!1}_=this.type,g.needsUpdate=!1,o.setRenderTarget(ge,E,C)};function I(B,N){const q=e.update(R);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Wr(a.x,a.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(N,null,q,x,R,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(N,null,q,y,R,null)}function P(B,N,q,ge){let E=null;const C=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(C!==void 0)E=C;else if(E=q.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const re=E.uuid,X=N.uuid;let oe=m[re];oe===void 0&&(oe={},m[re]=oe);let ae=oe[X];ae===void 0&&(ae=E.clone(),oe[X]=ae,N.addEventListener("dispose",Z)),E=ae}if(E.visible=N.visible,E.wireframe=N.wireframe,ge===bi?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:S[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,q.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const re=o.properties.get(E);re.light=q}return E}function D(B,N,q,ge,E){if(B.visible===!1)return;if(B.layers.test(N.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&E===bi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const X=e.update(B),oe=B.material;if(Array.isArray(oe)){const ae=X.groups;for(let te=0,le=ae.length;te<le;te++){const O=ae[te],ue=oe[O.materialIndex];if(ue&&ue.visible){const ie=P(B,ue,ge,E);B.onBeforeShadow(o,B,N,q,X,ie,O),o.renderBufferDirect(q,null,X,ie,B,O),B.onAfterShadow(o,B,N,q,X,ie,O)}}}else if(oe.visible){const ae=P(B,oe,ge,E);B.onBeforeShadow(o,B,N,q,X,ae,null),o.renderBufferDirect(q,null,X,ae,B,null),B.onAfterShadow(o,B,N,q,X,ae,null)}}const re=B.children;for(let X=0,oe=re.length;X<oe;X++)D(re[X],N,q,ge,E)}function Z(B){B.target.removeEventListener("dispose",Z);for(const q in m){const ge=m[q],E=B.target.uuid;E in ge&&(ge[E].dispose(),delete ge[E])}}}const LM={[qc]:jc,[Kc]:Qc,[$c]:Jc,[Fs]:Zc,[jc]:qc,[Qc]:Kc,[Jc]:$c,[Zc]:Fs};function bM(o){function e(){let H=!1;const be=new At;let se=null;const he=new At(0,0,0,0);return{setMask:function(Re){se!==Re&&!H&&(o.colorMask(Re,Re,Re,Re),se=Re)},setLocked:function(Re){H=Re},setClear:function(Re,Ue,ut,Nt,tn){tn===!0&&(Re*=Nt,Ue*=Nt,ut*=Nt),be.set(Re,Ue,ut,Nt),he.equals(be)===!1&&(o.clearColor(Re,Ue,ut,Nt),he.copy(be))},reset:function(){H=!1,se=null,he.set(-1,0,0,0)}}}function n(){let H=!1,be=!1,se=null,he=null,Re=null;return{setReversed:function(Ue){be=Ue},setTest:function(Ue){Ue?xe(o.DEPTH_TEST):Se(o.DEPTH_TEST)},setMask:function(Ue){se!==Ue&&!H&&(o.depthMask(Ue),se=Ue)},setFunc:function(Ue){if(be&&(Ue=LM[Ue]),he!==Ue){switch(Ue){case qc:o.depthFunc(o.NEVER);break;case jc:o.depthFunc(o.ALWAYS);break;case Kc:o.depthFunc(o.LESS);break;case Fs:o.depthFunc(o.LEQUAL);break;case $c:o.depthFunc(o.EQUAL);break;case Zc:o.depthFunc(o.GEQUAL);break;case Qc:o.depthFunc(o.GREATER);break;case Jc:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}he=Ue}},setLocked:function(Ue){H=Ue},setClear:function(Ue){Re!==Ue&&(o.clearDepth(Ue),Re=Ue)},reset:function(){H=!1,se=null,he=null,Re=null}}}function r(){let H=!1,be=null,se=null,he=null,Re=null,Ue=null,ut=null,Nt=null,tn=null;return{setTest:function(dt){H||(dt?xe(o.STENCIL_TEST):Se(o.STENCIL_TEST))},setMask:function(dt){be!==dt&&!H&&(o.stencilMask(dt),be=dt)},setFunc:function(dt,jt,On){(se!==dt||he!==jt||Re!==On)&&(o.stencilFunc(dt,jt,On),se=dt,he=jt,Re=On)},setOp:function(dt,jt,On){(Ue!==dt||ut!==jt||Nt!==On)&&(o.stencilOp(dt,jt,On),Ue=dt,ut=jt,Nt=On)},setLocked:function(dt){H=dt},setClear:function(dt){tn!==dt&&(o.clearStencil(dt),tn=dt)},reset:function(){H=!1,be=null,se=null,he=null,Re=null,Ue=null,ut=null,Nt=null,tn=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},v={},S=new WeakMap,x=[],y=null,w=!1,R=null,g=null,_=null,I=null,P=null,D=null,Z=null,B=new ht(0,0,0),N=0,q=!1,ge=null,E=null,C=null,re=null,X=null;const oe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,te=0;const le=o.getParameter(o.VERSION);le.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(le)[1]),ae=te>=1):le.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ae=te>=2);let O=null,ue={};const ie=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),ne=new At().fromArray(ie),we=new At().fromArray(U);function Y(H,be,se,he){const Re=new Uint8Array(4),Ue=o.createTexture();o.bindTexture(H,Ue),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ut=0;ut<se;ut++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,he,0,o.RGBA,o.UNSIGNED_BYTE,Re):o.texImage2D(be+ut,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Re);return Ue}const ce={};ce[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),ce[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ce[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(o.DEPTH_TEST),u.setFunc(Fs),ot(!1),ct(wp),xe(o.CULL_FACE),k(dr);function xe(H){m[H]!==!0&&(o.enable(H),m[H]=!0)}function Se(H){m[H]!==!1&&(o.disable(H),m[H]=!1)}function Pe(H,be){return v[H]!==be?(o.bindFramebuffer(H,be),v[H]=be,H===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=be),H===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=be),!0):!1}function Le(H,be){let se=x,he=!1;if(H){se=S.get(be),se===void 0&&(se=[],S.set(be,se));const Re=H.textures;if(se.length!==Re.length||se[0]!==o.COLOR_ATTACHMENT0){for(let Ue=0,ut=Re.length;Ue<ut;Ue++)se[Ue]=o.COLOR_ATTACHMENT0+Ue;se.length=Re.length,he=!0}}else se[0]!==o.BACK&&(se[0]=o.BACK,he=!0);he&&o.drawBuffers(se)}function Je(H){return y!==H?(o.useProgram(H),y=H,!0):!1}const pt={[kr]:o.FUNC_ADD,[X_]:o.FUNC_SUBTRACT,[Y_]:o.FUNC_REVERSE_SUBTRACT};pt[q_]=o.MIN,pt[j_]=o.MAX;const at={[K_]:o.ZERO,[$_]:o.ONE,[Z_]:o.SRC_COLOR,[Xc]:o.SRC_ALPHA,[iv]:o.SRC_ALPHA_SATURATE,[tv]:o.DST_COLOR,[J_]:o.DST_ALPHA,[Q_]:o.ONE_MINUS_SRC_COLOR,[Yc]:o.ONE_MINUS_SRC_ALPHA,[nv]:o.ONE_MINUS_DST_COLOR,[ev]:o.ONE_MINUS_DST_ALPHA,[rv]:o.CONSTANT_COLOR,[sv]:o.ONE_MINUS_CONSTANT_COLOR,[ov]:o.CONSTANT_ALPHA,[av]:o.ONE_MINUS_CONSTANT_ALPHA};function k(H,be,se,he,Re,Ue,ut,Nt,tn,dt){if(H===dr){w===!0&&(Se(o.BLEND),w=!1);return}if(w===!1&&(xe(o.BLEND),w=!0),H!==W_){if(H!==R||dt!==q){if((g!==kr||P!==kr)&&(o.blendEquation(o.FUNC_ADD),g=kr,P=kr),dt)switch(H){case Us:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ap:o.blendFunc(o.ONE,o.ONE);break;case Rp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Us:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ap:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Rp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,I=null,D=null,Z=null,B.set(0,0,0),N=0,R=H,q=dt}return}Re=Re||be,Ue=Ue||se,ut=ut||he,(be!==g||Re!==P)&&(o.blendEquationSeparate(pt[be],pt[Re]),g=be,P=Re),(se!==_||he!==I||Ue!==D||ut!==Z)&&(o.blendFuncSeparate(at[se],at[he],at[Ue],at[ut]),_=se,I=he,D=Ue,Z=ut),(Nt.equals(B)===!1||tn!==N)&&(o.blendColor(Nt.r,Nt.g,Nt.b,tn),B.copy(Nt),N=tn),R=H,q=!1}function en(H,be){H.side===Di?Se(o.CULL_FACE):xe(o.CULL_FACE);let se=H.side===Rn;be&&(se=!se),ot(se),H.blending===Us&&H.transparent===!1?k(dr):k(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),a.setMask(H.colorWrite);const he=H.stencilWrite;f.setTest(he),he&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):Se(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(H){ge!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),ge=H)}function ct(H){H!==H_?(xe(o.CULL_FACE),H!==E&&(H===wp?o.cullFace(o.BACK):H===V_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Se(o.CULL_FACE),E=H}function Ke(H){H!==C&&(ae&&o.lineWidth(H),C=H)}function Tt(H,be,se){H?(xe(o.POLYGON_OFFSET_FILL),(re!==be||X!==se)&&(o.polygonOffset(be,se),re=be,X=se)):Se(o.POLYGON_OFFSET_FILL)}function Ze(H){H?xe(o.SCISSOR_TEST):Se(o.SCISSOR_TEST)}function L(H){H===void 0&&(H=o.TEXTURE0+oe-1),O!==H&&(o.activeTexture(H),O=H)}function T(H,be,se){se===void 0&&(O===null?se=o.TEXTURE0+oe-1:se=O);let he=ue[se];he===void 0&&(he={type:void 0,texture:void 0},ue[se]=he),(he.type!==H||he.texture!==be)&&(O!==se&&(o.activeTexture(se),O=se),o.bindTexture(H,be||ce[H]),he.type=H,he.texture=be)}function K(){const H=ue[O];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function de(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(H){ne.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function ke(H){we.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),we.copy(H))}function lt(H,be){let se=p.get(be);se===void 0&&(se=new WeakMap,p.set(be,se));let he=se.get(H);he===void 0&&(he=o.getUniformBlockIndex(be,H.name),se.set(H,he))}function nt(H,be){const he=p.get(be).get(H);d.get(be)!==he&&(o.uniformBlockBinding(be,he,H.__bindingPointIndex),d.set(be,he))}function yt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},O=null,ue={},v={},S=new WeakMap,x=[],y=null,w=!1,R=null,g=null,_=null,I=null,P=null,D=null,Z=null,B=new ht(0,0,0),N=0,q=!1,ge=null,E=null,C=null,re=null,X=null,ne.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:xe,disable:Se,bindFramebuffer:Pe,drawBuffers:Le,useProgram:Je,setBlending:k,setMaterial:en,setFlipSided:ot,setCullFace:ct,setLineWidth:Ke,setPolygonOffset:Tt,setScissorTest:Ze,activeTexture:L,bindTexture:T,unbindTexture:K,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:et,updateUBOMapping:lt,uniformBlockBinding:nt,texStorage2D:ft,texStorage3D:ye,texSubImage2D:fe,texSubImage3D:Xe,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ne,scissor:Qe,viewport:ke,reset:yt}}function vm(o,e,n,r){const a=DM(r);switch(n){case Rm:return o*e;case Pm:return o*e;case Lm:return o*e*2;case bm:return o*e/a.components*a.byteLength;case Bf:return o*e/a.components*a.byteLength;case Dm:return o*e*2/a.components*a.byteLength;case zf:return o*e*2/a.components*a.byteLength;case Cm:return o*e*3/a.components*a.byteLength;case si:return o*e*4/a.components*a.byteLength;case Hf:return o*e*4/a.components*a.byteLength;case ml:case gl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _l:case vl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case of:case lf:return Math.max(o,16)*Math.max(e,8)/4;case sf:case af:return Math.max(o,8)*Math.max(e,8)/2;case uf:case cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case yf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xl:case Af:case Rf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Um:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pf:case Lf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DM(o){switch(o){case Fi:case Tm:return{byteLength:1,components:1};case No:case wm:case Fo:return{byteLength:2,components:1};case Of:case kf:return{byteLength:2,components:4};case Gr:case Ff:case Ui:return{byteLength:4,components:1};case Am:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function UM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new St,v=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(L,T){return y?new OffscreenCanvas(L,T):Al("canvas")}function R(L,T,K){let de=1;const _e=Ze(L);if((_e.width>K||_e.height>K)&&(de=K/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(de*_e.width),Xe=Math.floor(de*_e.height);S===void 0&&(S=w(fe,Xe));const Ae=T?w(fe,Xe):S;return Ae.width=fe,Ae.height=Xe,Ae.getContext("2d").drawImage(L,0,0,fe,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+Xe+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Xn&&L.minFilter!==ii}function _(L){o.generateMipmap(L)}function I(L,T,K,de,_e=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;if(T===o.RED&&(K===o.FLOAT&&(fe=o.R32F),K===o.HALF_FLOAT&&(fe=o.R16F),K===o.UNSIGNED_BYTE&&(fe=o.R8)),T===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(fe=o.R8UI),K===o.UNSIGNED_SHORT&&(fe=o.R16UI),K===o.UNSIGNED_INT&&(fe=o.R32UI),K===o.BYTE&&(fe=o.R8I),K===o.SHORT&&(fe=o.R16I),K===o.INT&&(fe=o.R32I)),T===o.RG&&(K===o.FLOAT&&(fe=o.RG32F),K===o.HALF_FLOAT&&(fe=o.RG16F),K===o.UNSIGNED_BYTE&&(fe=o.RG8)),T===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(fe=o.RG8UI),K===o.UNSIGNED_SHORT&&(fe=o.RG16UI),K===o.UNSIGNED_INT&&(fe=o.RG32UI),K===o.BYTE&&(fe=o.RG8I),K===o.SHORT&&(fe=o.RG16I),K===o.INT&&(fe=o.RG32I)),T===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),K===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),K===o.UNSIGNED_INT&&(fe=o.RGB32UI),K===o.BYTE&&(fe=o.RGB8I),K===o.SHORT&&(fe=o.RGB16I),K===o.INT&&(fe=o.RGB32I)),T===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),K===o.UNSIGNED_INT&&(fe=o.RGBA32UI),K===o.BYTE&&(fe=o.RGBA8I),K===o.SHORT&&(fe=o.RGBA16I),K===o.INT&&(fe=o.RGBA32I)),T===o.RGB&&K===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),T===o.RGBA){const Xe=_e?Ml:Mt.getTransfer(de);K===o.FLOAT&&(fe=o.RGBA32F),K===o.HALF_FLOAT&&(fe=o.RGBA16F),K===o.UNSIGNED_BYTE&&(fe=Xe===Dt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function P(L,T){let K;return L?T===null||T===Gr||T===Bs?K=o.DEPTH24_STENCIL8:T===Ui?K=o.DEPTH32F_STENCIL8:T===No&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Gr||T===Bs?K=o.DEPTH_COMPONENT24:T===Ui?K=o.DEPTH_COMPONENT32F:T===No&&(K=o.DEPTH_COMPONENT16),K}function D(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xn&&L.minFilter!==ii?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function Z(L){const T=L.target;T.removeEventListener("dispose",Z),N(T),T.isVideoTexture&&v.delete(T)}function B(L){const T=L.target;T.removeEventListener("dispose",B),ge(T)}function N(L){const T=r.get(L);if(T.__webglInit===void 0)return;const K=L.source,de=x.get(K);if(de){const _e=de[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&q(L),Object.keys(de).length===0&&x.delete(K)}r.remove(L)}function q(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const K=L.source,de=x.get(K);delete de[T.__cacheKey],f.memory.textures--}function ge(L){const T=r.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let _e=0;_e<T.__webglFramebuffer[de].length;_e++)o.deleteFramebuffer(T.__webglFramebuffer[de][_e]);else o.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)o.deleteFramebuffer(T.__webglFramebuffer[de]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=L.textures;for(let de=0,_e=K.length;de<_e;de++){const fe=r.get(K[de]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),f.memory.textures--),r.remove(K[de])}r.remove(L)}let E=0;function C(){E=0}function re(){const L=E;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),E+=1,L}function X(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function oe(L,T){const K=r.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,L,T);return}}n.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+T)}function ae(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){we(K,L,T);return}n.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+T)}function te(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){we(K,L,T);return}n.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+T)}function le(L,T){const K=r.get(L);if(L.version>0&&K.__version!==L.version){Y(K,L,T);return}n.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+T)}const O={[nf]:o.REPEAT,[zr]:o.CLAMP_TO_EDGE,[rf]:o.MIRRORED_REPEAT},ue={[Xn]:o.NEAREST,[_v]:o.NEAREST_MIPMAP_NEAREST,[Ya]:o.NEAREST_MIPMAP_LINEAR,[ii]:o.LINEAR,[dc]:o.LINEAR_MIPMAP_NEAREST,[Hr]:o.LINEAR_MIPMAP_LINEAR},ie={[yv]:o.NEVER,[Rv]:o.ALWAYS,[Mv]:o.LESS,[Nm]:o.LEQUAL,[Ev]:o.EQUAL,[Av]:o.GEQUAL,[Tv]:o.GREATER,[wv]:o.NOTEQUAL};function U(L,T){if(T.type===Ui&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ii||T.magFilter===dc||T.magFilter===Ya||T.magFilter===Hr||T.minFilter===ii||T.minFilter===dc||T.minFilter===Ya||T.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,O[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,O[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,O[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,ue[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Xn||T.minFilter!==Ya&&T.minFilter!==Hr||T.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ne(L,T){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",Z));const de=T.source;let _e=x.get(de);_e===void 0&&(_e={},x.set(de,_e));const fe=X(T);if(fe!==L.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,K=!0),_e[fe].usedTimes++;const Xe=_e[L.__cacheKey];Xe!==void 0&&(_e[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&q(T)),L.__cacheKey=fe,L.__webglTexture=_e[fe].texture}return K}function we(L,T,K){let de=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=o.TEXTURE_3D);const _e=ne(L,T),fe=T.source;n.bindTexture(de,L.__webglTexture,o.TEXTURE0+K);const Xe=r.get(fe);if(fe.version!==Xe.__version||_e===!0){n.activeTexture(o.TEXTURE0+K);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Ne=T.colorSpace===fr?null:Mt.getPrimaries(T.colorSpace),ft=T.colorSpace===fr||Ae===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let ye=R(T.image,!1,a.maxTextureSize);ye=Tt(T,ye);const Fe=u.convert(T.format,T.colorSpace),et=u.convert(T.type);let Qe=I(T.internalFormat,Fe,et,T.colorSpace,T.isVideoTexture);U(de,T);let ke;const lt=T.mipmaps,nt=T.isVideoTexture!==!0,yt=Xe.__version===void 0||_e===!0,H=fe.dataReady,be=D(T,ye);if(T.isDepthTexture)Qe=P(T.format===zs,T.type),yt&&(nt?n.texStorage2D(o.TEXTURE_2D,1,Qe,ye.width,ye.height):n.texImage2D(o.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Fe,et,null));else if(T.isDataTexture)if(lt.length>0){nt&&yt&&n.texStorage2D(o.TEXTURE_2D,be,Qe,lt[0].width,lt[0].height);for(let se=0,he=lt.length;se<he;se++)ke=lt[se],nt?H&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,et,ke.data):n.texImage2D(o.TEXTURE_2D,se,Qe,ke.width,ke.height,0,Fe,et,ke.data);T.generateMipmaps=!1}else nt?(yt&&n.texStorage2D(o.TEXTURE_2D,be,Qe,ye.width,ye.height),H&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,et,ye.data)):n.texImage2D(o.TEXTURE_2D,0,Qe,ye.width,ye.height,0,Fe,et,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&yt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,be,Qe,lt[0].width,lt[0].height,ye.depth);for(let se=0,he=lt.length;se<he;se++)if(ke=lt[se],T.format!==si)if(Fe!==null)if(nt){if(H)if(T.layerUpdates.size>0){const Re=vm(ke.width,ke.height,T.format,T.type);for(const Ue of T.layerUpdates){const ut=ke.data.subarray(Ue*Re/ke.data.BYTES_PER_ELEMENT,(Ue+1)*Re/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,Ue,ke.width,ke.height,1,Fe,ut,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,ye.depth,Fe,ke.data,0,0)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,se,Qe,ke.width,ke.height,ye.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,ye.depth,Fe,et,ke.data):n.texImage3D(o.TEXTURE_2D_ARRAY,se,Qe,ke.width,ke.height,ye.depth,0,Fe,et,ke.data)}else{nt&&yt&&n.texStorage2D(o.TEXTURE_2D,be,Qe,lt[0].width,lt[0].height);for(let se=0,he=lt.length;se<he;se++)ke=lt[se],T.format!==si?Fe!==null?nt?H&&n.compressedTexSubImage2D(o.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,ke.data):n.compressedTexImage2D(o.TEXTURE_2D,se,Qe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,ke.width,ke.height,Fe,et,ke.data):n.texImage2D(o.TEXTURE_2D,se,Qe,ke.width,ke.height,0,Fe,et,ke.data)}else if(T.isDataArrayTexture)if(nt){if(yt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,be,Qe,ye.width,ye.height,ye.depth),H)if(T.layerUpdates.size>0){const se=vm(ye.width,ye.height,T.format,T.type);for(const he of T.layerUpdates){const Re=ye.data.subarray(he*se/ye.data.BYTES_PER_ELEMENT,(he+1)*se/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Fe,et,Re)}T.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,et,ye.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Qe,ye.width,ye.height,ye.depth,0,Fe,et,ye.data);else if(T.isData3DTexture)nt?(yt&&n.texStorage3D(o.TEXTURE_3D,be,Qe,ye.width,ye.height,ye.depth),H&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,et,ye.data)):n.texImage3D(o.TEXTURE_3D,0,Qe,ye.width,ye.height,ye.depth,0,Fe,et,ye.data);else if(T.isFramebufferTexture){if(yt)if(nt)n.texStorage2D(o.TEXTURE_2D,be,Qe,ye.width,ye.height);else{let se=ye.width,he=ye.height;for(let Re=0;Re<be;Re++)n.texImage2D(o.TEXTURE_2D,Re,Qe,se,he,0,Fe,et,null),se>>=1,he>>=1}}else if(lt.length>0){if(nt&&yt){const se=Ze(lt[0]);n.texStorage2D(o.TEXTURE_2D,be,Qe,se.width,se.height)}for(let se=0,he=lt.length;se<he;se++)ke=lt[se],nt?H&&n.texSubImage2D(o.TEXTURE_2D,se,0,0,Fe,et,ke):n.texImage2D(o.TEXTURE_2D,se,Qe,Fe,et,ke);T.generateMipmaps=!1}else if(nt){if(yt){const se=Ze(ye);n.texStorage2D(o.TEXTURE_2D,be,Qe,se.width,se.height)}H&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Fe,et,ye)}else n.texImage2D(o.TEXTURE_2D,0,Qe,Fe,et,ye);g(T)&&_(de),Xe.__version=fe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Y(L,T,K){if(T.image.length!==6)return;const de=ne(L,T),_e=T.source;n.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+K);const fe=r.get(_e);if(_e.version!==fe.__version||de===!0){n.activeTexture(o.TEXTURE0+K);const Xe=Mt.getPrimaries(Mt.workingColorSpace),Ae=T.colorSpace===fr?null:Mt.getPrimaries(T.colorSpace),Ne=T.colorSpace===fr||Xe===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!ft&&!ye?Fe[he]=R(T.image[he],!0,a.maxCubemapSize):Fe[he]=ye?T.image[he].image:T.image[he],Fe[he]=Tt(T,Fe[he]);const et=Fe[0],Qe=u.convert(T.format,T.colorSpace),ke=u.convert(T.type),lt=I(T.internalFormat,Qe,ke,T.colorSpace),nt=T.isVideoTexture!==!0,yt=fe.__version===void 0||de===!0,H=_e.dataReady;let be=D(T,et);U(o.TEXTURE_CUBE_MAP,T);let se;if(ft){nt&&yt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,be,lt,et.width,et.height);for(let he=0;he<6;he++){se=Fe[he].mipmaps;for(let Re=0;Re<se.length;Re++){const Ue=se[Re];T.format!==si?Qe!==null?nt?H&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,Ue.width,Ue.height,Qe,Ue.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,lt,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?H&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,Ue.width,Ue.height,Qe,ke,Ue.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,lt,Ue.width,Ue.height,0,Qe,ke,Ue.data)}}}else{if(se=T.mipmaps,nt&&yt){se.length>0&&be++;const he=Ze(Fe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,be,lt,he.width,he.height)}for(let he=0;he<6;he++)if(ye){nt?H&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,Qe,ke,Fe[he].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,lt,Fe[he].width,Fe[he].height,0,Qe,ke,Fe[he].data);for(let Re=0;Re<se.length;Re++){const ut=se[Re].image[he].image;nt?H&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,ut.width,ut.height,Qe,ke,ut.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,lt,ut.width,ut.height,0,Qe,ke,ut.data)}}else{nt?H&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Qe,ke,Fe[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,lt,Qe,ke,Fe[he]);for(let Re=0;Re<se.length;Re++){const Ue=se[Re];nt?H&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,Qe,ke,Ue.image[he]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,lt,Qe,ke,Ue.image[he])}}}g(T)&&_(o.TEXTURE_CUBE_MAP),fe.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ce(L,T,K,de,_e,fe){const Xe=u.convert(K.format,K.colorSpace),Ae=u.convert(K.type),Ne=I(K.internalFormat,Xe,Ae,K.colorSpace);if(!r.get(T).__hasExternalTextures){const ye=Math.max(1,T.width>>fe),Fe=Math.max(1,T.height>>fe);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?n.texImage3D(_e,fe,Ne,ye,Fe,T.depth,0,Xe,Ae,null):n.texImage2D(_e,fe,Ne,ye,Fe,0,Xe,Ae,null)}n.bindFramebuffer(o.FRAMEBUFFER,L),ct(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,_e,r.get(K).__webglTexture,0,ot(T)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,_e,r.get(K).__webglTexture,fe),n.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(L,T,K){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const de=T.depthTexture,_e=de&&de.isDepthTexture?de.type:null,fe=P(T.stencilBuffer,_e),Xe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=ot(T);ct(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,fe,T.width,T.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,fe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,fe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xe,o.RENDERBUFFER,L)}else{const de=T.textures;for(let _e=0;_e<de.length;_e++){const fe=de[_e],Xe=u.convert(fe.format,fe.colorSpace),Ae=u.convert(fe.type),Ne=I(fe.internalFormat,Xe,Ae,fe.colorSpace),ft=ot(T);K&&ct(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,Ne,T.width,T.height):ct(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ft,Ne,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Se(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe(T.depthTexture,0);const de=r.get(T.depthTexture).__webglTexture,_e=ot(T);if(T.depthTexture.format===Is)ct(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0);else if(T.depthTexture.format===zs)ct(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0,_e):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Pe(L){const T=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const _e=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),T.__depthDisposeCallback=_e}T.__boundDepthTexture=de}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Se(T.__webglFramebuffer,L)}else if(K){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=o.createRenderbuffer(),xe(T.__webglDepthbuffer[de],L,!1);else{const _e=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,fe)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),xe(T.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,_e)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(L,T,K){const de=r.get(L);T!==void 0&&ce(de.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&Pe(L)}function Je(L){const T=L.texture,K=r.get(L),de=r.get(T);L.addEventListener("dispose",B);const _e=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=T.version,f.memory.textures++),fe){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)K.__webglFramebuffer[Ae][Ne]=o.createFramebuffer()}else K.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Xe)for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const ft=r.get(_e[Ae]);ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture(),f.memory.textures++)}if(L.samples>0&&ct(L)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ne=_e[Ae];K.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const ft=u.convert(Ne.format,Ne.colorSpace),ye=u.convert(Ne.type),Fe=I(Ne.internalFormat,ft,ye,Ne.colorSpace,L.isXRRenderTarget===!0),et=ot(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,et,Fe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),xe(K.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){n.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)ce(K.__webglFramebuffer[Ae][Ne],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ne);else ce(K.__webglFramebuffer[Ae],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);g(T)&&_(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const ft=_e[Ae],ye=r.get(ft);n.bindTexture(o.TEXTURE_2D,ye.__webglTexture),U(o.TEXTURE_2D,ft),ce(K.__webglFramebuffer,L,ft,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),g(ft)&&_(o.TEXTURE_2D)}n.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ae,de.__webglTexture),U(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)ce(K.__webglFramebuffer[Ne],L,T,o.COLOR_ATTACHMENT0,Ae,Ne);else ce(K.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Ae,0);g(T)&&_(Ae),n.unbindTexture()}L.depthBuffer&&Pe(L)}function pt(L){const T=L.textures;for(let K=0,de=T.length;K<de;K++){const _e=T[K];if(g(_e)){const fe=L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Xe=r.get(_e).__webglTexture;n.bindTexture(fe,Xe),_(fe),n.unbindTexture()}}}const at=[],k=[];function en(L){if(L.samples>0){if(ct(L)===!1){const T=L.textures,K=L.width,de=L.height;let _e=o.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xe=r.get(L),Ae=T.length>1;if(Ae)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ne]);const ft=r.get(T[Ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ft,0)}o.blitFramebuffer(0,0,K,de,0,0,K,de,_e,o.NEAREST),p===!0&&(at.length=0,k.length=0,at.push(o.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(at.push(fe),k.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,k)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ne]);const ft=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,ft,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ot(L){return Math.min(a.maxSamples,L.samples)}function ct(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(L){const T=f.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Tt(L,T){const K=L.colorSpace,de=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==gr&&K!==fr&&(Mt.getTransfer(K)===Dt?(de!==si||_e!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Ze(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=C,this.setTexture2D=oe,this.setTexture2DArray=ae,this.setTexture3D=te,this.setTextureCube=le,this.rebindTextures=Le,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ct}function IM(o,e){function n(r,a=fr){let u;const f=Mt.getTransfer(a);if(r===Fi)return o.UNSIGNED_BYTE;if(r===Of)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Am)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Tm)return o.BYTE;if(r===wm)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===Ff)return o.INT;if(r===Gr)return o.UNSIGNED_INT;if(r===Ui)return o.FLOAT;if(r===Fo)return o.HALF_FLOAT;if(r===Rm)return o.ALPHA;if(r===Cm)return o.RGB;if(r===si)return o.RGBA;if(r===Pm)return o.LUMINANCE;if(r===Lm)return o.LUMINANCE_ALPHA;if(r===Is)return o.DEPTH_COMPONENT;if(r===zs)return o.DEPTH_STENCIL;if(r===bm)return o.RED;if(r===Bf)return o.RED_INTEGER;if(r===Dm)return o.RG;if(r===zf)return o.RG_INTEGER;if(r===Hf)return o.RGBA_INTEGER;if(r===ml||r===gl||r===_l||r===vl)if(f===Dt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===ml)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===ml)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_l)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sf||r===of||r===af||r===lf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===sf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===of)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===af)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uf||r===cf||r===ff)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===uf||r===cf)return f===Dt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ff)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===df||r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===df)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_f)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ef)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xl||r===Af||r===Rf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===xl)return f===Dt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Um||r===Cf||r===Pf||r===Lf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===xl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}class NM extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hl extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const g=n.getJointPose(R,r),_=this._getHandJoint(m,R);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const v=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=v.position.distanceTo(S.position),y=.02,w=.005;m.inputState.pinching&&x>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const OM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kM=`
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

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new _n,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new mr({vertexShader:OM,fragmentShader:kM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new Vs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zM extends Gs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,S=null,x=null,y=null,w=null;const R=new BM,g=n.getContextAttributes();let _=null,I=null;const P=[],D=[],Z=new St;let B=null;const N=new Fn;N.layers.enable(1),N.viewport=new At;const q=new Fn;q.layers.enable(2),q.viewport=new At;const ge=[N,q],E=new NM;E.layers.enable(1),E.layers.enable(2);let C=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ce=P[Y];return ce===void 0&&(ce=new Vc,P[Y]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Y){let ce=P[Y];return ce===void 0&&(ce=new Vc,P[Y]=ce),ce.getGripSpace()},this.getHand=function(Y){let ce=P[Y];return ce===void 0&&(ce=new Vc,P[Y]=ce),ce.getHandSpace()};function X(Y){const ce=D.indexOf(Y.inputSource);if(ce===-1)return;const xe=P[ce];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,m||f),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function oe(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",ae);for(let Y=0;Y<P.length;Y++){const ce=D[Y];ce!==null&&(D[Y]=null,P[Y].disconnect(ce))}C=null,re=null,R.reset(),e.setRenderTarget(_),y=null,x=null,S=null,a=null,I=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(Z.width,Z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",ae),g.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(Z),a.renderState.layers===void 0){const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new Wr(y.framebufferWidth,y.framebufferHeight,{format:si,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,xe=null,Se=null;g.depth&&(Se=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?zs:Is,xe=g.stencil?Bs:Gr);const Pe={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:u};S=new XRWebGLBinding(a,n),x=S.createProjectionLayer(Pe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Wr(x.textureWidth,x.textureHeight,{format:si,type:Fi,depthTexture:new qm(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),we.setContext(a),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ae(Y){for(let ce=0;ce<Y.removed.length;ce++){const xe=Y.removed[ce],Se=D.indexOf(xe);Se>=0&&(D[Se]=null,P[Se].disconnect(xe))}for(let ce=0;ce<Y.added.length;ce++){const xe=Y.added[ce];let Se=D.indexOf(xe);if(Se===-1){for(let Le=0;Le<P.length;Le++)if(Le>=D.length){D.push(xe),Se=Le;break}else if(D[Le]===null){D[Le]=xe,Se=Le;break}if(Se===-1)break}const Pe=P[Se];Pe&&Pe.connect(xe)}}const te=new $,le=new $;function O(Y,ce,xe){te.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);const Se=te.distanceTo(le),Pe=ce.projectionMatrix.elements,Le=xe.projectionMatrix.elements,Je=Pe[14]/(Pe[10]-1),pt=Pe[14]/(Pe[10]+1),at=(Pe[9]+1)/Pe[5],k=(Pe[9]-1)/Pe[5],en=(Pe[8]-1)/Pe[0],ot=(Le[8]+1)/Le[0],ct=Je*en,Ke=Je*ot,Tt=Se/(-en+ot),Ze=Tt*-en;if(ce.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ze),Y.translateZ(Tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(ce.projectionMatrix),Y.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const L=Je+Tt,T=pt+Tt,K=ct-Ze,de=Ke+(Se-Ze),_e=at*pt/T*L,fe=k*pt/T*L;Y.projectionMatrix.makePerspective(K,de,_e,fe,L,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ue(Y,ce){ce===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ce.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let ce=Y.near,xe=Y.far;R.texture!==null&&(R.depthNear>0&&(ce=R.depthNear),R.depthFar>0&&(xe=R.depthFar)),E.near=q.near=N.near=ce,E.far=q.far=N.far=xe,(C!==E.near||re!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,re=E.far);const Se=Y.parent,Pe=E.cameras;ue(E,Se);for(let Le=0;Le<Pe.length;Le++)ue(Pe[Le],Se);Pe.length===2?O(E,N,q):E.projectionMatrix.copy(N.projectionMatrix),ie(Y,E,Se)};function ie(Y,ce,xe){xe===null?Y.matrix.copy(ce.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ce.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ce.projectionMatrix),Y.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Y){p=Y,x!==null&&(x.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(E)};let U=null;function ne(Y,ce){if(v=ce.getViewerPose(m||f),w=ce,v!==null){const xe=v.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let Se=!1;xe.length!==E.cameras.length&&(E.cameras.length=0,Se=!0);for(let Le=0;Le<xe.length;Le++){const Je=xe[Le];let pt=null;if(y!==null)pt=y.getViewport(Je);else{const k=S.getViewSubImage(x,Je);pt=k.viewport,Le===0&&(e.setRenderTargetTextures(I,k.colorTexture,x.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(I))}let at=ge[Le];at===void 0&&(at=new Fn,at.layers.enable(Le),at.viewport=new At,ge[Le]=at),at.matrix.fromArray(Je.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Je.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(pt.x,pt.y,pt.width,pt.height),Le===0&&(E.matrix.copy(at.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Se===!0&&E.cameras.push(at)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=S.getDepthInformation(xe[0]);Le&&Le.isValid&&Le.texture&&R.init(e,Le,a.renderState)}}for(let xe=0;xe<P.length;xe++){const Se=D[xe],Pe=P[xe];Se!==null&&Pe!==void 0&&Pe.update(Se,ce,m||f)}U&&U(Y,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),w=null}const we=new Ym;we.setAnimationLoop(ne),this.setAnimationLoop=function(Y){U=Y},this.dispose=function(){}}}const Nr=new pi,HM=new kt;function VM(o,e){function n(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function r(g,_){_.color.getRGB(g.fogColor.value,Gm(o)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function a(g,_,I,P,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(g,_):_.isMeshToonMaterial?(u(g,_),S(g,_)):_.isMeshPhongMaterial?(u(g,_),v(g,_)):_.isMeshStandardMaterial?(u(g,_),x(g,_),_.isMeshPhysicalMaterial&&y(g,_,D)):_.isMeshMatcapMaterial?(u(g,_),w(g,_)):_.isMeshDepthMaterial?u(g,_):_.isMeshDistanceMaterial?(u(g,_),R(g,_)):_.isMeshNormalMaterial?u(g,_):_.isLineBasicMaterial?(f(g,_),_.isLineDashedMaterial&&d(g,_)):_.isPointsMaterial?p(g,_,I,P):_.isSpriteMaterial?m(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,n(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,n(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Rn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,n(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Rn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,n(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,n(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const I=e.get(_),P=I.envMap,D=I.envMapRotation;P&&(g.envMap.value=P,Nr.copy(D),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(Nr)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,g.aoMapTransform))}function f(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,n(_.map,g.mapTransform))}function d(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function p(g,_,I,P){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*I,g.scale.value=P*.5,_.map&&(g.map.value=_.map,n(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function m(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,n(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,n(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function v(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function S(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function x(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function y(g,_,I){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Rn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,g.specularIntensityMapTransform))}function w(g,_){_.matcap&&(g.matcap.value=_.matcap)}function R(g,_){const I=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function GM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,P){const D=P.program;r.uniformBlockBinding(I,D)}function m(I,P){let D=a[I.id];D===void 0&&(w(I),D=v(I),a[I.id]=D,I.addEventListener("dispose",g));const Z=P.program;r.updateUBOMapping(I,Z);const B=e.render.frame;u[I.id]!==B&&(x(I),u[I.id]=B)}function v(I){const P=S();I.__bindingPointIndex=P;const D=o.createBuffer(),Z=I.__size,B=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,Z,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,D),D}function S(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const P=a[I.id],D=I.uniforms,Z=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,N=D.length;B<N;B++){const q=Array.isArray(D[B])?D[B]:[D[B]];for(let ge=0,E=q.length;ge<E;ge++){const C=q[ge];if(y(C,B,ge,Z)===!0){const re=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let oe=0;for(let ae=0;ae<X.length;ae++){const te=X[ae],le=R(te);typeof te=="number"||typeof te=="boolean"?(C.__data[0]=te,o.bufferSubData(o.UNIFORM_BUFFER,re+oe,C.__data)):te.isMatrix3?(C.__data[0]=te.elements[0],C.__data[1]=te.elements[1],C.__data[2]=te.elements[2],C.__data[3]=0,C.__data[4]=te.elements[3],C.__data[5]=te.elements[4],C.__data[6]=te.elements[5],C.__data[7]=0,C.__data[8]=te.elements[6],C.__data[9]=te.elements[7],C.__data[10]=te.elements[8],C.__data[11]=0):(te.toArray(C.__data,oe),oe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,re,C.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,P,D,Z){const B=I.value,N=P+"_"+D;if(Z[N]===void 0)return typeof B=="number"||typeof B=="boolean"?Z[N]=B:Z[N]=B.clone(),!0;{const q=Z[N];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return Z[N]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function w(I){const P=I.uniforms;let D=0;const Z=16;for(let N=0,q=P.length;N<q;N++){const ge=Array.isArray(P[N])?P[N]:[P[N]];for(let E=0,C=ge.length;E<C;E++){const re=ge[E],X=Array.isArray(re.value)?re.value:[re.value];for(let oe=0,ae=X.length;oe<ae;oe++){const te=X[oe],le=R(te),O=D%Z,ue=O%le.boundary,ie=O+ue;D+=ue,ie!==0&&Z-ie<le.storage&&(D+=Z-ie),re.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=D,D+=le.storage}}}const B=D%Z;return B>0&&(D+=Z-B),I.__size=D,I.__cache={},this}function R(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function g(I){const P=I.target;P.removeEventListener("dispose",g);const D=f.indexOf(P.__bindingPointIndex);f.splice(D,1),o.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function _(){for(const I in a)o.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:_}}class WM{constructor(e={}){const{canvas:n=Pv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const y=new Uint32Array(4),w=new Int32Array(4);let R=null,g=null;const _=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=hr,this.toneMappingExposure=1;const P=this;let D=!1,Z=0,B=0,N=null,q=-1,ge=null;const E=new At,C=new At;let re=null;const X=new ht(0);let oe=0,ae=n.width,te=n.height,le=1,O=null,ue=null;const ie=new At(0,0,ae,te),U=new At(0,0,ae,te);let ne=!1;const we=new Xf;let Y=!1,ce=!1;const xe=new kt,Se=new kt,Pe=new $,Le=new At,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function at(){return N===null?le:1}let k=r;function en(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",Ue,!1),k===null){const V="webgl2";if(k=en(V,A),k===null)throw en(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ot,ct,Ke,Tt,Ze,L,T,K,de,_e,fe,Xe,Ae,Ne,ft,ye,Fe,et,Qe,ke,lt,nt,yt,H;function be(){ot=new KS(k),ot.init(),nt=new IM(k,ot),ct=new VS(k,ot,e,nt),Ke=new bM(k),ct.reverseDepthBuffer&&Ke.buffers.depth.setReversed(!0),Tt=new QS(k),Ze=new gM,L=new UM(k,ot,Ke,Ze,ct,nt,Tt),T=new WS(P),K=new jS(P),de=new r0(k),yt=new zS(k,de),_e=new $S(k,de,Tt,yt),fe=new ey(k,_e,de,Tt),Qe=new JS(k,ct,L),ye=new GS(Ze),Xe=new mM(P,T,K,ot,ct,yt,ye),Ae=new VM(P,Ze),Ne=new vM,ft=new TM(ot),et=new BS(P,T,K,Ke,fe,x,p),Fe=new PM(P,fe,ct),H=new GM(k,Tt,ct,Ke),ke=new HS(k,ot,Tt),lt=new ZS(k,ot,Tt),Tt.programs=Xe.programs,P.capabilities=ct,P.extensions=ot,P.properties=Ze,P.renderLists=Ne,P.shadowMap=Fe,P.state=Ke,P.info=Tt}be();const se=new zM(P,k);this.xr=se,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(A){A!==void 0&&(le=A,this.setSize(ae,te,!1))},this.getSize=function(A){return A.set(ae,te)},this.setSize=function(A,V,Q=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,te=V,n.width=Math.floor(A*le),n.height=Math.floor(V*le),Q===!0&&(n.style.width=A+"px",n.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(ae*le,te*le).floor()},this.setDrawingBufferSize=function(A,V,Q){ae=A,te=V,le=Q,n.width=Math.floor(A*Q),n.height=Math.floor(V*Q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,V,Q,J){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,V,Q,J),Ke.viewport(E.copy(ie).multiplyScalar(le).round())},this.getScissor=function(A){return A.copy(U)},this.setScissor=function(A,V,Q,J){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,V,Q,J),Ke.scissor(C.copy(U).multiplyScalar(le).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){Ke.setScissorTest(ne=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){ue=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,V=!0,Q=!0){let J=0;if(A){let G=!1;if(N!==null){const Ee=N.texture.format;G=Ee===Hf||Ee===zf||Ee===Bf}if(G){const Ee=N.texture.type,De=Ee===Fi||Ee===Gr||Ee===No||Ee===Bs||Ee===Of||Ee===kf,Te=et.getClearColor(),Ve=et.getClearAlpha(),je=Te.r,$e=Te.g,Ge=Te.b;De?(y[0]=je,y[1]=$e,y[2]=Ge,y[3]=Ve,k.clearBufferuiv(k.COLOR,0,y)):(w[0]=je,w[1]=$e,w[2]=Ge,w[3]=Ve,k.clearBufferiv(k.COLOR,0,w))}else J|=k.COLOR_BUFFER_BIT}V&&(J|=k.DEPTH_BUFFER_BIT,k.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Q&&(J|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",Ue,!1),Ne.dispose(),ft.dispose(),Ze.dispose(),T.dispose(),K.dispose(),fe.dispose(),yt.dispose(),H.dispose(),Xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Oi),se.removeEventListener("sessionend",Yr),Cn.stop()};function he(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const A=Tt.autoReset,V=Fe.enabled,Q=Fe.autoUpdate,J=Fe.needsUpdate,G=Fe.type;be(),Tt.autoReset=A,Fe.enabled=V,Fe.autoUpdate=Q,Fe.needsUpdate=J,Fe.type=G}function Ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ut(A){const V=A.target;V.removeEventListener("dispose",ut),Nt(V)}function Nt(A){tn(A),Ze.remove(A)}function tn(A){const V=Ze.get(A).programs;V!==void 0&&(V.forEach(function(Q){Xe.releaseProgram(Q)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Q,J,G,Ee){V===null&&(V=Je);const De=G.isMesh&&G.matrixWorld.determinant()<0,Te=gi(A,V,Q,J,G);Ke.setMaterial(J,De);let Ve=Q.index,je=1;if(J.wireframe===!0){if(Ve=_e.getWireframeAttribute(Q),Ve===void 0)return;je=2}const $e=Q.drawRange,Ge=Q.attributes.position;let xt=$e.start*je,wt=($e.start+$e.count)*je;Ee!==null&&(xt=Math.max(xt,Ee.start*je),wt=Math.min(wt,(Ee.start+Ee.count)*je)),Ve!==null?(xt=Math.max(xt,0),wt=Math.min(wt,Ve.count)):Ge!=null&&(xt=Math.max(xt,0),wt=Math.min(wt,Ge.count));const Rt=wt-xt;if(Rt<0||Rt===1/0)return;yt.setup(G,J,Te,Q,Ve);let Ut,gt=ke;if(Ve!==null&&(Ut=de.get(Ve),gt=lt,gt.setIndex(Ut)),G.isMesh)J.wireframe===!0?(Ke.setLineWidth(J.wireframeLinewidth*at()),gt.setMode(k.LINES)):gt.setMode(k.TRIANGLES);else if(G.isLine){let Oe=J.linewidth;Oe===void 0&&(Oe=1),Ke.setLineWidth(Oe*at()),G.isLineSegments?gt.setMode(k.LINES):G.isLineLoop?gt.setMode(k.LINE_LOOP):gt.setMode(k.LINE_STRIP)}else G.isPoints?gt.setMode(k.POINTS):G.isSprite&&gt.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Oe=G._multiDrawStarts,Gt=G._multiDrawCounts,_t=G._multiDrawCount,Pn=Ve?de.get(Ve).bytesPerElement:1,Yn=Ze.get(J).currentProgram.getUniforms();for(let Kt=0;Kt<_t;Kt++)Yn.setValue(k,"_gl_DrawID",Kt),gt.render(Oe[Kt]/Pn,Gt[Kt])}else if(G.isInstancedMesh)gt.renderInstances(xt,Rt,G.count);else if(Q.isInstancedBufferGeometry){const Oe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Gt=Math.min(Q.instanceCount,Oe);gt.renderInstances(xt,Rt,Gt)}else gt.render(xt,Rt)};function dt(A,V,Q){A.transparent===!0&&A.side===Di&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,jr(A,V,Q),A.side=pr,A.needsUpdate=!0,jr(A,V,Q),A.side=Di):jr(A,V,Q)}this.compile=function(A,V,Q=null){Q===null&&(Q=A),g=ft.get(Q),g.init(V),I.push(g),Q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),A!==Q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const J=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Ee=G.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){const Te=Ee[De];dt(Te,Q,G),J.add(Te)}else dt(Ee,Q,G),J.add(Ee)}),I.pop(),g=null,J},this.compileAsync=function(A,V,Q=null){const J=this.compile(A,V,Q);return new Promise(G=>{function Ee(){if(J.forEach(function(De){Ze.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){G(A);return}setTimeout(Ee,10)}ot.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let jt=null;function On(A){jt&&jt(A)}function Oi(){Cn.stop()}function Yr(){Cn.start()}const Cn=new Ym;Cn.setAnimationLoop(On),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(A){jt=A,se.setAnimationLoop(A),A===null?Cn.stop():Cn.start()},se.addEventListener("sessionstart",Oi),se.addEventListener("sessionend",Yr),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,V,N),g=ft.get(A,I.length),g.init(V),I.push(g),Se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),we.setFromProjectionMatrix(Se),ce=this.localClippingEnabled,Y=ye.init(this.clippingPlanes,ce),R=Ne.get(A,_.length),R.init(),_.push(R),se.enabled===!0&&se.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Xs(Ee,V,-1/0,P.sortObjects)}Xs(A,V,0,P.sortObjects),R.finish(),P.sortObjects===!0&&R.sort(O,ue),pt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,pt&&et.addToRenderList(R,A),this.info.render.frame++,Y===!0&&ye.beginShadows();const Q=g.state.shadowsArray;Fe.render(Q,A,V),Y===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=R.opaque,G=R.transmissive;if(g.setupLights(),V.isArrayCamera){const Ee=V.cameras;if(G.length>0)for(let De=0,Te=Ee.length;De<Te;De++){const Ve=Ee[De];_r(J,G,A,Ve)}pt&&et.render(A);for(let De=0,Te=Ee.length;De<Te;De++){const Ve=Ee[De];ki(R,A,Ve,Ve.viewport)}}else G.length>0&&_r(J,G,A,V),pt&&et.render(A),ki(R,A,V);N!==null&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(P,A,V),yt.resetDefaultState(),q=-1,ge=null,I.pop(),I.length>0?(g=I[I.length-1],Y===!0&&ye.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?R=_[_.length-1]:R=null};function Xs(A,V,Q,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||we.intersectsSprite(A)){J&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);const De=fe.update(A),Te=A.material;Te.visible&&R.push(A,De,Te,Q,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||we.intersectsObject(A))){const De=fe.update(A),Te=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Le.copy(De.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){const Ve=De.groups;for(let je=0,$e=Ve.length;je<$e;je++){const Ge=Ve[je],xt=Te[Ge.materialIndex];xt&&xt.visible&&R.push(A,De,xt,Q,Le.z,Ge)}}else Te.visible&&R.push(A,De,Te,Q,Le.z,null)}}const Ee=A.children;for(let De=0,Te=Ee.length;De<Te;De++)Xs(Ee[De],V,Q,J)}function ki(A,V,Q,J){const G=A.opaque,Ee=A.transmissive,De=A.transparent;g.setupLightsView(Q),Y===!0&&ye.setGlobalState(P.clippingPlanes,Q),J&&Ke.viewport(E.copy(J)),G.length>0&&mi(G,V,Q),Ee.length>0&&mi(Ee,V,Q),De.length>0&&mi(De,V,Q),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function _r(A,V,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new Wr(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Fo:Fi,minFilter:Hr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[J.id],De=J.viewport||E;Ee.setSize(De.z,De.w);const Te=P.getRenderTarget();P.setRenderTarget(Ee),P.getClearColor(X),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear(),pt&&et.render(Q);const Ve=P.toneMapping;P.toneMapping=hr;const je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),Y===!0&&ye.setGlobalState(P.clippingPlanes,J),mi(A,Q,J),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),ot.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ge=0,xt=V.length;Ge<xt;Ge++){const wt=V[Ge],Rt=wt.object,Ut=wt.geometry,gt=wt.material,Oe=wt.group;if(gt.side===Di&&Rt.layers.test(J.layers)){const Gt=gt.side;gt.side=Rn,gt.needsUpdate=!0,qr(Rt,Q,J,Ut,gt,Oe),gt.side=Gt,gt.needsUpdate=!0,$e=!0}}$e===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Te),P.setClearColor(X,oe),je!==void 0&&(J.viewport=je),P.toneMapping=Ve}function mi(A,V,Q){const J=V.isScene===!0?V.overrideMaterial:null;for(let G=0,Ee=A.length;G<Ee;G++){const De=A[G],Te=De.object,Ve=De.geometry,je=J===null?De.material:J,$e=De.group;Te.layers.test(Q.layers)&&qr(Te,V,Q,Ve,je,$e)}}function qr(A,V,Q,J,G,Ee){A.onBeforeRender(P,V,Q,J,G,Ee),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(P,V,Q,J,A,Ee),G.transparent===!0&&G.side===Di&&G.forceSinglePass===!1?(G.side=Rn,G.needsUpdate=!0,P.renderBufferDirect(Q,V,J,G,A,Ee),G.side=pr,G.needsUpdate=!0,P.renderBufferDirect(Q,V,J,G,A,Ee),G.side=Di):P.renderBufferDirect(Q,V,J,G,A,Ee),A.onAfterRender(P,V,Q,J,G,Ee)}function jr(A,V,Q){V.isScene!==!0&&(V=Je);const J=Ze.get(A),G=g.state.lights,Ee=g.state.shadowsArray,De=G.state.version,Te=Xe.getParameters(A,G.state,Ee,V,Q),Ve=Xe.getProgramCacheKey(Te);let je=J.programs;J.environment=A.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(A.isMeshStandardMaterial?K:T).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",ut),je=new Map,J.programs=je);let $e=je.get(Ve);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===De)return Vo(A,Te),$e}else Te.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Te,P),$e=Xe.acquireProgram(Te,Ve),je.set(Ve,$e),J.uniforms=Te.uniforms;const Ge=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=ye.uniform),Vo(A,Te),J.needsLights=Wo(A),J.lightsStateVersion=De,J.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=$e,J.uniformsList=null,$e}function Ho(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=yl.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Vo(A,V){const Q=Ze.get(A);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function gi(A,V,Q,J,G){V.isScene!==!0&&(V=Je),L.resetTextureUnits();const Ee=V.fog,De=J.isMeshStandardMaterial?V.environment:null,Te=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gr,Ve=(J.isMeshStandardMaterial?K:T).get(J.envMap||De),je=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$e=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!Q.morphAttributes.position,xt=!!Q.morphAttributes.normal,wt=!!Q.morphAttributes.color;let Rt=hr;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rt=P.toneMapping);const Ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,gt=Ut!==void 0?Ut.length:0,Oe=Ze.get(J),Gt=g.state.lights;if(Y===!0&&(ce===!0||A!==ge)){const sn=A===ge&&J.id===q;ye.setState(J,A,sn)}let _t=!1;J.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Gt.state.version||Oe.outputColorSpace!==Te||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isBatchedMesh&&Oe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Oe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Oe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Oe.instancingMorph===!1&&G.morphTexture!==null||Oe.envMap!==Ve||J.fog===!0&&Oe.fog!==Ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ye.numPlanes||Oe.numIntersection!==ye.numIntersection)||Oe.vertexAlphas!==je||Oe.vertexTangents!==$e||Oe.morphTargets!==Ge||Oe.morphNormals!==xt||Oe.morphColors!==wt||Oe.toneMapping!==Rt||Oe.morphTargetsCount!==gt)&&(_t=!0):(_t=!0,Oe.__version=J.version);let Pn=Oe.currentProgram;_t===!0&&(Pn=jr(J,V,G));let Yn=!1,Kt=!1,_i=!1;const Ct=Pn.getUniforms(),oi=Oe.uniforms;if(Ke.useProgram(Pn.program)&&(Yn=!0,Kt=!0,_i=!0),J.id!==q&&(q=J.id,Kt=!0),Yn||ge!==A){ct.reverseDepthBuffer?(xe.copy(A.projectionMatrix),bv(xe),Dv(xe),Ct.setValue(k,"projectionMatrix",xe)):Ct.setValue(k,"projectionMatrix",A.projectionMatrix),Ct.setValue(k,"viewMatrix",A.matrixWorldInverse);const sn=Ct.map.cameraPosition;sn!==void 0&&sn.setValue(k,Pe.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&Ct.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),ge!==A&&(ge=A,Kt=!0,_i=!0)}if(G.isSkinnedMesh){Ct.setOptional(k,G,"bindMatrix"),Ct.setOptional(k,G,"bindMatrixInverse");const sn=G.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ct.setValue(k,"boneTexture",sn.boneTexture,L))}G.isBatchedMesh&&(Ct.setOptional(k,G,"batchingTexture"),Ct.setValue(k,"batchingTexture",G._matricesTexture,L),Ct.setOptional(k,G,"batchingIdTexture"),Ct.setValue(k,"batchingIdTexture",G._indirectTexture,L),Ct.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&Ct.setValue(k,"batchingColorTexture",G._colorsTexture,L));const Ys=Q.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Qe.update(G,Q,Pn),(Kt||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,Ct.setValue(k,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(oi.envMap.value=Ve,oi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(oi.envMapIntensity.value=V.environmentIntensity),Kt&&(Ct.setValue(k,"toneMappingExposure",P.toneMappingExposure),Oe.needsLights&&Go(oi,_i),Ee&&J.fog===!0&&Ae.refreshFogUniforms(oi,Ee),Ae.refreshMaterialUniforms(oi,J,le,te,g.state.transmissionRenderTarget[A.id]),yl.upload(k,Ho(Oe),oi,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(yl.upload(k,Ho(Oe),oi,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(k,"center",G.center),Ct.setValue(k,"modelViewMatrix",G.modelViewMatrix),Ct.setValue(k,"normalMatrix",G.normalMatrix),Ct.setValue(k,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const sn=J.uniformsGroups;for(let Kr=0,qs=sn.length;Kr<qs;Kr++){const Bi=sn[Kr];H.update(Bi,Pn),H.bind(Bi,Pn)}}return Pn}function Go(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Wo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,V,Q){Ze.get(A.texture).__webglTexture=V,Ze.get(A.depthTexture).__webglTexture=Q;const J=Ze.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const Q=Ze.get(A);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Q=0){N=A,Z=V,B=Q;let J=!0,G=null,Ee=!1,De=!1;if(A){const Ve=Ze.get(A);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(k.FRAMEBUFFER,null),J=!1;else if(Ve.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ve.__hasExternalTextures)L.rebindTextures(A,Ze.get(A.texture).__webglTexture,Ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&Ze.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);const $e=Ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[V])?G=$e[V][Q]:G=$e[V],Ee=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?G=Ze.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?G=$e[Q]:G=$e,E.copy(A.viewport),C.copy(A.scissor),re=A.scissorTest}else E.copy(ie).multiplyScalar(le).floor(),C.copy(U).multiplyScalar(le).floor(),re=ne;if(Ke.bindFramebuffer(k.FRAMEBUFFER,G)&&J&&Ke.drawBuffers(A,G),Ke.viewport(E),Ke.scissor(C),Ke.setScissorTest(re),Ee){const Ve=Ze.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ve.__webglTexture,Q)}else if(De){const Ve=Ze.get(A.texture),je=V||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.__webglTexture,Q||0,je)}q=-1},this.readRenderTargetPixels=function(A,V,Q,J,G,Ee,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){Ke.bindFramebuffer(k.FRAMEBUFFER,Te);try{const Ve=A.texture,je=Ve.format,$e=Ve.type;if(!ct.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&Q>=0&&Q<=A.height-G&&k.readPixels(V,Q,J,G,nt.convert(je),nt.convert($e),Ee)}finally{const Ve=N!==null?Ze.get(N).__webglFramebuffer:null;Ke.bindFramebuffer(k.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,V,Q,J,G,Ee,De){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De]),Te){const Ve=A.texture,je=Ve.format,$e=Ve.type;if(!ct.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-J&&Q>=0&&Q<=A.height-G){Ke.bindFramebuffer(k.FRAMEBUFFER,Te);const Ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),k.readPixels(V,Q,J,G,nt.convert(je),nt.convert($e),0);const xt=N!==null?Ze.get(N).__webglFramebuffer:null;Ke.bindFramebuffer(k.FRAMEBUFFER,xt);const wt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Lv(k,wt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.deleteBuffer(Ge),k.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,Q=0){A.isTexture!==!0&&(Sl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-Q),G=Math.floor(A.image.width*J),Ee=Math.floor(A.image.height*J),De=V!==null?V.x:0,Te=V!==null?V.y:0;L.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,De,Te,G,Ee),Ke.unbindTexture()},this.copyTextureToTexture=function(A,V,Q=null,J=null,G=0){A.isTexture!==!0&&(Sl("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],V=arguments[2],G=arguments[3]||0,Q=null);let Ee,De,Te,Ve,je,$e;Q!==null?(Ee=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Te=Q.min.x,Ve=Q.min.y):(Ee=A.image.width,De=A.image.height,Te=0,Ve=0),J!==null?(je=J.x,$e=J.y):(je=0,$e=0);const Ge=nt.convert(V.format),xt=nt.convert(V.type);L.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const wt=k.getParameter(k.UNPACK_ROW_LENGTH),Rt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ut=k.getParameter(k.UNPACK_SKIP_PIXELS),gt=k.getParameter(k.UNPACK_SKIP_ROWS),Oe=k.getParameter(k.UNPACK_SKIP_IMAGES),Gt=A.isCompressedTexture?A.mipmaps[G]:A.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Gt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Gt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Te),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,G,je,$e,Ee,De,Ge,xt,Gt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,G,je,$e,Gt.width,Gt.height,Ge,Gt.data):k.texSubImage2D(k.TEXTURE_2D,G,je,$e,Ee,De,Ge,xt,Gt),k.pixelStorei(k.UNPACK_ROW_LENGTH,wt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ut),k.pixelStorei(k.UNPACK_SKIP_ROWS,gt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Oe),G===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Q=null,J=null,G=0){A.isTexture!==!0&&(Sl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,J=arguments[1]||null,A=arguments[2],V=arguments[3],G=arguments[4]||0);let Ee,De,Te,Ve,je,$e,Ge,xt,wt;const Rt=A.isCompressedTexture?A.mipmaps[G]:A.image;Q!==null?(Ee=Q.max.x-Q.min.x,De=Q.max.y-Q.min.y,Te=Q.max.z-Q.min.z,Ve=Q.min.x,je=Q.min.y,$e=Q.min.z):(Ee=Rt.width,De=Rt.height,Te=Rt.depth,Ve=0,je=0,$e=0),J!==null?(Ge=J.x,xt=J.y,wt=J.z):(Ge=0,xt=0,wt=0);const Ut=nt.convert(V.format),gt=nt.convert(V.type);let Oe;if(V.isData3DTexture)L.setTexture3D(V,0),Oe=k.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)L.setTexture2DArray(V,0),Oe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const Gt=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=k.getParameter(k.UNPACK_SKIP_PIXELS),Yn=k.getParameter(k.UNPACK_SKIP_ROWS),Kt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Rt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ve),k.pixelStorei(k.UNPACK_SKIP_ROWS,je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$e),A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Oe,G,Ge,xt,wt,Ee,De,Te,Ut,gt,Rt.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Oe,G,Ge,xt,wt,Ee,De,Te,Ut,Rt.data):k.texSubImage3D(Oe,G,Ge,xt,wt,Ee,De,Te,Ut,gt,Rt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Gt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Yn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Kt),G===0&&V.generateMipmaps&&k.generateMipmap(Oe),Ke.unbindTexture()},this.initRenderTarget=function(A){Ze.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){Z=0,B=0,N=null,Ke.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vf?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===Cl?"display-p3":"srgb"}}class qf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=n}clone(){return new qf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class XM extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class YM extends _n{constructor(e,n,r,a,u,f,d,p,m){super(e,n,r,a,u,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pl extends zo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Im,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qm extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class qM extends Qm{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Gc=new kt,xm=new $,Sm=new $;class jM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xf,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;xm.setFromMatrixPosition(e.matrixWorld),n.position.copy(xm),Sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Sm),n.updateMatrixWorld(),Gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ym=new kt,Uo=new $,Wc=new $;class KM extends jM{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Uo),Wc.copy(r.position),Wc.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(Wc),r.updateMatrixWorld(),a.makeTranslation(-Uo.x,-Uo.y,-Uo.z),ym.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ym)}}class $M extends Qm{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new KM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);function ZM(){const o=dn.useRef(null),[e,n]=dn.useState(!1),[r,a]=dn.useState(!1),u=dn.useRef(null),f=dn.useRef(null),d=dn.useRef({x:0,y:1.7,z:-5,yaw:0,pitch:0}),p=dn.useRef(new Set),m=dn.useRef(null),v=dn.useRef(null),S=dn.useRef([]);dn.useRef(new Map);const x=dn.useCallback(R=>{R.background=new ht(8900331),R.fog=new qf(8900331,.015),R.add(new qM(8900331,3825419,.8));const g=new $M(16775388,1.2,100);g.position.set(20,30,-20),R.add(g);const _=new Vs(200,200,1,1),I=new pl({color:4881450}),P=new hn(_,I);P.rotation.x=-Math.PI/2,R.add(P);const D=new Ni(2.8,1.8,.15),Z=new pl({color:1710618}),B=new hn(D,Z);B.position.set(0,1.5,0),R.add(B);const N=new Vs(2.5,1.5),q=new Wf({color:0}),ge=new hn(N,q);ge.position.set(0,1.5,.09),R.add(ge);const E=document.createElement("canvas");E.width=512,E.height=288;const C=E.getContext("2d");C.fillStyle="#000",C.fillRect(0,0,512,288),C.fillStyle="#fff",C.font="bold 24px Inter, sans-serif",C.textAlign="center",C.fillText("NOW PLAYING",256,140);const re=new YM(E);ge.material.map=re,ge.material.needsUpdate=!0;const X=new Ni(.12,.8,.12),oe=new pl({color:1710618}),ae=new hn(X,oe);ae.position.set(-1,.4,0),R.add(ae);const te=new hn(X,oe);te.position.set(1,.4,0),R.add(te);const le=new Ni(2.4,.06,.35),O=new hn(le,oe);O.position.set(0,.85,0),R.add(O);for(let ue=0;ue<30;ue++){const ie=new Ni(.06,.02,.7),U=new pl({color:13948074,transparent:!0,opacity:.85}),ne=new hn(ie,U);ne.position.set(0,3,0),ne.rotation.y=ue/30*Math.PI*2,R.add(ne)}return{screenTex:re,screenCtx:null}},[]),y=dn.useCallback(()=>{if(!o.current)return;const R=new XM;x(R);const g=new Fn(65,window.innerWidth/window.innerHeight,.1,100);g.position.set(0,1.7,3),m.current=g;const _=new WM({antialias:!1,powerPreference:"high-performance"});_.setSize(window.innerWidth,window.innerHeight),_.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),o.current.appendChild(_.domElement),v.current=_,window.addEventListener("resize",()=>{!m.current||!v.current||(m.current.aspect=window.innerWidth/window.innerHeight,m.current.updateProjectionMatrix(),v.current.setSize(window.innerWidth,window.innerHeight))});const I=X=>{p.current.add(X.code),X.code==="Slash"&&!X.shiftKey&&(X.preventDefault(),a(oe=>!oe))},P=X=>p.current.delete(X.code);window.addEventListener("keydown",I),window.addEventListener("keyup",P);const D=_.domElement;D.addEventListener("click",()=>D.requestPointerLock());let Z=Math.PI,B=0,N=0,q=performance.now();const ge=X=>{document.pointerLockElement===D&&(Z-=X.movementX*.002,B-=X.movementY*.002,B=Math.max(-Math.PI/3,Math.min(Math.PI/3,B)),d.current.yaw=Z,d.current.pitch=B)};document.addEventListener("mousemove",ge);let E=0,C;const re=()=>{C=requestAnimationFrame(re);const X=performance.now(),oe=Math.min((X-q)/1e3,.1);q=X;const ae=d.current,te=4,le=p.current.has("ShiftLeft")||p.current.has("ShiftRight"),O=(le?te*1.6:te)*oe;let ue=!1;const ie=Math.sin(Z),U=Math.cos(Z);(p.current.has("KeyW")||p.current.has("ArrowUp"))&&(ae.x-=ie*O,ae.z-=U*O,ue=!0),(p.current.has("KeyS")||p.current.has("ArrowDown"))&&(ae.x+=ie*O,ae.z+=U*O,ue=!0),(p.current.has("KeyA")||p.current.has("ArrowLeft"))&&(ae.x-=U*O,ae.z+=ie*O,ue=!0),(p.current.has("KeyD")||p.current.has("ArrowRight"))&&(ae.x+=U*O,ae.z-=ie*O,ue=!0),ae.x=Math.max(-2.7,Math.min(2.7,ae.x)),ae.z=Math.max(-2.3,Math.min(2.8,ae.z)),N+=oe*(ue?le?12:8:0);const ne=Math.abs(Math.sin(N))*(ue?le?.08:.05:0);if(g.position.set(ae.x,ae.y+ne,ae.z),g.rotation.order="YXZ",g.rotation.y=Z,g.rotation.x=B,E++,E%3===0){const we=screenCtx.createImageData(320,240);for(let Y=0;Y<we.data.length;Y+=4){const ce=Math.random()>.97?255:Math.random()*30+5;we.data[Y]=ce,we.data[Y+1]=ce,we.data[Y+2]=ce,we.data[Y+3]=255}screenCtx.putImageData(we,0,0),screenTex.needsUpdate=!0}_.render(R,g)};return re(),()=>{var X;cancelAnimationFrame(C),window.removeEventListener("keydown",I),window.removeEventListener("keyup",P),document.removeEventListener("mousemove",ge),_.dispose(),(X=o.current)==null||X.removeChild(_.domElement)}},[x]),w=()=>n(!0);return dn.useEffect(()=>e?y():void 0,[e,y]),dn.useEffect(()=>{r&&u.current&&u.current.focus()},[r]),e?ni.jsxs("div",{style:{position:"fixed",inset:0},children:[ni.jsx("div",{ref:o,style:{width:"100%",height:"100%"}}),ni.jsx("div",{style:{position:"fixed",bottom:16,left:16,color:"#fff",fontFamily:"Inter, sans-serif",fontSize:11,opacity:.5,pointerEvents:"none",textShadow:"0 1px 3px rgba(0,0,0,0.8)"},children:"/ — chat   WASD — move   SHIFT — sprint   ESC — release mouse"}),r&&ni.jsxs("div",{style:{position:"fixed",bottom:60,left:20,width:340,background:"rgba(0,0,0,0.75)",borderRadius:8,padding:"10px 14px",fontFamily:"Inter, sans-serif",backdropFilter:"blur(8px)"},children:[ni.jsxs("div",{style:{maxHeight:120,overflowY:"auto",marginBottom:8,fontSize:13,color:"#e0e0e0",lineHeight:1.5},children:[S.current.map((R,g)=>ni.jsx("div",{children:R},g)),ni.jsx("div",{ref:f})]}),ni.jsx("input",{ref:u,placeholder:"Say something...",onKeyDown:R=>{var g;R.key==="Enter"&&((g=u.current)!=null&&g.value.trim())&&(S.current=[...S.current,`You: ${u.current.value.trim()}`],a(!1)),R.key==="Escape"&&a(!1)},style:{width:"100%",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:4,padding:"6px 10px",color:"#fff",fontFamily:"Inter, sans-serif",fontSize:13,outline:"none"}})]})]}):ni.jsx("div",{id:"enter",onClick:w})}z_.createRoot(document.getElementById("root")).render(ni.jsx(dn.StrictMode,{children:ni.jsx(ZM,{})}));
