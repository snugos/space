var q0=s=>{throw TypeError(s)};var zo=(s,e,t)=>e.has(s)?q0("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);function K0(s,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function J0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wu={exports:{}},Ho={},Xu={exports:{}},lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function Z0(){if(Em)return lt;Em=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function x(O,ie,Ue){this.props=O,this.context=ie,this.refs=C,this.updater=Ue||y}x.prototype.isReactComponent={},x.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=x.prototype;function D(O,ie,Ue){this.props=O,this.context=ie,this.refs=C,this.updater=Ue||y}var w=D.prototype=new S;w.constructor=D,E(w,x.prototype),w.isPureReactComponent=!0;var b=Array.isArray,H=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function $(O,ie,Ue){var J,le={},ye=null,xe=null;if(ie!=null)for(J in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(ye=""+ie.key),ie)H.call(ie,J)&&!U.hasOwnProperty(J)&&(le[J]=ie[J]);var we=arguments.length-2;if(we===1)le.children=Ue;else if(1<we){for(var Pe=Array(we),tt=0;tt<we;tt++)Pe[tt]=arguments[tt+2];le.children=Pe}if(O&&O.defaultProps)for(J in we=O.defaultProps,we)le[J]===void 0&&(le[J]=we[J]);return{$$typeof:s,type:O,key:ye,ref:xe,props:le,_owner:N.current}}function he(O,ie){return{$$typeof:s,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function T(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function P(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ue){return ie[Ue]})}var ne=/\/+/g;function Y(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):ie.toString(36)}function oe(O,ie,Ue,J,le){var ye=typeof O;(ye==="undefined"||ye==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(ye){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case s:case e:xe=!0}}if(xe)return xe=O,le=le(xe),O=J===""?"."+Y(xe,0):J,b(le)?(Ue="",O!=null&&(Ue=O.replace(ne,"$&/")+"/"),oe(le,ie,Ue,"",function(tt){return tt})):le!=null&&(T(le)&&(le=he(le,Ue+(!le.key||xe&&xe.key===le.key?"":(""+le.key).replace(ne,"$&/")+"/")+O)),ie.push(le)),1;if(xe=0,J=J===""?".":J+":",b(O))for(var we=0;we<O.length;we++){ye=O[we];var Pe=J+Y(ye,we);xe+=oe(ye,ie,Ue,Pe,le)}else if(Pe=v(O),typeof Pe=="function")for(O=Pe.call(O),we=0;!(ye=O.next()).done;)ye=ye.value,Pe=J+Y(ye,we++),xe+=oe(ye,ie,Ue,Pe,le);else if(ye==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function ce(O,ie,Ue){if(O==null)return O;var J=[],le=0;return oe(O,J,"","",function(ye){return ie.call(Ue,ye,le++)}),J}function Q(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ue)},function(Ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ue)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var ae={current:null},F={transition:null},ue={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:F,ReactCurrentOwner:N};function se(){throw Error("act(...) is not supported in production builds of React.")}return lt.Children={map:ce,forEach:function(O,ie,Ue){ce(O,function(){ie.apply(this,arguments)},Ue)},count:function(O){var ie=0;return ce(O,function(){ie++}),ie},toArray:function(O){return ce(O,function(ie){return ie})||[]},only:function(O){if(!T(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},lt.Component=x,lt.Fragment=t,lt.Profiler=o,lt.PureComponent=D,lt.StrictMode=i,lt.Suspense=d,lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,lt.act=se,lt.cloneElement=function(O,ie,Ue){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=E({},O.props),le=O.key,ye=O.ref,xe=O._owner;if(ie!=null){if(ie.ref!==void 0&&(ye=ie.ref,xe=N.current),ie.key!==void 0&&(le=""+ie.key),O.type&&O.type.defaultProps)var we=O.type.defaultProps;for(Pe in ie)H.call(ie,Pe)&&!U.hasOwnProperty(Pe)&&(J[Pe]=ie[Pe]===void 0&&we!==void 0?we[Pe]:ie[Pe])}var Pe=arguments.length-2;if(Pe===1)J.children=Ue;else if(1<Pe){we=Array(Pe);for(var tt=0;tt<Pe;tt++)we[tt]=arguments[tt+2];J.children=we}return{$$typeof:s,type:O.type,key:le,ref:ye,props:J,_owner:xe}},lt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},lt.createElement=$,lt.createFactory=function(O){var ie=$.bind(null,O);return ie.type=O,ie},lt.createRef=function(){return{current:null}},lt.forwardRef=function(O){return{$$typeof:f,render:O}},lt.isValidElement=T,lt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:Q}},lt.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},lt.startTransition=function(O){var ie=F.transition;F.transition={};try{O()}finally{F.transition=ie}},lt.unstable_act=se,lt.useCallback=function(O,ie){return ae.current.useCallback(O,ie)},lt.useContext=function(O){return ae.current.useContext(O)},lt.useDebugValue=function(){},lt.useDeferredValue=function(O){return ae.current.useDeferredValue(O)},lt.useEffect=function(O,ie){return ae.current.useEffect(O,ie)},lt.useId=function(){return ae.current.useId()},lt.useImperativeHandle=function(O,ie,Ue){return ae.current.useImperativeHandle(O,ie,Ue)},lt.useInsertionEffect=function(O,ie){return ae.current.useInsertionEffect(O,ie)},lt.useLayoutEffect=function(O,ie){return ae.current.useLayoutEffect(O,ie)},lt.useMemo=function(O,ie){return ae.current.useMemo(O,ie)},lt.useReducer=function(O,ie,Ue){return ae.current.useReducer(O,ie,Ue)},lt.useRef=function(O){return ae.current.useRef(O)},lt.useState=function(O){return ae.current.useState(O)},lt.useSyncExternalStore=function(O,ie,Ue){return ae.current.useSyncExternalStore(O,ie,Ue)},lt.useTransition=function(){return ae.current.useTransition()},lt.version="18.3.1",lt}var Tm;function Ud(){return Tm||(Tm=1,Xu.exports=Z0()),Xu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function Q0(){if(Cm)return Ho;Cm=1;var s=Ud(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var m,_={},v=null,y=null;p!==void 0&&(v=""+p),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)i.call(d,m)&&!l.hasOwnProperty(m)&&(_[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)_[m]===void 0&&(_[m]=d[m]);return{$$typeof:e,type:f,key:v,ref:y,props:_,_owner:o.current}}return Ho.Fragment=t,Ho.jsx=c,Ho.jsxs=c,Ho}var Rm;function ey(){return Rm||(Rm=1,Wu.exports=Q0()),Wu.exports}var Gs=ey(),an=Ud(),hl={},$u={exports:{}},Pn={},ju={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function ty(){return Am||(Am=1,(function(s){function e(F,ue){var se=F.length;F.push(ue);e:for(;0<se;){var O=se-1>>>1,ie=F[O];if(0<o(ie,ue))F[O]=ue,F[se]=ie,se=O;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var ue=F[0],se=F.pop();if(se!==ue){F[0]=se;e:for(var O=0,ie=F.length,Ue=ie>>>1;O<Ue;){var J=2*(O+1)-1,le=F[J],ye=J+1,xe=F[ye];if(0>o(le,se))ye<ie&&0>o(xe,le)?(F[O]=xe,F[ye]=se,O=ye):(F[O]=le,F[J]=se,O=J);else if(ye<ie&&0>o(xe,se))F[O]=xe,F[ye]=se,O=ye;else break e}}return ue}function o(F,ue){var se=F.sortIndex-ue.sortIndex;return se!==0?se:F.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],p=[],m=1,_=null,v=3,y=!1,E=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var ue=t(p);ue!==null;){if(ue.callback===null)i(p);else if(ue.startTime<=F)i(p),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(p)}}function b(F){if(C=!1,w(F),!E)if(t(d)!==null)E=!0,Q(H);else{var ue=t(p);ue!==null&&ae(b,ue.startTime-F)}}function H(F,ue){E=!1,C&&(C=!1,S($),$=-1),y=!0;var se=v;try{for(w(ue),_=t(d);_!==null&&(!(_.expirationTime>ue)||F&&!P());){var O=_.callback;if(typeof O=="function"){_.callback=null,v=_.priorityLevel;var ie=O(_.expirationTime<=ue);ue=s.unstable_now(),typeof ie=="function"?_.callback=ie:_===t(d)&&i(d),w(ue)}else i(d);_=t(d)}if(_!==null)var Ue=!0;else{var J=t(p);J!==null&&ae(b,J.startTime-ue),Ue=!1}return Ue}finally{_=null,v=se,y=!1}}var N=!1,U=null,$=-1,he=5,T=-1;function P(){return!(s.unstable_now()-T<he)}function ne(){if(U!==null){var F=s.unstable_now();T=F;var ue=!0;try{ue=U(!0,F)}finally{ue?Y():(N=!1,U=null)}}else N=!1}var Y;if(typeof D=="function")Y=function(){D(ne)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=ne,Y=function(){ce.postMessage(null)}}else Y=function(){x(ne,0)};function Q(F){U=F,N||(N=!0,Y())}function ae(F,ue){$=x(function(){F(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,Q(H))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(F){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var se=v;v=ue;try{return F()}finally{v=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,ue){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var se=v;v=F;try{return ue()}finally{v=se}},s.unstable_scheduleCallback=function(F,ue,se){var O=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,F){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,F={id:m++,callback:ue,priorityLevel:F,startTime:se,expirationTime:ie,sortIndex:-1},se>O?(F.sortIndex=se,e(p,F),t(d)===null&&F===t(p)&&(C?(S($),$=-1):C=!0,ae(b,se-O))):(F.sortIndex=ie,e(d,F),E||y||(E=!0,Q(H))),F},s.unstable_shouldYield=P,s.unstable_wrapCallback=function(F){var ue=v;return function(){var se=v;v=ue;try{return F.apply(this,arguments)}finally{v=se}}}})(Yu)),Yu}var wm;function ny(){return wm||(wm=1,ju.exports=ty()),ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function iy(){if(Pm)return Pn;Pm=1;var s=Ud(),e=ny();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function v(n){return d.call(_,n)?!0:d.call(m,n)?!1:p.test(n)?_[n]=!0:(m[n]=!0,!1)}function y(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,a,u){if(r===null||typeof r>"u"||y(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function C(n,r,a,u,h,g,M){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new C(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,D);x[r]=new C(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,D);x[r]=new C(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,D);x[r]=new C(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,r,a,u){var h=x.hasOwnProperty(r)?x[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,a,h,u)&&(a=null),u||h===null?v(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(r=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(r):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),P=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),F=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function ie(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Ue=!1;function J(n,r){if(!n||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var u=te}Reflect.construct(n,[],r)}else{try{r.call()}catch(te){u=te}n.call(r.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var h=te.stack.split(`
`),g=u.stack.split(`
`),M=h.length-1,I=g.length-1;1<=M&&0<=I&&h[M]!==g[I];)I--;for(;1<=M&&0<=I;M--,I--)if(h[M]!==g[I]){if(M!==1||I!==1)do if(M--,I--,0>I||h[M]!==g[I]){var k=`
`+h[M].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=M&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function le(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case N:return"Portal";case he:return"Profiler";case $:return"StrictMode";case Y:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case ne:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return r=n.displayName||null,r!==null?r:ye(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return ye(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(r);case 8:return r===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(n){var r=Pe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(M){u=""+M,g.call(this,M)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function gt(n){n._valueTracker||(n._valueTracker=tt(n))}function ut(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=Pe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function B(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function nn(n,r){var a=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ct(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=we(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&w(n,"checked",r,!1)}function Je(n,r){ht(n,r);var a=we(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Qe(n,r.type,a):r.hasOwnProperty("defaultValue")&&Qe(n,r.type,we(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ct(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Qe(n,r,a){(r!=="number"||B(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var L=Array.isArray;function R(n,r,a,u){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function K(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function de(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(L(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:we(a)}}function _e(n,r){var a=we(r.value),u=we(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function fe(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function $e(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?$e(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,pt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,h)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Se(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Oe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nt=["Webkit","ms","Moz","O"];Object.keys(Oe).forEach(function(n){nt.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Oe[r]=Oe[n]})});function et(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Oe.hasOwnProperty(n)&&Oe[n]?(""+r).trim():r+"px"}function Fe(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=et(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var ft=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rt(n,r){if(r){if(ft[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Mt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V=null;function be(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var re=null,pe=null,Re=null;function De(n){if(n=Co(n)){if(typeof re!="function")throw Error(t(280));var r=n.stateNode;r&&(r=wa(r),re(n.stateNode,n.type,r))}}function dt(n){pe?Re?Re.push(n):Re=[n]:pe=n}function Ot(){if(pe){var n=pe,r=Re;if(Re=pe=null,De(n),r)for(n=0;n<r.length;n++)De(r[n])}}function rn(n,r){return n(r)}function mt(){}var Kt=!1;function Gn(n,r,a){if(Kt)return n(r,a);Kt=!0;try{return rn(n,r,a)}finally{Kt=!1,(pe!==null||Re!==null)&&(mt(),Ot())}}function Wi(n,r){var a=n.stateNode;if(a===null)return null;var u=wa(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var is=!1;if(f)try{var Un={};Object.defineProperty(Un,"passive",{get:function(){is=!0}}),window.addEventListener("test",Un,Un),window.removeEventListener("test",Un,Un)}catch{is=!1}function so(n,r,a,u,h,g,M,I,k){var te=Array.prototype.slice.call(arguments,3);try{r.apply(a,te)}catch(ge){this.onError(ge)}}var Xi=!1,Rr=null,Ei=!1,rs=null,ss={onError:function(n){Xi=!0,Rr=n}};function ca(n,r,a,u,h,g,M,I,k){Xi=!1,Rr=null,so.apply(ss,arguments)}function ua(n,r,a,u,h,g,M,I,k){if(ca.apply(this,arguments),Xi){if(Xi){var te=Rr;Xi=!1,Rr=null}else throw Error(t(198));Ei||(Ei=!0,rs=te)}}function Ti(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function fa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function da(n){if(Ti(n)!==n)throw Error(t(188))}function A(n){var r=n.alternate;if(!r){if(r=Ti(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return da(h),n;if(g===u)return da(h),r;g=g.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=g;else{for(var M=!1,I=h.child;I;){if(I===a){M=!0,a=h,u=g;break}if(I===u){M=!0,u=h,a=g;break}I=I.sibling}if(!M){for(I=g.child;I;){if(I===a){M=!0,a=g,u=h;break}if(I===u){M=!0,u=g,a=h;break}I=I.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function G(n){return n=A(n),n!==null?Z(n):null}function Z(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Z(n);if(r!==null)return r;n=n.sibling}return null}var ee=e.unstable_scheduleCallback,W=e.unstable_cancelCallback,Ee=e.unstable_shouldYield,Le=e.unstable_requestPaint,Te=e.unstable_now,Ge=e.unstable_getCurrentPriorityLevel,Ke=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,St=e.unstable_LowPriority,Rt=e.unstable_IdlePriority,At=null,It=null;function vt(n){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:Nn,Xt=Math.log,yt=Math.LN2;function Nn(n){return n>>>=0,n===0?32:31-(Xt(n)/yt|0)|0}var Qn=64,Jt=4194304;function Ci(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,M=a&268435455;if(M!==0){var I=M&~h;I!==0?u=Ci(I):(g&=M,g!==0&&(u=Ci(g)))}else M=a&~h,M!==0?u=Ci(M):g!==0&&(u=Ci(g));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,g=r&-r,h>=g||h===16&&(g&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-ke(r),h=1<<a,u|=n[a],r&=~h;return u}function hi(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oo(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var M=31-ke(g),I=1<<M,k=h[M];k===-1?((I&a)===0||(I&u)!==0)&&(h[M]=hi(I,r)):k<=r&&(n.expiredLanes|=I),g&=~I}}function fn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function os(){var n=Qn;return Qn<<=1,(Qn&4194240)===0&&(Qn=64),n}function ao(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function $i(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ke(r),n[r]=a}function gv(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ke(a),g=1<<h;r[h]=0,u[h]=-1,n[h]=-1,a&=~g}}function hc(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-ke(a),h=1<<u;h&r|n[u]&r&&(n[u]|=r),a&=~h}}var Tt=0;function th(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var nh,pc,ih,rh,sh,mc=!1,ha=[],ji=null,Yi=null,qi=null,lo=new Map,co=new Map,Ki=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(n,r){switch(n){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":lo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(r.pointerId)}}function uo(n,r,a,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},r!==null&&(r=Co(r),r!==null&&pc(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function vv(n,r,a,u,h){switch(r){case"focusin":return ji=uo(ji,n,r,a,u,h),!0;case"dragenter":return Yi=uo(Yi,n,r,a,u,h),!0;case"mouseover":return qi=uo(qi,n,r,a,u,h),!0;case"pointerover":var g=h.pointerId;return lo.set(g,uo(lo.get(g)||null,n,r,a,u,h)),!0;case"gotpointercapture":return g=h.pointerId,co.set(g,uo(co.get(g)||null,n,r,a,u,h)),!0}return!1}function ah(n){var r=Ar(n.target);if(r!==null){var a=Ti(r);if(a!==null){if(r=a.tag,r===13){if(r=fa(a),r!==null){n.blockedOn=r,sh(n.priority,function(){ih(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=_c(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);V=u,a.target.dispatchEvent(u),V=null}else return r=Co(a),r!==null&&pc(r),n.blockedOn=a,!1;r.shift()}return!0}function lh(n,r,a){pa(n)&&a.delete(r)}function yv(){mc=!1,ji!==null&&pa(ji)&&(ji=null),Yi!==null&&pa(Yi)&&(Yi=null),qi!==null&&pa(qi)&&(qi=null),lo.forEach(lh),co.forEach(lh)}function fo(n,r){n.blockedOn===r&&(n.blockedOn=null,mc||(mc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yv)))}function ho(n){function r(h){return fo(h,n)}if(0<ha.length){fo(ha[0],n);for(var a=1;a<ha.length;a++){var u=ha[a];u.blockedOn===n&&(u.blockedOn=null)}}for(ji!==null&&fo(ji,n),Yi!==null&&fo(Yi,n),qi!==null&&fo(qi,n),lo.forEach(r),co.forEach(r),a=0;a<Ki.length;a++)u=Ki[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)ah(a),a.blockedOn===null&&Ki.shift()}var as=b.ReactCurrentBatchConfig,ma=!0;function xv(n,r,a,u){var h=Tt,g=as.transition;as.transition=null;try{Tt=1,gc(n,r,a,u)}finally{Tt=h,as.transition=g}}function Sv(n,r,a,u){var h=Tt,g=as.transition;as.transition=null;try{Tt=4,gc(n,r,a,u)}finally{Tt=h,as.transition=g}}function gc(n,r,a,u){if(ma){var h=_c(n,r,a,u);if(h===null)Uc(n,r,u,ga,a),oh(n,u);else if(vv(h,n,r,a,u))u.stopPropagation();else if(oh(n,u),r&4&&-1<_v.indexOf(n)){for(;h!==null;){var g=Co(h);if(g!==null&&nh(g),g=_c(n,r,a,u),g===null&&Uc(n,r,u,ga,a),g===h)break;h=g}h!==null&&u.stopPropagation()}else Uc(n,r,u,null,a)}}var ga=null;function _c(n,r,a,u){if(ga=null,n=be(u),n=Ar(n),n!==null)if(r=Ti(n),r===null)n=null;else if(a=r.tag,a===13){if(n=fa(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ga=n,null}function ch(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ge()){case Ke:return 1;case Ze:return 4;case We:case St:return 16;case Rt:return 536870912;default:return 16}default:return 16}}var Ji=null,vc=null,_a=null;function uh(){if(_a)return _a;var n,r=vc,a=r.length,u,h="value"in Ji?Ji.value:Ji.textContent,g=h.length;for(n=0;n<a&&r[n]===h[n];n++);var M=a-n;for(u=1;u<=M&&r[a-u]===h[g-u];u++);return _a=h.slice(n,1<u?1-u:void 0)}function va(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function fh(){return!1}function On(n){function r(a,u,h,g,M){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ya:fh,this.isPropagationStopped=fh,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),r}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=On(ls),po=se({},ls,{view:0,detail:0}),Mv=On(po),xc,Sc,mo,xa=se({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(xc=n.screenX-mo.screenX,Sc=n.screenY-mo.screenY):Sc=xc=0,mo=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),dh=On(xa),Ev=se({},xa,{dataTransfer:0}),Tv=On(Ev),Cv=se({},po,{relatedTarget:0}),Mc=On(Cv),Rv=se({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=On(Rv),wv=se({},ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pv=On(wv),bv=se({},ls,{data:0}),hh=On(bv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Iv[n])?!!r[n]:!1}function Ec(){return Uv}var Nv=se({},po,{key:function(n){if(n.key){var r=Lv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=va(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(n){return n.type==="keypress"?va(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?va(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ov=On(Nv),kv=se({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=On(kv),Fv=se({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Bv=On(Fv),zv=se({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=On(zv),Vv=se({},xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=On(Vv),Wv=[9,13,27,32],Tc=f&&"CompositionEvent"in window,go=null;f&&"documentMode"in document&&(go=document.documentMode);var Xv=f&&"TextEvent"in window&&!go,mh=f&&(!Tc||go&&8<go&&11>=go),gh=" ",_h=!1;function vh(n,r){switch(n){case"keyup":return Wv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function $v(n,r){switch(n){case"compositionend":return yh(r);case"keypress":return r.which!==32?null:(_h=!0,gh);case"textInput":return n=r.data,n===gh&&_h?null:n;default:return null}}function jv(n,r){if(cs)return n==="compositionend"||!Tc&&vh(n,r)?(n=uh(),_a=vc=Ji=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mh&&r.locale!=="ko"?null:r.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Yv[n.type]:r==="textarea"}function Sh(n,r,a,u){dt(u),r=Ca(r,"onChange"),0<r.length&&(a=new yc("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var _o=null,vo=null;function qv(n){Bh(n,0)}function Sa(n){var r=ps(n);if(ut(r))return n}function Kv(n,r){if(n==="change")return r}var Mh=!1;if(f){var Cc;if(f){var Rc="oninput"in document;if(!Rc){var Eh=document.createElement("div");Eh.setAttribute("oninput","return;"),Rc=typeof Eh.oninput=="function"}Cc=Rc}else Cc=!1;Mh=Cc&&(!document.documentMode||9<document.documentMode)}function Th(){_o&&(_o.detachEvent("onpropertychange",Ch),vo=_o=null)}function Ch(n){if(n.propertyName==="value"&&Sa(vo)){var r=[];Sh(r,vo,n,be(n)),Gn(qv,r)}}function Jv(n,r,a){n==="focusin"?(Th(),_o=r,vo=a,_o.attachEvent("onpropertychange",Ch)):n==="focusout"&&Th()}function Zv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sa(vo)}function Qv(n,r){if(n==="click")return Sa(r)}function e0(n,r){if(n==="input"||n==="change")return Sa(r)}function t0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ei=typeof Object.is=="function"?Object.is:t0;function yo(n,r){if(ei(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!d.call(r,h)||!ei(n[h],r[h]))return!1}return!0}function Rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ah(n,r){var a=Rh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rh(a)}}function wh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?wh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ph(){for(var n=window,r=B();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=B(n.document)}return r}function Ac(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function n0(n){var r=Ph(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&wh(a.ownerDocument.documentElement,a)){if(u!==null&&Ac(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Ah(a,g);var M=Ah(a,u);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(r),n.extend(M.node,M.offset)):(r.setEnd(M.node,M.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var i0=f&&"documentMode"in document&&11>=document.documentMode,us=null,wc=null,xo=null,Pc=!1;function bh(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pc||us==null||us!==B(u)||(u=us,"selectionStart"in u&&Ac(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&yo(xo,u)||(xo=u,u=Ca(wc,"onSelect"),0<u.length&&(r=new yc("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=us)))}function Ma(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var fs={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},bc={},Lh={};f&&(Lh=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Ea(n){if(bc[n])return bc[n];if(!fs[n])return n;var r=fs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Lh)return bc[n]=r[a];return n}var Dh=Ea("animationend"),Ih=Ea("animationiteration"),Uh=Ea("animationstart"),Nh=Ea("transitionend"),Oh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(n,r){Oh.set(n,r),l(r,[n])}for(var Lc=0;Lc<kh.length;Lc++){var Dc=kh[Lc],r0=Dc.toLowerCase(),s0=Dc[0].toUpperCase()+Dc.slice(1);Zi(r0,"on"+s0)}Zi(Dh,"onAnimationEnd"),Zi(Ih,"onAnimationIteration"),Zi(Uh,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(Nh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o0=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Fh(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,ua(u,r,void 0,n),n.currentTarget=null}function Bh(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var M=u.length-1;0<=M;M--){var I=u[M],k=I.instance,te=I.currentTarget;if(I=I.listener,k!==g&&h.isPropagationStopped())break e;Fh(h,I,te),g=k}else for(M=0;M<u.length;M++){if(I=u[M],k=I.instance,te=I.currentTarget,I=I.listener,k!==g&&h.isPropagationStopped())break e;Fh(h,I,te),g=k}}}if(Ei)throw n=rs,Ei=!1,rs=null,n}function bt(n,r){var a=r[zc];a===void 0&&(a=r[zc]=new Set);var u=n+"__bubble";a.has(u)||(zh(r,n,2,!1),a.add(u))}function Ic(n,r,a){var u=0;r&&(u|=4),zh(a,n,u,r)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Mo(n){if(!n[Ta]){n[Ta]=!0,i.forEach(function(a){a!=="selectionchange"&&(o0.has(a)||Ic(a,!1,n),Ic(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ta]||(r[Ta]=!0,Ic("selectionchange",!1,r))}}function zh(n,r,a,u){switch(ch(r)){case 1:var h=xv;break;case 4:h=Sv;break;default:h=gc}a=h.bind(null,r,a,n),h=void 0,!is||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function Uc(n,r,a,u,h){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var I=u.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(M===4)for(M=u.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===h||k.nodeType===8&&k.parentNode===h))return;M=M.return}for(;I!==null;){if(M=Ar(I),M===null)return;if(k=M.tag,k===5||k===6){u=g=M;continue e}I=I.parentNode}}u=u.return}Gn(function(){var te=g,ge=be(a),ve=[];e:{var me=Oh.get(n);if(me!==void 0){var Ie=yc,ze=n;switch(n){case"keypress":if(va(a)===0)break e;case"keydown":case"keyup":Ie=Ov;break;case"focusin":ze="focus",Ie=Mc;break;case"focusout":ze="blur",Ie=Mc;break;case"beforeblur":case"afterblur":Ie=Mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Bv;break;case Dh:case Ih:case Uh:Ie=Av;break;case Nh:Ie=Hv;break;case"scroll":Ie=Mv;break;case"wheel":Ie=Gv;break;case"copy":case"cut":case"paste":Ie=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=ph}var Ve=(r&4)!==0,Ht=!Ve&&n==="scroll",j=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var z=te,q;z!==null;){q=z;var Me=q.stateNode;if(q.tag===5&&Me!==null&&(q=Me,j!==null&&(Me=Wi(z,j),Me!=null&&Ve.push(Eo(z,Me,q)))),Ht)break;z=z.return}0<Ve.length&&(me=new Ie(me,ze,null,a,ge),ve.push({event:me,listeners:Ve}))}}if((r&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",me&&a!==V&&(ze=a.relatedTarget||a.fromElement)&&(Ar(ze)||ze[Ri]))break e;if((Ie||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ze=a.relatedTarget||a.toElement,Ie=te,ze=ze?Ar(ze):null,ze!==null&&(Ht=Ti(ze),ze!==Ht||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=te),Ie!==ze)){if(Ve=dh,Me="onMouseLeave",j="onMouseEnter",z="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=ph,Me="onPointerLeave",j="onPointerEnter",z="pointer"),Ht=Ie==null?me:ps(Ie),q=ze==null?me:ps(ze),me=new Ve(Me,z+"leave",Ie,a,ge),me.target=Ht,me.relatedTarget=q,Me=null,Ar(ge)===te&&(Ve=new Ve(j,z+"enter",ze,a,ge),Ve.target=q,Ve.relatedTarget=Ht,Me=Ve),Ht=Me,Ie&&ze)t:{for(Ve=Ie,j=ze,z=0,q=Ve;q;q=ds(q))z++;for(q=0,Me=j;Me;Me=ds(Me))q++;for(;0<z-q;)Ve=ds(Ve),z--;for(;0<q-z;)j=ds(j),q--;for(;z--;){if(Ve===j||j!==null&&Ve===j.alternate)break t;Ve=ds(Ve),j=ds(j)}Ve=null}else Ve=null;Ie!==null&&Hh(ve,me,Ie,Ve,!1),ze!==null&&Ht!==null&&Hh(ve,Ht,ze,Ve,!0)}}e:{if(me=te?ps(te):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var Xe=Kv;else if(xh(me))if(Mh)Xe=e0;else{Xe=Zv;var Ye=Jv}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=Qv);if(Xe&&(Xe=Xe(n,te))){Sh(ve,Xe,a,ge);break e}Ye&&Ye(n,me,te),n==="focusout"&&(Ye=me._wrapperState)&&Ye.controlled&&me.type==="number"&&Qe(me,"number",me.value)}switch(Ye=te?ps(te):window,n){case"focusin":(xh(Ye)||Ye.contentEditable==="true")&&(us=Ye,wc=te,xo=null);break;case"focusout":xo=wc=us=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,bh(ve,a,ge);break;case"selectionchange":if(i0)break;case"keydown":case"keyup":bh(ve,a,ge)}var qe;if(Tc)e:{switch(n){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else cs?vh(n,a)&&(it="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(mh&&a.locale!=="ko"&&(cs||it!=="onCompositionStart"?it==="onCompositionEnd"&&cs&&(qe=uh()):(Ji=ge,vc="value"in Ji?Ji.value:Ji.textContent,cs=!0)),Ye=Ca(te,it),0<Ye.length&&(it=new hh(it,n,null,a,ge),ve.push({event:it,listeners:Ye}),qe?it.data=qe:(qe=yh(a),qe!==null&&(it.data=qe)))),(qe=Xv?$v(n,a):jv(n,a))&&(te=Ca(te,"onBeforeInput"),0<te.length&&(ge=new hh("onBeforeInput","beforeinput",null,a,ge),ve.push({event:ge,listeners:te}),ge.data=qe))}Bh(ve,r)})}function Eo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ca(n,r){for(var a=r+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Wi(n,a),g!=null&&u.unshift(Eo(n,g,h)),g=Wi(n,r),g!=null&&u.push(Eo(n,g,h))),n=n.return}return u}function ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hh(n,r,a,u,h){for(var g=r._reactName,M=[];a!==null&&a!==u;){var I=a,k=I.alternate,te=I.stateNode;if(k!==null&&k===u)break;I.tag===5&&te!==null&&(I=te,h?(k=Wi(a,g),k!=null&&M.unshift(Eo(a,k,I))):h||(k=Wi(a,g),k!=null&&M.push(Eo(a,k,I)))),a=a.return}M.length!==0&&n.push({event:r,listeners:M})}var a0=/\r\n?/g,l0=/\u0000|\uFFFD/g;function Vh(n){return(typeof n=="string"?n:""+n).replace(a0,`
`).replace(l0,"")}function Ra(n,r,a){if(r=Vh(r),Vh(n)!==r&&a)throw Error(t(425))}function Aa(){}var Nc=null,Oc=null;function kc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,c0=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(n){return Gh.resolve(null).then(n).catch(f0)}:Fc;function f0(n){setTimeout(function(){throw n})}function Bc(n,r){var a=r,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),ho(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);ho(r)}function Qi(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Wh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),pi="__reactFiber$"+hs,To="__reactProps$"+hs,Ri="__reactContainer$"+hs,zc="__reactEvents$"+hs,d0="__reactListeners$"+hs,h0="__reactHandles$"+hs;function Ar(n){var r=n[pi];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ri]||a[pi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Wh(n);n!==null;){if(a=n[pi])return a;n=Wh(n)}return r}n=a,a=n.parentNode}return null}function Co(n){return n=n[pi]||n[Ri],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wa(n){return n[To]||null}var Hc=[],ms=-1;function er(n){return{current:n}}function Lt(n){0>ms||(n.current=Hc[ms],Hc[ms]=null,ms--)}function Pt(n,r){ms++,Hc[ms]=n.current,n.current=r}var tr={},dn=er(tr),Tn=er(!1),wr=tr;function gs(n,r){var a=n.type.contextTypes;if(!a)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=r[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Cn(n){return n=n.childContextTypes,n!=null}function Pa(){Lt(Tn),Lt(dn)}function Xh(n,r,a){if(dn.current!==tr)throw Error(t(168));Pt(dn,r),Pt(Tn,a)}function $h(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(t(108,xe(n)||"Unknown",h));return se({},a,u)}function ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,wr=dn.current,Pt(dn,n),Pt(Tn,Tn.current),!0}function jh(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=$h(n,r,wr),u.__reactInternalMemoizedMergedChildContext=n,Lt(Tn),Lt(dn),Pt(dn,n)):Lt(Tn),Pt(Tn,a)}var Ai=null,La=!1,Vc=!1;function Yh(n){Ai===null?Ai=[n]:Ai.push(n)}function p0(n){La=!0,Yh(n)}function nr(){if(!Vc&&Ai!==null){Vc=!0;var n=0,r=Tt;try{var a=Ai;for(Tt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ai=null,La=!1}catch(h){throw Ai!==null&&(Ai=Ai.slice(n+1)),ee(Ke,nr),h}finally{Tt=r,Vc=!1}}return null}var _s=[],vs=0,Da=null,Ia=0,Wn=[],Xn=0,Pr=null,wi=1,Pi="";function br(n,r){_s[vs++]=Ia,_s[vs++]=Da,Da=n,Ia=r}function qh(n,r,a){Wn[Xn++]=wi,Wn[Xn++]=Pi,Wn[Xn++]=Pr,Pr=n;var u=wi;n=Pi;var h=32-ke(u)-1;u&=~(1<<h),a+=1;var g=32-ke(r)+h;if(30<g){var M=h-h%5;g=(u&(1<<M)-1).toString(32),u>>=M,h-=M,wi=1<<32-ke(r)+h|a<<h|u,Pi=g+n}else wi=1<<g|a<<h|u,Pi=n}function Gc(n){n.return!==null&&(br(n,1),qh(n,1,0))}function Wc(n){for(;n===Da;)Da=_s[--vs],_s[vs]=null,Ia=_s[--vs],_s[vs]=null;for(;n===Pr;)Pr=Wn[--Xn],Wn[Xn]=null,Pi=Wn[--Xn],Wn[Xn]=null,wi=Wn[--Xn],Wn[Xn]=null}var kn=null,Fn=null,Ut=!1,ti=null;function Kh(n,r){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Jh(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,kn=n,Fn=Qi(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,kn=n,Fn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Pr!==null?{id:wi,overflow:Pi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,kn=n,Fn=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(Ut){var r=Fn;if(r){var a=r;if(!Jh(n,r)){if(Xc(n))throw Error(t(418));r=Qi(a.nextSibling);var u=kn;r&&Jh(n,r)?Kh(u,a):(n.flags=n.flags&-4097|2,Ut=!1,kn=n)}}else{if(Xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ut=!1,kn=n}}}function Zh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Ua(n){if(n!==kn)return!1;if(!Ut)return Zh(n),Ut=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!kc(n.type,n.memoizedProps)),r&&(r=Fn)){if(Xc(n))throw Qh(),Error(t(418));for(;r;)Kh(n,r),r=Qi(r.nextSibling)}if(Zh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){Fn=Qi(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}Fn=null}}else Fn=kn?Qi(n.stateNode.nextSibling):null;return!0}function Qh(){for(var n=Fn;n;)n=Qi(n.nextSibling)}function ys(){Fn=kn=null,Ut=!1}function jc(n){ti===null?ti=[n]:ti.push(n)}var m0=b.ReactCurrentBatchConfig;function Ro(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(M){var I=h.refs;M===null?delete I[g]:I[g]=M},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Na(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function ep(n){var r=n._init;return r(n._payload)}function tp(n){function r(j,z){if(n){var q=j.deletions;q===null?(j.deletions=[z],j.flags|=16):q.push(z)}}function a(j,z){if(!n)return null;for(;z!==null;)r(j,z),z=z.sibling;return null}function u(j,z){for(j=new Map;z!==null;)z.key!==null?j.set(z.key,z):j.set(z.index,z),z=z.sibling;return j}function h(j,z){return j=ur(j,z),j.index=0,j.sibling=null,j}function g(j,z,q){return j.index=q,n?(q=j.alternate,q!==null?(q=q.index,q<z?(j.flags|=2,z):q):(j.flags|=2,z)):(j.flags|=1048576,z)}function M(j){return n&&j.alternate===null&&(j.flags|=2),j}function I(j,z,q,Me){return z===null||z.tag!==6?(z=Fu(q,j.mode,Me),z.return=j,z):(z=h(z,q),z.return=j,z)}function k(j,z,q,Me){var Xe=q.type;return Xe===U?ge(j,z,q.props.children,Me,q.key):z!==null&&(z.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===Q&&ep(Xe)===z.type)?(Me=h(z,q.props),Me.ref=Ro(j,z,q),Me.return=j,Me):(Me=sl(q.type,q.key,q.props,null,j.mode,Me),Me.ref=Ro(j,z,q),Me.return=j,Me)}function te(j,z,q,Me){return z===null||z.tag!==4||z.stateNode.containerInfo!==q.containerInfo||z.stateNode.implementation!==q.implementation?(z=Bu(q,j.mode,Me),z.return=j,z):(z=h(z,q.children||[]),z.return=j,z)}function ge(j,z,q,Me,Xe){return z===null||z.tag!==7?(z=Fr(q,j.mode,Me,Xe),z.return=j,z):(z=h(z,q),z.return=j,z)}function ve(j,z,q){if(typeof z=="string"&&z!==""||typeof z=="number")return z=Fu(""+z,j.mode,q),z.return=j,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return q=sl(z.type,z.key,z.props,null,j.mode,q),q.ref=Ro(j,null,z),q.return=j,q;case N:return z=Bu(z,j.mode,q),z.return=j,z;case Q:var Me=z._init;return ve(j,Me(z._payload),q)}if(L(z)||ue(z))return z=Fr(z,j.mode,q,null),z.return=j,z;Na(j,z)}return null}function me(j,z,q,Me){var Xe=z!==null?z.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return Xe!==null?null:I(j,z,""+q,Me);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case H:return q.key===Xe?k(j,z,q,Me):null;case N:return q.key===Xe?te(j,z,q,Me):null;case Q:return Xe=q._init,me(j,z,Xe(q._payload),Me)}if(L(q)||ue(q))return Xe!==null?null:ge(j,z,q,Me,null);Na(j,q)}return null}function Ie(j,z,q,Me,Xe){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return j=j.get(q)||null,I(z,j,""+Me,Xe);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case H:return j=j.get(Me.key===null?q:Me.key)||null,k(z,j,Me,Xe);case N:return j=j.get(Me.key===null?q:Me.key)||null,te(z,j,Me,Xe);case Q:var Ye=Me._init;return Ie(j,z,q,Ye(Me._payload),Xe)}if(L(Me)||ue(Me))return j=j.get(q)||null,ge(z,j,Me,Xe,null);Na(z,Me)}return null}function ze(j,z,q,Me){for(var Xe=null,Ye=null,qe=z,it=z=0,en=null;qe!==null&&it<q.length;it++){qe.index>it?(en=qe,qe=null):en=qe.sibling;var xt=me(j,qe,q[it],Me);if(xt===null){qe===null&&(qe=en);break}n&&qe&&xt.alternate===null&&r(j,qe),z=g(xt,z,it),Ye===null?Xe=xt:Ye.sibling=xt,Ye=xt,qe=en}if(it===q.length)return a(j,qe),Ut&&br(j,it),Xe;if(qe===null){for(;it<q.length;it++)qe=ve(j,q[it],Me),qe!==null&&(z=g(qe,z,it),Ye===null?Xe=qe:Ye.sibling=qe,Ye=qe);return Ut&&br(j,it),Xe}for(qe=u(j,qe);it<q.length;it++)en=Ie(qe,j,it,q[it],Me),en!==null&&(n&&en.alternate!==null&&qe.delete(en.key===null?it:en.key),z=g(en,z,it),Ye===null?Xe=en:Ye.sibling=en,Ye=en);return n&&qe.forEach(function(fr){return r(j,fr)}),Ut&&br(j,it),Xe}function Ve(j,z,q,Me){var Xe=ue(q);if(typeof Xe!="function")throw Error(t(150));if(q=Xe.call(q),q==null)throw Error(t(151));for(var Ye=Xe=null,qe=z,it=z=0,en=null,xt=q.next();qe!==null&&!xt.done;it++,xt=q.next()){qe.index>it?(en=qe,qe=null):en=qe.sibling;var fr=me(j,qe,xt.value,Me);if(fr===null){qe===null&&(qe=en);break}n&&qe&&fr.alternate===null&&r(j,qe),z=g(fr,z,it),Ye===null?Xe=fr:Ye.sibling=fr,Ye=fr,qe=en}if(xt.done)return a(j,qe),Ut&&br(j,it),Xe;if(qe===null){for(;!xt.done;it++,xt=q.next())xt=ve(j,xt.value,Me),xt!==null&&(z=g(xt,z,it),Ye===null?Xe=xt:Ye.sibling=xt,Ye=xt);return Ut&&br(j,it),Xe}for(qe=u(j,qe);!xt.done;it++,xt=q.next())xt=Ie(qe,j,it,xt.value,Me),xt!==null&&(n&&xt.alternate!==null&&qe.delete(xt.key===null?it:xt.key),z=g(xt,z,it),Ye===null?Xe=xt:Ye.sibling=xt,Ye=xt);return n&&qe.forEach(function(Y0){return r(j,Y0)}),Ut&&br(j,it),Xe}function Ht(j,z,q,Me){if(typeof q=="object"&&q!==null&&q.type===U&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case H:e:{for(var Xe=q.key,Ye=z;Ye!==null;){if(Ye.key===Xe){if(Xe=q.type,Xe===U){if(Ye.tag===7){a(j,Ye.sibling),z=h(Ye,q.props.children),z.return=j,j=z;break e}}else if(Ye.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===Q&&ep(Xe)===Ye.type){a(j,Ye.sibling),z=h(Ye,q.props),z.ref=Ro(j,Ye,q),z.return=j,j=z;break e}a(j,Ye);break}else r(j,Ye);Ye=Ye.sibling}q.type===U?(z=Fr(q.props.children,j.mode,Me,q.key),z.return=j,j=z):(Me=sl(q.type,q.key,q.props,null,j.mode,Me),Me.ref=Ro(j,z,q),Me.return=j,j=Me)}return M(j);case N:e:{for(Ye=q.key;z!==null;){if(z.key===Ye)if(z.tag===4&&z.stateNode.containerInfo===q.containerInfo&&z.stateNode.implementation===q.implementation){a(j,z.sibling),z=h(z,q.children||[]),z.return=j,j=z;break e}else{a(j,z);break}else r(j,z);z=z.sibling}z=Bu(q,j.mode,Me),z.return=j,j=z}return M(j);case Q:return Ye=q._init,Ht(j,z,Ye(q._payload),Me)}if(L(q))return ze(j,z,q,Me);if(ue(q))return Ve(j,z,q,Me);Na(j,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,z!==null&&z.tag===6?(a(j,z.sibling),z=h(z,q),z.return=j,j=z):(a(j,z),z=Fu(q,j.mode,Me),z.return=j,j=z),M(j)):a(j,z)}return Ht}var xs=tp(!0),np=tp(!1),Oa=er(null),ka=null,Ss=null,Yc=null;function qc(){Yc=Ss=ka=null}function Kc(n){var r=Oa.current;Lt(Oa),n._currentValue=r}function Jc(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function Ms(n,r){ka=n,Yc=Ss=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Rn=!0),n.firstContext=null)}function $n(n){var r=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:r,next:null},Ss===null){if(ka===null)throw Error(t(308));Ss=n,ka.dependencies={lanes:0,firstContext:n}}else Ss=Ss.next=n;return r}var Lr=null;function Zc(n){Lr===null?Lr=[n]:Lr.push(n)}function ip(n,r,a,u){var h=r.interleaved;return h===null?(a.next=a,Zc(r)):(a.next=h.next,h.next=a),r.interleaved=a,bi(n,u)}function bi(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ir=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function rr(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(_t&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,bi(n,a)}return h=u.interleaved,h===null?(r.next=r,Zc(u)):(r.next=h.next,h.next=r),u.interleaved=r,bi(n,a)}function Fa(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,hc(n,a)}}function sp(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=M:g=g.next=M,a=a.next}while(a!==null);g===null?h=g=r:g=g.next=r}else h=g=r;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Ba(n,r,a,u){var h=n.updateQueue;ir=!1;var g=h.firstBaseUpdate,M=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var k=I,te=k.next;k.next=null,M===null?g=te:M.next=te,M=k;var ge=n.alternate;ge!==null&&(ge=ge.updateQueue,I=ge.lastBaseUpdate,I!==M&&(I===null?ge.firstBaseUpdate=te:I.next=te,ge.lastBaseUpdate=k))}if(g!==null){var ve=h.baseState;M=0,ge=te=k=null,I=g;do{var me=I.lane,Ie=I.eventTime;if((u&me)===me){ge!==null&&(ge=ge.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,Ve=I;switch(me=r,Ie=a,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ve=ze.call(Ie,ve,me);break e}ve=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(Ie,ve,me):ze,me==null)break e;ve=se({},ve,me);break e;case 2:ir=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,me=h.effects,me===null?h.effects=[I]:me.push(I))}else Ie={eventTime:Ie,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ge===null?(te=ge=Ie,k=ve):ge=ge.next=Ie,M|=me;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;me=I,I=me.next,me.next=null,h.lastBaseUpdate=me,h.shared.pending=null}}while(!0);if(ge===null&&(k=ve),h.baseState=k,h.firstBaseUpdate=te,h.lastBaseUpdate=ge,r=h.shared.interleaved,r!==null){h=r;do M|=h.lane,h=h.next;while(h!==r)}else g===null&&(h.shared.lanes=0);Ur|=M,n.lanes=M,n.memoizedState=ve}}function op(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Ao={},mi=er(Ao),wo=er(Ao),Po=er(Ao);function Dr(n){if(n===Ao)throw Error(t(174));return n}function eu(n,r){switch(Pt(Po,r),Pt(wo,n),Pt(mi,Ao),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ce(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ce(r,n)}Lt(mi),Pt(mi,r)}function Es(){Lt(mi),Lt(wo),Lt(Po)}function ap(n){Dr(Po.current);var r=Dr(mi.current),a=Ce(r,n.type);r!==a&&(Pt(wo,n),Pt(mi,a))}function tu(n){wo.current===n&&(Lt(mi),Lt(wo))}var kt=er(0);function za(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nu=[];function iu(){for(var n=0;n<nu.length;n++)nu[n]._workInProgressVersionPrimary=null;nu.length=0}var Ha=b.ReactCurrentDispatcher,ru=b.ReactCurrentBatchConfig,Ir=0,Ft=null,$t=null,Zt=null,Va=!1,bo=!1,Lo=0,g0=0;function hn(){throw Error(t(321))}function su(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!ei(n[a],r[a]))return!1;return!0}function ou(n,r,a,u,h,g){if(Ir=g,Ft=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ha.current=n===null||n.memoizedState===null?x0:S0,n=a(u,h),bo){g=0;do{if(bo=!1,Lo=0,25<=g)throw Error(t(301));g+=1,Zt=$t=null,r.updateQueue=null,Ha.current=M0,n=a(u,h)}while(bo)}if(Ha.current=Xa,r=$t!==null&&$t.next!==null,Ir=0,Zt=$t=Ft=null,Va=!1,r)throw Error(t(300));return n}function au(){var n=Lo!==0;return Lo=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ft.memoizedState=Zt=n:Zt=Zt.next=n,Zt}function jn(){if($t===null){var n=Ft.alternate;n=n!==null?n.memoizedState:null}else n=$t.next;var r=Zt===null?Ft.memoizedState:Zt.next;if(r!==null)Zt=r,$t=n;else{if(n===null)throw Error(t(310));$t=n,n={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Zt===null?Ft.memoizedState=Zt=n:Zt=Zt.next=n}return Zt}function Do(n,r){return typeof r=="function"?r(n):r}function lu(n){var r=jn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=$t,h=u.baseQueue,g=a.pending;if(g!==null){if(h!==null){var M=h.next;h.next=g.next,g.next=M}u.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,u=u.baseState;var I=M=null,k=null,te=g;do{var ge=te.lane;if((Ir&ge)===ge)k!==null&&(k=k.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var ve={lane:ge,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};k===null?(I=k=ve,M=u):k=k.next=ve,Ft.lanes|=ge,Ur|=ge}te=te.next}while(te!==null&&te!==g);k===null?M=u:k.next=I,ei(u,r.memoizedState)||(Rn=!0),r.memoizedState=u,r.baseState=M,r.baseQueue=k,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Ft.lanes|=g,Ur|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function cu(n){var r=jn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,g=r.memoizedState;if(h!==null){a.pending=null;var M=h=h.next;do g=n(g,M.action),M=M.next;while(M!==h);ei(g,r.memoizedState)||(Rn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),a.lastRenderedState=g}return[g,u]}function lp(){}function cp(n,r){var a=Ft,u=jn(),h=r(),g=!ei(u.memoizedState,h);if(g&&(u.memoizedState=h,Rn=!0),u=u.queue,uu(dp.bind(null,a,u,n),[n]),u.getSnapshot!==r||g||Zt!==null&&Zt.memoizedState.tag&1){if(a.flags|=2048,Io(9,fp.bind(null,a,u,h,r),void 0,null),Qt===null)throw Error(t(349));(Ir&30)!==0||up(a,r,h)}return h}function up(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ft.updateQueue,r===null?(r={lastEffect:null,stores:null},Ft.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function fp(n,r,a,u){r.value=a,r.getSnapshot=u,hp(r)&&pp(n)}function dp(n,r,a){return a(function(){hp(r)&&pp(n)})}function hp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!ei(n,a)}catch{return!0}}function pp(n){var r=bi(n,1);r!==null&&si(r,n,1,-1)}function mp(n){var r=gi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},r.queue=n,n=n.dispatch=y0.bind(null,Ft,n),[r.memoizedState,n]}function Io(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=Ft.updateQueue,r===null?(r={lastEffect:null,stores:null},Ft.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function gp(){return jn().memoizedState}function Ga(n,r,a,u){var h=gi();Ft.flags|=n,h.memoizedState=Io(1|r,a,void 0,u===void 0?null:u)}function Wa(n,r,a,u){var h=jn();u=u===void 0?null:u;var g=void 0;if($t!==null){var M=$t.memoizedState;if(g=M.destroy,u!==null&&su(u,M.deps)){h.memoizedState=Io(r,a,g,u);return}}Ft.flags|=n,h.memoizedState=Io(1|r,a,g,u)}function _p(n,r){return Ga(8390656,8,n,r)}function uu(n,r){return Wa(2048,8,n,r)}function vp(n,r){return Wa(4,2,n,r)}function yp(n,r){return Wa(4,4,n,r)}function xp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Sp(n,r,a){return a=a!=null?a.concat([n]):null,Wa(4,4,xp.bind(null,r,n),a)}function fu(){}function Mp(n,r){var a=jn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&su(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function Ep(n,r){var a=jn();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&su(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function Tp(n,r,a){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,Rn=!0),n.memoizedState=a):(ei(a,r)||(a=os(),Ft.lanes|=a,Ur|=a,n.baseState=!0),r)}function _0(n,r){var a=Tt;Tt=a!==0&&4>a?a:4,n(!0);var u=ru.transition;ru.transition={};try{n(!1),r()}finally{Tt=a,ru.transition=u}}function Cp(){return jn().memoizedState}function v0(n,r,a){var u=lr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Rp(n))Ap(r,a);else if(a=ip(n,r,a,u),a!==null){var h=Sn();si(a,n,u,h),wp(a,r,u)}}function y0(n,r,a){var u=lr(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rp(n))Ap(r,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var M=r.lastRenderedState,I=g(M,a);if(h.hasEagerState=!0,h.eagerState=I,ei(I,M)){var k=r.interleaved;k===null?(h.next=h,Zc(r)):(h.next=k.next,k.next=h),r.interleaved=h;return}}catch{}finally{}a=ip(n,r,h,u),a!==null&&(h=Sn(),si(a,n,u,h),wp(a,r,u))}}function Rp(n){var r=n.alternate;return n===Ft||r!==null&&r===Ft}function Ap(n,r){bo=Va=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function wp(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,hc(n,a)}}var Xa={readContext:$n,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},x0={readContext:$n,useCallback:function(n,r){return gi().memoizedState=[n,r===void 0?null:r],n},useContext:$n,useEffect:_p,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ga(4194308,4,xp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ga(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ga(4,2,n,r)},useMemo:function(n,r){var a=gi();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=gi();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=v0.bind(null,Ft,n),[u.memoizedState,n]},useRef:function(n){var r=gi();return n={current:n},r.memoizedState=n},useState:mp,useDebugValue:fu,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=mp(!1),r=n[0];return n=_0.bind(null,n[1]),gi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=Ft,h=gi();if(Ut){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),Qt===null)throw Error(t(349));(Ir&30)!==0||up(u,r,a)}h.memoizedState=a;var g={value:a,getSnapshot:r};return h.queue=g,_p(dp.bind(null,u,g,n),[n]),u.flags|=2048,Io(9,fp.bind(null,u,g,a,r),void 0,null),a},useId:function(){var n=gi(),r=Qt.identifierPrefix;if(Ut){var a=Pi,u=wi;a=(u&~(1<<32-ke(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=Lo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=g0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},S0={readContext:$n,useCallback:Mp,useContext:$n,useEffect:uu,useImperativeHandle:Sp,useInsertionEffect:vp,useLayoutEffect:yp,useMemo:Ep,useReducer:lu,useRef:gp,useState:function(){return lu(Do)},useDebugValue:fu,useDeferredValue:function(n){var r=jn();return Tp(r,$t.memoizedState,n)},useTransition:function(){var n=lu(Do)[0],r=jn().memoizedState;return[n,r]},useMutableSource:lp,useSyncExternalStore:cp,useId:Cp,unstable_isNewReconciler:!1},M0={readContext:$n,useCallback:Mp,useContext:$n,useEffect:uu,useImperativeHandle:Sp,useInsertionEffect:vp,useLayoutEffect:yp,useMemo:Ep,useReducer:cu,useRef:gp,useState:function(){return cu(Do)},useDebugValue:fu,useDeferredValue:function(n){var r=jn();return $t===null?r.memoizedState=n:Tp(r,$t.memoizedState,n)},useTransition:function(){var n=cu(Do)[0],r=jn().memoizedState;return[n,r]},useMutableSource:lp,useSyncExternalStore:cp,useId:Cp,unstable_isNewReconciler:!1};function ni(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function du(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:se({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var $a={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=Sn(),h=lr(n),g=Li(u,h);g.payload=r,a!=null&&(g.callback=a),r=rr(n,g,h),r!==null&&(si(r,n,h,u),Fa(r,n,h))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=Sn(),h=lr(n),g=Li(u,h);g.tag=1,g.payload=r,a!=null&&(g.callback=a),r=rr(n,g,h),r!==null&&(si(r,n,h,u),Fa(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Sn(),u=lr(n),h=Li(a,u);h.tag=2,r!=null&&(h.callback=r),r=rr(n,h,u),r!==null&&(si(r,n,u,a),Fa(r,n,u))}};function Pp(n,r,a,u,h,g,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,M):r.prototype&&r.prototype.isPureReactComponent?!yo(a,u)||!yo(h,g):!0}function bp(n,r,a){var u=!1,h=tr,g=r.contextType;return typeof g=="object"&&g!==null?g=$n(g):(h=Cn(r)?wr:dn.current,u=r.contextTypes,g=(u=u!=null)?gs(n,h):tr),r=new r(a,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=$a,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),r}function Lp(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&$a.enqueueReplaceState(r,r.state,null)}function hu(n,r,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Qc(n);var g=r.contextType;typeof g=="object"&&g!==null?h.context=$n(g):(g=Cn(r)?wr:dn.current,h.context=gs(n,g)),h.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(du(n,r,g,a),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&$a.enqueueReplaceState(h,h.state,null),Ba(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ts(n,r){try{var a="",u=r;do a+=le(u),u=u.return;while(u);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:h,digest:null}}function pu(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function mu(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var E0=typeof WeakMap=="function"?WeakMap:Map;function Dp(n,r,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){Qa||(Qa=!0,bu=u),mu(n,r)},a}function Ip(n,r,a){a=Li(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;a.payload=function(){return u(h)},a.callback=function(){mu(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){mu(n,r),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})}),a}function Up(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new E0;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(a)||(h.add(a),n=k0.bind(null,n,r,a),r.then(n,n))}function Np(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Op(n,r,a,u,h){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Li(-1,1),r.tag=2,rr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var T0=b.ReactCurrentOwner,Rn=!1;function xn(n,r,a,u){r.child=n===null?np(r,null,a,u):xs(r,n.child,a,u)}function kp(n,r,a,u,h){a=a.render;var g=r.ref;return Ms(r,h),u=ou(n,r,a,u,g,h),a=au(),n!==null&&!Rn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Di(n,r,h)):(Ut&&a&&Gc(r),r.flags|=1,xn(n,r,u,h),r.child)}function Fp(n,r,a,u,h){if(n===null){var g=a.type;return typeof g=="function"&&!ku(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=g,Bp(n,r,g,u,h)):(n=sl(a.type,null,u,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&h)===0){var M=g.memoizedProps;if(a=a.compare,a=a!==null?a:yo,a(M,u)&&n.ref===r.ref)return Di(n,r,h)}return r.flags|=1,n=ur(g,u),n.ref=r.ref,n.return=r,r.child=n}function Bp(n,r,a,u,h){if(n!==null){var g=n.memoizedProps;if(yo(g,u)&&n.ref===r.ref)if(Rn=!1,r.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Rn=!0);else return r.lanes=n.lanes,Di(n,r,h)}return gu(n,r,a,u,h)}function zp(n,r,a){var u=r.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Rs,Bn),Bn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Pt(Rs,Bn),Bn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:a,Pt(Rs,Bn),Bn|=u}else g!==null?(u=g.baseLanes|a,r.memoizedState=null):u=a,Pt(Rs,Bn),Bn|=u;return xn(n,r,h,a),r.child}function Hp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function gu(n,r,a,u,h){var g=Cn(a)?wr:dn.current;return g=gs(r,g),Ms(r,h),a=ou(n,r,a,u,g,h),u=au(),n!==null&&!Rn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,Di(n,r,h)):(Ut&&u&&Gc(r),r.flags|=1,xn(n,r,a,h),r.child)}function Vp(n,r,a,u,h){if(Cn(a)){var g=!0;ba(r)}else g=!1;if(Ms(r,h),r.stateNode===null)Ya(n,r),bp(r,a,u),hu(r,a,u,h),u=!0;else if(n===null){var M=r.stateNode,I=r.memoizedProps;M.props=I;var k=M.context,te=a.contextType;typeof te=="object"&&te!==null?te=$n(te):(te=Cn(a)?wr:dn.current,te=gs(r,te));var ge=a.getDerivedStateFromProps,ve=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==u||k!==te)&&Lp(r,M,u,te),ir=!1;var me=r.memoizedState;M.state=me,Ba(r,u,M,h),k=r.memoizedState,I!==u||me!==k||Tn.current||ir?(typeof ge=="function"&&(du(r,a,ge,u),k=r.memoizedState),(I=ir||Pp(r,a,I,u,me,k,te))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(r.flags|=4194308)):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=k),M.props=u,M.state=k,M.context=te,u=I):(typeof M.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{M=r.stateNode,rp(n,r),I=r.memoizedProps,te=r.type===r.elementType?I:ni(r.type,I),M.props=te,ve=r.pendingProps,me=M.context,k=a.contextType,typeof k=="object"&&k!==null?k=$n(k):(k=Cn(a)?wr:dn.current,k=gs(r,k));var Ie=a.getDerivedStateFromProps;(ge=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==ve||me!==k)&&Lp(r,M,u,k),ir=!1,me=r.memoizedState,M.state=me,Ba(r,u,M,h);var ze=r.memoizedState;I!==ve||me!==ze||Tn.current||ir?(typeof Ie=="function"&&(du(r,a,Ie,u),ze=r.memoizedState),(te=ir||Pp(r,a,te,u,me,ze,k)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,ze,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,ze,k)),typeof M.componentDidUpdate=="function"&&(r.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ze),M.props=u,M.state=ze,M.context=k,u=te):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),u=!1)}return _u(n,r,a,u,g,h)}function _u(n,r,a,u,h,g){Hp(n,r);var M=(r.flags&128)!==0;if(!u&&!M)return h&&jh(r,a,!1),Di(n,r,g);u=r.stateNode,T0.current=r;var I=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&M?(r.child=xs(r,n.child,null,g),r.child=xs(r,null,I,g)):xn(n,r,I,g),r.memoizedState=u.state,h&&jh(r,a,!0),r.child}function Gp(n){var r=n.stateNode;r.pendingContext?Xh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Xh(n,r.context,!1),eu(n,r.containerInfo)}function Wp(n,r,a,u,h){return ys(),jc(h),r.flags|=256,xn(n,r,a,u),r.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function yu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Xp(n,r,a){var u=r.pendingProps,h=kt.current,g=!1,M=(r.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(h&2)!==0),I?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Pt(kt,h&1),n===null)return $c(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(M=u.children,n=u.fallback,g?(u=r.mode,g=r.child,M={mode:"hidden",children:M},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=M):g=ol(M,u,0,null),n=Fr(n,u,a,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=yu(a),r.memoizedState=vu,n):xu(r,M));if(h=n.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return C0(n,r,M,u,I,h,a);if(g){g=u.fallback,M=r.mode,h=n.child,I=h.sibling;var k={mode:"hidden",children:u.children};return(M&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=k,r.deletions=null):(u=ur(h,k),u.subtreeFlags=h.subtreeFlags&14680064),I!==null?g=ur(I,g):(g=Fr(g,M,a,null),g.flags|=2),g.return=r,u.return=r,u.sibling=g,r.child=u,u=g,g=r.child,M=n.child.memoizedState,M=M===null?yu(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=n.childLanes&~a,r.memoizedState=vu,u}return g=n.child,n=g.sibling,u=ur(g,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function xu(n,r){return r=ol({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function ja(n,r,a,u){return u!==null&&jc(u),xs(r,n.child,null,a),n=xu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function C0(n,r,a,u,h,g,M){if(a)return r.flags&256?(r.flags&=-257,u=pu(Error(t(422))),ja(n,r,M,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=u.fallback,h=r.mode,u=ol({mode:"visible",children:u.children},h,0,null),g=Fr(g,h,M,null),g.flags|=2,u.return=r,g.return=r,u.sibling=g,r.child=u,(r.mode&1)!==0&&xs(r,n.child,null,M),r.child.memoizedState=yu(M),r.memoizedState=vu,g);if((r.mode&1)===0)return ja(n,r,M,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var I=u.dgst;return u=I,g=Error(t(419)),u=pu(g,u,void 0),ja(n,r,M,u)}if(I=(M&n.childLanes)!==0,Rn||I){if(u=Qt,u!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|M))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,bi(n,h),si(u,n,h,-1))}return Ou(),u=pu(Error(t(421))),ja(n,r,M,u)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=F0.bind(null,n),h._reactRetry=r,null):(n=g.treeContext,Fn=Qi(h.nextSibling),kn=r,Ut=!0,ti=null,n!==null&&(Wn[Xn++]=wi,Wn[Xn++]=Pi,Wn[Xn++]=Pr,wi=n.id,Pi=n.overflow,Pr=r),r=xu(r,u.children),r.flags|=4096,r)}function $p(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Jc(n.return,r,a)}function Su(n,r,a,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=a,g.tailMode=h)}function jp(n,r,a){var u=r.pendingProps,h=u.revealOrder,g=u.tail;if(xn(n,r,u.children,a),u=kt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,a,r);else if(n.tag===19)$p(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Pt(kt,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&za(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Su(r,!1,h,a,g);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&za(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Su(r,!0,a,null,g);break;case"together":Su(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ya(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Di(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ur|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ur(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ur(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function R0(n,r,a){switch(r.tag){case 3:Gp(r),ys();break;case 5:ap(r);break;case 1:Cn(r.type)&&ba(r);break;case 4:eu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;Pt(Oa,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Pt(kt,kt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?Xp(n,r,a):(Pt(kt,kt.current&1),n=Di(n,r,a),n!==null?n.sibling:null);Pt(kt,kt.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return jp(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Pt(kt,kt.current),u)break;return null;case 22:case 23:return r.lanes=0,zp(n,r,a)}return Di(n,r,a)}var Yp,Mu,qp,Kp;Yp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Mu=function(){},qp=function(n,r,a,u){var h=n.memoizedProps;if(h!==u){n=r.stateNode,Dr(mi.current);var g=null;switch(a){case"input":h=nn(n,h),u=nn(n,u),g=[];break;case"select":h=se({},h,{value:void 0}),u=se({},u,{value:void 0}),g=[];break;case"textarea":h=K(n,h),u=K(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Aa)}rt(a,u);var M;a=null;for(te in h)if(!u.hasOwnProperty(te)&&h.hasOwnProperty(te)&&h[te]!=null)if(te==="style"){var I=h[te];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?g||(g=[]):(g=g||[]).push(te,null));for(te in u){var k=u[te];if(I=h!=null?h[te]:void 0,u.hasOwnProperty(te)&&k!==I&&(k!=null||I!=null))if(te==="style")if(I){for(M in I)!I.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in k)k.hasOwnProperty(M)&&I[M]!==k[M]&&(a||(a={}),a[M]=k[M])}else a||(g||(g=[]),g.push(te,a)),a=k;else te==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(g=g||[]).push(te,k)):te==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(te,""+k):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(k!=null&&te==="onScroll"&&bt("scroll",n),g||I===k||(g=[])):(g=g||[]).push(te,k))}a&&(g=g||[]).push("style",a);var te=g;(r.updateQueue=te)&&(r.flags|=4)}},Kp=function(n,r,a,u){a!==u&&(r.flags|=4)};function Uo(n,r){if(!Ut)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function A0(n,r,a){var u=r.pendingProps;switch(Wc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(r),null;case 1:return Cn(r.type)&&Pa(),pn(r),null;case 3:return u=r.stateNode,Es(),Lt(Tn),Lt(dn),iu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ua(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ti!==null&&(Iu(ti),ti=null))),Mu(n,r),pn(r),null;case 5:tu(r);var h=Dr(Po.current);if(a=r.type,n!==null&&r.stateNode!=null)qp(n,r,a,u,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return pn(r),null}if(n=Dr(mi.current),Ua(r)){u=r.stateNode,a=r.type;var g=r.memoizedProps;switch(u[pi]=r,u[To]=g,n=(r.mode&1)!==0,a){case"dialog":bt("cancel",u),bt("close",u);break;case"iframe":case"object":case"embed":bt("load",u);break;case"video":case"audio":for(h=0;h<So.length;h++)bt(So[h],u);break;case"source":bt("error",u);break;case"img":case"image":case"link":bt("error",u),bt("load",u);break;case"details":bt("toggle",u);break;case"input":ct(u,g),bt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},bt("invalid",u);break;case"textarea":de(u,g),bt("invalid",u)}rt(a,g),h=null;for(var M in g)if(g.hasOwnProperty(M)){var I=g[M];M==="children"?typeof I=="string"?u.textContent!==I&&(g.suppressHydrationWarning!==!0&&Ra(u.textContent,I,n),h=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&Ra(u.textContent,I,n),h=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&bt("scroll",u)}switch(a){case"input":gt(u),Ct(u,g,!0);break;case"textarea":gt(u),fe(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Aa)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$e(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[pi]=r,n[To]=u,Yp(n,r,!1,!1),r.stateNode=n;e:{switch(M=Mt(a,u),a){case"dialog":bt("cancel",n),bt("close",n),h=u;break;case"iframe":case"object":case"embed":bt("load",n),h=u;break;case"video":case"audio":for(h=0;h<So.length;h++)bt(So[h],n);h=u;break;case"source":bt("error",n),h=u;break;case"img":case"image":case"link":bt("error",n),bt("load",n),h=u;break;case"details":bt("toggle",n),h=u;break;case"input":ct(n,u),h=nn(n,u),bt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=se({},u,{value:void 0}),bt("invalid",n);break;case"textarea":de(n,u),h=K(n,u),bt("invalid",n);break;default:h=u}rt(a,h),I=h;for(g in I)if(I.hasOwnProperty(g)){var k=I[g];g==="style"?Fe(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&pt(n,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Se(n,k):typeof k=="number"&&Se(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&bt("scroll",n):k!=null&&w(n,g,k,M))}switch(a){case"input":gt(n),Ct(n,u,!1);break;case"textarea":gt(n),fe(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?R(n,!!u.multiple,g,!1):u.defaultValue!=null&&R(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Aa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return pn(r),null;case 6:if(n&&r.stateNode!=null)Kp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Dr(Po.current),Dr(mi.current),Ua(r)){if(u=r.stateNode,a=r.memoizedProps,u[pi]=r,(g=u.nodeValue!==a)&&(n=kn,n!==null))switch(n.tag){case 3:Ra(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ra(u.nodeValue,a,(n.mode&1)!==0)}g&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[pi]=r,r.stateNode=u}return pn(r),null;case 13:if(Lt(kt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ut&&Fn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Qh(),ys(),r.flags|=98560,g=!1;else if(g=Ua(r),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[pi]=r}else ys(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pn(r),g=!1}else ti!==null&&(Iu(ti),ti=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(kt.current&1)!==0?jt===0&&(jt=3):Ou())),r.updateQueue!==null&&(r.flags|=4),pn(r),null);case 4:return Es(),Mu(n,r),n===null&&Mo(r.stateNode.containerInfo),pn(r),null;case 10:return Kc(r.type._context),pn(r),null;case 17:return Cn(r.type)&&Pa(),pn(r),null;case 19:if(Lt(kt),g=r.memoizedState,g===null)return pn(r),null;if(u=(r.flags&128)!==0,M=g.rendering,M===null)if(u)Uo(g,!1);else{if(jt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(M=za(n),M!==null){for(r.flags|=128,Uo(g,!1),u=M.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)g=a,n=u,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,n=M.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Pt(kt,kt.current&1|2),r.child}n=n.sibling}g.tail!==null&&Te()>As&&(r.flags|=128,u=!0,Uo(g,!1),r.lanes=4194304)}else{if(!u)if(n=za(M),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Uo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!Ut)return pn(r),null}else 2*Te()-g.renderingStartTime>As&&a!==1073741824&&(r.flags|=128,u=!0,Uo(g,!1),r.lanes=4194304);g.isBackwards?(M.sibling=r.child,r.child=M):(a=g.last,a!==null?a.sibling=M:r.child=M,g.last=M)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Te(),r.sibling=null,a=kt.current,Pt(kt,u?a&1|2:a&1),r):(pn(r),null);case 22:case 23:return Nu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Bn&1073741824)!==0&&(pn(r),r.subtreeFlags&6&&(r.flags|=8192)):pn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function w0(n,r){switch(Wc(r),r.tag){case 1:return Cn(r.type)&&Pa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Es(),Lt(Tn),Lt(dn),iu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return tu(r),null;case 13:if(Lt(kt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ys()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Lt(kt),null;case 4:return Es(),null;case 10:return Kc(r.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var qa=!1,mn=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Cs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Bt(n,r,u)}else a.current=null}function Eu(n,r,a){try{a()}catch(u){Bt(n,r,u)}}var Jp=!1;function b0(n,r){if(Nc=ma,n=Ph(),Ac(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var M=0,I=-1,k=-1,te=0,ge=0,ve=n,me=null;t:for(;;){for(var Ie;ve!==a||h!==0&&ve.nodeType!==3||(I=M+h),ve!==g||u!==0&&ve.nodeType!==3||(k=M+u),ve.nodeType===3&&(M+=ve.nodeValue.length),(Ie=ve.firstChild)!==null;)me=ve,ve=Ie;for(;;){if(ve===n)break t;if(me===a&&++te===h&&(I=M),me===g&&++ge===u&&(k=M),(Ie=ve.nextSibling)!==null)break;ve=me,me=ve.parentNode}ve=Ie}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Oc={focusedElem:n,selectionRange:a},ma=!1,Be=r;Be!==null;)if(r=Be,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Be=n;else for(;Be!==null;){r=Be;try{var ze=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Ht=ze.memoizedState,j=r.stateNode,z=j.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:ni(r.type,Ve),Ht);j.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var q=r.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Bt(r,r.return,Me)}if(n=r.sibling,n!==null){n.return=r.return,Be=n;break}Be=r.return}return ze=Jp,Jp=!1,ze}function No(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Eu(r,a,g)}h=h.next}while(h!==u)}}function Ka(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function Tu(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Zp(n){var r=n.alternate;r!==null&&(n.alternate=null,Zp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[pi],delete r[To],delete r[zc],delete r[d0],delete r[h0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qp(n){return n.tag===5||n.tag===3||n.tag===4}function em(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Aa));else if(u!==4&&(n=n.child,n!==null))for(Cu(n,r,a),n=n.sibling;n!==null;)Cu(n,r,a),n=n.sibling}function Ru(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ru(n,r,a),n=n.sibling;n!==null;)Ru(n,r,a),n=n.sibling}var sn=null,ii=!1;function sr(n,r,a){for(a=a.child;a!==null;)tm(n,r,a),a=a.sibling}function tm(n,r,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 5:mn||Cs(a,r);case 6:var u=sn,h=ii;sn=null,sr(n,r,a),sn=u,ii=h,sn!==null&&(ii?(n=sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ii?(n=sn,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),ho(n)):Bc(sn,a.stateNode));break;case 4:u=sn,h=ii,sn=a.stateNode.containerInfo,ii=!0,sr(n,r,a),sn=u,ii=h;break;case 0:case 11:case 14:case 15:if(!mn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,M=g.destroy;g=g.tag,M!==void 0&&((g&2)!==0||(g&4)!==0)&&Eu(a,r,M),h=h.next}while(h!==u)}sr(n,r,a);break;case 1:if(!mn&&(Cs(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){Bt(a,r,I)}sr(n,r,a);break;case 21:sr(n,r,a);break;case 22:a.mode&1?(mn=(u=mn)||a.memoizedState!==null,sr(n,r,a),mn=u):sr(n,r,a);break;default:sr(n,r,a)}}function nm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new P0),r.forEach(function(u){var h=B0.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function ri(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var g=n,M=r,I=M;e:for(;I!==null;){switch(I.tag){case 5:sn=I.stateNode,ii=!1;break e;case 3:sn=I.stateNode.containerInfo,ii=!0;break e;case 4:sn=I.stateNode.containerInfo,ii=!0;break e}I=I.return}if(sn===null)throw Error(t(160));tm(g,M,h),sn=null,ii=!1;var k=h.alternate;k!==null&&(k.return=null),h.return=null}catch(te){Bt(h,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)im(r,n),r=r.sibling}function im(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ri(r,n),_i(n),u&4){try{No(3,n,n.return),Ka(3,n)}catch(Ve){Bt(n,n.return,Ve)}try{No(5,n,n.return)}catch(Ve){Bt(n,n.return,Ve)}}break;case 1:ri(r,n),_i(n),u&512&&a!==null&&Cs(a,a.return);break;case 5:if(ri(r,n),_i(n),u&512&&a!==null&&Cs(a,a.return),n.flags&32){var h=n.stateNode;try{Se(h,"")}catch(Ve){Bt(n,n.return,Ve)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,M=a!==null?a.memoizedProps:g,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&ht(h,g),Mt(I,M);var te=Mt(I,g);for(M=0;M<k.length;M+=2){var ge=k[M],ve=k[M+1];ge==="style"?Fe(h,ve):ge==="dangerouslySetInnerHTML"?pt(h,ve):ge==="children"?Se(h,ve):w(h,ge,ve,te)}switch(I){case"input":Je(h,g);break;case"textarea":_e(h,g);break;case"select":var me=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ie=g.value;Ie!=null?R(h,!!g.multiple,Ie,!1):me!==!!g.multiple&&(g.defaultValue!=null?R(h,!!g.multiple,g.defaultValue,!0):R(h,!!g.multiple,g.multiple?[]:"",!1))}h[To]=g}catch(Ve){Bt(n,n.return,Ve)}}break;case 6:if(ri(r,n),_i(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Ve){Bt(n,n.return,Ve)}}break;case 3:if(ri(r,n),_i(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(r.containerInfo)}catch(Ve){Bt(n,n.return,Ve)}break;case 4:ri(r,n),_i(n);break;case 13:ri(r,n),_i(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Pu=Te())),u&4&&nm(n);break;case 22:if(ge=a!==null&&a.memoizedState!==null,n.mode&1?(mn=(te=mn)||ge,ri(r,n),mn=te):ri(r,n),_i(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!ge&&(n.mode&1)!==0)for(Be=n,ge=n.child;ge!==null;){for(ve=Be=ge;Be!==null;){switch(me=Be,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:No(4,me,me.return);break;case 1:Cs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){u=me,a=me.return;try{r=u,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(Ve){Bt(u,a,Ve)}}break;case 5:Cs(me,me.return);break;case 22:if(me.memoizedState!==null){om(ve);continue}}Ie!==null?(Ie.return=me,Be=Ie):om(ve)}ge=ge.sibling}e:for(ge=null,ve=n;;){if(ve.tag===5){if(ge===null){ge=ve;try{h=ve.stateNode,te?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=ve.stateNode,k=ve.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=et("display",M))}catch(Ve){Bt(n,n.return,Ve)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=te?"":ve.memoizedProps}catch(Ve){Bt(n,n.return,Ve)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:ri(r,n),_i(n),u&4&&nm(n);break;case 21:break;default:ri(r,n),_i(n)}}function _i(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Qp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Se(h,""),u.flags&=-33);var g=em(n);Ru(n,g,h);break;case 3:case 4:var M=u.stateNode.containerInfo,I=em(n);Cu(n,I,M);break;default:throw Error(t(161))}}catch(k){Bt(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function L0(n,r,a){Be=n,rm(n)}function rm(n,r,a){for(var u=(n.mode&1)!==0;Be!==null;){var h=Be,g=h.child;if(h.tag===22&&u){var M=h.memoizedState!==null||qa;if(!M){var I=h.alternate,k=I!==null&&I.memoizedState!==null||mn;I=qa;var te=mn;if(qa=M,(mn=k)&&!te)for(Be=h;Be!==null;)M=Be,k=M.child,M.tag===22&&M.memoizedState!==null?am(h):k!==null?(k.return=M,Be=k):am(h);for(;g!==null;)Be=g,rm(g),g=g.sibling;Be=h,qa=I,mn=te}sm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Be=g):sm(n)}}function sm(n){for(;Be!==null;){var r=Be;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:mn||Ka(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!mn)if(a===null)u.componentDidMount();else{var h=r.elementType===r.type?a.memoizedProps:ni(r.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&op(r,g,u);break;case 3:var M=r.updateQueue;if(M!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}op(r,M,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var ge=te.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&ho(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||r.flags&512&&Tu(r)}catch(me){Bt(r,r.return,me)}}if(r===n){Be=null;break}if(a=r.sibling,a!==null){a.return=r.return,Be=a;break}Be=r.return}}function om(n){for(;Be!==null;){var r=Be;if(r===n){Be=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Be=a;break}Be=r.return}}function am(n){for(;Be!==null;){var r=Be;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Ka(4,r)}catch(k){Bt(r,a,k)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(k){Bt(r,h,k)}}var g=r.return;try{Tu(r)}catch(k){Bt(r,g,k)}break;case 5:var M=r.return;try{Tu(r)}catch(k){Bt(r,M,k)}}}catch(k){Bt(r,r.return,k)}if(r===n){Be=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Be=I;break}Be=r.return}}var D0=Math.ceil,Ja=b.ReactCurrentDispatcher,Au=b.ReactCurrentOwner,Yn=b.ReactCurrentBatchConfig,_t=0,Qt=null,Vt=null,on=0,Bn=0,Rs=er(0),jt=0,Oo=null,Ur=0,Za=0,wu=0,ko=null,An=null,Pu=0,As=1/0,Ii=null,Qa=!1,bu=null,or=null,el=!1,ar=null,tl=0,Fo=0,Lu=null,nl=-1,il=0;function Sn(){return(_t&6)!==0?Te():nl!==-1?nl:nl=Te()}function lr(n){return(n.mode&1)===0?1:(_t&2)!==0&&on!==0?on&-on:m0.transition!==null?(il===0&&(il=os()),il):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:ch(n.type)),n)}function si(n,r,a,u){if(50<Fo)throw Fo=0,Lu=null,Error(t(185));$i(n,a,u),((_t&2)===0||n!==Qt)&&(n===Qt&&((_t&2)===0&&(Za|=a),jt===4&&cr(n,on)),wn(n,u),a===1&&_t===0&&(r.mode&1)===0&&(As=Te()+500,La&&nr()))}function wn(n,r){var a=n.callbackNode;oo(n,r);var u=wt(n,n===Qt?on:0);if(u===0)a!==null&&W(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&W(a),r===1)n.tag===0?p0(cm.bind(null,n)):Yh(cm.bind(null,n)),u0(function(){(_t&6)===0&&nr()}),a=null;else{switch(th(u)){case 1:a=Ke;break;case 4:a=Ze;break;case 16:a=We;break;case 536870912:a=Rt;break;default:a=We}a=_m(a,lm.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function lm(n,r){if(nl=-1,il=0,(_t&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ws()&&n.callbackNode!==a)return null;var u=wt(n,n===Qt?on:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=rl(n,u);else{r=u;var h=_t;_t|=2;var g=fm();(Qt!==n||on!==r)&&(Ii=null,As=Te()+500,Or(n,r));do try{N0();break}catch(I){um(n,I)}while(!0);qc(),Ja.current=g,_t=h,Vt!==null?r=0:(Qt=null,on=0,r=jt)}if(r!==0){if(r===2&&(h=fn(n),h!==0&&(u=h,r=Du(n,h))),r===1)throw a=Oo,Or(n,0),cr(n,u),wn(n,Te()),a;if(r===6)cr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!I0(h)&&(r=rl(n,u),r===2&&(g=fn(n),g!==0&&(u=g,r=Du(n,g))),r===1))throw a=Oo,Or(n,0),cr(n,u),wn(n,Te()),a;switch(n.finishedWork=h,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:kr(n,An,Ii);break;case 3:if(cr(n,u),(u&130023424)===u&&(r=Pu+500-Te(),10<r)){if(wt(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Sn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Fc(kr.bind(null,n,An,Ii),r);break}kr(n,An,Ii);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,h=-1;0<u;){var M=31-ke(u);g=1<<M,M=r[M],M>h&&(h=M),u&=~g}if(u=h,u=Te()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*D0(u/1960))-u,10<u){n.timeoutHandle=Fc(kr.bind(null,n,An,Ii),u);break}kr(n,An,Ii);break;case 5:kr(n,An,Ii);break;default:throw Error(t(329))}}}return wn(n,Te()),n.callbackNode===a?lm.bind(null,n):null}function Du(n,r){var a=ko;return n.current.memoizedState.isDehydrated&&(Or(n,r).flags|=256),n=rl(n,r),n!==2&&(r=An,An=a,r!==null&&Iu(r)),n}function Iu(n){An===null?An=n:An.push.apply(An,n)}function I0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],g=h.getSnapshot;h=h.value;try{if(!ei(g(),h))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function cr(n,r){for(r&=~wu,r&=~Za,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-ke(r),u=1<<a;n[a]=-1,r&=~u}}function cm(n){if((_t&6)!==0)throw Error(t(327));ws();var r=wt(n,0);if((r&1)===0)return wn(n,Te()),null;var a=rl(n,r);if(n.tag!==0&&a===2){var u=fn(n);u!==0&&(r=u,a=Du(n,u))}if(a===1)throw a=Oo,Or(n,0),cr(n,r),wn(n,Te()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,kr(n,An,Ii),wn(n,Te()),null}function Uu(n,r){var a=_t;_t|=1;try{return n(r)}finally{_t=a,_t===0&&(As=Te()+500,La&&nr())}}function Nr(n){ar!==null&&ar.tag===0&&(_t&6)===0&&ws();var r=_t;_t|=1;var a=Yn.transition,u=Tt;try{if(Yn.transition=null,Tt=1,n)return n()}finally{Tt=u,Yn.transition=a,_t=r,(_t&6)===0&&nr()}}function Nu(){Bn=Rs.current,Lt(Rs)}function Or(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,c0(a)),Vt!==null)for(a=Vt.return;a!==null;){var u=a;switch(Wc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Pa();break;case 3:Es(),Lt(Tn),Lt(dn),iu();break;case 5:tu(u);break;case 4:Es();break;case 13:Lt(kt);break;case 19:Lt(kt);break;case 10:Kc(u.type._context);break;case 22:case 23:Nu()}a=a.return}if(Qt=n,Vt=n=ur(n.current,null),on=Bn=r,jt=0,Oo=null,wu=Za=Ur=0,An=ko=null,Lr!==null){for(r=0;r<Lr.length;r++)if(a=Lr[r],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,g=a.pending;if(g!==null){var M=g.next;g.next=h,u.next=M}a.pending=u}Lr=null}return n}function um(n,r){do{var a=Vt;try{if(qc(),Ha.current=Xa,Va){for(var u=Ft.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Va=!1}if(Ir=0,Zt=$t=Ft=null,bo=!1,Lo=0,Au.current=null,a===null||a.return===null){jt=1,Oo=r,Vt=null;break}e:{var g=n,M=a.return,I=a,k=r;if(r=on,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var te=k,ge=I,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ie=Np(M);if(Ie!==null){Ie.flags&=-257,Op(Ie,M,I,g,r),Ie.mode&1&&Up(g,te,r),r=Ie,k=te;var ze=r.updateQueue;if(ze===null){var Ve=new Set;Ve.add(k),r.updateQueue=Ve}else ze.add(k);break e}else{if((r&1)===0){Up(g,te,r),Ou();break e}k=Error(t(426))}}else if(Ut&&I.mode&1){var Ht=Np(M);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),Op(Ht,M,I,g,r),jc(Ts(k,I));break e}}g=k=Ts(k,I),jt!==4&&(jt=2),ko===null?ko=[g]:ko.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var j=Dp(g,k,r);sp(g,j);break e;case 1:I=k;var z=g.type,q=g.stateNode;if((g.flags&128)===0&&(typeof z.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(or===null||!or.has(q)))){g.flags|=65536,r&=-r,g.lanes|=r;var Me=Ip(g,I,r);sp(g,Me);break e}}g=g.return}while(g!==null)}hm(a)}catch(Xe){r=Xe,Vt===a&&a!==null&&(Vt=a=a.return);continue}break}while(!0)}function fm(){var n=Ja.current;return Ja.current=Xa,n===null?Xa:n}function Ou(){(jt===0||jt===3||jt===2)&&(jt=4),Qt===null||(Ur&268435455)===0&&(Za&268435455)===0||cr(Qt,on)}function rl(n,r){var a=_t;_t|=2;var u=fm();(Qt!==n||on!==r)&&(Ii=null,Or(n,r));do try{U0();break}catch(h){um(n,h)}while(!0);if(qc(),_t=a,Ja.current=u,Vt!==null)throw Error(t(261));return Qt=null,on=0,jt}function U0(){for(;Vt!==null;)dm(Vt)}function N0(){for(;Vt!==null&&!Ee();)dm(Vt)}function dm(n){var r=gm(n.alternate,n,Bn);n.memoizedProps=n.pendingProps,r===null?hm(n):Vt=r,Au.current=null}function hm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=A0(a,r,Bn),a!==null){Vt=a;return}}else{if(a=w0(a,r),a!==null){a.flags&=32767,Vt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jt=6,Vt=null;return}}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=n}while(r!==null);jt===0&&(jt=5)}function kr(n,r,a){var u=Tt,h=Yn.transition;try{Yn.transition=null,Tt=1,O0(n,r,a,u)}finally{Yn.transition=h,Tt=u}return null}function O0(n,r,a,u){do ws();while(ar!==null);if((_t&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(gv(n,g),n===Qt&&(Vt=Qt=null,on=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,_m(We,function(){return ws(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Yn.transition,Yn.transition=null;var M=Tt;Tt=1;var I=_t;_t|=4,Au.current=null,b0(n,a),im(a,n),n0(Oc),ma=!!Nc,Oc=Nc=null,n.current=a,L0(a),Le(),_t=I,Tt=M,Yn.transition=g}else n.current=a;if(el&&(el=!1,ar=n,tl=h),g=n.pendingLanes,g===0&&(or=null),vt(a.stateNode),wn(n,Te()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)h=r[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(Qa)throw Qa=!1,n=bu,bu=null,n;return(tl&1)!==0&&n.tag!==0&&ws(),g=n.pendingLanes,(g&1)!==0?n===Lu?Fo++:(Fo=0,Lu=n):Fo=0,nr(),null}function ws(){if(ar!==null){var n=th(tl),r=Yn.transition,a=Tt;try{if(Yn.transition=null,Tt=16>n?16:n,ar===null)var u=!1;else{if(n=ar,ar=null,tl=0,(_t&6)!==0)throw Error(t(331));var h=_t;for(_t|=4,Be=n.current;Be!==null;){var g=Be,M=g.child;if((Be.flags&16)!==0){var I=g.deletions;if(I!==null){for(var k=0;k<I.length;k++){var te=I[k];for(Be=te;Be!==null;){var ge=Be;switch(ge.tag){case 0:case 11:case 15:No(8,ge,g)}var ve=ge.child;if(ve!==null)ve.return=ge,Be=ve;else for(;Be!==null;){ge=Be;var me=ge.sibling,Ie=ge.return;if(Zp(ge),ge===te){Be=null;break}if(me!==null){me.return=Ie,Be=me;break}Be=Ie}}}var ze=g.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Ht=Ve.sibling;Ve.sibling=null,Ve=Ht}while(Ve!==null)}}Be=g}}if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,Be=M;else e:for(;Be!==null;){if(g=Be,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:No(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,Be=j;break e}Be=g.return}}var z=n.current;for(Be=z;Be!==null;){M=Be;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,Be=q;else e:for(M=z;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ka(9,I)}}catch(Xe){Bt(I,I.return,Xe)}if(I===M){Be=null;break e}var Me=I.sibling;if(Me!==null){Me.return=I.return,Be=Me;break e}Be=I.return}}if(_t=h,nr(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(At,n)}catch{}u=!0}return u}finally{Tt=a,Yn.transition=r}}return!1}function pm(n,r,a){r=Ts(a,r),r=Dp(n,r,1),n=rr(n,r,1),r=Sn(),n!==null&&($i(n,1,r),wn(n,r))}function Bt(n,r,a){if(n.tag===3)pm(n,n,a);else for(;r!==null;){if(r.tag===3){pm(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=Ts(a,n),n=Ip(r,n,1),r=rr(r,n,1),n=Sn(),r!==null&&($i(r,1,n),wn(r,n));break}}r=r.return}}function k0(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=Sn(),n.pingedLanes|=n.suspendedLanes&a,Qt===n&&(on&a)===a&&(jt===4||jt===3&&(on&130023424)===on&&500>Te()-Pu?Or(n,0):wu|=a),wn(n,r)}function mm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Jt,Jt<<=1,(Jt&130023424)===0&&(Jt=4194304)));var a=Sn();n=bi(n,r),n!==null&&($i(n,r,a),wn(n,a))}function F0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),mm(n,a)}function B0(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),mm(n,a)}var gm;gm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Tn.current)Rn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Rn=!1,R0(n,r,a);Rn=(n.flags&131072)!==0}else Rn=!1,Ut&&(r.flags&1048576)!==0&&qh(r,Ia,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Ya(n,r),n=r.pendingProps;var h=gs(r,dn.current);Ms(r,a),h=ou(null,r,u,n,h,a);var g=au();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Cn(u)?(g=!0,ba(r)):g=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Qc(r),h.updater=$a,r.stateNode=h,h._reactInternals=r,hu(r,u,n,a),r=_u(null,r,u,!0,g,a)):(r.tag=0,Ut&&g&&Gc(r),xn(null,r,h,a),r=r.child),r;case 16:u=r.elementType;e:{switch(Ya(n,r),n=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=H0(u),n=ni(u,n),h){case 0:r=gu(null,r,u,n,a);break e;case 1:r=Vp(null,r,u,n,a);break e;case 11:r=kp(null,r,u,n,a);break e;case 14:r=Fp(null,r,u,ni(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ni(u,h),gu(n,r,u,h,a);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ni(u,h),Vp(n,r,u,h,a);case 3:e:{if(Gp(r),n===null)throw Error(t(387));u=r.pendingProps,g=r.memoizedState,h=g.element,rp(n,r),Ba(r,u,null,a);var M=r.memoizedState;if(u=M.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){h=Ts(Error(t(423)),r),r=Wp(n,r,u,a,h);break e}else if(u!==h){h=Ts(Error(t(424)),r),r=Wp(n,r,u,a,h);break e}else for(Fn=Qi(r.stateNode.containerInfo.firstChild),kn=r,Ut=!0,ti=null,a=np(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),u===h){r=Di(n,r,a);break e}xn(n,r,u,a)}r=r.child}return r;case 5:return ap(r),n===null&&$c(r),u=r.type,h=r.pendingProps,g=n!==null?n.memoizedProps:null,M=h.children,kc(u,h)?M=null:g!==null&&kc(u,g)&&(r.flags|=32),Hp(n,r),xn(n,r,M,a),r.child;case 6:return n===null&&$c(r),null;case 13:return Xp(n,r,a);case 4:return eu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=xs(r,null,u,a):xn(n,r,u,a),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ni(u,h),kp(n,r,u,h,a);case 7:return xn(n,r,r.pendingProps,a),r.child;case 8:return xn(n,r,r.pendingProps.children,a),r.child;case 12:return xn(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,g=r.memoizedProps,M=h.value,Pt(Oa,u._currentValue),u._currentValue=M,g!==null)if(ei(g.value,M)){if(g.children===h.children&&!Tn.current){r=Di(n,r,a);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var I=g.dependencies;if(I!==null){M=g.child;for(var k=I.firstContext;k!==null;){if(k.context===u){if(g.tag===1){k=Li(-1,a&-a),k.tag=2;var te=g.updateQueue;if(te!==null){te=te.shared;var ge=te.pending;ge===null?k.next=k:(k.next=ge.next,ge.next=k),te.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Jc(g.return,a,r),I.lanes|=a;break}k=k.next}}else if(g.tag===10)M=g.type===r.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(t(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),Jc(M,a,r),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===r){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}xn(n,r,h.children,a),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Ms(r,a),h=$n(h),u=u(h),r.flags|=1,xn(n,r,u,a),r.child;case 14:return u=r.type,h=ni(u,r.pendingProps),h=ni(u.type,h),Fp(n,r,u,h,a);case 15:return Bp(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:ni(u,h),Ya(n,r),r.tag=1,Cn(u)?(n=!0,ba(r)):n=!1,Ms(r,a),bp(r,u,h),hu(r,u,h,a),_u(null,r,u,!0,n,a);case 19:return jp(n,r,a);case 22:return zp(n,r,a)}throw Error(t(156,r.tag))};function _m(n,r){return ee(n,r)}function z0(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,r,a,u){return new z0(n,r,a,u)}function ku(n){return n=n.prototype,!(!n||!n.isReactComponent)}function H0(n){if(typeof n=="function")return ku(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===ce)return 14}return 2}function ur(n,r){var a=n.alternate;return a===null?(a=qn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function sl(n,r,a,u,h,g){var M=2;if(u=n,typeof n=="function")ku(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case U:return Fr(a.children,h,g,r);case $:M=8,h|=8;break;case he:return n=qn(12,a,r,h|2),n.elementType=he,n.lanes=g,n;case Y:return n=qn(13,a,r,h),n.elementType=Y,n.lanes=g,n;case oe:return n=qn(19,a,r,h),n.elementType=oe,n.lanes=g,n;case ae:return ol(a,h,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:M=10;break e;case P:M=9;break e;case ne:M=11;break e;case ce:M=14;break e;case Q:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=qn(M,a,r,h),r.elementType=n,r.type=u,r.lanes=g,r}function Fr(n,r,a,u){return n=qn(7,n,u,r),n.lanes=a,n}function ol(n,r,a,u){return n=qn(22,n,u,r),n.elementType=ae,n.lanes=a,n.stateNode={isHidden:!1},n}function Fu(n,r,a){return n=qn(6,n,null,r),n.lanes=a,n}function Bu(n,r,a){return r=qn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function V0(n,r,a,u,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function zu(n,r,a,u,h,g,M,I,k){return n=new V0(n,r,a,I,k),r===1?(r=1,g===!0&&(r|=8)):r=0,g=qn(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(g),n}function G0(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function vm(n){if(!n)return tr;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Cn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Cn(a))return $h(n,a,r)}return r}function ym(n,r,a,u,h,g,M,I,k){return n=zu(a,u,!0,n,h,g,M,I,k),n.context=vm(null),a=n.current,u=Sn(),h=lr(a),g=Li(u,h),g.callback=r??null,rr(a,g,h),n.current.lanes=h,$i(n,h,u),wn(n,u),n}function al(n,r,a,u){var h=r.current,g=Sn(),M=lr(h);return a=vm(a),r.context===null?r.context=a:r.pendingContext=a,r=Li(g,M),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=rr(h,r,M),n!==null&&(si(n,h,M,g),Fa(n,h,M)),M}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function xm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Hu(n,r){xm(n,r),(n=n.alternate)&&xm(n,r)}function W0(){return null}var Sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vu(n){this._internalRoot=n}cl.prototype.render=Vu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));al(n,r,null,null)},cl.prototype.unmount=Vu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Nr(function(){al(null,n,null,null)}),r[Ri]=null}};function cl(n){this._internalRoot=n}cl.prototype.unstable_scheduleHydration=function(n){if(n){var r=rh();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Ki.length&&r!==0&&r<Ki[a].priority;a++);Ki.splice(a,0,n),a===0&&ah(n)}};function Gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ul(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function X0(n,r,a,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var te=ll(M);g.call(te)}}var M=ym(r,u,n,0,null,!1,!1,"",Mm);return n._reactRootContainer=M,n[Ri]=M.current,Mo(n.nodeType===8?n.parentNode:n),Nr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var I=u;u=function(){var te=ll(k);I.call(te)}}var k=zu(n,0,!1,null,null,!1,!1,"",Mm);return n._reactRootContainer=k,n[Ri]=k.current,Mo(n.nodeType===8?n.parentNode:n),Nr(function(){al(r,k,a,u)}),k}function fl(n,r,a,u,h){var g=a._reactRootContainer;if(g){var M=g;if(typeof h=="function"){var I=h;h=function(){var k=ll(M);I.call(k)}}al(r,M,n,h)}else M=X0(a,r,n,h,u);return ll(M)}nh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ci(r.pendingLanes);a!==0&&(hc(r,a|1),wn(r,Te()),(_t&6)===0&&(As=Te()+500,nr()))}break;case 13:Nr(function(){var u=bi(n,1);if(u!==null){var h=Sn();si(u,n,1,h)}}),Hu(n,1)}},pc=function(n){if(n.tag===13){var r=bi(n,134217728);if(r!==null){var a=Sn();si(r,n,134217728,a)}Hu(n,134217728)}},ih=function(n){if(n.tag===13){var r=lr(n),a=bi(n,r);if(a!==null){var u=Sn();si(a,n,r,u)}Hu(n,r)}},rh=function(){return Tt},sh=function(n,r){var a=Tt;try{return Tt=n,r()}finally{Tt=a}},re=function(n,r,a){switch(r){case"input":if(Je(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var h=wa(u);if(!h)throw Error(t(90));ut(u),Je(u,h)}}}break;case"textarea":_e(n,a);break;case"select":r=a.value,r!=null&&R(n,!!a.multiple,r,!1)}},rn=Uu,mt=Nr;var $0={usingClientEntryPoint:!1,Events:[Co,ps,wa,dt,Ot,Uu]},Bo={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=G(n),n===null?null:n.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||W0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{At=dl.inject(j0),It=dl}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$0,Pn.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(r))throw Error(t(200));return G0(n,r,null,a)},Pn.createRoot=function(n,r){if(!Gu(n))throw Error(t(299));var a=!1,u="",h=Sm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=zu(n,1,!1,null,null,a,!1,u,h),n[Ri]=r.current,Mo(n.nodeType===8?n.parentNode:n),new Vu(r)},Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=G(r),n=n===null?null:n.stateNode,n},Pn.flushSync=function(n){return Nr(n)},Pn.hydrate=function(n,r,a){if(!ul(r))throw Error(t(200));return fl(null,n,r,!0,a)},Pn.hydrateRoot=function(n,r,a){if(!Gu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,g="",M=Sm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),r=ym(r,null,n,1,a??null,h,!1,g,M),n[Ri]=r.current,Mo(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,h]:r.mutableSourceEagerHydrationData.push(a,h);return new cl(r)},Pn.render=function(n,r,a){if(!ul(r))throw Error(t(200));return fl(null,n,r,!1,a)},Pn.unmountComponentAtNode=function(n){if(!ul(n))throw Error(t(40));return n._reactRootContainer?(Nr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ri]=null})}),!0):!1},Pn.unstable_batchedUpdates=Uu,Pn.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!ul(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,r,a,!1,u)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var bm;function ry(){if(bm)return $u.exports;bm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),$u.exports=iy(),$u.exports}var Lm;function sy(){if(Lm)return hl;Lm=1;var s=ry();return hl.createRoot=s.createRoot,hl.hydrateRoot=s.hydrateRoot,hl}var oy=sy();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="169",ay=0,Dm=1,ly=2,Gg=1,cy=2,Bi=3,Er=0,Dn=1,zi=2,xr=0,Xs=1,Im=2,Um=3,Nm=4,uy=5,jr=100,fy=101,dy=102,hy=103,py=104,my=200,gy=201,_y=202,vy=203,Nf=204,Of=205,yy=206,xy=207,Sy=208,My=209,Ey=210,Ty=211,Cy=212,Ry=213,Ay=214,kf=0,Ff=1,Bf=2,qs=3,zf=4,Hf=5,Vf=6,Gf=7,Wg=0,wy=1,Py=2,Sr=0,by=1,Ly=2,Dy=3,Iy=4,Uy=5,Ny=6,Oy=7,Xg=300,Ks=301,Js=302,Wf=303,Xf=304,lc=306,$f=1e3,Kr=1001,jf=1002,Zn=1003,ky=1004,pl=1005,ci=1006,qu=1007,Jr=1008,Gi=1009,$g=1010,jg=1011,na=1012,Od=1013,Zr=1014,Hi=1015,ra=1016,kd=1017,Fd=1018,Zs=1020,Yg=35902,qg=1021,Kg=1022,fi=1023,Jg=1024,Zg=1025,$s=1026,Qs=1027,Qg=1028,Bd=1029,e_=1030,zd=1031,Hd=1033,zl=33776,Hl=33777,Vl=33778,Gl=33779,Yf=35840,qf=35841,Kf=35842,Jf=35843,Zf=36196,Qf=37492,ed=37496,td=37808,nd=37809,id=37810,rd=37811,sd=37812,od=37813,ad=37814,ld=37815,cd=37816,ud=37817,fd=37818,dd=37819,hd=37820,pd=37821,Wl=36492,md=36494,gd=36495,t_=36283,_d=36284,vd=36285,yd=36286,Fy=3200,By=3201,n_=0,zy=1,vr="",vi="srgb",Cr="srgb-linear",Vd="display-p3",cc="display-p3-linear",Ql="linear",Dt="srgb",ec="rec709",tc="p3",Ps=7680,Om=519,Hy=512,Vy=513,Gy=514,i_=515,Wy=516,Xy=517,$y=518,jy=519,km=35044,Fm="300 es",Vi=2e3,nc=2001;class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,xd=180/Math.PI;function sa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function ln(s,e,t){return Math.max(e,Math.min(t,s))}function Yy(s,e){return(s%e+e)%e}function Ju(s,e,t){return(1-t)*s+t*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*o+e.x,this.y=l*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,o,l,c,f,d,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,c,f,d,p)}set(e,t,i,o,l,c,f,d,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=i,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,c=i[0],f=i[3],d=i[6],p=i[1],m=i[4],_=i[7],v=i[2],y=i[5],E=i[8],C=o[0],x=o[3],S=o[6],D=o[1],w=o[4],b=o[7],H=o[2],N=o[5],U=o[8];return l[0]=c*C+f*D+d*H,l[3]=c*x+f*w+d*N,l[6]=c*S+f*b+d*U,l[1]=p*C+m*D+_*H,l[4]=p*x+m*w+_*N,l[7]=p*S+m*b+_*U,l[2]=v*C+y*D+E*H,l[5]=v*x+y*w+E*N,l[8]=v*S+y*b+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8];return t*c*m-t*f*p-i*l*m+i*f*d+o*l*p-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],_=m*c-f*p,v=f*d-m*l,y=p*l-c*d,E=t*_+i*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(o*p-m*i)*C,e[2]=(f*i-o*c)*C,e[3]=v*C,e[4]=(m*t-o*d)*C,e[5]=(o*l-f*t)*C,e[6]=y*C,e[7]=(i*d-p*t)*C,e[8]=(c*t-i*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(i*d,i*p,-i*(d*c+p*f)+c+e,-o*p,o*d,-o*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zu=new ot;function r_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qy(){const s=ic("canvas");return s.style.display="block",s}const Bm={};function Xl(s){s in Bm||(Bm[s]=!0,console.warn(s))}function Ky(s,e,t){return new Promise(function(i,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}function Jy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zm=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hm=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Go={[Cr]:{transfer:Ql,primaries:ec,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[vi]:{transfer:Dt,primaries:ec,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[cc]:{transfer:Ql,primaries:tc,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Hm),fromReference:s=>s.applyMatrix3(zm)},[Vd]:{transfer:Dt,primaries:tc,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hm),fromReference:s=>s.applyMatrix3(zm).convertLinearToSRGB()}},Qy=new Set([Cr,cc]),Et={enabled:!0,_workingColorSpace:Cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Qy.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Go[e].toReference,o=Go[t].fromReference;return o(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Go[s].primaries},getTransfer:function(s){return s===vr?Ql:Go[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Go[e].luminanceCoefficients)}};function js(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class ex{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=ic("canvas")),bs.width=e.width,bs.height=e.height;const i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ic("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=js(l[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(js(t[i]/255)*255):t[i]=js(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tx=0;class s_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=sa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(ef(o[c].image)):l.push(ef(o[c]))}else l=ef(o);i.url=l}return t||(e.images[this.uuid]=i),i}}function ef(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ex.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nx=0;class In extends to{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,i=Kr,o=Kr,l=ci,c=Jr,f=fi,d=Gi,p=In.DEFAULT_ANISOTROPY,m=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=sa(),this.name="",this.source=new s_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $f:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $f:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Xg;In.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,o=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,l;const d=e.elements,p=d[0],m=d[4],_=d[8],v=d[1],y=d[5],E=d[9],C=d[2],x=d[6],S=d[10];if(Math.abs(m-v)<.01&&Math.abs(_-C)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+C)<.1&&Math.abs(E+x)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(p+1)/2,b=(y+1)/2,H=(S+1)/2,N=(m+v)/4,U=(_+C)/4,$=(E+x)/4;return w>b&&w>H?w<.01?(i=0,o=.707106781,l=.707106781):(i=Math.sqrt(w),o=N/i,l=U/i):b>H?b<.01?(i=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),i=N/o,l=$/o):H<.01?(i=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),i=U/l,o=$/l),this.set(i,o,l,t),this}let D=Math.sqrt((x-E)*(x-E)+(_-C)*(_-C)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(x-E)/D,this.y=(_-C)/D,this.z=(v-m)/D,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ix extends to{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new In(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new s_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends ix{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class o_ extends In{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rx extends In{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,l,c,f){let d=i[o+0],p=i[o+1],m=i[o+2],_=i[o+3];const v=l[c+0],y=l[c+1],E=l[c+2],C=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=y,e[t+2]=E,e[t+3]=C;return}if(_!==C||d!==v||p!==y||m!==E){let x=1-f;const S=d*v+p*y+m*E+_*C,D=S>=0?1:-1,w=1-S*S;if(w>Number.EPSILON){const H=Math.sqrt(w),N=Math.atan2(H,S*D);x=Math.sin(x*N)/H,f=Math.sin(f*N)/H}const b=f*D;if(d=d*x+v*b,p=p*x+y*b,m=m*x+E*b,_=_*x+C*b,x===1-f){const H=1/Math.sqrt(d*d+p*p+m*m+_*_);d*=H,p*=H,m*=H,_*=H}}e[t]=d,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,l,c){const f=i[o],d=i[o+1],p=i[o+2],m=i[o+3],_=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return e[t]=f*E+m*_+d*y-p*v,e[t+1]=d*E+m*v+p*_-f*y,e[t+2]=p*E+m*y+f*v-d*_,e[t+3]=m*E-f*_-d*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(i/2),m=f(o/2),_=f(l/2),v=d(i/2),y=d(o/2),E=d(l/2);switch(c){case"XYZ":this._x=v*m*_+p*y*E,this._y=p*y*_-v*m*E,this._z=p*m*E+v*y*_,this._w=p*m*_-v*y*E;break;case"YXZ":this._x=v*m*_+p*y*E,this._y=p*y*_-v*m*E,this._z=p*m*E-v*y*_,this._w=p*m*_+v*y*E;break;case"ZXY":this._x=v*m*_-p*y*E,this._y=p*y*_+v*m*E,this._z=p*m*E+v*y*_,this._w=p*m*_-v*y*E;break;case"ZYX":this._x=v*m*_-p*y*E,this._y=p*y*_+v*m*E,this._z=p*m*E-v*y*_,this._w=p*m*_+v*y*E;break;case"YZX":this._x=v*m*_+p*y*E,this._y=p*y*_+v*m*E,this._z=p*m*E-v*y*_,this._w=p*m*_-v*y*E;break;case"XZY":this._x=v*m*_-p*y*E,this._y=p*y*_-v*m*E,this._z=p*m*E+v*y*_,this._w=p*m*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],m=t[6],_=t[10],v=i+f+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-d)*y,this._y=(l-p)*y,this._z=(c-o)*y}else if(i>f&&i>_){const y=2*Math.sqrt(1+i-f-_);this._w=(m-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(l+p)/y}else if(f>_){const y=2*Math.sqrt(1+f-i-_);this._w=(l-p)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+_-i-f);this._w=(c-o)/y,this._x=(l+p)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,m=t._w;return this._x=i*m+c*f+o*p-l*d,this._y=o*m+c*d+l*f-i*p,this._z=l*m+c*p+i*d-o*f,this._w=c*m-i*f-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+i*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=i,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),m=Math.atan2(p,f),_=Math.sin((1-t)*m)/p,v=Math.sin(t*m)/p;return this._w=c*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*o,this.y=l[1]*t+l[4]*i+l[7]*o,this.z=l[2]*t+l[5]*i+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*o-f*i),m=2*(f*t-l*o),_=2*(l*i-c*t);return this.x=t+d*p+c*_-f*m,this.y=i+d*m+f*p-l*_,this.z=o+d*_+l*m-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*o,this.y=l[1]*t+l[5]*i+l[9]*o,this.z=l[2]*t+l[6]*i+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-i*d,this.z=i*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tf=new X,Vm=new oa;class aa{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,oi):oi.fromBufferAttribute(l,c),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),gl.subVectors(this.max,Wo),Ls.subVectors(e.a,Wo),Ds.subVectors(e.b,Wo),Is.subVectors(e.c,Wo),dr.subVectors(Ds,Ls),hr.subVectors(Is,Ds),Br.subVectors(Ls,Is);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Br.z,Br.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Br.z,0,-Br.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Br.y,Br.x,0];return!nf(t,Ls,Ds,Is,gl)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,Ls,Ds,Is,gl))?!1:(_l.crossVectors(dr,hr),t=[_l.x,_l.y,_l.z],nf(t,Ls,Ds,Is,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new X,new X,new X,new X,new X,new X,new X,new X],oi=new X,ml=new aa,Ls=new X,Ds=new X,Is=new X,dr=new X,hr=new X,Br=new X,Wo=new X,gl=new X,_l=new X,zr=new X;function nf(s,e,t,i,o){for(let l=0,c=s.length-3;l<=c;l+=3){zr.fromArray(s,l);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),d=e.dot(zr),p=t.dot(zr),m=i.dot(zr);if(Math.max(-Math.max(d,p,m),Math.min(d,p,m))>f)return!1}return!0}const sx=new aa,Xo=new X,rf=new X;class uc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sx.setFromPoints(e).getCenter(i);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const t=Xo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Xo,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(rf)),this.expandByPoint(Xo.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new X,sf=new X,vl=new X,pr=new X,of=new X,yl=new X,af=new X;class a_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){sf.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(sf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(vl),f=pr.dot(this.direction),d=-pr.dot(vl),p=pr.lengthSq(),m=Math.abs(1-c*c);let _,v,y,E;if(m>0)if(_=c*d-f,v=c*f-d,E=l*m,_>=0)if(v>=-E)if(v<=E){const C=1/m;_*=C,v*=C,y=_*(_+c*v+2*f)+v*(c*_+v+2*d)+p}else v=l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+p;else v=-l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+p;else v<=-E?(_=Math.max(0,-(-c*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),y=-_*_+v*(v+2*d)+p):v<=E?(_=0,v=Math.min(Math.max(-l,-d),l),y=v*(v+2*d)+p):(_=Math.max(0,-(c*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),y=-_*_+v*(v+2*d)+p);else v=c>0?-l:l,_=Math.max(0,-(c*v+f)),y=-_*_+v*(v+2*d)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(sf).addScaledVector(vl,v),y}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),o=Ni.dot(Ni)-i*i,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=i-c,d=i+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,l,c,f,d;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(i=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(i=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||l>o||((l>i||isNaN(i))&&(i=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),i>d||f>o)||((f>i||i!==i)&&(i=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,o,l){of.subVectors(t,e),yl.subVectors(i,e),af.crossVectors(of,yl);let c=this.direction.dot(af),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,e);const d=f*this.direction.dot(yl.crossVectors(pr,yl));if(d<0)return null;const p=f*this.direction.dot(of.cross(pr));if(p<0||d+p>c)return null;const m=-f*pr.dot(af);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,i,o,l,c,f,d,p,m,_,v,y,E,C,x){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,c,f,d,p,m,_,v,y,E,C,x)}set(e,t,i,o,l,c,f,d,p,m,_,v,y,E,C,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=o,S[1]=l,S[5]=c,S[9]=f,S[13]=d,S[2]=p,S[6]=m,S[10]=_,S[14]=v,S[3]=y,S[7]=E,S[11]=C,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),c=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),d=Math.cos(o),p=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=c*m,y=c*_,E=f*m,C=f*_;t[0]=d*m,t[4]=-d*_,t[8]=p,t[1]=y+E*p,t[5]=v-C*p,t[9]=-f*d,t[2]=C-v*p,t[6]=E+y*p,t[10]=c*d}else if(e.order==="YXZ"){const v=d*m,y=d*_,E=p*m,C=p*_;t[0]=v+C*f,t[4]=E*f-y,t[8]=c*p,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=y*f-E,t[6]=C+v*f,t[10]=c*d}else if(e.order==="ZXY"){const v=d*m,y=d*_,E=p*m,C=p*_;t[0]=v-C*f,t[4]=-c*_,t[8]=E+y*f,t[1]=y+E*f,t[5]=c*m,t[9]=C-v*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const v=c*m,y=c*_,E=f*m,C=f*_;t[0]=d*m,t[4]=E*p-y,t[8]=v*p+C,t[1]=d*_,t[5]=C*p+v,t[9]=y*p-E,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,y=c*p,E=f*d,C=f*p;t[0]=d*m,t[4]=C-v*_,t[8]=E*_+y,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-p*m,t[6]=y*_+E,t[10]=v-C*_}else if(e.order==="XZY"){const v=c*d,y=c*p,E=f*d,C=f*p;t[0]=d*m,t[4]=-_,t[8]=p*m,t[1]=v*_+C,t[5]=c*m,t[9]=y*_-E,t[2]=E*_-y,t[6]=f*m,t[10]=C*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ox,e,ax)}lookAt(e,t,i){const o=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),mr.crossVectors(i,zn),mr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),mr.crossVectors(i,zn)),mr.normalize(),xl.crossVectors(zn,mr),o[0]=mr.x,o[4]=xl.x,o[8]=zn.x,o[1]=mr.y,o[5]=xl.y,o[9]=zn.y,o[2]=mr.z,o[6]=xl.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,c=i[0],f=i[4],d=i[8],p=i[12],m=i[1],_=i[5],v=i[9],y=i[13],E=i[2],C=i[6],x=i[10],S=i[14],D=i[3],w=i[7],b=i[11],H=i[15],N=o[0],U=o[4],$=o[8],he=o[12],T=o[1],P=o[5],ne=o[9],Y=o[13],oe=o[2],ce=o[6],Q=o[10],ae=o[14],F=o[3],ue=o[7],se=o[11],O=o[15];return l[0]=c*N+f*T+d*oe+p*F,l[4]=c*U+f*P+d*ce+p*ue,l[8]=c*$+f*ne+d*Q+p*se,l[12]=c*he+f*Y+d*ae+p*O,l[1]=m*N+_*T+v*oe+y*F,l[5]=m*U+_*P+v*ce+y*ue,l[9]=m*$+_*ne+v*Q+y*se,l[13]=m*he+_*Y+v*ae+y*O,l[2]=E*N+C*T+x*oe+S*F,l[6]=E*U+C*P+x*ce+S*ue,l[10]=E*$+C*ne+x*Q+S*se,l[14]=E*he+C*Y+x*ae+S*O,l[3]=D*N+w*T+b*oe+H*F,l[7]=D*U+w*P+b*ce+H*ue,l[11]=D*$+w*ne+b*Q+H*se,l[15]=D*he+w*Y+b*ae+H*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],m=e[2],_=e[6],v=e[10],y=e[14],E=e[3],C=e[7],x=e[11],S=e[15];return E*(+l*d*_-o*p*_-l*f*v+i*p*v+o*f*y-i*d*y)+C*(+t*d*y-t*p*v+l*c*v-o*c*y+o*p*m-l*d*m)+x*(+t*p*_-t*f*y-l*c*_+i*c*y+l*f*m-i*p*m)+S*(-o*f*m-t*d*_+t*f*v+o*c*_-i*c*v+i*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],m=e[8],_=e[9],v=e[10],y=e[11],E=e[12],C=e[13],x=e[14],S=e[15],D=_*x*p-C*v*p+C*d*y-f*x*y-_*d*S+f*v*S,w=E*v*p-m*x*p-E*d*y+c*x*y+m*d*S-c*v*S,b=m*C*p-E*_*p+E*f*y-c*C*y-m*f*S+c*_*S,H=E*_*d-m*C*d-E*f*v+c*C*v+m*f*x-c*_*x,N=t*D+i*w+o*b+l*H;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=D*U,e[1]=(C*v*l-_*x*l-C*o*y+i*x*y+_*o*S-i*v*S)*U,e[2]=(f*x*l-C*d*l+C*o*p-i*x*p-f*o*S+i*d*S)*U,e[3]=(_*d*l-f*v*l-_*o*p+i*v*p+f*o*y-i*d*y)*U,e[4]=w*U,e[5]=(m*x*l-E*v*l+E*o*y-t*x*y-m*o*S+t*v*S)*U,e[6]=(E*d*l-c*x*l-E*o*p+t*x*p+c*o*S-t*d*S)*U,e[7]=(c*v*l-m*d*l+m*o*p-t*v*p-c*o*y+t*d*y)*U,e[8]=b*U,e[9]=(E*_*l-m*C*l-E*i*y+t*C*y+m*i*S-t*_*S)*U,e[10]=(c*C*l-E*f*l+E*i*p-t*C*p-c*i*S+t*f*S)*U,e[11]=(m*f*l-c*_*l-m*i*p+t*_*p+c*i*y-t*f*y)*U,e[12]=H*U,e[13]=(m*C*o-E*_*o+E*i*v-t*C*v-m*i*x+t*_*x)*U,e[14]=(E*f*o-c*C*o-E*i*d+t*C*d+c*i*x-t*f*x)*U,e[15]=(c*_*o-m*f*o+m*i*d-t*_*d-c*i*v+t*f*v)*U,this}scale(e){const t=this.elements,i=e.x,o=e.y,l=e.z;return t[0]*=i,t[4]*=o,t[8]*=l,t[1]*=i,t[5]*=o,t[9]*=l,t[2]*=i,t[6]*=o,t[10]*=l,t[3]*=i,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),l=1-i,c=e.x,f=e.y,d=e.z,p=l*c,m=l*f;return this.set(p*c+i,p*f-o*d,p*d+o*f,0,p*f+o*d,m*f+i,m*d-o*c,0,p*d-o*f,m*d+o*c,l*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,l,c){return this.set(1,i,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,m=c+c,_=f+f,v=l*p,y=l*m,E=l*_,C=c*m,x=c*_,S=f*_,D=d*p,w=d*m,b=d*_,H=i.x,N=i.y,U=i.z;return o[0]=(1-(C+S))*H,o[1]=(y+b)*H,o[2]=(E-w)*H,o[3]=0,o[4]=(y-b)*N,o[5]=(1-(v+S))*N,o[6]=(x+D)*N,o[7]=0,o[8]=(E+w)*U,o[9]=(x-D)*U,o[10]=(1-(v+C))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let l=Us.set(o[0],o[1],o[2]).length();const c=Us.set(o[4],o[5],o[6]).length(),f=Us.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ai.copy(this);const p=1/l,m=1/c,_=1/f;return ai.elements[0]*=p,ai.elements[1]*=p,ai.elements[2]*=p,ai.elements[4]*=m,ai.elements[5]*=m,ai.elements[6]*=m,ai.elements[8]*=_,ai.elements[9]*=_,ai.elements[10]*=_,t.setFromRotationMatrix(ai),i.x=l,i.y=c,i.z=f,this}makePerspective(e,t,i,o,l,c,f=Vi){const d=this.elements,p=2*l/(t-e),m=2*l/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let y,E;if(f===Vi)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===nc)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,l,c,f=Vi){const d=this.elements,p=1/(t-e),m=1/(i-o),_=1/(c-l),v=(t+e)*p,y=(i+o)*m;let E,C;if(f===Vi)E=(c+l)*_,C=-2*_;else if(f===nc)E=l*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=C,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Us=new X,ai=new Nt,ox=new X(0,0,0),ax=new X(1,1,1),mr=new X,xl=new X,zn=new X,Gm=new Nt,Wm=new oa;class Si{constructor(e=0,t=0,i=0,o=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],p=o[5],m=o[9],_=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ln(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ln(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class l_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lx=0;const Xm=new X,Ns=new oa,Oi=new Nt,Sl=new X,$o=new X,cx=new X,ux=new oa,$m=new X(1,0,0),jm=new X(0,1,0),Ym=new X(0,0,1),qm={type:"added"},fx={type:"removed"},Os={type:"childadded",child:null},lf={type:"childremoved",child:null};class cn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new X,t=new Si,i=new oa,o=new X(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ot}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(jm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,t){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(jm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sl.copy(e):Sl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt($o,Sl,this.up):Oi.lookAt(Sl,$o,this.up),this.quaternion.setFromRotationMatrix(Oi),o&&(Oi.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(Oi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fx),lf.child=e,this.dispatchEvent(lf),lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){const _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),y=c(e.animations),E=c(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=o,i;function c(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}cn.DEFAULT_UP=new X(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new X,ki=new X,cf=new X,Fi=new X,ks=new X,Fs=new X,Km=new X,uf=new X,ff=new X,df=new X,hf=new zt,pf=new zt,mf=new zt;class ui{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),li.subVectors(e,t),o.cross(li);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,i,o,l){li.subVectors(o,t),ki.subVectors(i,t),cf.subVectors(e,t);const c=li.dot(li),f=li.dot(ki),d=li.dot(cf),p=ki.dot(ki),m=ki.dot(cf),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,y=(p*d-f*m)*v,E=(c*m-f*d)*v;return l.set(1-y-E,E,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,i,o,l,c,f,d){return this.getBarycoord(e,t,i,o,Fi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Fi.x),d.addScaledVector(c,Fi.y),d.addScaledVector(f,Fi.z),d)}static getInterpolatedAttribute(e,t,i,o,l,c){return hf.setScalar(0),pf.setScalar(0),mf.setScalar(0),hf.fromBufferAttribute(e,t),pf.fromBufferAttribute(e,i),mf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(hf,l.x),c.addScaledVector(pf,l.y),c.addScaledVector(mf,l.z),c}static isFrontFacing(e,t,i,o){return li.subVectors(i,t),ki.subVectors(e,t),li.cross(ki).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),li.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,l){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,o,l)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,l=this.c;let c,f;ks.subVectors(o,i),Fs.subVectors(l,i),uf.subVectors(e,i);const d=ks.dot(uf),p=Fs.dot(uf);if(d<=0&&p<=0)return t.copy(i);ff.subVectors(e,o);const m=ks.dot(ff),_=Fs.dot(ff);if(m>=0&&_<=m)return t.copy(o);const v=d*_-m*p;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(i).addScaledVector(ks,c);df.subVectors(e,l);const y=ks.dot(df),E=Fs.dot(df);if(E>=0&&y<=E)return t.copy(l);const C=y*p-d*E;if(C<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(i).addScaledVector(Fs,f);const x=m*E-y*_;if(x<=0&&_-m>=0&&y-E>=0)return Km.subVectors(l,o),f=(_-m)/(_-m+(y-E)),t.copy(o).addScaledVector(Km,f);const S=1/(x+C+v);return c=C*S,f=v*S,t.copy(i).addScaledVector(ks,c).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function gf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Et.workingColorSpace){if(e=Yy(e,1),t=ln(t,0,1),i=ln(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=gf(c,l,e+1/3),this.g=gf(c,l,e),this.b=gf(c,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,t=vi){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){const i=c_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Qu(e.r),this.g=Qu(e.g),this.b=Qu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return Et.fromWorkingColorSpace(_n.copy(this),e),Math.round(ln(_n.r*255,0,255))*65536+Math.round(ln(_n.g*255,0,255))*256+Math.round(ln(_n.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(_n.copy(this),t);const i=_n.r,o=_n.g,l=_n.b,c=Math.max(i,o,l),f=Math.min(i,o,l);let d,p;const m=(f+c)/2;if(f===c)d=0,p=0;else{const _=c-f;switch(p=m<=.5?_/(c+f):_/(2-c-f),c){case i:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-i)/_+2;break;case l:d=(i-o)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=m,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=vi){Et.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,i=_n.g,o=_n.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(Ml);const i=Ju(gr.h,Ml.h,t),o=Ju(gr.s,Ml.s,t),l=Ju(gr.l,Ml.l,t);return this.setHSL(i,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*o,this.g=l[1]*t+l[4]*i+l[7]*o,this.b=l[2]*t+l[5]*i+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new at;at.NAMES=c_;let dx=0;class no extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=Xs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Of,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nf&&(i.blendSrc=this.blendSrc),this.blendDst!==Of&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let l=0;l!==o;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class u_ extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Wg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new X,El=new je;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=km,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),o=bn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,l){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),i=bn(i,this.array),o=bn(o,this.array),l=bn(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class f_ extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class d_ extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class un extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hx=0;const Kn=new Nt,_f=new cn,Bs=new X,Hn=new aa,jo=new aa,tn=new X;class di extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r_(e)?d_:f_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ot().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,i){return Kn.makeTranslation(e,t,i),this.applyMatrix4(Kn),this}scale(e,t,i){return Kn.makeScale(e,t,i),this.applyMatrix4(Kn),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const l=e[i];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const l=t[i];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];jo.setFromBufferAttribute(f),this.morphTargetsRelative?(tn.addVectors(Hn.min,jo.min),Hn.expandByPoint(tn),tn.addVectors(Hn.max,jo.max),Hn.expandByPoint(tn)):(Hn.expandByPoint(jo.min),Hn.expandByPoint(jo.max))}Hn.getCenter(i);let o=0;for(let l=0,c=e.count;l<c;l++)tn.fromBufferAttribute(e,l),o=Math.max(o,i.distanceToSquared(tn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)tn.fromBufferAttribute(f,p),d&&(Bs.fromBufferAttribute(e,p),tn.add(Bs)),o=Math.max(o,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let $=0;$<i.count;$++)f[$]=new X,d[$]=new X;const p=new X,m=new X,_=new X,v=new je,y=new je,E=new je,C=new X,x=new X;function S($,he,T){p.fromBufferAttribute(i,$),m.fromBufferAttribute(i,he),_.fromBufferAttribute(i,T),v.fromBufferAttribute(l,$),y.fromBufferAttribute(l,he),E.fromBufferAttribute(l,T),m.sub(p),_.sub(p),y.sub(v),E.sub(v);const P=1/(y.x*E.y-E.x*y.y);isFinite(P)&&(C.copy(m).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(P),x.copy(_).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(P),f[$].add(C),f[he].add(C),f[T].add(C),d[$].add(x),d[he].add(x),d[T].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let $=0,he=D.length;$<he;++$){const T=D[$],P=T.start,ne=T.count;for(let Y=P,oe=P+ne;Y<oe;Y+=3)S(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const w=new X,b=new X,H=new X,N=new X;function U($){H.fromBufferAttribute(o,$),N.copy(H);const he=f[$];w.copy(he),w.sub(H.multiplyScalar(H.dot(he))).normalize(),b.crossVectors(N,he);const P=b.dot(d[$])<0?-1:1;c.setXYZW($,w.x,w.y,w.z,P)}for(let $=0,he=D.length;$<he;++$){const T=D[$],P=T.start,ne=T.count;for(let Y=P,oe=P+ne;Y<oe;Y+=3)U(e.getX(Y+0)),U(e.getX(Y+1)),U(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const o=new X,l=new X,c=new X,f=new X,d=new X,p=new X,m=new X,_=new X;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),C=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,x),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,C),p.fromBufferAttribute(i,x),f.add(m),d.add(m),p.add(m),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(C,d.x,d.y,d.z),i.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),_.subVectors(o,l),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(f,d){const p=f.array,m=f.itemSize,_=f.normalized,v=new p.constructor(d.length*m);let y=0,E=0;for(let C=0,x=d.length;C<x;C++){f.isInterleavedBufferAttribute?y=d[C]*f.data.stride+f.offset:y=d[C]*m;for(let S=0;S<m;S++)v[E++]=p[y++]}return new xi(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,i=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=e(d,i);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let m=0,_=p.length;m<_;m++){const v=p[m],y=e(v,i);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const p=i[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],m=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];m.push(y.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],_=l[p];for(let v=0,y=_.length;v<y;v++)m.push(_[v].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,m=c.length;p<m;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jm=new Nt,Hr=new a_,Tl=new uc,Zm=new X,Cl=new X,Rl=new X,Al=new X,vf=new X,wl=new X,Qm=new X,Pl=new X;class Vn extends cn{constructor(e=new di,t=new u_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){wl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const m=f[d],_=l[d];m!==0&&(vf.fromBufferAttribute(_,e),c?wl.addScaledVector(vf,m):wl.addScaledVector(vf.sub(t),m))}t.add(wl)}return t}raycast(e,t){const i=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(Tl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Tl,Zm)===null||Hr.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Jm.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(Jm),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,i){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,C=v.length;E<C;E++){const x=v[E],S=c[x.materialIndex],D=Math.max(x.start,y.start),w=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let b=D,H=w;b<H;b+=3){const N=f.getX(b),U=f.getX(b+1),$=f.getX(b+2);o=bl(this,S,e,i,p,m,_,N,U,$),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(f.count,y.start+y.count);for(let x=E,S=C;x<S;x+=3){const D=f.getX(x),w=f.getX(x+1),b=f.getX(x+2);o=bl(this,c,e,i,p,m,_,D,w,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,C=v.length;E<C;E++){const x=v[E],S=c[x.materialIndex],D=Math.max(x.start,y.start),w=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let b=D,H=w;b<H;b+=3){const N=b,U=b+1,$=b+2;o=bl(this,S,e,i,p,m,_,N,U,$),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let x=E,S=C;x<S;x+=3){const D=x,w=x+1,b=x+2;o=bl(this,c,e,i,p,m,_,D,w,b),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function px(s,e,t,i,o,l,c,f){let d;if(e.side===Dn?d=i.intersectTriangle(c,l,o,!0,f):d=i.intersectTriangle(o,l,c,e.side===Er,f),d===null)return null;Pl.copy(f),Pl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Pl);return p<t.near||p>t.far?null:{distance:p,point:Pl.clone(),object:s}}function bl(s,e,t,i,o,l,c,f,d,p){s.getVertexPosition(f,Cl),s.getVertexPosition(d,Rl),s.getVertexPosition(p,Al);const m=px(s,e,t,i,Cl,Rl,Al,Qm);if(m){const _=new X;ui.getBarycoord(Qm,Cl,Rl,Al,_),o&&(m.uv=ui.getInterpolatedAttribute(o,f,d,p,_,new je)),l&&(m.uv1=ui.getInterpolatedAttribute(l,f,d,p,_,new je)),c&&(m.normal=ui.getInterpolatedAttribute(c,f,d,p,_,new X),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new X,materialIndex:0};ui.getNormal(Cl,Rl,Al,v.normal),m.face=v,m.barycoord=_}return m}class io extends di{constructor(e=1,t=1,i=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],m=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,i,t,e,c,l,0),E("z","y","x",1,-1,i,t,-e,c,l,1),E("x","z","y",1,1,e,i,t,o,c,2),E("x","z","y",1,-1,e,i,-t,o,c,3),E("x","y","z",1,-1,e,t,i,o,l,4),E("x","y","z",-1,-1,e,t,-i,o,l,5),this.setIndex(d),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(_,2));function E(C,x,S,D,w,b,H,N,U,$,he){const T=b/U,P=H/$,ne=b/2,Y=H/2,oe=N/2,ce=U+1,Q=$+1;let ae=0,F=0;const ue=new X;for(let se=0;se<Q;se++){const O=se*P-Y;for(let ie=0;ie<ce;ie++){const Ue=ie*T-ne;ue[C]=Ue*D,ue[x]=O*w,ue[S]=oe,p.push(ue.x,ue.y,ue.z),ue[C]=0,ue[x]=0,ue[S]=N>0?1:-1,m.push(ue.x,ue.y,ue.z),_.push(ie/U),_.push(1-se/$),ae+=1}}for(let se=0;se<$;se++)for(let O=0;O<U;O++){const ie=v+O+ce*se,Ue=v+O+ce*(se+1),J=v+(O+1)+ce*(se+1),le=v+(O+1)+ce*se;d.push(ie,Ue,le),d.push(Ue,J,le),F+=6}f.addGroup(y,F,he),y+=F,v+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Mn(s){const e={};for(let t=0;t<s.length;t++){const i=eo(s[t]);for(const o in i)e[o]=i[o]}return e}function mx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function h_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const gx={clone:eo,merge:Mn};var _x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class p_ extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new X,eg=new je,tg=new je;class Jn extends p_{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xd*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,eg,tg),t.subVectors(tg,eg)}setViewOffset(e,t,i,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ku*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*i/p,o*=c.width/d,i*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Hs=1;class yx extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Jn(zs,Hs,e,t);o.layers=this.layers,this.add(o);const l=new Jn(zs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new Jn(zs,Hs,e,t);c.layers=this.layers,this.add(c);const f=new Jn(zs,Hs,e,t);f.layers=this.layers,this.add(f);const d=new Jn(zs,Hs,e,t);d.layers=this.layers,this.add(d);const p=new Jn(zs,Hs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===nc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,l),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,f),e.setRenderTarget(i,3,o),e.render(t,d),e.setRenderTarget(i,4,o),e.render(t,p),i.texture.generateMipmaps=C,e.setRenderTarget(i,5,o),e.render(t,m),e.setRenderTarget(_,v,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class m_ extends In{constructor(e,t,i,o,l,c,f,d,p,m){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,i,o,l,c,f,d,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xx extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new m_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new io(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:xr});l.uniforms.tEquirect.value=t;const c=new Vn(o,l),f=t.minFilter;return t.minFilter===Jr&&(t.minFilter=ci),new yx(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(l)}}const yf=new X,Sx=new X,Mx=new ot;class Xr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=yf.subVectors(i,t).cross(Sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yf),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Mx.getNormalMatrix(e),o=this.coplanarPoint(yf).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new uc,Ll=new X;class Gd{constructor(e=new Xr,t=new Xr,i=new Xr,o=new Xr,l=new Xr,c=new Xr){this.planes=[e,t,i,o,l,c]}set(e,t,i,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){const i=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],d=o[3],p=o[4],m=o[5],_=o[6],v=o[7],y=o[8],E=o[9],C=o[10],x=o[11],S=o[12],D=o[13],w=o[14],b=o[15];if(i[0].setComponents(d-l,v-p,x-y,b-S).normalize(),i[1].setComponents(d+l,v+p,x+y,b+S).normalize(),i[2].setComponents(d+c,v+m,x+E,b+D).normalize(),i[3].setComponents(d-c,v-m,x-E,b-D).normalize(),i[4].setComponents(d-f,v-_,x-C,b-w).normalize(),t===Vi)i[5].setComponents(d+f,v+_,x+C,b+w).normalize();else if(t===nc)i[5].setComponents(f,_,C,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Ll.x=o.normal.x>0?e.max.x:e.min.x,Ll.y=o.normal.y>0?e.max.y:e.min.y,Ll.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function g_(){let s=null,e=!1,t=null,i=null;function o(l,c){t(l,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ex(s){const e=new WeakMap;function t(f,d){const p=f.array,m=f.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,p,m),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,d,p){const m=d.array,_=d.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,m);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],C=_[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++v,_[v]=C)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const C=_[y];s.bufferSubData(p,C.start*m.BYTES_PER_ELEMENT,m,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:c}}class la extends di{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(i),d=Math.floor(o),p=f+1,m=d+1,_=e/f,v=t/d,y=[],E=[],C=[],x=[];for(let S=0;S<m;S++){const D=S*v-c;for(let w=0;w<p;w++){const b=w*_-l;E.push(b,-D,0),C.push(0,0,1),x.push(w/f),x.push(1-S/d)}}for(let S=0;S<d;S++)for(let D=0;D<f;D++){const w=D+p*S,b=D+p*(S+1),H=D+1+p*(S+1),N=D+1+p*S;y.push(w,b,N),y.push(b,H,N)}this.setIndex(y),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(C,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cx=`#ifdef USE_ALPHAHASH
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
#endif`,Rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bx=`#ifdef USE_AOMAP
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
#endif`,Lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx=`#ifdef USE_BATCHING
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
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Fx=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jx=`#define PI 3.141592653589793
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
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qx=`vec3 transformedNormal = objectNormal;
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
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eS="gl_FragColor = linearToOutputTexel( gl_FragColor );",tS=`
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
}`,nS=`#ifdef USE_ENVMAP
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
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rS=`#ifdef USE_ENVMAP
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
#endif`,sS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,aS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fS=`#ifdef USE_GRADIENTMAP
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
}`,dS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mS=`uniform bool receiveShadow;
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
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,_S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SS=`PhysicalMaterial material;
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
#endif`,MS=`struct PhysicalMaterial {
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
}`,ES=`
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
#endif`,TS=`#if defined( RE_IndirectDiffuse )
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
#endif`,CS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IS=`#if defined( USE_POINTS_UV )
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
#endif`,US=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
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
#endif`,zS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
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
#endif`,jS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lM=`float getShadowMask() {
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
}`,cM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uM=`#ifdef USE_SKINNING
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
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dM=`#ifdef USE_SKINNING
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
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
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
#endif`,vM=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
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
}`,bM=`#if DEPTH_PACKING == 3200
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
}`,LM=`#define DISTANCE
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
}`,DM=`#define DISTANCE
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
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`uniform float scale;
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
}`,OM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,FM=`uniform vec3 diffuse;
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
}`,BM=`#define LAMBERT
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
}`,zM=`#define LAMBERT
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
}`,HM=`#define MATCAP
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
}`,VM=`#define MATCAP
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
}`,GM=`#define NORMAL
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
}`,WM=`#define NORMAL
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
}`,XM=`#define PHONG
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
}`,$M=`#define PHONG
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
}`,jM=`#define STANDARD
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
}`,YM=`#define STANDARD
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
}`,qM=`#define TOON
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
}`,KM=`#define TOON
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
}`,JM=`uniform float size;
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
}`,ZM=`uniform vec3 diffuse;
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
}`,QM=`#include <common>
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
}`,eE=`uniform vec3 color;
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
}`,tE=`uniform float rotation;
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
}`,nE=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Tx,alphahash_pars_fragment:Cx,alphamap_fragment:Rx,alphamap_pars_fragment:Ax,alphatest_fragment:wx,alphatest_pars_fragment:Px,aomap_fragment:bx,aomap_pars_fragment:Lx,batching_pars_vertex:Dx,batching_vertex:Ix,begin_vertex:Ux,beginnormal_vertex:Nx,bsdfs:Ox,iridescence_fragment:kx,bumpmap_pars_fragment:Fx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Vx,color_fragment:Gx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:$x,common:jx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:qx,displacementmap_pars_vertex:Kx,displacementmap_vertex:Jx,emissivemap_fragment:Zx,emissivemap_pars_fragment:Qx,colorspace_fragment:eS,colorspace_pars_fragment:tS,envmap_fragment:nS,envmap_common_pars_fragment:iS,envmap_pars_fragment:rS,envmap_pars_vertex:sS,envmap_physical_pars_fragment:gS,envmap_vertex:oS,fog_vertex:aS,fog_pars_vertex:lS,fog_fragment:cS,fog_pars_fragment:uS,gradientmap_pars_fragment:fS,lightmap_pars_fragment:dS,lights_lambert_fragment:hS,lights_lambert_pars_fragment:pS,lights_pars_begin:mS,lights_toon_fragment:_S,lights_toon_pars_fragment:vS,lights_phong_fragment:yS,lights_phong_pars_fragment:xS,lights_physical_fragment:SS,lights_physical_pars_fragment:MS,lights_fragment_begin:ES,lights_fragment_maps:TS,lights_fragment_end:CS,logdepthbuf_fragment:RS,logdepthbuf_pars_fragment:AS,logdepthbuf_pars_vertex:wS,logdepthbuf_vertex:PS,map_fragment:bS,map_pars_fragment:LS,map_particle_fragment:DS,map_particle_pars_fragment:IS,metalnessmap_fragment:US,metalnessmap_pars_fragment:NS,morphinstance_vertex:OS,morphcolor_vertex:kS,morphnormal_vertex:FS,morphtarget_pars_vertex:BS,morphtarget_vertex:zS,normal_fragment_begin:HS,normal_fragment_maps:VS,normal_pars_fragment:GS,normal_pars_vertex:WS,normal_vertex:XS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:jS,clearcoat_normal_fragment_maps:YS,clearcoat_pars_fragment:qS,iridescence_pars_fragment:KS,opaque_fragment:JS,packing:ZS,premultiplied_alpha_fragment:QS,project_vertex:eM,dithering_fragment:tM,dithering_pars_fragment:nM,roughnessmap_fragment:iM,roughnessmap_pars_fragment:rM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:oM,shadowmap_vertex:aM,shadowmask_pars_fragment:lM,skinbase_vertex:cM,skinning_pars_vertex:uM,skinning_vertex:fM,skinnormal_vertex:dM,specularmap_fragment:hM,specularmap_pars_fragment:pM,tonemapping_fragment:mM,tonemapping_pars_fragment:gM,transmission_fragment:_M,transmission_pars_fragment:vM,uv_pars_fragment:yM,uv_pars_vertex:xM,uv_vertex:SM,worldpos_vertex:MM,background_vert:EM,background_frag:TM,backgroundCube_vert:CM,backgroundCube_frag:RM,cube_vert:AM,cube_frag:wM,depth_vert:PM,depth_frag:bM,distanceRGBA_vert:LM,distanceRGBA_frag:DM,equirect_vert:IM,equirect_frag:UM,linedashed_vert:NM,linedashed_frag:OM,meshbasic_vert:kM,meshbasic_frag:FM,meshlambert_vert:BM,meshlambert_frag:zM,meshmatcap_vert:HM,meshmatcap_frag:VM,meshnormal_vert:GM,meshnormal_frag:WM,meshphong_vert:XM,meshphong_frag:$M,meshphysical_vert:jM,meshphysical_frag:YM,meshtoon_vert:qM,meshtoon_frag:KM,points_vert:JM,points_frag:ZM,shadow_vert:QM,shadow_frag:eE,sprite_vert:tE,sprite_frag:nE},Ae={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Mn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Mn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Mn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Mn([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Mn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Mn([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Mn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Mn([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Mn([Ae.common,Ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Mn([Ae.lights,Ae.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};yi.physical={uniforms:Mn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Dl={r:0,b:0,g:0},Gr=new Si,iE=new Nt;function rE(s,e,t,i,o,l,c){const f=new at(0);let d=l===!0?0:1,p,m,_=null,v=0,y=null;function E(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?t:e).get(w)),w}function C(D){let w=!1;const b=E(D);b===null?S(f,d):b&&b.isColor&&(S(b,1),w=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(D,w){const b=E(w);b&&(b.isCubeTexture||b.mapping===lc)?(m===void 0&&(m=new Vn(new io(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:eo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(H,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Gr.copy(w.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(iE.makeRotationFromEuler(Gr)),m.material.toneMapped=Et.getTransfer(b.colorSpace)!==Dt,(_!==b||v!==b.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,_=b,v=b.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new Vn(new la(2,2),new Tr({name:"BackgroundMaterial",uniforms:eo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Et.getTransfer(b.colorSpace)!==Dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(_!==b||v!==b.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,_=b,v=b.version,y=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function S(D,w){D.getRGB(Dl,h_(s)),i.buffers.color.setClear(Dl.r,Dl.g,Dl.b,w,c)}return{getClearColor:function(){return f},setClearColor:function(D,w=1){f.set(D),d=w,S(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,S(f,d)},render:C,addToRenderList:x}}function sE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=v(null);let l=o,c=!1;function f(T,P,ne,Y,oe){let ce=!1;const Q=_(Y,ne,P);l!==Q&&(l=Q,p(l.object)),ce=y(T,Y,ne,oe),ce&&E(T,Y,ne,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,b(T,P,ne,Y),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function d(){return s.createVertexArray()}function p(T){return s.bindVertexArray(T)}function m(T){return s.deleteVertexArray(T)}function _(T,P,ne){const Y=ne.wireframe===!0;let oe=i[T.id];oe===void 0&&(oe={},i[T.id]=oe);let ce=oe[P.id];ce===void 0&&(ce={},oe[P.id]=ce);let Q=ce[Y];return Q===void 0&&(Q=v(d()),ce[Y]=Q),Q}function v(T){const P=[],ne=[],Y=[];for(let oe=0;oe<t;oe++)P[oe]=0,ne[oe]=0,Y[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:ne,attributeDivisors:Y,object:T,attributes:{},index:null}}function y(T,P,ne,Y){const oe=l.attributes,ce=P.attributes;let Q=0;const ae=ne.getAttributes();for(const F in ae)if(ae[F].location>=0){const se=oe[F];let O=ce[F];if(O===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(O=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(O=T.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Y}function E(T,P,ne,Y){const oe={},ce=P.attributes;let Q=0;const ae=ne.getAttributes();for(const F in ae)if(ae[F].location>=0){let se=ce[F];se===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(se=T.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),oe[F]=O,Q++}l.attributes=oe,l.attributesNum=Q,l.index=Y}function C(){const T=l.newAttributes;for(let P=0,ne=T.length;P<ne;P++)T[P]=0}function x(T){S(T,0)}function S(T,P){const ne=l.newAttributes,Y=l.enabledAttributes,oe=l.attributeDivisors;ne[T]=1,Y[T]===0&&(s.enableVertexAttribArray(T),Y[T]=1),oe[T]!==P&&(s.vertexAttribDivisor(T,P),oe[T]=P)}function D(){const T=l.newAttributes,P=l.enabledAttributes;for(let ne=0,Y=P.length;ne<Y;ne++)P[ne]!==T[ne]&&(s.disableVertexAttribArray(ne),P[ne]=0)}function w(T,P,ne,Y,oe,ce,Q){Q===!0?s.vertexAttribIPointer(T,P,ne,oe,ce):s.vertexAttribPointer(T,P,ne,Y,oe,ce)}function b(T,P,ne,Y){C();const oe=Y.attributes,ce=ne.getAttributes(),Q=P.defaultAttributeValues;for(const ae in ce){const F=ce[ae];if(F.location>=0){let ue=oe[ae];if(ue===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){const se=ue.normalized,O=ue.itemSize,ie=e.get(ue);if(ie===void 0)continue;const Ue=ie.buffer,J=ie.type,le=ie.bytesPerElement,ye=J===s.INT||J===s.UNSIGNED_INT||ue.gpuType===Od;if(ue.isInterleavedBufferAttribute){const xe=ue.data,we=xe.stride,Pe=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let tt=0;tt<F.locationSize;tt++)S(F.location+tt,xe.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let tt=0;tt<F.locationSize;tt++)x(F.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let tt=0;tt<F.locationSize;tt++)w(F.location+tt,O/F.locationSize,J,se,we*le,(Pe+O/F.locationSize*tt)*le,ye)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<F.locationSize;xe++)S(F.location+xe,ue.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<F.locationSize;xe++)x(F.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let xe=0;xe<F.locationSize;xe++)w(F.location+xe,O/F.locationSize,J,se,O*le,O/F.locationSize*xe*le,ye)}}else if(Q!==void 0){const se=Q[ae];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(F.location,se);break;case 3:s.vertexAttrib3fv(F.location,se);break;case 4:s.vertexAttrib4fv(F.location,se);break;default:s.vertexAttrib1fv(F.location,se)}}}}D()}function H(){$();for(const T in i){const P=i[T];for(const ne in P){const Y=P[ne];for(const oe in Y)m(Y[oe].object),delete Y[oe];delete P[ne]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const ne in P){const Y=P[ne];for(const oe in Y)m(Y[oe].object),delete Y[oe];delete P[ne]}delete i[T.id]}function U(T){for(const P in i){const ne=i[P];if(ne[T.id]===void 0)continue;const Y=ne[T.id];for(const oe in Y)m(Y[oe].object),delete Y[oe];delete ne[T.id]}}function $(){he(),c=!0,l!==o&&(l=o,p(l.object))}function he(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:$,resetDefaultState:he,dispose:H,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:x,disableUnusedAttributes:D}}function oE(s,e,t){let i;function o(p){i=p}function l(p,m){s.drawArrays(i,p,m),t.update(m,i,1)}function c(p,m,_){_!==0&&(s.drawArraysInstanced(i,p,m,_),t.update(m,i,_))}function f(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,m,0,_);let y=0;for(let E=0;E<_;E++)y+=m[E];t.update(y,i,1)}function d(p,m,_,v){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)c(p[E],m[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(i,p,0,m,0,v,0,_);let E=0;for(let C=0;C<_;C++)E+=m[C];for(let C=0;C<v.length;C++)t.update(E,i,v[C])}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function aE(s,e,t,i){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==fi&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const $=U===ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Gi&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Hi&&!$)}function d(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=d(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(v===!0){const U=e.get("EXT_clip_control");U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT)}const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:D,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:H,maxSamples:N}}function lE(s){const e=this;let t=null,i=0,o=!1,l=!1;const c=new Xr,f=new ot,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||i!==0||o;return o=v,i=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!o||E===null||E.length===0||l&&!x)l?m(null):p();else{const D=l?0:i,w=D*4;let b=S.clippingState||null;d.value=b,b=m(E,v,w,y);for(let H=0;H!==w;++H)b[H]=t[H];S.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,y,E){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=d.value,E!==!0||x===null){const S=y+C*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(x===null||x.length<S)&&(x=new Float32Array(S));for(let w=0,b=y;w!==C;++w,b+=4)c.copy(_[w]).applyMatrix4(D,f),c.normal.toArray(x,b),x[b+3]=c.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}function cE(s){let e=new WeakMap;function t(c,f){return f===Wf?c.mapping=Ks:f===Xf&&(c.mapping=Js),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===Wf||f===Xf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new xx(d.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}class __ extends p_{constructor(e=-1,t=1,i=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,ng=[.125,.215,.35,.446,.526,.582],Yr=20,xf=new __,ig=new at;let Sf=null,Mf=0,Ef=0,Tf=!1;const $r=(1+Math.sqrt(5))/2,Vs=1/$r,rg=[new X(-$r,Vs,0),new X($r,Vs,0),new X(-Vs,0,$r),new X(Vs,0,$r),new X(0,$r,-Vs),new X(0,$r,Vs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Sf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Mf,Ef),this._renderer.xr.enabled=Tf,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:ra,format:fi,colorSpace:Cr,depthBuffer:!1},o=og(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uE(l)),this._blurMaterial=fE(l,e,t)}return o}_compileMaterial(e){const t=new Vn(this._lodPlanes[0],e);this._renderer.compile(t,xf)}_sceneToCubeUV(e,t,i,o){const f=new Jn(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(ig),m.toneMapping=Sr,m.autoClear=!1;const y=new u_({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),E=new Vn(new io,y);let C=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,C=!0):(y.color.copy(ig),C=!0);for(let S=0;S<6;S++){const D=S%3;D===0?(f.up.set(0,d[S],0),f.lookAt(p[S],0,0)):D===1?(f.up.set(0,0,d[S]),f.lookAt(0,p[S],0)):(f.up.set(0,d[S],0),f.lookAt(0,0,p[S]));const w=this._cubeSize;Il(o,D*w,S>2?w:0,w,w),m.setRenderTarget(o),C&&m.render(E,f),m.render(e,f)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Ks||e.mapping===Js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ag());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Vn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Il(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,xf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=rg[(o-l-1)%rg.length];this._blur(e,l-1,l,c,f)}t.autoClear=i}_blur(e,t,i,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",l),this._halfBlur(c,e,i,i,o,"longitudinal",l)}_halfBlur(e,t,i,o,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Vn(this._lodPlanes[o],p),v=p.uniforms,y=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Yr-1),C=l/E,x=isFinite(l)?1+Math.floor(m*C):Yr;x>Yr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Yr}`);const S=[];let D=0;for(let U=0;U<Yr;++U){const $=U/C,he=Math.exp(-$*$/2);S.push(he),U===0?D+=he:U<x&&(D+=2*he)}for(let U=0;U<S.length;U++)S[U]=S[U]/D;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-i;const b=this._sizeLods[o],H=3*b*(o>w-Ws?o-w+Ws:0),N=4*(this._cubeSize-b);Il(t,H,N,3*b,2*b),d.setRenderTarget(t),d.render(_,xf)}}function uE(s){const e=[],t=[],i=[];let o=s;const l=s-Ws+1+ng.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let d=1/f;c>s-Ws?d=ng[c-s+Ws-1]:c===0&&(d=0),i.push(d);const p=1/(f-2),m=-p,_=1+p,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,E=6,C=3,x=2,S=1,D=new Float32Array(C*E*y),w=new Float32Array(x*E*y),b=new Float32Array(S*E*y);for(let N=0;N<y;N++){const U=N%3*2/3-1,$=N>2?0:-1,he=[U,$,0,U+2/3,$,0,U+2/3,$+1,0,U,$,0,U+2/3,$+1,0,U,$+1,0];D.set(he,C*E*N),w.set(v,x*E*N);const T=[N,N,N,N,N,N];b.set(T,S*E*N)}const H=new di;H.setAttribute("position",new xi(D,C)),H.setAttribute("uv",new xi(w,x)),H.setAttribute("faceIndex",new xi(b,S)),e.push(H),o>Ws&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function og(s,e,t){const i=new Qr(s,e,t);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Il(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function fE(s,e,t){const i=new Float32Array(Yr),o=new X(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function ag(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function lg(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function dE(s){let e=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const d=f.mapping,p=d===Wf||d===Xf,m=d===Ks||d===Js;if(p||m){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new sg(s)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return p&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new sg(s)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let d=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function hE(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Xl("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function pE(s,e,t,i){const o={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const C=v.morphAttributes[E];for(let x=0,S=C.length;x<S;x++)e.remove(C[x])}v.removeEventListener("dispose",c),delete o[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function d(_){const v=_.attributes;for(const E in v)e.update(v[E],s.ARRAY_BUFFER);const y=_.morphAttributes;for(const E in y){const C=y[E];for(let x=0,S=C.length;x<S;x++)e.update(C[x],s.ARRAY_BUFFER)}}function p(_){const v=[],y=_.index,E=_.attributes.position;let C=0;if(y!==null){const D=y.array;C=y.version;for(let w=0,b=D.length;w<b;w+=3){const H=D[w+0],N=D[w+1],U=D[w+2];v.push(H,N,N,U,U,H)}}else if(E!==void 0){const D=E.array;C=E.version;for(let w=0,b=D.length/3-1;w<b;w+=3){const H=w+0,N=w+1,U=w+2;v.push(H,N,N,U,U,H)}}else return;const x=new(r_(v)?d_:f_)(v,1);x.version=C;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function m(_){const v=l.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:m}}function mE(s,e,t){let i;function o(v){i=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,y){s.drawElements(i,y,l,v*c),t.update(y,i,1)}function p(v,y,E){E!==0&&(s.drawElementsInstanced(i,y,l,v*c,E),t.update(y,i,E))}function m(v,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,l,v,0,E);let x=0;for(let S=0;S<E;S++)x+=y[S];t.update(x,i,1)}function _(v,y,E,C){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v.length;S++)p(v[S]/c,y[S],C[S]);else{x.multiDrawElementsInstancedWEBGL(i,y,0,l,v,0,C,0,E);let S=0;for(let D=0;D<E;D++)S+=y[D];for(let D=0;D<C.length;D++)t.update(S,i,C[D])}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function gE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function _E(s,e,t){const i=new WeakMap,o=new zt;function l(c,f,d){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=i.get(f);if(v===void 0||v.count!==_){let T=function(){$.dispose(),i.delete(f),f.removeEventListener("dispose",T)};var y=T;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let b=0;E===!0&&(b=1),C===!0&&(b=2),x===!0&&(b=3);let H=f.attributes.position.count*b,N=1;H>e.maxTextureSize&&(N=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const U=new Float32Array(H*N*4*_),$=new o_(U,H,N,_);$.type=Hi,$.needsUpdate=!0;const he=b*4;for(let P=0;P<_;P++){const ne=S[P],Y=D[P],oe=w[P],ce=H*N*4*P;for(let Q=0;Q<ne.count;Q++){const ae=Q*he;E===!0&&(o.fromBufferAttribute(ne,Q),U[ce+ae+0]=o.x,U[ce+ae+1]=o.y,U[ce+ae+2]=o.z,U[ce+ae+3]=0),C===!0&&(o.fromBufferAttribute(Y,Q),U[ce+ae+4]=o.x,U[ce+ae+5]=o.y,U[ce+ae+6]=o.z,U[ce+ae+7]=0),x===!0&&(o.fromBufferAttribute(oe,Q),U[ce+ae+8]=o.x,U[ce+ae+9]=o.y,U[ce+ae+10]=o.z,U[ce+ae+11]=oe.itemSize===4?o.w:1)}}v={count:_,texture:$,size:new je(H,N)},i.set(f,v),f.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const C=f.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",C),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function vE(s,e,t,i){let o=new WeakMap;function l(d){const p=i.render.frame,m=d.geometry,_=e.get(d,m);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return _}function c(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}class v_ extends In{constructor(e,t,i,o,l,c,f,d,p,m=$s){if(m!==$s&&m!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===$s&&(i=Zr),i===void 0&&m===Qs&&(i=Zs),super(null,o,l,c,f,d,m,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:Zn,this.minFilter=d!==void 0?d:Zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const y_=new In,cg=new v_(1,1),x_=new o_,S_=new rx,M_=new m_,ug=[],fg=[],dg=new Float32Array(16),hg=new Float32Array(9),pg=new Float32Array(4);function ro(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let l=ug[o];if(l===void 0&&(l=new Float32Array(o),ug[o]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function Yt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function qt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function fc(s,e){let t=fg[e];t===void 0&&(t=new Int32Array(e),fg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function yE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2fv(this.addr,e),qt(t,e)}}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;s.uniform3fv(this.addr,e),qt(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4fv(this.addr,e),qt(t,e)}}function EE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;pg.set(i),s.uniformMatrix2fv(this.addr,!1,pg),qt(t,i)}}function TE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;hg.set(i),s.uniformMatrix3fv(this.addr,!1,hg),qt(t,i)}}function CE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,i))return;dg.set(i),s.uniformMatrix4fv(this.addr,!1,dg),qt(t,i)}}function RE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function AE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2iv(this.addr,e),qt(t,e)}}function wE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3iv(this.addr,e),qt(t,e)}}function PE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4iv(this.addr,e),qt(t,e)}}function bE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function LE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2uiv(this.addr,e),qt(t,e)}}function DE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3uiv(this.addr,e),qt(t,e)}}function IE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4uiv(this.addr,e),qt(t,e)}}function UE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(cg.compareFunction=i_,l=cg):l=y_,t.setTexture2D(e||l,o)}function NE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||S_,o)}function OE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||M_,o)}function kE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||x_,o)}function FE(s){switch(s){case 5126:return yE;case 35664:return xE;case 35665:return SE;case 35666:return ME;case 35674:return EE;case 35675:return TE;case 35676:return CE;case 5124:case 35670:return RE;case 35667:case 35671:return AE;case 35668:case 35672:return wE;case 35669:case 35673:return PE;case 5125:return bE;case 36294:return LE;case 36295:return DE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return kE}}function BE(s,e){s.uniform1fv(this.addr,e)}function zE(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function HE(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function VE(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function GE(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function WE(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function XE(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $E(s,e){s.uniform1iv(this.addr,e)}function jE(s,e){s.uniform2iv(this.addr,e)}function YE(s,e){s.uniform3iv(this.addr,e)}function qE(s,e){s.uniform4iv(this.addr,e)}function KE(s,e){s.uniform1uiv(this.addr,e)}function JE(s,e){s.uniform2uiv(this.addr,e)}function ZE(s,e){s.uniform3uiv(this.addr,e)}function QE(s,e){s.uniform4uiv(this.addr,e)}function eT(s,e,t){const i=this.cache,o=e.length,l=fc(t,o);Yt(i,l)||(s.uniform1iv(this.addr,l),qt(i,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||y_,l[c])}function tT(s,e,t){const i=this.cache,o=e.length,l=fc(t,o);Yt(i,l)||(s.uniform1iv(this.addr,l),qt(i,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||S_,l[c])}function nT(s,e,t){const i=this.cache,o=e.length,l=fc(t,o);Yt(i,l)||(s.uniform1iv(this.addr,l),qt(i,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||M_,l[c])}function iT(s,e,t){const i=this.cache,o=e.length,l=fc(t,o);Yt(i,l)||(s.uniform1iv(this.addr,l),qt(i,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||x_,l[c])}function rT(s){switch(s){case 5126:return BE;case 35664:return zE;case 35665:return HE;case 35666:return VE;case 35674:return GE;case 35675:return WE;case 35676:return XE;case 5124:case 35670:return $E;case 35667:case 35671:return jE;case 35668:case 35672:return YE;case 35669:case 35673:return qE;case 5125:return KE;case 36294:return JE;case 36295:return ZE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}class sT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FE(t.type)}}class oT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rT(t.type)}}class aT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],i)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function mg(s,e){s.seq.push(e),s.map[e.id]=e}function lT(s,e,t){const i=s.name,o=i.length;for(Cf.lastIndex=0;;){const l=Cf.exec(i),c=Cf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===o){mg(t,p===void 0?new sT(f,s,e):new oT(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new aT(f),mg(t,_)),t=_}}}class $l{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);lT(l,c,this)}}setValue(e,t,i,o){const l=this.map[t];l!==void 0&&l.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function gg(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const cT=37297;let uT=0;function fT(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}function dT(s){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(s);let i;switch(e===t?i="":e===tc&&t===ec?i="LinearDisplayP3ToLinearSRGB":e===ec&&t===tc&&(i="LinearSRGBToLinearDisplayP3"),s){case Cr:case cc:return[i,"LinearTransferOETF"];case vi:case Vd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function _g(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+fT(s.getShaderSource(e),c)}else return o}function hT(s,e){const t=dT(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pT(s,e){let t;switch(e){case by:t="Linear";break;case Ly:t="Reinhard";break;case Dy:t="Cineon";break;case Iy:t="ACESFilmic";break;case Ny:t="AgX";break;case Oy:t="Neutral";break;case Uy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ul=new X;function mT(){Et.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function _T(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vT(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Ko(s){return s!==""}function vg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sd(s){return s.replace(yT,ST)}const xT=new Map;function ST(s,e){let t=st[e];if(t===void 0){const i=xT.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sd(t)}const MT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(s){return s.replace(MT,ET)}function ET(s,e,t,i){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Sg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cy?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function CT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Js:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function AT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wg:e="ENVMAP_BLENDING_MULTIPLY";break;case wy:e="ENVMAP_BLENDING_MIX";break;case Py:e="ENVMAP_BLENDING_ADD";break}return e}function wT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PT(s,e,t,i){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=TT(t),p=CT(t),m=RT(t),_=AT(t),v=wT(t),y=gT(t),E=_T(l),C=o.createProgram();let x,S,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ko).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ko).join(`
`),S.length>0&&(S+=`
`)):(x=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),S=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sr?"#define TONE_MAPPING":"",t.toneMapping!==Sr?st.tonemapping_pars_fragment:"",t.toneMapping!==Sr?pT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,hT("linearToOutputTexel",t.outputColorSpace),mT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ko).join(`
`)),c=Sd(c),c=vg(c,t),c=yg(c,t),f=Sd(f),f=vg(f,t),f=yg(f,t),c=xg(c),f=xg(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=D+x+c,b=D+S+f,H=gg(o,o.VERTEX_SHADER,w),N=gg(o,o.FRAGMENT_SHADER,b);o.attachShader(C,H),o.attachShader(C,N),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function U(P){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(C).trim(),Y=o.getShaderInfoLog(H).trim(),oe=o.getShaderInfoLog(N).trim();let ce=!0,Q=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,H,N);else{const ae=_g(o,H,"vertex"),F=_g(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ne+`
`+ae+`
`+F)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Y===""||oe==="")&&(Q=!1);Q&&(P.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:Y,prefix:x},fragmentShader:{log:oe,prefix:S}})}o.deleteShader(H),o.deleteShader(N),$=new $l(o,C),he=vT(o,C)}let $;this.getUniforms=function(){return $===void 0&&U(this),$};let he;this.getAttributes=function(){return he===void 0&&U(this),he};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(C,cT)),T},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=N,this}let bT=0;class LT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new DT(e),t.set(e,i)),i}}class DT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function IT(s,e,t,i,o,l,c){const f=new l_,d=new LT,p=new Set,m=[],_=o.logarithmicDepthBuffer,v=o.reverseDepthBuffer,y=o.vertexTextures;let E=o.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return p.add(T),T===0?"uv":`uv${T}`}function S(T,P,ne,Y,oe){const ce=Y.fog,Q=oe.geometry,ae=T.isMeshStandardMaterial?Y.environment:null,F=(T.isMeshStandardMaterial?t:e).get(T.envMap||ae),ue=F&&F.mapping===lc?F.image.height:null,se=C[T.type];T.precision!==null&&(E=o.getMaxPrecision(T.precision),E!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",E,"instead."));const O=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ie=O!==void 0?O.length:0;let Ue=0;Q.morphAttributes.position!==void 0&&(Ue=1),Q.morphAttributes.normal!==void 0&&(Ue=2),Q.morphAttributes.color!==void 0&&(Ue=3);let J,le,ye,xe;if(se){const Kt=yi[se];J=Kt.vertexShader,le=Kt.fragmentShader}else J=T.vertexShader,le=T.fragmentShader,d.update(T),ye=d.getVertexShaderID(T),xe=d.getFragmentShaderID(T);const we=s.getRenderTarget(),Pe=oe.isInstancedMesh===!0,tt=oe.isBatchedMesh===!0,gt=!!T.map,ut=!!T.matcap,B=!!F,nn=!!T.aoMap,ct=!!T.lightMap,ht=!!T.bumpMap,Je=!!T.normalMap,Ct=!!T.displacementMap,Qe=!!T.emissiveMap,L=!!T.metalnessMap,R=!!T.roughnessMap,K=T.anisotropy>0,de=T.clearcoat>0,_e=T.dispersion>0,fe=T.iridescence>0,$e=T.sheen>0,Ce=T.transmission>0,Ne=K&&!!T.anisotropyMap,pt=de&&!!T.clearcoatMap,Se=de&&!!T.clearcoatNormalMap,Oe=de&&!!T.clearcoatRoughnessMap,nt=fe&&!!T.iridescenceMap,et=fe&&!!T.iridescenceThicknessMap,Fe=$e&&!!T.sheenColorMap,ft=$e&&!!T.sheenRoughnessMap,rt=!!T.specularMap,Mt=!!T.specularColorMap,V=!!T.specularIntensityMap,be=Ce&&!!T.transmissionMap,re=Ce&&!!T.thicknessMap,pe=!!T.gradientMap,Re=!!T.alphaMap,De=T.alphaTest>0,dt=!!T.alphaHash,Ot=!!T.extensions;let rn=Sr;T.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(rn=s.toneMapping);const mt={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:J,fragmentShader:le,defines:T.defines,customVertexShaderID:ye,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:E,batching:tt,batchingColor:tt&&oe._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&oe.instanceColor!==null,instancingMorph:Pe&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Cr,alphaToCoverage:!!T.alphaToCoverage,map:gt,matcap:ut,envMap:B,envMapMode:B&&F.mapping,envMapCubeUVHeight:ue,aoMap:nn,lightMap:ct,bumpMap:ht,normalMap:Je,displacementMap:y&&Ct,emissiveMap:Qe,normalMapObjectSpace:Je&&T.normalMapType===zy,normalMapTangentSpace:Je&&T.normalMapType===n_,metalnessMap:L,roughnessMap:R,anisotropy:K,anisotropyMap:Ne,clearcoat:de,clearcoatMap:pt,clearcoatNormalMap:Se,clearcoatRoughnessMap:Oe,dispersion:_e,iridescence:fe,iridescenceMap:nt,iridescenceThicknessMap:et,sheen:$e,sheenColorMap:Fe,sheenRoughnessMap:ft,specularMap:rt,specularColorMap:Mt,specularIntensityMap:V,transmission:Ce,transmissionMap:be,thicknessMap:re,gradientMap:pe,opaque:T.transparent===!1&&T.blending===Xs&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:De,alphaHash:dt,combine:T.combine,mapUv:gt&&x(T.map.channel),aoMapUv:nn&&x(T.aoMap.channel),lightMapUv:ct&&x(T.lightMap.channel),bumpMapUv:ht&&x(T.bumpMap.channel),normalMapUv:Je&&x(T.normalMap.channel),displacementMapUv:Ct&&x(T.displacementMap.channel),emissiveMapUv:Qe&&x(T.emissiveMap.channel),metalnessMapUv:L&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:Ne&&x(T.anisotropyMap.channel),clearcoatMapUv:pt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ft&&x(T.sheenRoughnessMap.channel),specularMapUv:rt&&x(T.specularMap.channel),specularColorMapUv:Mt&&x(T.specularColorMap.channel),specularIntensityMapUv:V&&x(T.specularIntensityMap.channel),transmissionMapUv:be&&x(T.transmissionMap.channel),thicknessMapUv:re&&x(T.thicknessMap.channel),alphaMapUv:Re&&x(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Je||K),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!Q.attributes.uv&&(gt||Re),fog:!!ce,useFog:T.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:v,skinning:oe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ue,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&ne.length>0,shadowMapType:s.shadowMap.type,toneMapping:rn,decodeVideoTexture:gt&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zi,flipSided:T.side===Dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return mt.vertexUv1s=p.has(1),mt.vertexUv2s=p.has(2),mt.vertexUv3s=p.has(3),p.clear(),mt}function D(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ne in T.defines)P.push(ne),P.push(T.defines[ne]);return T.isRawShaderMaterial===!1&&(w(P,T),b(P,T),P.push(s.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function w(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function b(T,P){f.disableAll(),P.supportsVertexTextures&&f.enable(0),P.instancing&&f.enable(1),P.instancingColor&&f.enable(2),P.instancingMorph&&f.enable(3),P.matcap&&f.enable(4),P.envMap&&f.enable(5),P.normalMapObjectSpace&&f.enable(6),P.normalMapTangentSpace&&f.enable(7),P.clearcoat&&f.enable(8),P.iridescence&&f.enable(9),P.alphaTest&&f.enable(10),P.vertexColors&&f.enable(11),P.vertexAlphas&&f.enable(12),P.vertexUv1s&&f.enable(13),P.vertexUv2s&&f.enable(14),P.vertexUv3s&&f.enable(15),P.vertexTangents&&f.enable(16),P.anisotropy&&f.enable(17),P.alphaHash&&f.enable(18),P.batching&&f.enable(19),P.dispersion&&f.enable(20),P.batchingColor&&f.enable(21),T.push(f.mask),f.disableAll(),P.fog&&f.enable(0),P.useFog&&f.enable(1),P.flatShading&&f.enable(2),P.logarithmicDepthBuffer&&f.enable(3),P.reverseDepthBuffer&&f.enable(4),P.skinning&&f.enable(5),P.morphTargets&&f.enable(6),P.morphNormals&&f.enable(7),P.morphColors&&f.enable(8),P.premultipliedAlpha&&f.enable(9),P.shadowMapEnabled&&f.enable(10),P.doubleSided&&f.enable(11),P.flipSided&&f.enable(12),P.useDepthPacking&&f.enable(13),P.dithering&&f.enable(14),P.transmission&&f.enable(15),P.sheen&&f.enable(16),P.opaque&&f.enable(17),P.pointsUvs&&f.enable(18),P.decodeVideoTexture&&f.enable(19),P.alphaToCoverage&&f.enable(20),T.push(f.mask)}function H(T){const P=C[T.type];let ne;if(P){const Y=yi[P];ne=gx.clone(Y.uniforms)}else ne=T.uniforms;return ne}function N(T,P){let ne;for(let Y=0,oe=m.length;Y<oe;Y++){const ce=m[Y];if(ce.cacheKey===P){ne=ce,++ne.usedTimes;break}}return ne===void 0&&(ne=new PT(s,P,T,l),m.push(ne)),ne}function U(T){if(--T.usedTimes===0){const P=m.indexOf(T);m[P]=m[m.length-1],m.pop(),T.destroy()}}function $(T){d.remove(T)}function he(){d.dispose()}return{getParameters:S,getProgramCacheKey:D,getUniforms:H,acquireProgram:N,releaseProgram:U,releaseShaderCache:$,programs:m,dispose:he}}function UT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function i(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:l}}function NT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eg(){const s=[];let e=0;const t=[],i=[],o=[];function l(){e=0,t.length=0,i.length=0,o.length=0}function c(_,v,y,E,C,x){let S=s[e];return S===void 0?(S={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:C,group:x},s[e]=S):(S.id=_.id,S.object=_,S.geometry=v,S.material=y,S.groupOrder=E,S.renderOrder=_.renderOrder,S.z=C,S.group=x),e++,S}function f(_,v,y,E,C,x){const S=c(_,v,y,E,C,x);y.transmission>0?i.push(S):y.transparent===!0?o.push(S):t.push(S)}function d(_,v,y,E,C,x){const S=c(_,v,y,E,C,x);y.transmission>0?i.unshift(S):y.transparent===!0?o.unshift(S):t.unshift(S)}function p(_,v){t.length>1&&t.sort(_||NT),i.length>1&&i.sort(v||Mg),o.length>1&&o.sort(v||Mg)}function m(){for(let _=e,v=s.length;_<v;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:o,init:l,push:f,unshift:d,finish:m,sort:p}}function OT(){let s=new WeakMap;function e(i,o){const l=s.get(i);let c;return l===void 0?(c=new Eg,s.set(i,[c])):o>=l.length?(c=new Eg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function kT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new at};break;case"SpotLight":t={position:new X,direction:new X,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function FT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let BT=0;function zT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function HT(s){const e=new kT,t=FT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new X);const o=new X,l=new Nt,c=new Nt;function f(p){let m=0,_=0,v=0;for(let he=0;he<9;he++)i.probe[he].set(0,0,0);let y=0,E=0,C=0,x=0,S=0,D=0,w=0,b=0,H=0,N=0,U=0;p.sort(zT);for(let he=0,T=p.length;he<T;he++){const P=p[he],ne=P.color,Y=P.intensity,oe=P.distance,ce=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=ne.r*Y,_+=ne.g*Y,v+=ne.b*Y;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(P.sh.coefficients[Q],Y);U++}else if(P.isDirectionalLight){const Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ae=P.shadow,F=t.get(P);F.shadowIntensity=ae.intensity,F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,i.directionalShadow[y]=F,i.directionalShadowMap[y]=ce,i.directionalShadowMatrix[y]=P.shadow.matrix,D++}i.directional[y]=Q,y++}else if(P.isSpotLight){const Q=e.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(ne).multiplyScalar(Y),Q.distance=oe,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,i.spot[C]=Q;const ae=P.shadow;if(P.map&&(i.spotLightMap[H]=P.map,H++,ae.updateMatrices(P),P.castShadow&&N++),i.spotLightMatrix[C]=ae.matrix,P.castShadow){const F=t.get(P);F.shadowIntensity=ae.intensity,F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,i.spotShadow[C]=F,i.spotShadowMap[C]=ce,b++}C++}else if(P.isRectAreaLight){const Q=e.get(P);Q.color.copy(ne).multiplyScalar(Y),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=Q,x++}else if(P.isPointLight){const Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){const ae=P.shadow,F=t.get(P);F.shadowIntensity=ae.intensity,F.shadowBias=ae.bias,F.shadowNormalBias=ae.normalBias,F.shadowRadius=ae.radius,F.shadowMapSize=ae.mapSize,F.shadowCameraNear=ae.camera.near,F.shadowCameraFar=ae.camera.far,i.pointShadow[E]=F,i.pointShadowMap[E]=ce,i.pointShadowMatrix[E]=P.shadow.matrix,w++}i.point[E]=Q,E++}else if(P.isHemisphereLight){const Q=e.get(P);Q.skyColor.copy(P.color).multiplyScalar(Y),Q.groundColor.copy(P.groundColor).multiplyScalar(Y),i.hemi[S]=Q,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=v;const $=i.hash;($.directionalLength!==y||$.pointLength!==E||$.spotLength!==C||$.rectAreaLength!==x||$.hemiLength!==S||$.numDirectionalShadows!==D||$.numPointShadows!==w||$.numSpotShadows!==b||$.numSpotMaps!==H||$.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=C,i.rectArea.length=x,i.point.length=E,i.hemi.length=S,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+H-N,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=U,$.directionalLength=y,$.pointLength=E,$.spotLength=C,$.rectAreaLength=x,$.hemiLength=S,$.numDirectionalShadows=D,$.numPointShadows=w,$.numSpotShadows=b,$.numSpotMaps=H,$.numLightProbes=U,i.version=BT++)}function d(p,m){let _=0,v=0,y=0,E=0,C=0;const x=m.matrixWorldInverse;for(let S=0,D=p.length;S<D;S++){const w=p[S];if(w.isDirectionalLight){const b=i.directional[_];b.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),_++}else if(w.isSpotLight){const b=i.spot[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(x),y++}else if(w.isRectAreaLight){const b=i.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),c.identity(),l.copy(w.matrixWorld),l.premultiply(x),c.extractRotation(l),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(w.isPointLight){const b=i.point[v];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(x),v++}else if(w.isHemisphereLight){const b=i.hemi[C];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(x),C++}}}return{setup:f,setupView:d,state:i}}function Tg(s){const e=new HT(s),t=[],i=[];function o(m){p.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function c(m){i.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function VT(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new Tg(s),e.set(o,[f])):l>=c.length?(f=new Tg(s),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}class GT extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WT extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$T=`uniform sampler2D shadow_pass;
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
}`;function jT(s,e,t){let i=new Gd;const o=new je,l=new je,c=new zt,f=new GT({depthPacking:By}),d=new WT,p={},m=t.maxTextureSize,_={[Er]:Dn,[Dn]:Er,[zi]:zi},v=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:XT,fragmentShader:$T}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new di;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Vn(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gg;let S=this.type;this.render=function(N,U,$){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const he=s.getRenderTarget(),T=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(xr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Y=S!==Bi&&this.type===Bi,oe=S===Bi&&this.type!==Bi;for(let ce=0,Q=N.length;ce<Q;ce++){const ae=N[ce],F=ae.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const ue=F.getFrameExtents();if(o.multiply(ue),l.copy(F.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ue.x),o.x=l.x*ue.x,F.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ue.y),o.y=l.y*ue.y,F.mapSize.y=l.y)),F.map===null||Y===!0||oe===!0){const O=this.type!==Bi?{minFilter:Zn,magFilter:Zn}:{};F.map!==null&&F.map.dispose(),F.map=new Qr(o.x,o.y,O),F.map.texture.name=ae.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const se=F.getViewportCount();for(let O=0;O<se;O++){const ie=F.getViewport(O);c.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),ne.viewport(c),F.updateMatrices(ae,O),i=F.getFrustum(),b(U,$,F.camera,ae,this.type)}F.isPointLightShadow!==!0&&this.type===Bi&&D(F,$),F.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(he,T,P)};function D(N,U){const $=e.update(C);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Qr(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(U,null,$,v,C,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(U,null,$,y,C,null)}function w(N,U,$,he){let T=null;const P=$.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(P!==void 0)T=P;else if(T=$.isPointLight===!0?d:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ne=T.uuid,Y=U.uuid;let oe=p[ne];oe===void 0&&(oe={},p[ne]=oe);let ce=oe[Y];ce===void 0&&(ce=T.clone(),oe[Y]=ce,U.addEventListener("dispose",H)),T=ce}if(T.visible=U.visible,T.wireframe=U.wireframe,he===Bi?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:_[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,$.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ne=s.properties.get(T);ne.light=$}return T}function b(N,U,$,he,T){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Bi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,N.matrixWorld);const Y=e.update(N),oe=N.material;if(Array.isArray(oe)){const ce=Y.groups;for(let Q=0,ae=ce.length;Q<ae;Q++){const F=ce[Q],ue=oe[F.materialIndex];if(ue&&ue.visible){const se=w(N,ue,he,T);N.onBeforeShadow(s,N,U,$,Y,se,F),s.renderBufferDirect($,null,Y,se,N,F),N.onAfterShadow(s,N,U,$,Y,se,F)}}}else if(oe.visible){const ce=w(N,oe,he,T);N.onBeforeShadow(s,N,U,$,Y,ce,null),s.renderBufferDirect($,null,Y,ce,N,null),N.onAfterShadow(s,N,U,$,Y,ce,null)}}const ne=N.children;for(let Y=0,oe=ne.length;Y<oe;Y++)b(ne[Y],U,$,he,T)}function H(N){N.target.removeEventListener("dispose",H);for(const $ in p){const he=p[$],T=N.target.uuid;T in he&&(he[T].dispose(),delete he[T])}}}const YT={[kf]:Ff,[Bf]:Vf,[zf]:Gf,[qs]:Hf,[Ff]:kf,[Vf]:Bf,[Gf]:zf,[Hf]:qs};function qT(s){function e(){let V=!1;const be=new zt;let re=null;const pe=new zt(0,0,0,0);return{setMask:function(Re){re!==Re&&!V&&(s.colorMask(Re,Re,Re,Re),re=Re)},setLocked:function(Re){V=Re},setClear:function(Re,De,dt,Ot,rn){rn===!0&&(Re*=Ot,De*=Ot,dt*=Ot),be.set(Re,De,dt,Ot),pe.equals(be)===!1&&(s.clearColor(Re,De,dt,Ot),pe.copy(be))},reset:function(){V=!1,re=null,pe.set(-1,0,0,0)}}}function t(){let V=!1,be=!1,re=null,pe=null,Re=null;return{setReversed:function(De){be=De},setTest:function(De){De?ye(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(De){re!==De&&!V&&(s.depthMask(De),re=De)},setFunc:function(De){if(be&&(De=YT[De]),pe!==De){switch(De){case kf:s.depthFunc(s.NEVER);break;case Ff:s.depthFunc(s.ALWAYS);break;case Bf:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case zf:s.depthFunc(s.EQUAL);break;case Hf:s.depthFunc(s.GEQUAL);break;case Vf:s.depthFunc(s.GREATER);break;case Gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=De}},setLocked:function(De){V=De},setClear:function(De){Re!==De&&(s.clearDepth(De),Re=De)},reset:function(){V=!1,re=null,pe=null,Re=null}}}function i(){let V=!1,be=null,re=null,pe=null,Re=null,De=null,dt=null,Ot=null,rn=null;return{setTest:function(mt){V||(mt?ye(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(mt){be!==mt&&!V&&(s.stencilMask(mt),be=mt)},setFunc:function(mt,Kt,Gn){(re!==mt||pe!==Kt||Re!==Gn)&&(s.stencilFunc(mt,Kt,Gn),re=mt,pe=Kt,Re=Gn)},setOp:function(mt,Kt,Gn){(De!==mt||dt!==Kt||Ot!==Gn)&&(s.stencilOp(mt,Kt,Gn),De=mt,dt=Kt,Ot=Gn)},setLocked:function(mt){V=mt},setClear:function(mt){rn!==mt&&(s.clearStencil(mt),rn=mt)},reset:function(){V=!1,be=null,re=null,pe=null,Re=null,De=null,dt=null,Ot=null,rn=null}}}const o=new e,l=new t,c=new i,f=new WeakMap,d=new WeakMap;let p={},m={},_=new WeakMap,v=[],y=null,E=!1,C=null,x=null,S=null,D=null,w=null,b=null,H=null,N=new at(0,0,0),U=0,$=!1,he=null,T=null,P=null,ne=null,Y=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Q=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ce=Q>=1):ae.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ce=Q>=2);let F=null,ue={};const se=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),ie=new zt().fromArray(se),Ue=new zt().fromArray(O);function J(V,be,re,pe){const Re=new Uint8Array(4),De=s.createTexture();s.bindTexture(V,De),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<re;dt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(be+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return De}const le={};le[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(s.DEPTH_TEST),l.setFunc(qs),ct(!1),ht(Dm),ye(s.CULL_FACE),B(xr);function ye(V){p[V]!==!0&&(s.enable(V),p[V]=!0)}function xe(V){p[V]!==!1&&(s.disable(V),p[V]=!1)}function we(V,be){return m[V]!==be?(s.bindFramebuffer(V,be),m[V]=be,V===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=be),V===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=be),!0):!1}function Pe(V,be){let re=v,pe=!1;if(V){re=_.get(be),re===void 0&&(re=[],_.set(be,re));const Re=V.textures;if(re.length!==Re.length||re[0]!==s.COLOR_ATTACHMENT0){for(let De=0,dt=Re.length;De<dt;De++)re[De]=s.COLOR_ATTACHMENT0+De;re.length=Re.length,pe=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,pe=!0);pe&&s.drawBuffers(re)}function tt(V){return y!==V?(s.useProgram(V),y=V,!0):!1}const gt={[jr]:s.FUNC_ADD,[fy]:s.FUNC_SUBTRACT,[dy]:s.FUNC_REVERSE_SUBTRACT};gt[hy]=s.MIN,gt[py]=s.MAX;const ut={[my]:s.ZERO,[gy]:s.ONE,[_y]:s.SRC_COLOR,[Nf]:s.SRC_ALPHA,[Ey]:s.SRC_ALPHA_SATURATE,[Sy]:s.DST_COLOR,[yy]:s.DST_ALPHA,[vy]:s.ONE_MINUS_SRC_COLOR,[Of]:s.ONE_MINUS_SRC_ALPHA,[My]:s.ONE_MINUS_DST_COLOR,[xy]:s.ONE_MINUS_DST_ALPHA,[Ty]:s.CONSTANT_COLOR,[Cy]:s.ONE_MINUS_CONSTANT_COLOR,[Ry]:s.CONSTANT_ALPHA,[Ay]:s.ONE_MINUS_CONSTANT_ALPHA};function B(V,be,re,pe,Re,De,dt,Ot,rn,mt){if(V===xr){E===!0&&(xe(s.BLEND),E=!1);return}if(E===!1&&(ye(s.BLEND),E=!0),V!==uy){if(V!==C||mt!==$){if((x!==jr||w!==jr)&&(s.blendEquation(s.FUNC_ADD),x=jr,w=jr),mt)switch(V){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFunc(s.ONE,s.ONE);break;case Um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,D=null,b=null,H=null,N.set(0,0,0),U=0,C=V,$=mt}return}Re=Re||be,De=De||re,dt=dt||pe,(be!==x||Re!==w)&&(s.blendEquationSeparate(gt[be],gt[Re]),x=be,w=Re),(re!==S||pe!==D||De!==b||dt!==H)&&(s.blendFuncSeparate(ut[re],ut[pe],ut[De],ut[dt]),S=re,D=pe,b=De,H=dt),(Ot.equals(N)===!1||rn!==U)&&(s.blendColor(Ot.r,Ot.g,Ot.b,rn),N.copy(Ot),U=rn),C=V,$=!1}function nn(V,be){V.side===zi?xe(s.CULL_FACE):ye(s.CULL_FACE);let re=V.side===Dn;be&&(re=!re),ct(re),V.blending===Xs&&V.transparent===!1?B(xr):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);const pe=V.stencilWrite;c.setTest(pe),pe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ct(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(V){he!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),he=V)}function ht(V){V!==ay?(ye(s.CULL_FACE),V!==T&&(V===Dm?s.cullFace(s.BACK):V===ly?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),T=V}function Je(V){V!==P&&(ce&&s.lineWidth(V),P=V)}function Ct(V,be,re){V?(ye(s.POLYGON_OFFSET_FILL),(ne!==be||Y!==re)&&(s.polygonOffset(be,re),ne=be,Y=re)):xe(s.POLYGON_OFFSET_FILL)}function Qe(V){V?ye(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function L(V){V===void 0&&(V=s.TEXTURE0+oe-1),F!==V&&(s.activeTexture(V),F=V)}function R(V,be,re){re===void 0&&(F===null?re=s.TEXTURE0+oe-1:re=F);let pe=ue[re];pe===void 0&&(pe={type:void 0,texture:void 0},ue[re]=pe),(pe.type!==V||pe.texture!==be)&&(F!==re&&(s.activeTexture(re),F=re),s.bindTexture(V,be||le[V]),pe.type=V,pe.texture=be)}function K(){const V=ue[F];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){ie.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function Fe(V){Ue.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ue.copy(V))}function ft(V,be){let re=d.get(be);re===void 0&&(re=new WeakMap,d.set(be,re));let pe=re.get(V);pe===void 0&&(pe=s.getUniformBlockIndex(be,V.name),re.set(V,pe))}function rt(V,be){const pe=d.get(be).get(V);f.get(be)!==pe&&(s.uniformBlockBinding(be,pe,V.__bindingPointIndex),f.set(be,pe))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},F=null,ue={},m={},_=new WeakMap,v=[],y=null,E=!1,C=null,x=null,S=null,D=null,w=null,b=null,H=null,N=new at(0,0,0),U=0,$=!1,he=null,T=null,P=null,ne=null,Y=null,ie.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ye,disable:xe,bindFramebuffer:we,drawBuffers:Pe,useProgram:tt,setBlending:B,setMaterial:nn,setFlipSided:ct,setCullFace:ht,setLineWidth:Je,setPolygonOffset:Ct,setScissorTest:Qe,activeTexture:L,bindTexture:R,unbindTexture:K,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:Oe,texImage3D:nt,updateUBOMapping:ft,uniformBlockBinding:rt,texStorage2D:pt,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:$e,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:et,viewport:Fe,reset:Mt}}function Cg(s,e,t,i){const o=KT(i);switch(t){case qg:return s*e;case Jg:return s*e;case Zg:return s*e*2;case Qg:return s*e/o.components*o.byteLength;case Bd:return s*e/o.components*o.byteLength;case e_:return s*e*2/o.components*o.byteLength;case zd:return s*e*2/o.components*o.byteLength;case Kg:return s*e*3/o.components*o.byteLength;case fi:return s*e*4/o.components*o.byteLength;case Hd:return s*e*4/o.components*o.byteLength;case zl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qf:case Jf:return Math.max(s,16)*Math.max(e,8)/4;case Yf:case Kf:return Math.max(s,8)*Math.max(e,8)/2;case Zf:case Qf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case id:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case od:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ad:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ld:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case cd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wl:case md:case gd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case t_:case _d:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vd:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KT(s){switch(s){case Gi:case $g:return{byteLength:1,components:1};case na:case jg:case ra:return{byteLength:2,components:1};case kd:case Fd:return{byteLength:2,components:4};case Zr:case Od:case Hi:return{byteLength:4,components:1};case Yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function JT(s,e,t,i,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new je,m=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,R){return y?new OffscreenCanvas(L,R):ic("canvas")}function C(L,R,K){let de=1;const _e=Qe(L);if((_e.width>K||_e.height>K)&&(de=K/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(de*_e.width),$e=Math.floor(de*_e.height);_===void 0&&(_=E(fe,$e));const Ce=R?E(fe,$e):_;return Ce.width=fe,Ce.height=$e,Ce.getContext("2d").drawImage(L,0,0,fe,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+$e+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function x(L){return L.generateMipmaps&&L.minFilter!==Zn&&L.minFilter!==ci}function S(L){s.generateMipmap(L)}function D(L,R,K,de,_e=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=R;if(R===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8)),R===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),R===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8)),R===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),R===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),R===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),R===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),R===s.RGBA){const $e=_e?Ql:Et.getTransfer(de);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=$e===Dt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function w(L,R){let K;return L?R===null||R===Zr||R===Zs?K=s.DEPTH24_STENCIL8:R===Hi?K=s.DEPTH32F_STENCIL8:R===na&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Zr||R===Zs?K=s.DEPTH_COMPONENT24:R===Hi?K=s.DEPTH_COMPONENT32F:R===na&&(K=s.DEPTH_COMPONENT16),K}function b(L,R){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Zn&&L.minFilter!==ci?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function H(L){const R=L.target;R.removeEventListener("dispose",H),U(R),R.isVideoTexture&&m.delete(R)}function N(L){const R=L.target;R.removeEventListener("dispose",N),he(R)}function U(L){const R=i.get(L);if(R.__webglInit===void 0)return;const K=L.source,de=v.get(K);if(de){const _e=de[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&$(L),Object.keys(de).length===0&&v.delete(K)}i.remove(L)}function $(L){const R=i.get(L);s.deleteTexture(R.__webglTexture);const K=L.source,de=v.get(K);delete de[R.__cacheKey],c.memory.textures--}function he(L){const R=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(R.__webglFramebuffer[de]))for(let _e=0;_e<R.__webglFramebuffer[de].length;_e++)s.deleteFramebuffer(R.__webglFramebuffer[de][_e]);else s.deleteFramebuffer(R.__webglFramebuffer[de]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[de])}else{if(Array.isArray(R.__webglFramebuffer))for(let de=0;de<R.__webglFramebuffer.length;de++)s.deleteFramebuffer(R.__webglFramebuffer[de]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let de=0;de<R.__webglColorRenderbuffer.length;de++)R.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[de]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const K=L.textures;for(let de=0,_e=K.length;de<_e;de++){const fe=i.get(K[de]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),c.memory.textures--),i.remove(K[de])}i.remove(L)}let T=0;function P(){T=0}function ne(){const L=T;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),T+=1,L}function Y(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function oe(L,R){const K=i.get(L);if(L.isVideoTexture&&Je(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(K,L,R);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+R)}function ce(L,R){const K=i.get(L);if(L.version>0&&K.__version!==L.version){Ue(K,L,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+R)}function Q(L,R){const K=i.get(L);if(L.version>0&&K.__version!==L.version){Ue(K,L,R);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+R)}function ae(L,R){const K=i.get(L);if(L.version>0&&K.__version!==L.version){J(K,L,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+R)}const F={[$f]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[jf]:s.MIRRORED_REPEAT},ue={[Zn]:s.NEAREST,[ky]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[qu]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},se={[Hy]:s.NEVER,[jy]:s.ALWAYS,[Vy]:s.LESS,[i_]:s.LEQUAL,[Gy]:s.EQUAL,[$y]:s.GEQUAL,[Wy]:s.GREATER,[Xy]:s.NOTEQUAL};function O(L,R){if(R.type===Hi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===ci||R.magFilter===qu||R.magFilter===pl||R.magFilter===Jr||R.minFilter===ci||R.minFilter===qu||R.minFilter===pl||R.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,F[R.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,F[R.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,F[R.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ue[R.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ue[R.minFilter]),R.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,se[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Zn||R.minFilter!==pl&&R.minFilter!==Jr||R.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ie(L,R){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",H));const de=R.source;let _e=v.get(de);_e===void 0&&(_e={},v.set(de,_e));const fe=Y(R);if(fe!==L.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,K=!0),_e[fe].usedTimes++;const $e=_e[L.__cacheKey];$e!==void 0&&(_e[L.__cacheKey].usedTimes--,$e.usedTimes===0&&$(R)),L.__cacheKey=fe,L.__webglTexture=_e[fe].texture}return K}function Ue(L,R,K){let de=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(de=s.TEXTURE_3D);const _e=ie(L,R),fe=R.source;t.bindTexture(de,L.__webglTexture,s.TEXTURE0+K);const $e=i.get(fe);if(fe.version!==$e.__version||_e===!0){t.activeTexture(s.TEXTURE0+K);const Ce=Et.getPrimaries(Et.workingColorSpace),Ne=R.colorSpace===vr?null:Et.getPrimaries(R.colorSpace),pt=R.colorSpace===vr||Ce===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Se=C(R.image,!1,o.maxTextureSize);Se=Ct(R,Se);const Oe=l.convert(R.format,R.colorSpace),nt=l.convert(R.type);let et=D(R.internalFormat,Oe,nt,R.colorSpace,R.isVideoTexture);O(de,R);let Fe;const ft=R.mipmaps,rt=R.isVideoTexture!==!0,Mt=$e.__version===void 0||_e===!0,V=fe.dataReady,be=b(R,Se);if(R.isDepthTexture)et=w(R.format===Qs,R.type),Mt&&(rt?t.texStorage2D(s.TEXTURE_2D,1,et,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,Oe,nt,null));else if(R.isDataTexture)if(ft.length>0){rt&&Mt&&t.texStorage2D(s.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let re=0,pe=ft.length;re<pe;re++)Fe=ft[re],rt?V&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Oe,nt,Fe.data):t.texImage2D(s.TEXTURE_2D,re,et,Fe.width,Fe.height,0,Oe,nt,Fe.data);R.generateMipmaps=!1}else rt?(Mt&&t.texStorage2D(s.TEXTURE_2D,be,et,Se.width,Se.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,nt,Se.data)):t.texImage2D(s.TEXTURE_2D,0,et,Se.width,Se.height,0,Oe,nt,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){rt&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,ft[0].width,ft[0].height,Se.depth);for(let re=0,pe=ft.length;re<pe;re++)if(Fe=ft[re],R.format!==fi)if(Oe!==null)if(rt){if(V)if(R.layerUpdates.size>0){const Re=Cg(Fe.width,Fe.height,R.format,R.type);for(const De of R.layerUpdates){const dt=Fe.data.subarray(De*Re/Fe.data.BYTES_PER_ELEMENT,(De+1)*Re/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,De,Fe.width,Fe.height,1,Oe,dt,0,0)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,Se.depth,Oe,Fe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,et,Fe.width,Fe.height,Se.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Fe.width,Fe.height,Se.depth,Oe,nt,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,et,Fe.width,Fe.height,Se.depth,0,Oe,nt,Fe.data)}else{rt&&Mt&&t.texStorage2D(s.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let re=0,pe=ft.length;re<pe;re++)Fe=ft[re],R.format!==fi?Oe!==null?rt?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Oe,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,re,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Fe.width,Fe.height,Oe,nt,Fe.data):t.texImage2D(s.TEXTURE_2D,re,et,Fe.width,Fe.height,0,Oe,nt,Fe.data)}else if(R.isDataArrayTexture)if(rt){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,et,Se.width,Se.height,Se.depth),V)if(R.layerUpdates.size>0){const re=Cg(Se.width,Se.height,R.format,R.type);for(const pe of R.layerUpdates){const Re=Se.data.subarray(pe*re/Se.data.BYTES_PER_ELEMENT,(pe+1)*re/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,Oe,nt,Re)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,nt,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,Oe,nt,Se.data);else if(R.isData3DTexture)rt?(Mt&&t.texStorage3D(s.TEXTURE_3D,be,et,Se.width,Se.height,Se.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,nt,Se.data)):t.texImage3D(s.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,Oe,nt,Se.data);else if(R.isFramebufferTexture){if(Mt)if(rt)t.texStorage2D(s.TEXTURE_2D,be,et,Se.width,Se.height);else{let re=Se.width,pe=Se.height;for(let Re=0;Re<be;Re++)t.texImage2D(s.TEXTURE_2D,Re,et,re,pe,0,Oe,nt,null),re>>=1,pe>>=1}}else if(ft.length>0){if(rt&&Mt){const re=Qe(ft[0]);t.texStorage2D(s.TEXTURE_2D,be,et,re.width,re.height)}for(let re=0,pe=ft.length;re<pe;re++)Fe=ft[re],rt?V&&t.texSubImage2D(s.TEXTURE_2D,re,0,0,Oe,nt,Fe):t.texImage2D(s.TEXTURE_2D,re,et,Oe,nt,Fe);R.generateMipmaps=!1}else if(rt){if(Mt){const re=Qe(Se);t.texStorage2D(s.TEXTURE_2D,be,et,re.width,re.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,nt,Se)}else t.texImage2D(s.TEXTURE_2D,0,et,Oe,nt,Se);x(R)&&S(de),$e.__version=fe.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function J(L,R,K){if(R.image.length!==6)return;const de=ie(L,R),_e=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const fe=i.get(_e);if(_e.version!==fe.__version||de===!0){t.activeTexture(s.TEXTURE0+K);const $e=Et.getPrimaries(Et.workingColorSpace),Ce=R.colorSpace===vr?null:Et.getPrimaries(R.colorSpace),Ne=R.colorSpace===vr||$e===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const pt=R.isCompressedTexture||R.image[0].isCompressedTexture,Se=R.image[0]&&R.image[0].isDataTexture,Oe=[];for(let pe=0;pe<6;pe++)!pt&&!Se?Oe[pe]=C(R.image[pe],!0,o.maxCubemapSize):Oe[pe]=Se?R.image[pe].image:R.image[pe],Oe[pe]=Ct(R,Oe[pe]);const nt=Oe[0],et=l.convert(R.format,R.colorSpace),Fe=l.convert(R.type),ft=D(R.internalFormat,et,Fe,R.colorSpace),rt=R.isVideoTexture!==!0,Mt=fe.__version===void 0||de===!0,V=_e.dataReady;let be=b(R,nt);O(s.TEXTURE_CUBE_MAP,R);let re;if(pt){rt&&Mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ft,nt.width,nt.height);for(let pe=0;pe<6;pe++){re=Oe[pe].mipmaps;for(let Re=0;Re<re.length;Re++){const De=re[Re];R.format!==fi?et!==null?rt?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,De.width,De.height,et,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,ft,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,0,0,De.width,De.height,et,Fe,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re,ft,De.width,De.height,0,et,Fe,De.data)}}}else{if(re=R.mipmaps,rt&&Mt){re.length>0&&be++;const pe=Qe(Oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){rt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Oe[pe].width,Oe[pe].height,et,Fe,Oe[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Oe[pe].width,Oe[pe].height,0,et,Fe,Oe[pe].data);for(let Re=0;Re<re.length;Re++){const dt=re[Re].image[pe].image;rt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,dt.width,dt.height,et,Fe,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,ft,dt.width,dt.height,0,et,Fe,dt.data)}}else{rt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,et,Fe,Oe[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,et,Fe,Oe[pe]);for(let Re=0;Re<re.length;Re++){const De=re[Re];rt?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,0,0,et,Fe,De.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re+1,ft,et,Fe,De.image[pe])}}}x(R)&&S(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function le(L,R,K,de,_e,fe){const $e=l.convert(K.format,K.colorSpace),Ce=l.convert(K.type),Ne=D(K.internalFormat,$e,Ce,K.colorSpace);if(!i.get(R).__hasExternalTextures){const Se=Math.max(1,R.width>>fe),Oe=Math.max(1,R.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,Ne,Se,Oe,R.depth,0,$e,Ce,null):t.texImage2D(_e,fe,Ne,Se,Oe,0,$e,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ht(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,_e,i.get(K).__webglTexture,0,ct(R)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,_e,i.get(K).__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(L,R,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),R.depthBuffer){const de=R.depthTexture,_e=de&&de.isDepthTexture?de.type:null,fe=w(R.stencilBuffer,_e),$e=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=ct(R);ht(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,R.width,R.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,fe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,L)}else{const de=R.textures;for(let _e=0;_e<de.length;_e++){const fe=de[_e],$e=l.convert(fe.format,fe.colorSpace),Ce=l.convert(fe.type),Ne=D(fe.internalFormat,$e,Ce,fe.colorSpace),pt=ct(R);K&&ht(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Ne,R.width,R.height):ht(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Ne,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),oe(R.depthTexture,0);const de=i.get(R.depthTexture).__webglTexture,_e=ct(R);if(R.depthTexture.format===$s)ht(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(R.depthTexture.format===Qs)ht(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function we(L){const R=i.get(L),K=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),de){const _e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),R.__depthDisposeCallback=_e}R.__boundDepthTexture=de}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");xe(R.__webglFramebuffer,L)}else if(K){R.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[de]),R.__webglDepthbuffer[de]===void 0)R.__webglDepthbuffer[de]=s.createRenderbuffer(),ye(R.__webglDepthbuffer[de],L,!1);else{const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),ye(R.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(L,R,K){const de=i.get(L);R!==void 0&&le(de.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&we(L)}function tt(L){const R=L.texture,K=i.get(L),de=i.get(R);L.addEventListener("dispose",N);const _e=L.textures,fe=L.isWebGLCubeRenderTarget===!0,$e=_e.length>1;if($e||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=R.version,c.memory.textures++),fe){K.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<R.mipmaps.length;Ne++)K.__webglFramebuffer[Ce][Ne]=s.createFramebuffer()}else K.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)K.__webglFramebuffer[Ce]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if($e)for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const pt=i.get(_e[Ce]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&ht(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ne=_e[Ce];K.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ce]);const pt=l.convert(Ne.format,Ne.colorSpace),Se=l.convert(Ne.type),Oe=D(Ne.internalFormat,pt,Se,Ne.colorSpace,L.isXRRenderTarget===!0),nt=ct(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Oe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),O(s.TEXTURE_CUBE_MAP,R);for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)le(K.__webglFramebuffer[Ce][Ne],L,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else le(K.__webglFramebuffer[Ce],L,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(R)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const pt=_e[Ce],Se=i.get(pt);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),O(s.TEXTURE_2D,pt),le(K.__webglFramebuffer,L,pt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),x(pt)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,de.__webglTexture),O(Ce,R),R.mipmaps&&R.mipmaps.length>0)for(let Ne=0;Ne<R.mipmaps.length;Ne++)le(K.__webglFramebuffer[Ne],L,R,s.COLOR_ATTACHMENT0,Ce,Ne);else le(K.__webglFramebuffer,L,R,s.COLOR_ATTACHMENT0,Ce,0);x(R)&&S(Ce),t.unbindTexture()}L.depthBuffer&&we(L)}function gt(L){const R=L.textures;for(let K=0,de=R.length;K<de;K++){const _e=R[K];if(x(_e)){const fe=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,$e=i.get(_e).__webglTexture;t.bindTexture(fe,$e),S(fe),t.unbindTexture()}}}const ut=[],B=[];function nn(L){if(L.samples>0){if(ht(L)===!1){const R=L.textures,K=L.width,de=L.height;let _e=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=i.get(L),Ce=R.length>1;if(Ce)for(let Ne=0;Ne<R.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ne=0;Ne<R.length;Ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[Ne]);const pt=i.get(R[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,K,de,0,0,K,de,_e,s.NEAREST),d===!0&&(ut.length=0,B.length=0,ut.push(s.COLOR_ATTACHMENT0+Ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ut.push(fe),B.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<R.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,$e.__webglColorRenderbuffer[Ne]);const pt=i.get(R[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,pt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const R=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function ct(L){return Math.min(o.maxSamples,L.samples)}function ht(L){const R=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Je(L){const R=c.render.frame;m.get(L)!==R&&(m.set(L,R),L.update())}function Ct(L,R){const K=L.colorSpace,de=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==Cr&&K!==vr&&(Et.getTransfer(K)===Dt?(de!==fi||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),R}function Qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=P,this.setTexture2D=oe,this.setTexture2DArray=ce,this.setTexture3D=Q,this.setTextureCube=ae,this.rebindTextures=Pe,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ht}function ZT(s,e){function t(i,o=vr){let l;const c=Et.getTransfer(o);if(i===Gi)return s.UNSIGNED_BYTE;if(i===kd)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Fd)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Yg)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===$g)return s.BYTE;if(i===jg)return s.SHORT;if(i===na)return s.UNSIGNED_SHORT;if(i===Od)return s.INT;if(i===Zr)return s.UNSIGNED_INT;if(i===Hi)return s.FLOAT;if(i===ra)return s.HALF_FLOAT;if(i===qg)return s.ALPHA;if(i===Kg)return s.RGB;if(i===fi)return s.RGBA;if(i===Jg)return s.LUMINANCE;if(i===Zg)return s.LUMINANCE_ALPHA;if(i===$s)return s.DEPTH_COMPONENT;if(i===Qs)return s.DEPTH_STENCIL;if(i===Qg)return s.RED;if(i===Bd)return s.RED_INTEGER;if(i===e_)return s.RG;if(i===zd)return s.RG_INTEGER;if(i===Hd)return s.RGBA_INTEGER;if(i===zl||i===Hl||i===Vl||i===Gl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yf||i===qf||i===Kf||i===Jf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Yf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zf||i===Qf||i===ed)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Zf||i===Qf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===ed)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud||i===fd||i===dd||i===hd||i===pd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===td)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===id)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===od)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ad)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ld)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ud)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pd)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wl||i===md||i===gd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Wl)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===md)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===t_||i===_d||i===vd||i===yd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Wl)return l.COMPRESSED_RED_RGTC1_EXT;if(i===_d)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class QT extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nl extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eC={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const x=t.getJointPose(C,i),S=this._getHandJoint(p,C);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=m.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(eC)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nC=`
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

}`;class iC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new In,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Tr({vertexShader:tC,fragmentShader:nC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vn(new la(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rC extends to{constructor(e,t){super();const i=this;let o=null,l=1,c=null,f="local-floor",d=1,p=null,m=null,_=null,v=null,y=null,E=null;const C=new iC,x=t.getContextAttributes();let S=null,D=null;const w=[],b=[],H=new je;let N=null;const U=new Jn;U.layers.enable(1),U.viewport=new zt;const $=new Jn;$.layers.enable(2),$.viewport=new zt;const he=[U,$],T=new QT;T.layers.enable(1),T.layers.enable(2);let P=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=w[J];return le===void 0&&(le=new Rf,w[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=w[J];return le===void 0&&(le=new Rf,w[J]=le),le.getGripSpace()},this.getHand=function(J){let le=w[J];return le===void 0&&(le=new Rf,w[J]=le),le.getHandSpace()};function Y(J){const le=b.indexOf(J.inputSource);if(le===-1)return;const ye=w[le];ye!==void 0&&(ye.update(J.inputSource,J.frame,p||c),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function oe(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",ce);for(let J=0;J<w.length;J++){const le=b[J];le!==null&&(b[J]=null,w[J].disconnect(le))}P=null,ne=null,C.reset(),e.setRenderTarget(S),y=null,v=null,_=null,o=null,D=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(H),o.renderState.layers===void 0){const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,le),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Qr(y.framebufferWidth,y.framebufferHeight,{format:fi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let le=null,ye=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?Qs:$s,ye=x.stencil?Zs:Zr);const we={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(we),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Qr(v.textureWidth,v.textureHeight,{format:fi,type:Gi,depthTexture:new v_(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await o.requestReferenceSpace(f),Ue.setContext(o),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ce(J){for(let le=0;le<J.removed.length;le++){const ye=J.removed[le],xe=b.indexOf(ye);xe>=0&&(b[xe]=null,w[xe].disconnect(ye))}for(let le=0;le<J.added.length;le++){const ye=J.added[le];let xe=b.indexOf(ye);if(xe===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=b.length){b.push(ye),xe=Pe;break}else if(b[Pe]===null){b[Pe]=ye,xe=Pe;break}if(xe===-1)break}const we=w[xe];we&&we.connect(ye)}}const Q=new X,ae=new X;function F(J,le,ye){Q.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(ye.matrixWorld);const xe=Q.distanceTo(ae),we=le.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,tt=we[14]/(we[10]-1),gt=we[14]/(we[10]+1),ut=(we[9]+1)/we[5],B=(we[9]-1)/we[5],nn=(we[8]-1)/we[0],ct=(Pe[8]+1)/Pe[0],ht=tt*nn,Je=tt*ct,Ct=xe/(-nn+ct),Qe=Ct*-nn;if(le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Qe),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),we[10]===-1)J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const L=tt+Ct,R=gt+Ct,K=ht-Qe,de=Je+(xe-Qe),_e=ut*gt/R*L,fe=B*gt/R*L;J.projectionMatrix.makePerspective(K,de,_e,fe,L,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let le=J.near,ye=J.far;C.texture!==null&&(C.depthNear>0&&(le=C.depthNear),C.depthFar>0&&(ye=C.depthFar)),T.near=$.near=U.near=le,T.far=$.far=U.far=ye,(P!==T.near||ne!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,ne=T.far);const xe=J.parent,we=T.cameras;ue(T,xe);for(let Pe=0;Pe<we.length;Pe++)ue(we[Pe],xe);we.length===2?F(T,U,$):T.projectionMatrix.copy(U.projectionMatrix),se(J,T,xe)};function se(J,le,ye){ye===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(J){d=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(T)};let O=null;function ie(J,le){if(m=le.getViewerPose(p||c),E=le,m!==null){const ye=m.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let xe=!1;ye.length!==T.cameras.length&&(T.cameras.length=0,xe=!0);for(let Pe=0;Pe<ye.length;Pe++){const tt=ye[Pe];let gt=null;if(y!==null)gt=y.getViewport(tt);else{const B=_.getViewSubImage(v,tt);gt=B.viewport,Pe===0&&(e.setRenderTargetTextures(D,B.colorTexture,v.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(D))}let ut=he[Pe];ut===void 0&&(ut=new Jn,ut.layers.enable(Pe),ut.viewport=new zt,he[Pe]=ut),ut.matrix.fromArray(tt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(tt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(gt.x,gt.y,gt.width,gt.height),Pe===0&&(T.matrix.copy(ut.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xe===!0&&T.cameras.push(ut)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")){const Pe=_.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&C.init(e,Pe,o.renderState)}}for(let ye=0;ye<w.length;ye++){const xe=b[ye],we=w[ye];xe!==null&&we!==void 0&&we.update(xe,le,p||c)}O&&O(J,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),E=null}const Ue=new g_;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const Wr=new Si,sC=new Nt;function oC(s,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function i(x,S){S.color.getRGB(x.fogColor.value,h_(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,D,w,b){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(x,S):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),m(x,S)):S.isMeshStandardMaterial?(l(x,S),v(x,S),S.isMeshPhysicalMaterial&&y(x,S,b)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),C(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?d(x,S,D,w):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Dn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Dn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const D=e.get(S),w=D.envMap,b=D.envMapRotation;w&&(x.envMap.value=w,Wr.copy(b),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),x.envMapRotation.value.setFromMatrix4(sC.makeRotationFromEuler(Wr)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function d(x,S,D,w){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*D,x.scale.value=w*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function m(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,D){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Dn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function C(x,S){const D=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function aC(s,e,t,i){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,w){const b=w.program;i.uniformBlockBinding(D,b)}function p(D,w){let b=o[D.id];b===void 0&&(E(D),b=m(D),o[D.id]=b,D.addEventListener("dispose",x));const H=w.program;i.updateUBOMapping(D,H);const N=e.render.frame;l[D.id]!==N&&(v(D),l[D.id]=N)}function m(D){const w=_();D.__bindingPointIndex=w;const b=s.createBuffer(),H=D.__size,N=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,H,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,b),b}function _(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const w=o[D.id],b=D.uniforms,H=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let N=0,U=b.length;N<U;N++){const $=Array.isArray(b[N])?b[N]:[b[N]];for(let he=0,T=$.length;he<T;he++){const P=$[he];if(y(P,N,he,H)===!0){const ne=P.__offset,Y=Array.isArray(P.value)?P.value:[P.value];let oe=0;for(let ce=0;ce<Y.length;ce++){const Q=Y[ce],ae=C(Q);typeof Q=="number"||typeof Q=="boolean"?(P.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,ne+oe,P.__data)):Q.isMatrix3?(P.__data[0]=Q.elements[0],P.__data[1]=Q.elements[1],P.__data[2]=Q.elements[2],P.__data[3]=0,P.__data[4]=Q.elements[3],P.__data[5]=Q.elements[4],P.__data[6]=Q.elements[5],P.__data[7]=0,P.__data[8]=Q.elements[6],P.__data[9]=Q.elements[7],P.__data[10]=Q.elements[8],P.__data[11]=0):(Q.toArray(P.__data,oe),oe+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(D,w,b,H){const N=D.value,U=w+"_"+b;if(H[U]===void 0)return typeof N=="number"||typeof N=="boolean"?H[U]=N:H[U]=N.clone(),!0;{const $=H[U];if(typeof N=="number"||typeof N=="boolean"){if($!==N)return H[U]=N,!0}else if($.equals(N)===!1)return $.copy(N),!0}return!1}function E(D){const w=D.uniforms;let b=0;const H=16;for(let U=0,$=w.length;U<$;U++){const he=Array.isArray(w[U])?w[U]:[w[U]];for(let T=0,P=he.length;T<P;T++){const ne=he[T],Y=Array.isArray(ne.value)?ne.value:[ne.value];for(let oe=0,ce=Y.length;oe<ce;oe++){const Q=Y[oe],ae=C(Q),F=b%H,ue=F%ae.boundary,se=F+ue;b+=ue,se!==0&&H-se<ae.storage&&(b+=H-se),ne.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=b,b+=ae.storage}}}const N=b%H;return N>0&&(b+=H-N),D.__size=b,D.__cache={},this}function C(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),w}function x(D){const w=D.target;w.removeEventListener("dispose",x);const b=c.indexOf(w.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete l[w.id]}function S(){for(const D in o)s.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:d,update:p,dispose:S}}class lC{constructor(e={}){const{canvas:t=qy(),context:i=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const y=new Uint32Array(4),E=new Int32Array(4);let C=null,x=null;const S=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=Sr,this.toneMappingExposure=1;const w=this;let b=!1,H=0,N=0,U=null,$=-1,he=null;const T=new zt,P=new zt;let ne=null;const Y=new at(0);let oe=0,ce=t.width,Q=t.height,ae=1,F=null,ue=null;const se=new zt(0,0,ce,Q),O=new zt(0,0,ce,Q);let ie=!1;const Ue=new Gd;let J=!1,le=!1;const ye=new Nt,xe=new Nt,we=new X,Pe=new zt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function ut(){return U===null?ae:1}let B=i;function nn(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",De,!1),B===null){const G="webgl2";if(B=nn(G,A),B===null)throw nn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,ht,Je,Ct,Qe,L,R,K,de,_e,fe,$e,Ce,Ne,pt,Se,Oe,nt,et,Fe,ft,rt,Mt,V;function be(){ct=new hE(B),ct.init(),rt=new ZT(B,ct),ht=new aE(B,ct,e,rt),Je=new qT(B),ht.reverseDepthBuffer&&Je.buffers.depth.setReversed(!0),Ct=new gE(B),Qe=new UT,L=new JT(B,ct,Je,Qe,ht,rt,Ct),R=new cE(w),K=new dE(w),de=new Ex(B),Mt=new sE(B,de),_e=new pE(B,de,Ct,Mt),fe=new vE(B,_e,de,Ct),et=new _E(B,ht,L),Se=new lE(Qe),$e=new IT(w,R,K,ct,ht,Mt,Se),Ce=new oC(w,Qe),Ne=new OT,pt=new VT(ct),nt=new rE(w,R,K,Je,fe,v,d),Oe=new jT(w,fe,ht),V=new aC(B,Ct,ht,Je),Fe=new oE(B,ct,Ct),ft=new mE(B,ct,Ct),Ct.programs=$e.programs,w.capabilities=ht,w.extensions=ct,w.properties=Qe,w.renderLists=Ne,w.shadowMap=Oe,w.state=Je,w.info=Ct}be();const re=new rC(w,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(ce,Q,!1))},this.getSize=function(A){return A.set(ce,Q)},this.setSize=function(A,G,Z=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,Q=G,t.width=Math.floor(A*ae),t.height=Math.floor(G*ae),Z===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ce*ae,Q*ae).floor()},this.setDrawingBufferSize=function(A,G,Z){ce=A,Q=G,ae=Z,t.width=Math.floor(A*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,G,Z,ee){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,G,Z,ee),Je.viewport(T.copy(se).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(O)},this.setScissor=function(A,G,Z,ee){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,G,Z,ee),Je.scissor(P.copy(O).multiplyScalar(ae).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(A){Je.setScissorTest(ie=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){ue=A},this.getClearColor=function(A){return A.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(A=!0,G=!0,Z=!0){let ee=0;if(A){let W=!1;if(U!==null){const Ee=U.texture.format;W=Ee===Hd||Ee===zd||Ee===Bd}if(W){const Ee=U.texture.type,Le=Ee===Gi||Ee===Zr||Ee===na||Ee===Zs||Ee===kd||Ee===Fd,Te=nt.getClearColor(),Ge=nt.getClearAlpha(),Ke=Te.r,Ze=Te.g,We=Te.b;Le?(y[0]=Ke,y[1]=Ze,y[2]=We,y[3]=Ge,B.clearBufferuiv(B.COLOR,0,y)):(E[0]=Ke,E[1]=Ze,E[2]=We,E[3]=Ge,B.clearBufferiv(B.COLOR,0,E))}else ee|=B.COLOR_BUFFER_BIT}G&&(ee|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ne.dispose(),pt.dispose(),Qe.dispose(),R.dispose(),K.dispose(),fe.dispose(),Mt.dispose(),V.dispose(),$e.dispose(),re.dispose(),re.removeEventListener("sessionstart",Wi),re.removeEventListener("sessionend",is),Un.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=Ct.autoReset,G=Oe.enabled,Z=Oe.autoUpdate,ee=Oe.needsUpdate,W=Oe.type;be(),Ct.autoReset=A,Oe.enabled=G,Oe.autoUpdate=Z,Oe.needsUpdate=ee,Oe.type=W}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function dt(A){const G=A.target;G.removeEventListener("dispose",dt),Ot(G)}function Ot(A){rn(A),Qe.remove(A)}function rn(A){const G=Qe.get(A).programs;G!==void 0&&(G.forEach(function(Z){$e.releaseProgram(Z)}),A.isShaderMaterial&&$e.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Z,ee,W,Ee){G===null&&(G=tt);const Le=W.isMesh&&W.matrixWorld.determinant()<0,Te=Ti(A,G,Z,ee,W);Je.setMaterial(ee,Le);let Ge=Z.index,Ke=1;if(ee.wireframe===!0){if(Ge=_e.getWireframeAttribute(Z),Ge===void 0)return;Ke=2}const Ze=Z.drawRange,We=Z.attributes.position;let St=Ze.start*Ke,Rt=(Ze.start+Ze.count)*Ke;Ee!==null&&(St=Math.max(St,Ee.start*Ke),Rt=Math.min(Rt,(Ee.start+Ee.count)*Ke)),Ge!==null?(St=Math.max(St,0),Rt=Math.min(Rt,Ge.count)):We!=null&&(St=Math.max(St,0),Rt=Math.min(Rt,We.count));const At=Rt-St;if(At<0||At===1/0)return;Mt.setup(W,ee,Te,Z,Ge);let It,vt=Fe;if(Ge!==null&&(It=de.get(Ge),vt=ft,vt.setIndex(It)),W.isMesh)ee.wireframe===!0?(Je.setLineWidth(ee.wireframeLinewidth*ut()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(W.isLine){let ke=ee.linewidth;ke===void 0&&(ke=1),Je.setLineWidth(ke*ut()),W.isLineSegments?vt.setMode(B.LINES):W.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else W.isPoints?vt.setMode(B.POINTS):W.isSprite&&vt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)vt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))vt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ke=W._multiDrawStarts,Xt=W._multiDrawCounts,yt=W._multiDrawCount,Nn=Ge?de.get(Ge).bytesPerElement:1,Qn=Qe.get(ee).currentProgram.getUniforms();for(let Jt=0;Jt<yt;Jt++)Qn.setValue(B,"_gl_DrawID",Jt),vt.render(ke[Jt]/Nn,Xt[Jt])}else if(W.isInstancedMesh)vt.renderInstances(St,At,W.count);else if(Z.isInstancedBufferGeometry){const ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Xt=Math.min(Z.instanceCount,ke);vt.renderInstances(St,At,Xt)}else vt.render(St,At)};function mt(A,G,Z){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,ss(A,G,Z),A.side=Er,A.needsUpdate=!0,ss(A,G,Z),A.side=zi):ss(A,G,Z)}this.compile=function(A,G,Z=null){Z===null&&(Z=A),x=pt.get(Z),x.init(G),D.push(x),Z.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),A!==Z&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights();const ee=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Te=Ee[Le];mt(Te,Z,W),ee.add(Te)}else mt(Ee,Z,W),ee.add(Ee)}),D.pop(),x=null,ee},this.compileAsync=function(A,G,Z=null){const ee=this.compile(A,G,Z);return new Promise(W=>{function Ee(){if(ee.forEach(function(Le){Qe.get(Le).currentProgram.isReady()&&ee.delete(Le)}),ee.size===0){W(A);return}setTimeout(Ee,10)}ct.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Kt=null;function Gn(A){Kt&&Kt(A)}function Wi(){Un.stop()}function is(){Un.start()}const Un=new g_;Un.setAnimationLoop(Gn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){Kt=A,re.setAnimationLoop(A),A===null?Un.stop():Un.start()},re.addEventListener("sessionstart",Wi),re.addEventListener("sessionend",is),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,G,U),x=pt.get(A,D.length),x.init(G),D.push(x),xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ue.setFromProjectionMatrix(xe),le=this.localClippingEnabled,J=Se.init(this.clippingPlanes,le),C=Ne.get(A,S.length),C.init(),S.push(C),re.enabled===!0&&re.isPresenting===!0){const Ee=w.xr.getDepthSensingMesh();Ee!==null&&so(Ee,G,-1/0,w.sortObjects)}so(A,G,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(F,ue),gt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,gt&&nt.addToRenderList(C,A),this.info.render.frame++,J===!0&&Se.beginShadows();const Z=x.state.shadowsArray;Oe.render(Z,A,G),J===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=C.opaque,W=C.transmissive;if(x.setupLights(),G.isArrayCamera){const Ee=G.cameras;if(W.length>0)for(let Le=0,Te=Ee.length;Le<Te;Le++){const Ge=Ee[Le];Rr(ee,W,A,Ge)}gt&&nt.render(A);for(let Le=0,Te=Ee.length;Le<Te;Le++){const Ge=Ee[Le];Xi(C,A,Ge,Ge.viewport)}}else W.length>0&&Rr(ee,W,A,G),gt&&nt.render(A),Xi(C,A,G);U!==null&&(L.updateMultisampleRenderTarget(U),L.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(w,A,G),Mt.resetDefaultState(),$=-1,he=null,D.pop(),D.length>0?(x=D[D.length-1],J===!0&&Se.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?C=S[S.length-1]:C=null};function so(A,G,Z,ee){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){ee&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const Le=fe.update(A),Te=A.material;Te.visible&&C.push(A,Le,Te,Z,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const Le=fe.update(A),Te=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Pe.copy(Le.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const Ge=Le.groups;for(let Ke=0,Ze=Ge.length;Ke<Ze;Ke++){const We=Ge[Ke],St=Te[We.materialIndex];St&&St.visible&&C.push(A,Le,St,Z,Pe.z,We)}}else Te.visible&&C.push(A,Le,Te,Z,Pe.z,null)}}const Ee=A.children;for(let Le=0,Te=Ee.length;Le<Te;Le++)so(Ee[Le],G,Z,ee)}function Xi(A,G,Z,ee){const W=A.opaque,Ee=A.transmissive,Le=A.transparent;x.setupLightsView(Z),J===!0&&Se.setGlobalState(w.clippingPlanes,Z),ee&&Je.viewport(T.copy(ee)),W.length>0&&Ei(W,G,Z),Ee.length>0&&Ei(Ee,G,Z),Le.length>0&&Ei(Le,G,Z),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Rr(A,G,Z,ee){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new Qr(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?ra:Gi,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ee=x.state.transmissionRenderTarget[ee.id],Le=ee.viewport||T;Ee.setSize(Le.z,Le.w);const Te=w.getRenderTarget();w.setRenderTarget(Ee),w.getClearColor(Y),oe=w.getClearAlpha(),oe<1&&w.setClearColor(16777215,.5),w.clear(),gt&&nt.render(Z);const Ge=w.toneMapping;w.toneMapping=Sr;const Ke=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),J===!0&&Se.setGlobalState(w.clippingPlanes,ee),Ei(A,Z,ee),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let We=0,St=G.length;We<St;We++){const Rt=G[We],At=Rt.object,It=Rt.geometry,vt=Rt.material,ke=Rt.group;if(vt.side===zi&&At.layers.test(ee.layers)){const Xt=vt.side;vt.side=Dn,vt.needsUpdate=!0,rs(At,Z,ee,It,vt,ke),vt.side=Xt,vt.needsUpdate=!0,Ze=!0}}Ze===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}w.setRenderTarget(Te),w.setClearColor(Y,oe),Ke!==void 0&&(ee.viewport=Ke),w.toneMapping=Ge}function Ei(A,G,Z){const ee=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Ee=A.length;W<Ee;W++){const Le=A[W],Te=Le.object,Ge=Le.geometry,Ke=ee===null?Le.material:ee,Ze=Le.group;Te.layers.test(Z.layers)&&rs(Te,G,Z,Ge,Ke,Ze)}}function rs(A,G,Z,ee,W,Ee){A.onBeforeRender(w,G,Z,ee,W,Ee),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(w,G,Z,ee,A,Ee),W.transparent===!0&&W.side===zi&&W.forceSinglePass===!1?(W.side=Dn,W.needsUpdate=!0,w.renderBufferDirect(Z,G,ee,W,A,Ee),W.side=Er,W.needsUpdate=!0,w.renderBufferDirect(Z,G,ee,W,A,Ee),W.side=zi):w.renderBufferDirect(Z,G,ee,W,A,Ee),A.onAfterRender(w,G,Z,ee,W,Ee)}function ss(A,G,Z){G.isScene!==!0&&(G=tt);const ee=Qe.get(A),W=x.state.lights,Ee=x.state.shadowsArray,Le=W.state.version,Te=$e.getParameters(A,W.state,Ee,G,Z),Ge=$e.getProgramCacheKey(Te);let Ke=ee.programs;ee.environment=A.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(A.isMeshStandardMaterial?K:R).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",dt),Ke=new Map,ee.programs=Ke);let Ze=Ke.get(Ge);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===Le)return ua(A,Te),Ze}else Te.uniforms=$e.getUniforms(A),A.onBeforeCompile(Te,w),Ze=$e.acquireProgram(Te,Ge),Ke.set(Ge,Ze),ee.uniforms=Te.uniforms;const We=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Se.uniform),ua(A,Te),ee.needsLights=da(A),ee.lightsStateVersion=Le,ee.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function ca(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=$l.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function ua(A,G){const Z=Qe.get(A);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Ti(A,G,Z,ee,W){G.isScene!==!0&&(G=tt),L.resetTextureUnits();const Ee=G.fog,Le=ee.isMeshStandardMaterial?G.environment:null,Te=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Cr,Ge=(ee.isMeshStandardMaterial?K:R).get(ee.envMap||Le),Ke=ee.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!Z.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),We=!!Z.morphAttributes.position,St=!!Z.morphAttributes.normal,Rt=!!Z.morphAttributes.color;let At=Sr;ee.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=w.toneMapping);const It=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,vt=It!==void 0?It.length:0,ke=Qe.get(ee),Xt=x.state.lights;if(J===!0&&(le===!0||A!==he)){const fn=A===he&&ee.id===$;Se.setState(ee,A,fn)}let yt=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Xt.state.version||ke.outputColorSpace!==Te||W.isBatchedMesh&&ke.batching===!1||!W.isBatchedMesh&&ke.batching===!0||W.isBatchedMesh&&ke.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ke.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ke.instancing===!1||!W.isInstancedMesh&&ke.instancing===!0||W.isSkinnedMesh&&ke.skinning===!1||!W.isSkinnedMesh&&ke.skinning===!0||W.isInstancedMesh&&ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ke.instancingMorph===!1&&W.morphTexture!==null||ke.envMap!==Ge||ee.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Se.numPlanes||ke.numIntersection!==Se.numIntersection)||ke.vertexAlphas!==Ke||ke.vertexTangents!==Ze||ke.morphTargets!==We||ke.morphNormals!==St||ke.morphColors!==Rt||ke.toneMapping!==At||ke.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,ke.__version=ee.version);let Nn=ke.currentProgram;yt===!0&&(Nn=ss(ee,G,W));let Qn=!1,Jt=!1,Ci=!1;const wt=Nn.getUniforms(),hi=ke.uniforms;if(Je.useProgram(Nn.program)&&(Qn=!0,Jt=!0,Ci=!0),ee.id!==$&&($=ee.id,Jt=!0),Qn||he!==A){ht.reverseDepthBuffer?(ye.copy(A.projectionMatrix),Jy(ye),Zy(ye),wt.setValue(B,"projectionMatrix",ye)):wt.setValue(B,"projectionMatrix",A.projectionMatrix),wt.setValue(B,"viewMatrix",A.matrixWorldInverse);const fn=wt.map.cameraPosition;fn!==void 0&&fn.setValue(B,we.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&wt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&wt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),he!==A&&(he=A,Jt=!0,Ci=!0)}if(W.isSkinnedMesh){wt.setOptional(B,W,"bindMatrix"),wt.setOptional(B,W,"bindMatrixInverse");const fn=W.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),wt.setValue(B,"boneTexture",fn.boneTexture,L))}W.isBatchedMesh&&(wt.setOptional(B,W,"batchingTexture"),wt.setValue(B,"batchingTexture",W._matricesTexture,L),wt.setOptional(B,W,"batchingIdTexture"),wt.setValue(B,"batchingIdTexture",W._indirectTexture,L),wt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&wt.setValue(B,"batchingColorTexture",W._colorsTexture,L));const oo=Z.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0)&&et.update(W,Z,Nn),(Jt||ke.receiveShadow!==W.receiveShadow)&&(ke.receiveShadow=W.receiveShadow,wt.setValue(B,"receiveShadow",W.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(hi.envMap.value=Ge,hi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(hi.envMapIntensity.value=G.environmentIntensity),Jt&&(wt.setValue(B,"toneMappingExposure",w.toneMappingExposure),ke.needsLights&&fa(hi,Ci),Ee&&ee.fog===!0&&Ce.refreshFogUniforms(hi,Ee),Ce.refreshMaterialUniforms(hi,ee,ae,Q,x.state.transmissionRenderTarget[A.id]),$l.upload(B,ca(ke),hi,L)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&($l.upload(B,ca(ke),hi,L),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&wt.setValue(B,"center",W.center),wt.setValue(B,"modelViewMatrix",W.modelViewMatrix),wt.setValue(B,"normalMatrix",W.normalMatrix),wt.setValue(B,"modelMatrix",W.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const fn=ee.uniformsGroups;for(let os=0,ao=fn.length;os<ao;os++){const $i=fn[os];V.update($i,Nn),V.bind($i,Nn)}}return Nn}function fa(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function da(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,G,Z){Qe.get(A.texture).__webglTexture=G,Qe.get(A.depthTexture).__webglTexture=Z;const ee=Qe.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Z===void 0,ee.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const Z=Qe.get(A);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,Z=0){U=A,H=G,N=Z;let ee=!0,W=null,Ee=!1,Le=!1;if(A){const Ge=Qe.get(A);if(Ge.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(B.FRAMEBUFFER,null),ee=!1;else if(Ge.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ge.__hasExternalTextures)L.rebindTextures(A,Qe.get(A.texture).__webglTexture,Qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Ge.__boundDepthTexture!==We){if(We!==null&&Qe.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Le=!0);const Ze=Qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?W=Ze[G][Z]:W=Ze[G],Ee=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?W=Qe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?W=Ze[Z]:W=Ze,T.copy(A.viewport),P.copy(A.scissor),ne=A.scissorTest}else T.copy(se).multiplyScalar(ae).floor(),P.copy(O).multiplyScalar(ae).floor(),ne=ie;if(Je.bindFramebuffer(B.FRAMEBUFFER,W)&&ee&&Je.drawBuffers(A,W),Je.viewport(T),Je.scissor(P),Je.setScissorTest(ne),Ee){const Ge=Qe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ge.__webglTexture,Z)}else if(Le){const Ge=Qe.get(A.texture),Ke=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.__webglTexture,Z||0,Ke)}$=-1},this.readRenderTargetPixels=function(A,G,Z,ee,W,Ee,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Te=Te[Le]),Te){Je.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Ge=A.texture,Ke=Ge.format,Ze=Ge.type;if(!ht.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ee&&Z>=0&&Z<=A.height-W&&B.readPixels(G,Z,ee,W,rt.convert(Ke),rt.convert(Ze),Ee)}finally{const Ge=U!==null?Qe.get(U).__webglFramebuffer:null;Je.bindFramebuffer(B.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,G,Z,ee,W,Ee,Le){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Te=Te[Le]),Te){const Ge=A.texture,Ke=Ge.format,Ze=Ge.type;if(!ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-ee&&Z>=0&&Z<=A.height-W){Je.bindFramebuffer(B.FRAMEBUFFER,Te);const We=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,We),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),B.readPixels(G,Z,ee,W,rt.convert(Ke),rt.convert(Ze),0);const St=U!==null?Qe.get(U).__webglFramebuffer:null;Je.bindFramebuffer(B.FRAMEBUFFER,St);const Rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ky(B,Rt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,We),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.deleteBuffer(We),B.deleteSync(Rt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,Z=0){A.isTexture!==!0&&(Xl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-Z),W=Math.floor(A.image.width*ee),Ee=Math.floor(A.image.height*ee),Le=G!==null?G.x:0,Te=G!==null?G.y:0;L.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Le,Te,W,Ee),Je.unbindTexture()},this.copyTextureToTexture=function(A,G,Z=null,ee=null,W=0){A.isTexture!==!0&&(Xl("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],G=arguments[2],W=arguments[3]||0,Z=null);let Ee,Le,Te,Ge,Ke,Ze;Z!==null?(Ee=Z.max.x-Z.min.x,Le=Z.max.y-Z.min.y,Te=Z.min.x,Ge=Z.min.y):(Ee=A.image.width,Le=A.image.height,Te=0,Ge=0),ee!==null?(Ke=ee.x,Ze=ee.y):(Ke=0,Ze=0);const We=rt.convert(G.format),St=rt.convert(G.type);L.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const Rt=B.getParameter(B.UNPACK_ROW_LENGTH),At=B.getParameter(B.UNPACK_IMAGE_HEIGHT),It=B.getParameter(B.UNPACK_SKIP_PIXELS),vt=B.getParameter(B.UNPACK_SKIP_ROWS),ke=B.getParameter(B.UNPACK_SKIP_IMAGES),Xt=A.isCompressedTexture?A.mipmaps[W]:A.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,Ke,Ze,Ee,Le,We,St,Xt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,Ke,Ze,Xt.width,Xt.height,We,Xt.data):B.texSubImage2D(B.TEXTURE_2D,W,Ke,Ze,Ee,Le,We,St,Xt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At),B.pixelStorei(B.UNPACK_SKIP_PIXELS,It),B.pixelStorei(B.UNPACK_SKIP_ROWS,vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ke),W===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Je.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Z=null,ee=null,W=0){A.isTexture!==!0&&(Xl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],G=arguments[3],W=arguments[4]||0);let Ee,Le,Te,Ge,Ke,Ze,We,St,Rt;const At=A.isCompressedTexture?A.mipmaps[W]:A.image;Z!==null?(Ee=Z.max.x-Z.min.x,Le=Z.max.y-Z.min.y,Te=Z.max.z-Z.min.z,Ge=Z.min.x,Ke=Z.min.y,Ze=Z.min.z):(Ee=At.width,Le=At.height,Te=At.depth,Ge=0,Ke=0,Ze=0),ee!==null?(We=ee.x,St=ee.y,Rt=ee.z):(We=0,St=0,Rt=0);const It=rt.convert(G.format),vt=rt.convert(G.type);let ke;if(G.isData3DTexture)L.setTexture3D(G,0),ke=B.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)L.setTexture2DArray(G,0),ke=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const Xt=B.getParameter(B.UNPACK_ROW_LENGTH),yt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Nn=B.getParameter(B.UNPACK_SKIP_PIXELS),Qn=B.getParameter(B.UNPACK_SKIP_ROWS),Jt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ge),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze),A.isDataTexture||A.isData3DTexture?B.texSubImage3D(ke,W,We,St,Rt,Ee,Le,Te,It,vt,At.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(ke,W,We,St,Rt,Ee,Le,Te,It,At.data):B.texSubImage3D(ke,W,We,St,Rt,Ee,Le,Te,It,vt,At),B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Nn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Jt),W===0&&G.generateMipmaps&&B.generateMipmap(ke),Je.unbindTexture()},this.initRenderTarget=function(A){Qe.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Je.unbindTexture()},this.resetState=function(){H=0,N=0,U=null,Je.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vd?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===cc?"display-p3":"srgb"}}class Xd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new at(e),this.near=t,this.far=i}clone(){return new Xd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cC extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class E_ extends no{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new X,sc=new X,Rg=new Nt,Yo=new a_,Ol=new uc,Af=new X,Ag=new X;class uC extends cn{constructor(e=new di,t=new E_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,l=t.count;o<l;o++)rc.fromBufferAttribute(t,o-1),sc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(o),Ol.radius+=l,e.ray.intersectsSphere(Ol)===!1)return;Rg.copy(o).invert(),Yo.copy(e.ray).applyMatrix4(Rg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){const y=Math.max(0,c.start),E=Math.min(m.count,c.start+c.count);for(let C=y,x=E-1;C<x;C+=p){const S=m.getX(C),D=m.getX(C+1),w=kl(this,e,Yo,d,S,D);w&&t.push(w)}if(this.isLineLoop){const C=m.getX(E-1),x=m.getX(y),S=kl(this,e,Yo,d,C,x);S&&t.push(S)}}else{const y=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let C=y,x=E-1;C<x;C+=p){const S=kl(this,e,Yo,d,C,C+1);S&&t.push(S)}if(this.isLineLoop){const C=kl(this,e,Yo,d,E-1,y);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function kl(s,e,t,i,o,l){const c=s.geometry.attributes.position;if(rc.fromBufferAttribute(c,o),sc.fromBufferAttribute(c,l),t.distanceSqToSegment(rc,sc,Af,Ag)>i)return;Af.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Af);if(!(d<e.near||d>e.far))return{distance:d,point:Ag.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const wg=new X,Pg=new X;class fC extends uC{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,l=t.count;o<l;o+=2)wg.fromBufferAttribute(t,o),Pg.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+wg.distanceTo(Pg);e.setAttribute("lineDistance",new un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),l+=i.distanceTo(o),t.push(l),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let o=0;const l=i.length;let c;t?c=t:c=e*i[l-1];let f=0,d=l-1,p;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),p=i[o]-c,p<0)f=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,i[o]===c)return o/(l-1);const m=i[o],v=i[o+1]-m,y=(c-m)/v;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new je:new X);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new X,o=[],l=[],c=[],f=new X,d=new Nt;for(let y=0;y<=e;y++){const E=y/e;o[y]=this.getTangentAt(E,new X)}l[0]=new X,c[0]=new X;let p=Number.MAX_VALUE;const m=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);m<=p&&(p=m,i.set(1,0,0)),_<=p&&(p=_,i.set(0,1,0)),v<=p&&i.set(0,0,1),f.crossVectors(o[0],i).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(o[y-1],o[y]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(ln(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(d.makeRotationAxis(f,E))}c[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(ln(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let E=1;E<=e;E++)l[E].applyMatrix4(d.makeRotationAxis(o[E],y*E)),c[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $d extends Mi{constructor(e=0,t=0,i=1,o=1,l=0,c=Math.PI*2,f=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=d}getPoint(e,t=new je){const i=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const m=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=d-this.aX,y=p-this.aY;d=v*m-y*_+this.aX,p=v*_+y*m+this.aY}return i.set(d,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dC extends $d{constructor(e,t,i,o,l,c){super(e,t,i,i,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function jd(){let s=0,e=0,t=0,i=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,i=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,p){o(c,f,p*(f-l),p*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,p,m,_){let v=(c-l)/p-(f-l)/(p+m)+(f-c)/m,y=(f-c)/m-(d-c)/(m+_)+(d-f)/_;v*=m,y*=m,o(c,f,v,y)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+i*f}}}const Fl=new X,wf=new jd,Pf=new jd,bf=new jd;class hC extends Mi{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new X){const i=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let p,m;this.closed||f>0?p=o[(f-1)%l]:(Fl.subVectors(o[0],o[1]).add(o[0]),p=Fl);const _=o[f%l],v=o[(f+1)%l];if(this.closed||f+2<l?m=o[(f+2)%l]:(Fl.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=Fl),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),y),C=Math.pow(_.distanceToSquared(v),y),x=Math.pow(v.distanceToSquared(m),y);C<1e-4&&(C=1),E<1e-4&&(E=C),x<1e-4&&(x=C),wf.initNonuniformCatmullRom(p.x,_.x,v.x,m.x,E,C,x),Pf.initNonuniformCatmullRom(p.y,_.y,v.y,m.y,E,C,x),bf.initNonuniformCatmullRom(p.z,_.z,v.z,m.z,E,C,x)}else this.curveType==="catmullrom"&&(wf.initCatmullRom(p.x,_.x,v.x,m.x,this.tension),Pf.initCatmullRom(p.y,_.y,v.y,m.y,this.tension),bf.initCatmullRom(p.z,_.z,v.z,m.z,this.tension));return i.set(wf.calc(d),Pf.calc(d),bf.calc(d)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bg(s,e,t,i,o){const l=(i-e)*.5,c=(o-t)*.5,f=s*s,d=s*f;return(2*t-2*i+l+c)*d+(-3*t+3*i-2*l-c)*f+l*s+t}function pC(s,e){const t=1-s;return t*t*e}function mC(s,e){return 2*(1-s)*s*e}function gC(s,e){return s*s*e}function Zo(s,e,t,i){return pC(s,e)+mC(s,t)+gC(s,i)}function _C(s,e){const t=1-s;return t*t*t*e}function vC(s,e){const t=1-s;return 3*t*t*s*e}function yC(s,e){return 3*(1-s)*s*s*e}function xC(s,e){return s*s*s*e}function Qo(s,e,t,i,o){return _C(s,e)+vC(s,t)+yC(s,i)+xC(s,o)}class T_ extends Mi{constructor(e=new je,t=new je,i=new je,o=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new je){const i=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return i.set(Qo(e,o.x,l.x,c.x,f.x),Qo(e,o.y,l.y,c.y,f.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class SC extends Mi{constructor(e=new X,t=new X,i=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new X){const i=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return i.set(Qo(e,o.x,l.x,c.x,f.x),Qo(e,o.y,l.y,c.y,f.y),Qo(e,o.z,l.z,c.z,f.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class C_ extends Mi{constructor(e=new je,t=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new je){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MC extends Mi{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R_ extends Mi{constructor(e=new je,t=new je,i=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new je){const i=t,o=this.v0,l=this.v1,c=this.v2;return i.set(Zo(e,o.x,l.x,c.x),Zo(e,o.y,l.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class EC extends Mi{constructor(e=new X,t=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new X){const i=t,o=this.v0,l=this.v1,c=this.v2;return i.set(Zo(e,o.x,l.x,c.x),Zo(e,o.y,l.y,c.y),Zo(e,o.z,l.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A_ extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new je){const i=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,d=o[c===0?c:c-1],p=o[c],m=o[c>o.length-2?o.length-1:c+1],_=o[c>o.length-3?o.length-1:c+2];return i.set(bg(f,d.x,p.x,m.x,_.x),bg(f,d.y,p.y,m.y,_.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new je().fromArray(o))}return this}}var Lg=Object.freeze({__proto__:null,ArcCurve:dC,CatmullRomCurve3:hC,CubicBezierCurve:T_,CubicBezierCurve3:SC,EllipseCurve:$d,LineCurve:C_,LineCurve3:MC,QuadraticBezierCurve:R_,QuadraticBezierCurve3:EC,SplineCurve:A_});class TC extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lg[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=i){const c=o[l]-i,f=this.curves[l],d=f.getLength(),p=d===0?0:1-c/d;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,o=this.curves.length;i<o;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,d=c.getPoints(f);for(let p=0;p<d.length;p++){const m=d[p];i&&i.equals(m)||(t.push(m),i=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(new Lg[o.type]().fromJSON(o))}return this}}class CC extends TC{constructor(e){super(),this.type="Path",this.currentPoint=new je,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new C_(this.currentPoint.clone(),new je(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,o){const l=new R_(this.currentPoint.clone(),new je(e,t),new je(i,o));return this.curves.push(l),this.currentPoint.set(i,o),this}bezierCurveTo(e,t,i,o,l,c){const f=new T_(this.currentPoint.clone(),new je(e,t),new je(i,o),new je(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new A_(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,o,l,c){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+f,t+d,i,o,l,c),this}absarc(e,t,i,o,l,c){return this.absellipse(e,t,i,i,o,l,c),this}ellipse(e,t,i,o,l,c,f,d){const p=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+p,t+m,i,o,l,c,f,d),this}absellipse(e,t,i,o,l,c,f,d){const p=new $d(e,t,i,o,l,c,f,d);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const m=p.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yd extends di{constructor(e=[new je(0,-.5),new je(.5,0),new je(0,.5)],t=12,i=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:o},t=Math.floor(t),o=ln(o,0,Math.PI*2);const l=[],c=[],f=[],d=[],p=[],m=1/t,_=new X,v=new je,y=new X,E=new X,C=new X;let x=0,S=0;for(let D=0;D<=e.length-1;D++)switch(D){case 0:x=e[D+1].x-e[D].x,S=e[D+1].y-e[D].y,y.x=S*1,y.y=-x,y.z=S*0,C.copy(y),y.normalize(),d.push(y.x,y.y,y.z);break;case e.length-1:d.push(C.x,C.y,C.z);break;default:x=e[D+1].x-e[D].x,S=e[D+1].y-e[D].y,y.x=S*1,y.y=-x,y.z=S*0,E.copy(y),y.x+=C.x,y.y+=C.y,y.z+=C.z,y.normalize(),d.push(y.x,y.y,y.z),C.copy(E)}for(let D=0;D<=t;D++){const w=i+D*m*o,b=Math.sin(w),H=Math.cos(w);for(let N=0;N<=e.length-1;N++){_.x=e[N].x*b,_.y=e[N].y,_.z=e[N].x*H,c.push(_.x,_.y,_.z),v.x=D/t,v.y=N/(e.length-1),f.push(v.x,v.y);const U=d[3*N+0]*b,$=d[3*N+1],he=d[3*N+0]*H;p.push(U,$,he)}}for(let D=0;D<t;D++)for(let w=0;w<e.length-1;w++){const b=w+D*e.length,H=b,N=b+e.length,U=b+e.length+1,$=b+1;l.push(H,N,$),l.push(U,$,N)}this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("uv",new un(f,2)),this.setAttribute("normal",new un(p,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yd(e.points,e.segments,e.phiStart,e.phiLength)}}class qd extends Yd{constructor(e=1,t=1,i=4,o=8){const l=new CC;l.absarc(0,-t/2,e,Math.PI*1.5,0),l.absarc(0,t/2,e,0,Math.PI*.5),super(l.getPoints(i),o),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:o}}static fromJSON(e){return new qd(e.radius,e.length,e.capSegments,e.radialSegments)}}class Kd extends di{constructor(e=1,t=32,i=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+f,Math.PI);let p=0;const m=[],_=new X,v=new X,y=[],E=[],C=[],x=[];for(let S=0;S<=i;S++){const D=[],w=S/i;let b=0;S===0&&c===0?b=.5/t:S===i&&d===Math.PI&&(b=-.5/t);for(let H=0;H<=t;H++){const N=H/t;_.x=-e*Math.cos(o+N*l)*Math.sin(c+w*f),_.y=e*Math.cos(c+w*f),_.z=e*Math.sin(o+N*l)*Math.sin(c+w*f),E.push(_.x,_.y,_.z),v.copy(_).normalize(),C.push(v.x,v.y,v.z),x.push(N+b,1-w),D.push(p++)}m.push(D)}for(let S=0;S<i;S++)for(let D=0;D<t;D++){const w=m[S][D+1],b=m[S][D],H=m[S+1][D],N=m[S+1][D+1];(S!==0||c>0)&&y.push(w,b,N),(S!==i-1||d<Math.PI)&&y.push(b,H,N)}this.setIndex(y),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(C,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bl extends no{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=n_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class w_ extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Lf=new Nt,Dg=new X,Ig=new X;class RC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dg),Ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ig),t.updateMatrixWorld(),Lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AC extends RC{constructor(){super(new __(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wC extends w_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new AC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class PC extends w_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class bC extends fC{constructor(e=10,t=10,i=4473924,o=8947848){i=new at(i),o=new at(o);const l=t/2,c=e/t,f=e/2,d=[],p=[];for(let v=0,y=0,E=-f;v<=t;v++,E+=c){d.push(-f,0,E,f,0,E),d.push(E,0,-f,E,0,f);const C=v===l?i:o;C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3,C.toArray(p,y),y+=3}const m=new di;m.setAttribute("position",new un(d,3)),m.setAttribute("color",new un(p,3));const _=new E_({vertexColors:!0,toneMapped:!1});super(m,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);class LC{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return DC(e).buffer}}function DC(s){let e=0;for(const o of s)e+=o.byteLength;const t=new Uint8Array(e);let i=0;for(const o of s){const l=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);t.set(l,i),i+=o.byteLength}return t}function P_(s){return new IC(s).unpack()}function b_(s){const e=new UC,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class IC{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,o="",l,c;for(;i<e;)l=t[i],l<160?(c=l,i++):(l^192)<32?(c=(l&31)<<6|t[i+1]&63,i+=2):(l^224)<16?(c=(l&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(c=(l&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),o+=String.fromCodePoint(c);return this.index+=e,o}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const o=this.unpack();t[o]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,o=e&8388607|8388608;return(t===0?1:-1)*o*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,o=(e>>20&2047)-1023,c=(e&1048575|1048576)*2**(o-20)+t*2**(o-52);return(i===0?1:-1)*c}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class UC{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=o=>{if(o<t){const l=this.pack(e[o]);return l instanceof Promise?l.then(()=>i(o+1)):i(o+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),o=e/2**i-1,l=Math.floor(o*2**52),c=2**32,f=t<<31|i+1023<<20|l/c&1048575,d=l%c;this._bufferBuilder.append(203),this.pack_int32(f),this.pack_int32(d)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const o=l=>{if(l<t.length){const c=t[l];if(e.hasOwnProperty(c)){this.pack(c);const f=this.pack(e[c]);if(f instanceof Promise)return f.then(()=>o(l+1))}return o(l+1)}};return o(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new LC,this._textEncoder=new TextEncoder}}let L_=!0,D_=!0;function Jo(s,e,t){const i=s.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function es(s,e,t){if(!s.RTCPeerConnection)return;const i=s.RTCPeerConnection.prototype,o=i.addEventListener;i.addEventListener=function(c,f){if(c!==e)return o.apply(this,arguments);const d=p=>{const m=t(p);m&&(f.handleEvent?f.handleEvent(m):f(m))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(f,d),o.apply(this,[c,d])};const l=i.removeEventListener;i.removeEventListener=function(c,f){if(c!==e||!this._eventMap||!this._eventMap[e])return l.apply(this,arguments);if(!this._eventMap[e].has(f))return l.apply(this,arguments);const d=this._eventMap[e].get(f);return this._eventMap[e].delete(f),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,l.apply(this,[c,d])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(c){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),c&&this.addEventListener(e,this["_on"+e]=c)},enumerable:!0,configurable:!0})}function NC(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(L_=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function OC(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(D_=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function I_(){if(typeof window=="object"){if(L_)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Jd(s,e){D_&&console.warn(s+" is deprecated, please use "+e+" instead.")}function kC(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(o=>o.brand==="Chromium");if(i)return{browser:"chrome",version:parseInt(i.version,10)}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Jo(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Jo(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Jo(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=Jo(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Ug(s){return Object.prototype.toString.call(s)==="[object Object]"}function U_(s){return Ug(s)?Object.keys(s).reduce(function(e,t){const i=Ug(s[t]),o=i?U_(s[t]):s[t],l=i&&!Object.keys(o).length;return o===void 0||l?e:Object.assign(e,{[t]:o})},{}):s}function Md(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?Md(s,s.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(o=>{Md(s,s.get(o),t)})}))}function Ng(s,e,t){const i=t?"outbound-rtp":"inbound-rtp",o=new Map;if(e===null)return o;const l=[];return s.forEach(c=>{c.type==="track"&&c.trackIdentifier===e.id&&l.push(c)}),l.forEach(c=>{s.forEach(f=>{f.type===i&&f.trackId===c.id&&Md(s,f,o)})}),o}const Og=I_;function N_(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const i=function(f){if(typeof f!="object"||f.mandatory||f.optional)return f;const d={};return Object.keys(f).forEach(p=>{if(p==="require"||p==="advanced"||p==="mediaSource")return;const m=typeof f[p]=="object"?f[p]:{ideal:f[p]};m.exact!==void 0&&typeof m.exact=="number"&&(m.min=m.max=m.exact);const _=function(v,y){return v?v+y.charAt(0).toUpperCase()+y.slice(1):y==="deviceId"?"sourceId":y};if(m.ideal!==void 0){d.optional=d.optional||[];let v={};typeof m.ideal=="number"?(v[_("min",p)]=m.ideal,d.optional.push(v),v={},v[_("max",p)]=m.ideal,d.optional.push(v)):(v[_("",p)]=m.ideal,d.optional.push(v))}m.exact!==void 0&&typeof m.exact!="number"?(d.mandatory=d.mandatory||{},d.mandatory[_("",p)]=m.exact):["min","max"].forEach(v=>{m[v]!==void 0&&(d.mandatory=d.mandatory||{},d.mandatory[_(v,p)]=m[v])})}),f.advanced&&(d.optional=(d.optional||[]).concat(f.advanced)),d},o=function(f,d){if(e.version>=61)return d(f);if(f=JSON.parse(JSON.stringify(f)),f&&typeof f.audio=="object"){const p=function(m,_,v){_ in m&&!(v in m)&&(m[v]=m[_],delete m[_])};f=JSON.parse(JSON.stringify(f)),p(f.audio,"autoGainControl","googAutoGainControl"),p(f.audio,"noiseSuppression","googNoiseSuppression"),f.audio=i(f.audio)}if(f&&typeof f.video=="object"){let p=f.video.facingMode;p=p&&(typeof p=="object"?p:{ideal:p});const m=e.version<66;if(p&&(p.exact==="user"||p.exact==="environment"||p.ideal==="user"||p.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!m)){delete f.video.facingMode;let _;if(p.exact==="environment"||p.ideal==="environment"?_=["back","rear"]:(p.exact==="user"||p.ideal==="user")&&(_=["front"]),_)return t.mediaDevices.enumerateDevices().then(v=>{v=v.filter(E=>E.kind==="videoinput");let y=v.find(E=>_.some(C=>E.label.toLowerCase().includes(C)));return!y&&v.length&&_.includes("back")&&(y=v[v.length-1]),y&&(f.video.deviceId=p.exact?{exact:y.deviceId}:{ideal:y.deviceId}),f.video=i(f.video),Og("chrome: "+JSON.stringify(f)),d(f)})}f.video=i(f.video)}return Og("chrome: "+JSON.stringify(f)),d(f)},l=function(f){return e.version>=64?f:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[f.name]||f.name,message:f.message,constraint:f.constraint||f.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},c=function(f,d,p){o(f,m=>{t.webkitGetUserMedia(m,d,_=>{p&&p(l(_))})})};if(t.getUserMedia=c.bind(t),t.mediaDevices.getUserMedia){const f=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(d){return o(d,p=>f(p).then(m=>{if(p.audio&&!m.getAudioTracks().length||p.video&&!m.getVideoTracks().length)throw m.getTracks().forEach(_=>{_.stop()}),new DOMException("","NotFoundError");return m},m=>Promise.reject(l(m))))}}}function O_(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function k_(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",o=>{let l;s.RTCPeerConnection.prototype.getReceivers?l=this.getReceivers().find(f=>f.track&&f.track.id===o.track.id):l={track:o.track};const c=new Event("track");c.track=o.track,c.receiver=l,c.transceiver={receiver:l},c.streams=[i.stream],this.dispatchEvent(c)}),i.stream.getTracks().forEach(o=>{let l;s.RTCPeerConnection.prototype.getReceivers?l=this.getReceivers().find(f=>f.track&&f.track.id===o.id):l={track:o};const c=new Event("track");c.track=o,c.receiver=l,c.transceiver={receiver:l},c.streams=[i.stream],this.dispatchEvent(c)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else es(s,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function F_(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(o,l){return{track:l,get dtmf(){return this._dtmf===void 0&&(l.kind==="audio"?this._dtmf=o.createDTMFSender(l):this._dtmf=null),this._dtmf},_pc:o}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const o=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(f,d){let p=o.apply(this,arguments);return p||(p=e(this,f),this._senders.push(p)),p};const l=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(f){l.apply(this,arguments);const d=this._senders.indexOf(f);d!==-1&&this._senders.splice(d,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(l){this._senders=this._senders||[],t.apply(this,[l]),l.getTracks().forEach(c=>{this._senders.push(e(this,c))})};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(l){this._senders=this._senders||[],i.apply(this,[l]),l.getTracks().forEach(c=>{const f=this._senders.find(d=>d.track===c);f&&this._senders.splice(this._senders.indexOf(f),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(o=>o._pc=this),i},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function B_(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const t=s.RTCPeerConnection.prototype.getSenders;t&&(s.RTCPeerConnection.prototype.getSenders=function(){const l=t.apply(this,[]);return l.forEach(c=>c._pc=this),l});const i=s.RTCPeerConnection.prototype.addTrack;i&&(s.RTCPeerConnection.prototype.addTrack=function(){const l=i.apply(this,arguments);return l._pc=this,l}),s.RTCRtpSender.prototype.getStats=function(){const l=this;return this._pc.getStats().then(c=>Ng(c,l.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const t=s.RTCPeerConnection.prototype.getReceivers;t&&(s.RTCPeerConnection.prototype.getReceivers=function(){const o=t.apply(this,[]);return o.forEach(l=>l._pc=this),o}),es(s,"track",i=>(i.receiver._pc=i.srcElement,i)),s.RTCRtpReceiver.prototype.getStats=function(){const o=this;return this._pc.getStats().then(l=>Ng(l,o.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const e=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const i=arguments[0];let o,l,c;return this.getSenders().forEach(f=>{f.track===i&&(o?c=!0:o=f)}),this.getReceivers().forEach(f=>(f.track===i&&(l?c=!0:l=f),f.track===i)),c||o&&l?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):o?o.getStats():l?l.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function z_(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(c=>this._shimmedLocalStreams[c][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(c,f){if(!f)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const d=e.apply(this,arguments);return this._shimmedLocalStreams[f.id]?this._shimmedLocalStreams[f.id].indexOf(d)===-1&&this._shimmedLocalStreams[f.id].push(d):this._shimmedLocalStreams[f.id]=[f,d],d};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(c){this._shimmedLocalStreams=this._shimmedLocalStreams||{},c.getTracks().forEach(p=>{if(this.getSenders().find(_=>_.track===p))throw new DOMException("Track already exists.","InvalidAccessError")});const f=this.getSenders();t.apply(this,arguments);const d=this.getSenders().filter(p=>f.indexOf(p)===-1);this._shimmedLocalStreams[c.id]=[c].concat(d)};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(c){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[c.id],i.apply(this,arguments)};const o=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(c){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},c&&Object.keys(this._shimmedLocalStreams).forEach(f=>{const d=this._shimmedLocalStreams[f].indexOf(c);d!==-1&&this._shimmedLocalStreams[f].splice(d,1),this._shimmedLocalStreams[f].length===1&&delete this._shimmedLocalStreams[f]}),o.apply(this,arguments)}}function H_(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return z_(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const m=t.apply(this);return this._reverseStreams=this._reverseStreams||{},m.map(_=>this._reverseStreams[_.id])};const i=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(m){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},m.getTracks().forEach(_=>{if(this.getSenders().find(y=>y.track===_))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[m.id]){const _=new s.MediaStream(m.getTracks());this._streams[m.id]=_,this._reverseStreams[_.id]=m,m=_}i.apply(this,[m])};const o=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(m){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},o.apply(this,[this._streams[m.id]||m]),delete this._reverseStreams[this._streams[m.id]?this._streams[m.id].id:m.id],delete this._streams[m.id]},s.RTCPeerConnection.prototype.addTrack=function(m,_){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const v=[].slice.call(arguments,1);if(v.length!==1||!v[0].getTracks().find(C=>C===m))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(C=>C.track===m))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const E=this._streams[_.id];if(E)E.addTrack(m),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const C=new s.MediaStream([m]);this._streams[_.id]=C,this._reverseStreams[C.id]=_,this.addStream(C)}return this.getSenders().find(C=>C.track===m)};function l(p,m){let _=m.sdp;return Object.keys(p._reverseStreams||[]).forEach(v=>{const y=p._reverseStreams[v],E=p._streams[y.id];_=_.replace(new RegExp(E.id,"g"),y.id)}),new RTCSessionDescription({type:m.type,sdp:_})}function c(p,m){let _=m.sdp;return Object.keys(p._reverseStreams||[]).forEach(v=>{const y=p._reverseStreams[v],E=p._streams[y.id];_=_.replace(new RegExp(y.id,"g"),E.id)}),new RTCSessionDescription({type:m.type,sdp:_})}["createOffer","createAnswer"].forEach(function(p){const m=s.RTCPeerConnection.prototype[p],_={[p](){const v=arguments;return arguments.length&&typeof arguments[0]=="function"?m.apply(this,[E=>{const C=l(this,E);v[0].apply(null,[C])},E=>{v[1]&&v[1].apply(null,E)},arguments[2]]):m.apply(this,arguments).then(E=>l(this,E))}};s.RTCPeerConnection.prototype[p]=_[p]});const f=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?f.apply(this,arguments):(arguments[0]=c(this,arguments[0]),f.apply(this,arguments))};const d=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const p=d.get.apply(this);return p.type===""?p:l(this,p)}}),s.RTCPeerConnection.prototype.removeTrack=function(m){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!m._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(m._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let v;Object.keys(this._streams).forEach(y=>{this._streams[y].getTracks().find(C=>m.track===C)&&(v=this._streams[y])}),v&&(v.getTracks().length===1?this.removeStream(this._reverseStreams[v.id]):v.removeTrack(m.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Ed(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=s.RTCPeerConnection.prototype[t],o={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=o[t]})}function V_(s,e){es(s,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const kg=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:V_,shimAddTrackRemoveTrack:H_,shimAddTrackRemoveTrackWithNative:z_,shimGetSendersWithDtmf:F_,shimGetUserMedia:N_,shimMediaStream:O_,shimOnTrack:k_,shimPeerConnection:Ed,shimSenderReceiverGetStats:B_},Symbol.toStringTag,{value:"Module"}));function G_(s,e){const t=s&&s.navigator,i=s&&s.MediaStreamTrack;if(t.getUserMedia=function(o,l,c){Jd("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(o).then(l,c)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const o=function(c,f,d){f in c&&!(d in c)&&(c[d]=c[f],delete c[f])},l=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(c){return typeof c=="object"&&typeof c.audio=="object"&&(c=JSON.parse(JSON.stringify(c)),o(c.audio,"autoGainControl","mozAutoGainControl"),o(c.audio,"noiseSuppression","mozNoiseSuppression")),l(c)},i&&i.prototype.getSettings){const c=i.prototype.getSettings;i.prototype.getSettings=function(){const f=c.apply(this,arguments);return o(f,"mozAutoGainControl","autoGainControl"),o(f,"mozNoiseSuppression","noiseSuppression"),f}}if(i&&i.prototype.applyConstraints){const c=i.prototype.applyConstraints;i.prototype.applyConstraints=function(f){return this.kind==="audio"&&typeof f=="object"&&(f=JSON.parse(JSON.stringify(f)),o(f,"autoGainControl","mozAutoGainControl"),o(f,"noiseSuppression","mozNoiseSuppression")),c.apply(this,[f])}}}}function FC(s,e){s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||s.navigator.mediaDevices&&(s.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const o=new DOMException("getDisplayMedia without video constraints is undefined");return o.name="NotFoundError",o.code=8,Promise.reject(o)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(i)})}function W_(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Td(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection))return;!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(o){const l=s.RTCPeerConnection.prototype[o],c={[o](){return arguments[0]=new(o==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),l.apply(this,arguments)}};s.RTCPeerConnection.prototype[o]=c[o]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[l,c,f]=arguments;return i.apply(this,[l||null]).then(d=>{if(e.version<53&&!c)try{d.forEach(p=>{p.type=t[p.type]||p.type})}catch(p){if(p.name!=="TypeError")throw p;d.forEach((m,_)=>{d.set(_,Object.assign({},m,{type:t[m.type]||m.type}))})}return d}).then(c,f)}}function X_(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const o=e.apply(this,[]);return o.forEach(l=>l._pc=this),o});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const o=t.apply(this,arguments);return o._pc=this,o}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function $_(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(o=>o._pc=this),i}),es(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function j_(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){Jd("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function Y_(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function q_(s){if(!(typeof s=="object"&&s.RTCPeerConnection))return;const e=s.RTCPeerConnection.prototype.addTransceiver;e&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const o=i.length>0;o&&i.forEach(c=>{if("rid"in c&&!/^[a-z0-9]{0,16}$/i.test(c.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in c&&!(parseFloat(c.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in c&&!(parseFloat(c.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const l=e.apply(this,arguments);if(o){const{sender:c}=l,f=c.getParameters();(!("encodings"in f)||f.encodings.length===1&&Object.keys(f.encodings[0]).length===0)&&(f.encodings=i,c.sendEncodings=i,this.setParametersPromises.push(c.setParameters(f).then(()=>{delete c.sendEncodings}).catch(()=>{delete c.sendEncodings})))}return l})}function K_(s){if(!(typeof s=="object"&&s.RTCRtpSender))return;const e=s.RTCRtpSender.prototype.getParameters;e&&(s.RTCRtpSender.prototype.getParameters=function(){const i=e.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function J_(s){if(!(typeof s=="object"&&s.RTCPeerConnection))return;const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function Z_(s){if(!(typeof s=="object"&&s.RTCPeerConnection))return;const e=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const Fg=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:q_,shimCreateAnswer:Z_,shimCreateOffer:J_,shimGetDisplayMedia:FC,shimGetParameters:K_,shimGetUserMedia:G_,shimOnTrack:W_,shimPeerConnection:Td,shimRTCDataChannel:Y_,shimReceiverGetStats:$_,shimRemoveStream:j_,shimSenderGetStats:X_},Symbol.toStringTag,{value:"Module"}));function Q_(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(o=>e.call(this,o,i)),i.getVideoTracks().forEach(o=>e.call(this,o,i))},s.RTCPeerConnection.prototype.addTrack=function(i,...o){return o&&o.forEach(l=>{this._localStreams?this._localStreams.includes(l)||this._localStreams.push(l):this._localStreams=[l]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const o=t.getTracks();this.getSenders().forEach(l=>{o.includes(l.track)&&this.removeTrack(l)})})}}function ev(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(o=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(o))return;this._remoteStreams.push(o);const l=new Event("addstream");l.stream=o,this.dispatchEvent(l)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(o){o.streams.forEach(l=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(l)>=0)return;i._remoteStreams.push(l);const c=new Event("addstream");c.stream=l,i.dispatchEvent(c)})}),e.apply(i,arguments)}}}function tv(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,o=e.setLocalDescription,l=e.setRemoteDescription,c=e.addIceCandidate;e.createOffer=function(p,m){const _=arguments.length>=2?arguments[2]:arguments[0],v=t.apply(this,[_]);return m?(v.then(p,m),Promise.resolve()):v},e.createAnswer=function(p,m){const _=arguments.length>=2?arguments[2]:arguments[0],v=i.apply(this,[_]);return m?(v.then(p,m),Promise.resolve()):v};let f=function(d,p,m){const _=o.apply(this,[d]);return m?(_.then(p,m),Promise.resolve()):_};e.setLocalDescription=f,f=function(d,p,m){const _=l.apply(this,[d]);return m?(_.then(p,m),Promise.resolve()):_},e.setRemoteDescription=f,f=function(d,p,m){const _=c.apply(this,[d]);return m?(_.then(p,m),Promise.resolve()):_},e.addIceCandidate=f}function nv(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=o=>i(iv(o))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,o,l){e.mediaDevices.getUserMedia(i).then(o,l)}).bind(e))}function iv(s){return s&&s.video!==void 0?Object.assign({},s,{video:U_(s.video)}):s}function rv(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(i,o){if(i&&i.iceServers){const l=[];for(let c=0;c<i.iceServers.length;c++){let f=i.iceServers[c];f.urls===void 0&&f.url?(Jd("RTCIceServer.url","RTCIceServer.urls"),f=JSON.parse(JSON.stringify(f)),f.urls=f.url,delete f.url,l.push(f)):l.push(i.iceServers[c])}i.iceServers=l}return new e(i,o)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function sv(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function ov(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const o=this.getTransceivers().find(c=>c.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&o?o.direction==="sendrecv"?o.setDirection?o.setDirection("sendonly"):o.direction="sendonly":o.direction==="recvonly"&&(o.setDirection?o.setDirection("inactive"):o.direction="inactive"):i.offerToReceiveAudio===!0&&!o&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const l=this.getTransceivers().find(c=>c.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&l?l.direction==="sendrecv"?l.setDirection?l.setDirection("sendonly"):l.direction="sendonly":l.direction==="recvonly"&&(l.setDirection?l.setDirection("inactive"):l.direction="inactive"):i.offerToReceiveVideo===!0&&!l&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function av(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const Bg=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:av,shimCallbacksAPI:tv,shimConstraints:iv,shimCreateOfferLegacy:ov,shimGetUserMedia:nv,shimLocalStreamsAPI:Q_,shimRTCIceServerUrls:rv,shimRemoteStreamsAPI:ev,shimTrackEventTransceiver:sv},Symbol.toStringTag,{value:"Module"}));var Df={exports:{}},zg;function BC(){return zg||(zg=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((o,l)=>(l>0?"m="+o:o).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(o=>o.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const o={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let l=8;l<i.length;l+=2)switch(i[l]){case"raddr":o.relatedAddress=i[l+1];break;case"rport":o.relatedPort=parseInt(i[l+1],10);break;case"tcptype":o.tcpType=i[l+1];break;case"ufrag":o.ufrag=i[l+1],o.usernameFragment=i[l+1];break;default:o[i[l]]===void 0&&(o[i[l]]=i[l+1]);break}return o},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const o=t.component;o==="rtp"?i.push(1):o==="rtcp"?i.push(2):i.push(o),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const l=t.type;return i.push("typ"),i.push(l),l!=="host"&&t.relatedAddress&&t.relatedPort&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const o={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),o.name=i[0],o.clockRate=parseInt(i[1],10),o.channels=i.length===3?parseInt(i[2],10):1,o.numChannels=o.channels,o},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const o=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(o!==1?"/"+o:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={};let o;const l=t.substring(t.indexOf(" ")+1).split(";");for(let c=0;c<l.length;c++)o=l[c].trim().split("="),i[o[0].trim()]=o[1];return i},e.writeFmtp=function(t){let i="",o=t.payloadType;if(t.preferredPayloadType!==void 0&&(o=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const l=[];Object.keys(t.parameters).forEach(c=>{t.parameters[c]!==void 0?l.push(c+"="+t.parameters[c]):l.push(c)}),i+="a=fmtp:"+o+" "+l.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",o=t.payloadType;return t.preferredPayloadType!==void 0&&(o=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(l=>{i+="a=rtcp-fb:"+o+" "+l.type+(l.parameter&&l.parameter.length?" "+l.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),o={ssrc:parseInt(t.substring(7,i),10)},l=t.indexOf(":",i);return l>-1?(o.attribute=t.substring(i+1,l),o.value=t.substring(l+1)):o.attribute=t.substring(i+1),o},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(o=>parseInt(o,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let o="a=setup:"+i+`\r
`;return t.fingerprints.forEach(l=>{o+="a=fingerprint:"+l.algorithm+" "+l.value+`\r
`}),o},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const o=e.matchPrefix(t+i,"a=ice-ufrag:")[0],l=e.matchPrefix(t+i,"a=ice-pwd:")[0];return o&&l?{usernameFragment:o.substring(12),password:l.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},l=e.splitLines(t)[0].split(" ");i.profile=l[2];for(let f=3;f<l.length;f++){const d=l[f],p=e.matchPrefix(t,"a=rtpmap:"+d+" ")[0];if(p){const m=e.parseRtpMap(p),_=e.matchPrefix(t,"a=fmtp:"+d+" ");switch(m.parameters=_.length?e.parseFmtp(_[0]):{},m.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+d+" ").map(e.parseRtcpFb),i.codecs.push(m),m.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(m.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(f=>{i.headerExtensions.push(e.parseExtmap(f))});const c=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(f=>{c.forEach(d=>{f.rtcpFeedback.find(m=>m.type===d.type&&m.parameter===d.parameter)||f.rtcpFeedback.push(d)})}),i},e.writeRtpDescription=function(t,i){let o="";o+="m="+t+" ",o+=i.codecs.length>0?"9":"0",o+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",o+=i.codecs.map(c=>c.preferredPayloadType!==void 0?c.preferredPayloadType:c.payloadType).join(" ")+`\r
`,o+=`c=IN IP4 0.0.0.0\r
`,o+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(c=>{o+=e.writeRtpMap(c),o+=e.writeFmtp(c),o+=e.writeRtcpFb(c)});let l=0;return i.codecs.forEach(c=>{c.maxptime>l&&(l=c.maxptime)}),l>0&&(o+="a=maxptime:"+l+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(c=>{o+=e.writeExtmap(c)}),o},e.parseRtpEncodingParameters=function(t){const i=[],o=e.parseRtpParameters(t),l=o.fecMechanisms.indexOf("RED")!==-1,c=o.fecMechanisms.indexOf("ULPFEC")!==-1,f=e.matchPrefix(t,"a=ssrc:").map(v=>e.parseSsrcMedia(v)).filter(v=>v.attribute==="cname"),d=f.length>0&&f[0].ssrc;let p;const m=e.matchPrefix(t,"a=ssrc-group:FID").map(v=>v.substring(17).split(" ").map(E=>parseInt(E,10)));m.length>0&&m[0].length>1&&m[0][0]===d&&(p=m[0][1]),o.codecs.forEach(v=>{if(v.name.toUpperCase()==="RTX"&&v.parameters.apt){let y={ssrc:d,codecPayloadType:parseInt(v.parameters.apt,10)};d&&p&&(y.rtx={ssrc:p}),i.push(y),l&&(y=JSON.parse(JSON.stringify(y)),y.fec={ssrc:d,mechanism:c?"red+ulpfec":"red"},i.push(y))}}),i.length===0&&d&&i.push({ssrc:d});let _=e.matchPrefix(t,"b=");return _.length&&(_[0].indexOf("b=TIAS:")===0?_=parseInt(_[0].substring(7),10):_[0].indexOf("b=AS:")===0?_=parseInt(_[0].substring(5),10)*1e3*.95-2e3*8:_=void 0,i.forEach(v=>{v.maxBitrate=_})),i},e.parseRtcpParameters=function(t){const i={},o=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname")[0];o&&(i.cname=o.value,i.ssrc=o.ssrc);const l=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=l.length>0,i.compound=l.length===0;const c=e.matchPrefix(t,"a=rtcp-mux");return i.mux=c.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const o=e.matchPrefix(t,"a=msid:");if(o.length===1)return i=o[0].substring(7).split(" "),{stream:i[0],track:i[1]};const l=e.matchPrefix(t,"a=ssrc:").map(c=>e.parseSsrcMedia(c)).filter(c=>c.attribute==="msid");if(l.length>0)return i=l[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),o=e.matchPrefix(t,"a=max-message-size:");let l;o.length>0&&(l=parseInt(o[0].substring(19),10)),isNaN(l)&&(l=65536);const c=e.matchPrefix(t,"a=sctp-port:");if(c.length>0)return{port:parseInt(c[0].substring(12),10),protocol:i.fmt,maxMessageSize:l};const f=e.matchPrefix(t,"a=sctpmap:");if(f.length>0){const d=f[0].substring(10).split(" ");return{port:parseInt(d[0],10),protocol:d[1],maxMessageSize:l}}},e.writeSctpDescription=function(t,i){let o=[];return t.protocol!=="DTLS/SCTP"?o=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:o=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&o.push("a=max-message-size:"+i.maxMessageSize+`\r
`),o.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,o){let l;const c=i!==void 0?i:2;return t?l=t:l=e.generateSessionId(),`v=0\r
o=`+(o||"thisisadapterortc")+" "+l+" "+c+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const o=e.splitLines(t);for(let l=0;l<o.length;l++)switch(o[l]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return o[l].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const o=e.splitLines(t)[0].substring(2).split(" ");return{kind:o[0],port:parseInt(o[1],10),protocol:o[2],fmt:o.slice(3).join(" ")}},e.parseOLine=function(t){const o=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:o[0],sessionId:o[1],sessionVersion:parseInt(o[2],10),netType:o[3],addressType:o[4],address:o[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let o=0;o<i.length;o++)if(i[o].length<2||i[o].charAt(1)!=="=")return!1;return!0},s.exports=e})(Df)),Df.exports}var lv=BC();const Ys=J0(lv),zC=K0({__proto__:null,default:Ys},[lv]);function jl(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const o=new e(i),l=Ys.parseCandidate(i.candidate);for(const c in l)c in o||Object.defineProperty(o,c,{value:l[c]});return o.toJSON=function(){return{candidate:o.candidate,sdpMid:o.sdpMid,sdpMLineIndex:o.sdpMLineIndex,usernameFragment:o.usernameFragment}},o}return new e(i)},s.RTCIceCandidate.prototype=e.prototype,es(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Cd(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||es(s,"icecandidate",e=>{if(e.candidate){const t=Ys.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Yl(s,e){if(!s.RTCPeerConnection)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(f){if(!f||!f.sdp)return!1;const d=Ys.splitSections(f.sdp);return d.shift(),d.some(p=>{const m=Ys.parseMLine(p);return m&&m.kind==="application"&&m.protocol.indexOf("SCTP")!==-1})},i=function(f){const d=f.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(d===null||d.length<2)return-1;const p=parseInt(d[1],10);return p!==p?-1:p},o=function(f){let d=65536;return e.browser==="firefox"&&(e.version<57?f===-1?d=16384:d=2147483637:e.version<60?d=e.version===57?65535:65536:d=2147483637),d},l=function(f,d){let p=65536;e.browser==="firefox"&&e.version===57&&(p=65535);const m=Ys.matchPrefix(f.sdp,"a=max-message-size:");return m.length>0?p=parseInt(m[0].substring(19),10):e.browser==="firefox"&&d!==-1&&(p=2147483637),p},c=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:d}=this.getConfiguration();d==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const d=i(arguments[0]),p=o(d),m=l(arguments[0],d);let _;p===0&&m===0?_=Number.POSITIVE_INFINITY:p===0||m===0?_=Math.max(p,m):_=Math.min(p,m);const v={};Object.defineProperty(v,"maxMessageSize",{get(){return _}}),this._sctp=v}return c.apply(this,arguments)}}function ql(s){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype))return;function e(i,o){const l=i.send;i.send=function(){const f=arguments[0],d=f.length||f.size||f.byteLength;if(i.readyState==="open"&&o.sctp&&d>o.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+o.sctp.maxMessageSize+" bytes)");return l.apply(i,arguments)}}const t=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const o=t.apply(this,arguments);return e(o,this),o},es(s,"datachannel",i=>(e(i.channel,i.target),i))}function Rd(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=o=>{const l=o.target;if(l._lastConnectionState!==l.connectionState){l._lastConnectionState=l.connectionState;const c=new Event("connectionstatechange",o);l.dispatchEvent(c)}return o},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function Ad(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(o){if(o&&o.sdp&&o.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const l=o.sdp.split(`
`).filter(c=>c.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&o instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:o.type,sdp:l}):o.sdp=l}return t.apply(this,arguments)}}function Kl(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Jl(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let o=arguments[0]||{};if(typeof o!="object"||o.type&&o.sdp)return t.apply(this,arguments);if(o={type:o.type,sdp:o.sdp},!o.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":o.type="offer";break;default:o.type="answer";break}return o.sdp||o.type!=="offer"&&o.type!=="answer"?t.apply(this,[o]):(o.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(c=>t.apply(this,[c]))})}const HC=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Ad,shimAddIceCandidateNullOrEmpty:Kl,shimConnectionState:Rd,shimMaxMessageSize:Yl,shimParameterlessSetLocalDescription:Jl,shimRTCIceCandidate:jl,shimRTCIceCandidateRelayProtocol:Cd,shimSendThrowTypeError:ql},Symbol.toStringTag,{value:"Module"}));function VC({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=I_,i=kC(s),o={browserDetails:i,commonShim:HC,extractVersion:Jo,disableLog:NC,disableWarnings:OC,sdp:zC};switch(i.browser){case"chrome":if(!kg||!Ed||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),o;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),o;t("adapter.js shimming chrome."),o.browserShim=kg,Kl(s,i),Jl(s),N_(s,i),O_(s),Ed(s,i),k_(s),H_(s,i),F_(s),B_(s),V_(s,i),jl(s),Cd(s),Rd(s),Yl(s,i),ql(s),Ad(s,i);break;case"firefox":if(!Fg||!Td||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),o;t("adapter.js shimming firefox."),o.browserShim=Fg,Kl(s,i),Jl(s),G_(s,i),Td(s,i),W_(s),j_(s),X_(s),$_(s),Y_(s),q_(s),K_(s),J_(s),Z_(s),jl(s),Rd(s),Yl(s,i),ql(s);break;case"safari":if(!Bg||!e.shimSafari)return t("Safari shim is not included in this adapter release."),o;t("adapter.js shimming safari."),o.browserShim=Bg,Kl(s,i),Jl(s),rv(s),ov(s),tv(s),Q_(s),ev(s),sv(s),nv(s),av(s),jl(s),Cd(s),Yl(s,i),ql(s),Ad(s,i);break;default:t("Unsupported browser!");break}return o}const Hg=VC({window:typeof window>"u"?void 0:window});function ts(s,e,t,i){Object.defineProperty(s,e,{get:t,set:i,enumerable:!0,configurable:!0})}class cv{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,o=Math.ceil(i/this.chunkedMTU);let l=0,c=0;for(;c<i;){const f=Math.min(i,c+this.chunkedMTU),d=e.slice(c,f),p={__peerData:this._dataCount,n:l,data:d,total:o};t.push(p),c=f,l++}return this._dataCount++,t}}}function GC(s){let e=0;for(const o of s)e+=o.byteLength;const t=new Uint8Array(e);let i=0;for(const o of s)t.set(o,i),i+=o.byteLength;return t}const If=Hg.default||Hg,qo=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return If.browserDetails.browser}getVersion(){return If.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=If.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},WC=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),uv=()=>Math.random().toString(36).slice(2),Vg={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class XC extends cv{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(o){o.target&&t(o.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Vg,this.browser=qo.getBrowser(),this.browserVersion=qo.getVersion(),this.pack=b_,this.unpack=P_,this.supports=(function(){const t={browser:qo.isBrowserSupported(),webRTC:qo.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(Vg),t.audioVideo=!0;let o;try{o=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!o.ordered;try{o.binaryType="blob",t.binaryBlob=!qo.isIOS}catch{}}catch{}finally{o&&o.close()}}catch{}finally{i&&i.close()}return t})(),this.validateId=WC,this.randomToken=uv}}const Ln=new XC,$C="PeerJS: ";class jC{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[$C,...t];for(const o in i)i[o]instanceof Error&&(i[o]="("+i[o].name+") "+i[o].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var He=new jC,Zd={},YC=Object.prototype.hasOwnProperty,En="~";function ia(){}Object.create&&(ia.prototype=Object.create(null),new ia().__proto__||(En=!1));function qC(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function fv(s,e,t,i,o){if(typeof t!="function")throw new TypeError("The listener must be a function");var l=new qC(t,i||s,o),c=En?En+e:e;return s._events[c]?s._events[c].fn?s._events[c]=[s._events[c],l]:s._events[c].push(l):(s._events[c]=l,s._eventsCount++),s}function Zl(s,e){--s._eventsCount===0?s._events=new ia:delete s._events[e]}function yn(){this._events=new ia,this._eventsCount=0}yn.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)YC.call(t,i)&&e.push(En?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};yn.prototype.listeners=function(e){var t=En?En+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var o=0,l=i.length,c=new Array(l);o<l;o++)c[o]=i[o].fn;return c};yn.prototype.listenerCount=function(e){var t=En?En+e:e,i=this._events[t];return i?i.fn?1:i.length:0};yn.prototype.emit=function(e,t,i,o,l,c){var f=En?En+e:e;if(!this._events[f])return!1;var d=this._events[f],p=arguments.length,m,_;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),p){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,i),!0;case 4:return d.fn.call(d.context,t,i,o),!0;case 5:return d.fn.call(d.context,t,i,o,l),!0;case 6:return d.fn.call(d.context,t,i,o,l,c),!0}for(_=1,m=new Array(p-1);_<p;_++)m[_-1]=arguments[_];d.fn.apply(d.context,m)}else{var v=d.length,y;for(_=0;_<v;_++)switch(d[_].once&&this.removeListener(e,d[_].fn,void 0,!0),p){case 1:d[_].fn.call(d[_].context);break;case 2:d[_].fn.call(d[_].context,t);break;case 3:d[_].fn.call(d[_].context,t,i);break;case 4:d[_].fn.call(d[_].context,t,i,o);break;default:if(!m)for(y=1,m=new Array(p-1);y<p;y++)m[y-1]=arguments[y];d[_].fn.apply(d[_].context,m)}}return!0};yn.prototype.on=function(e,t,i){return fv(this,e,t,i,!1)};yn.prototype.once=function(e,t,i){return fv(this,e,t,i,!0)};yn.prototype.removeListener=function(e,t,i,o){var l=En?En+e:e;if(!this._events[l])return this;if(!t)return Zl(this,l),this;var c=this._events[l];if(c.fn)c.fn===t&&(!o||c.once)&&(!i||c.context===i)&&Zl(this,l);else{for(var f=0,d=[],p=c.length;f<p;f++)(c[f].fn!==t||o&&!c[f].once||i&&c[f].context!==i)&&d.push(c[f]);d.length?this._events[l]=d.length===1?d[0]:d:Zl(this,l)}return this};yn.prototype.removeAllListeners=function(e){var t;return e?(t=En?En+e:e,this._events[t]&&Zl(this,t)):(this._events=new ia,this._eventsCount=0),this};yn.prototype.off=yn.prototype.removeListener;yn.prototype.addListener=yn.prototype.on;yn.prefixed=En;yn.EventEmitter=yn;Zd=yn;var ns={};ts(ns,"ConnectionType",()=>Mr);ts(ns,"PeerErrorType",()=>Wt);ts(ns,"BaseConnectionErrorType",()=>wd);ts(ns,"DataConnectionErrorType",()=>Qd);ts(ns,"SerializationType",()=>dc);ts(ns,"SocketEventType",()=>yr);ts(ns,"ServerMessageType",()=>vn);var Mr=(function(s){return s.Data="data",s.Media="media",s})({}),Wt=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),wd=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),Qd=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),dc=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),yr=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),vn=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const dv="1.5.5";class KC extends Zd.EventEmitter{constructor(e,t,i,o,l,c=5e3){super(),this.pingInterval=c,this._disconnected=!0,this._messagesQueue=[];const f=e?"wss://":"ws://";this._baseUrl=f+t+":"+i+o+"peerjs?key="+l}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+dv),this._disconnected=!1,this._socket.onmessage=o=>{let l;try{l=JSON.parse(o.data),He.log("Server message received:",l)}catch{He.log("Invalid server message",o.data);return}this.emit(yr.Message,l)},this._socket.onclose=o=>{this._disconnected||(He.log("Socket closed.",o),this._cleanup(),this._disconnected=!0,this.emit(yr.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),He.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){He.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:vn.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(yr.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class hv{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Mr.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,o={ordered:!!e.reliable},l=t.createDataChannel(i.label,o);i._initializeDataChannel(l),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){He.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,o=this.connection.type,l=this.connection.provider;He.log("Listening for ICE candidates."),e.onicecandidate=c=>{!c.candidate||!c.candidate.candidate||(He.log(`Received ICE candidates for ${t}:`,c.candidate),l.socket.send({type:vn.Candidate,payload:{candidate:c.candidate,type:o,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":He.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(wd.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":He.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(wd.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":He.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},He.log("Listening for data channel"),e.ondatachannel=c=>{He.log("Received data channel");const f=c.channel;l.getConnection(t,i)._initializeDataChannel(f)},He.log("Listening for remote stream"),e.ontrack=c=>{He.log("Received remote stream");const f=c.streams[0],d=l.getConnection(t,i);if(d.type===Mr.Media){const p=d;this._addStreamToMediaConnection(f,p)}}}cleanup(){He.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const o=this.connection.dataChannel;o&&(i=!!o.readyState&&o.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);He.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),He.log("Set localDescription:",i,`for:${this.connection.peer}`);let o={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Mr.Data){const l=this.connection;o={...o,label:l.label,reliable:l.reliable,serialization:l.serialization}}t.socket.send({type:vn.Offer,payload:o,dst:this.connection.peer})}catch(o){o!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Wt.WebRTC,o),He.log("Failed to setLocalDescription, ",o))}}catch(i){t.emitError(Wt.WebRTC,i),He.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();He.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),He.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:vn.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(o){t.emitError(Wt.WebRTC,o),He.log("Failed to setLocalDescription, ",o)}}catch(i){t.emitError(Wt.WebRTC,i),He.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,o=this.connection.provider;He.log("Setting remote description",t);const l=this;try{await i.setRemoteDescription(t),He.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await l._makeAnswer()}catch(c){o.emitError(Wt.WebRTC,c),He.log("Failed to setRemoteDescription, ",c)}}async handleCandidate(e){He.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),He.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Wt.WebRTC,t),He.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(He.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return He.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){He.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class pv extends Zd.EventEmitter{emitError(e,t){He.error("Error:",t),this.emit("error",new JC(`${e}`,t))}}class JC extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class mv extends pv{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var bd;const ea=class ea extends mv{get type(){return Mr.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||ea.ID_PREFIX+Ln.randomToken(),this._negotiator=new hv(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{He.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{He.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){He.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case vn.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case vn.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:He.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){He.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const o of i)this.handleMessage(o);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};bd=new WeakMap,zo(ea,bd,ea.ID_PREFIX="mc_");let oc=ea;class ZC{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:o,path:l,key:c}=this._options,f=new URL(`${t}://${i}:${o}${l}${c}/${e}`);return f.searchParams.set("ts",`${Date.now()}${Math.random()}`),f.searchParams.set("version",dv),fetch(f.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){He.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Ln.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Ln.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw He.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Ld,Dd;const qr=class qr extends mv{get type(){return Mr.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||qr.ID_PREFIX+uv(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new hv(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{He.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{He.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{He.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Qd.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case vn.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case vn.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:He.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Ld=new WeakMap,Dd=new WeakMap,zo(qr,Ld,qr.ID_PREFIX="dc_"),zo(qr,Dd,qr.MAX_BUFFERED_AMOUNT=8388608);let ac=qr;class eh extends ac{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>ac.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return He.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Uf extends eh{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new cv,this.serialization=dc.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=P_(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const o=GC(i.data);this._handleDataMessage({data:o})}}_send(e,t){const i=b_(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);He.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class QC extends eh{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=dc.None}}class e1 extends eh{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=Ln.chunkedMTU){this.emitError(Qd.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=dc.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Id;const ta=class ta extends pv{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:QC,json:e1,binary:Uf,"binary-utf8":Uf,default:Uf},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:Ln.CLOUD_HOST,port:Ln.CLOUD_PORT,path:"/",key:ta.DEFAULT_KEY,token:Ln.randomToken(),config:Ln.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Ln.CLOUD_HOST?this._options.secure=Ln.isSecure():this._options.host==Ln.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&He.setLogFunction(this._options.logFunction),He.logLevel=this._options.debug||0,this._api=new ZC(t),this._socket=this._createServerConnection(),!Ln.supports.audioVideo&&!Ln.supports.data){this._delayedAbort(Wt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!Ln.validateId(i)){this._delayedAbort(Wt.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(o=>this._initialize(o)).catch(o=>this._abort(Wt.ServerError,o))}_createServerConnection(){const e=new KC(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(yr.Message,t=>{this._handleMessage(t)}),e.on(yr.Error,t=>{this._abort(Wt.SocketError,t)}),e.on(yr.Disconnected,()=>{this.disconnected||(this.emitError(Wt.Network,"Lost connection to server."),this.disconnect())}),e.on(yr.Close,()=>{this.disconnected||this._abort(Wt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,o=e.src;switch(t){case vn.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case vn.Error:this._abort(Wt.ServerError,i.msg);break;case vn.IdTaken:this._abort(Wt.UnavailableID,`ID "${this.id}" is taken`);break;case vn.InvalidKey:this._abort(Wt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case vn.Leave:He.log(`Received leave message from ${o}`),this._cleanupPeer(o),this._connections.delete(o);break;case vn.Expire:this.emitError(Wt.PeerUnavailable,`Could not connect to peer ${o}`);break;case vn.Offer:{const l=i.connectionId;let c=this.getConnection(o,l);if(c&&(c.close(),He.warn(`Offer received for existing Connection ID:${l}`)),i.type===Mr.Media){const d=new oc(o,this,{connectionId:l,_payload:i,metadata:i.metadata});c=d,this._addConnection(o,c),this.emit("call",d)}else if(i.type===Mr.Data){const d=new this._serializers[i.serialization](o,this,{connectionId:l,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});c=d,this._addConnection(o,c),this.emit("connection",d)}else{He.warn(`Received malformed connection type:${i.type}`);return}const f=this._getMessages(l);for(const d of f)c.handleMessage(d);break}default:{if(!i){He.warn(`You received a malformed message from ${o} of type ${t}`);return}const l=i.connectionId,c=this.getConnection(o,l);c&&c.peerConnection?c.handleMessage(e):l?this._storeMessage(l,e):He.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){He.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Wt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){He.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Wt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){He.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const o=new oc(e,this,{...i,_stream:t});return this._addConnection(e,o),o}_addConnection(e,t){He.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const o of i)if(o.connectionId===t)return o;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){He.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(He.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;He.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)He.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)He.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Wt.ServerError,t))}};Id=new WeakMap,zo(ta,Id,ta.DEFAULT_KEY="peerjs");let Pd=ta;var t1=Pd;function n1(){const s=an.useRef(null),[e,t]=an.useState(!1),i=an.useRef(null),o=an.useRef([]),l=an.useRef(new Map),c=an.useRef(null),f=an.useRef(null),d=an.useRef(null),p=an.useRef({x:0,y:1.7,z:0,yaw:0}),m=an.useRef(new Set),_=an.useRef(""),v=an.useCallback(w=>{const b=new la(200,200,50,50),H=new Bl({color:1118481}),N=new Vn(b,H);N.rotation.x=-Math.PI/2,w.add(N);const U=new bC(200,100,2236962,1579032);w.add(U);const $=new PC(4210752,.5);w.add($);const he=new wC(16777215,.8);he.position.set(10,20,10),w.add(he);const T=new io(1,3,1);for(let ne=0;ne<50;ne++){const Y=new Bl({color:new at().setHSL(Math.random()*.2+.5,.3,.2)}),oe=new Vn(T,Y);oe.position.set((Math.random()-.5)*80,1.5,(Math.random()-.5)*80),w.add(oe)}const P=new Kd(.15,8,8);for(let ne=0;ne<30;ne++){const Y=new Bl({color:16777215,emissive:new at().setHSL(Math.random(),1,.5),emissiveIntensity:2}),oe=new Vn(P,Y);oe.position.set((Math.random()-.5)*100,.3,(Math.random()-.5)*100),w.add(oe)}},[]),y=an.useCallback(w=>{const b=new qd(.3,.8,4,8),H=new Bl({color:w,emissive:w,emissiveIntensity:.3}),N=new Vn(b,H);return N.castShadow=!0,N},[]),E=an.useCallback(()=>{if(!s.current)return;const w=new cC;w.background=new at(328968),w.fog=new Xd(328968,20,100),c.current=w;const b=new Jn(75,window.innerWidth/window.innerHeight,.1,1e3);b.position.set(0,1.7,0),f.current=b;const H=new lC({antialias:!0});H.setSize(window.innerWidth,window.innerHeight),H.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(H.domElement),d.current=H,v(w),window.addEventListener("resize",()=>{!f.current||!d.current||(f.current.aspect=window.innerWidth/window.innerHeight,f.current.updateProjectionMatrix(),d.current.setSize(window.innerWidth,window.innerHeight))});const N=Y=>m.current.add(Y.code),U=Y=>m.current.delete(Y.code);window.addEventListener("keydown",N),window.addEventListener("keyup",U);const $=H.domElement;$.addEventListener("click",()=>$.requestPointerLock());let he=0;const T=Y=>{document.pointerLockElement===$&&(he-=Y.movementX*.002,p.current.yaw=he)};document.addEventListener("mousemove",T);let P=performance.now();const ne=()=>{const Y=performance.now(),oe=(Y-P)/1e3;P=Y;const ce=p.current,Q=5*oe;(m.current.has("KeyW")||m.current.has("ArrowUp"))&&(ce.x-=Math.sin(he)*Q,ce.z-=Math.cos(he)*Q),(m.current.has("KeyS")||m.current.has("ArrowDown"))&&(ce.x+=Math.sin(he)*Q,ce.z+=Math.cos(he)*Q),(m.current.has("KeyA")||m.current.has("ArrowLeft"))&&(ce.x-=Math.cos(he)*Q,ce.z+=Math.sin(he)*Q),(m.current.has("KeyD")||m.current.has("ArrowRight"))&&(ce.x+=Math.cos(he)*Q,ce.z-=Math.sin(he)*Q),b.position.set(ce.x,ce.y,ce.z),b.rotation.y=he;const ae=_.current;l.current.forEach(F=>{F.id!==ae&&F.mesh&&F.mesh.position.set(F.x,F.y,F.z)}),H.render(w,b),requestAnimationFrame(ne)};return requestAnimationFrame(ne),()=>{var Y;window.removeEventListener("keydown",N),window.removeEventListener("keyup",U),document.removeEventListener("mousemove",T),H.dispose(),(Y=s.current)==null||Y.removeChild(H.domElement)}},[v]),C=an.useCallback(()=>{const w=Math.random().toString(36).slice(2,10);_.current=w;const b=new t1(w,{debug:1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]}});i.current=b,b.on("open",()=>{var $;const H=new at().setHSL(Math.random(),.7,.5),N=y("#"+H.getHexString());N.position.set(p.current.x,p.current.y,p.current.z),($=c.current)==null||$.add(N);const U={id:w,x:0,y:1.7,z:0,yaw:0,color:"#"+H.getHexString(),mesh:N};l.current.set(w,U)}),b.on("connection",H=>{o.current.push(H),H.on("data",N=>x(H,N)),H.on("open",()=>S(H))}),b.on("error",H=>console.error("Peer error:",H)),setInterval(()=>{const H=p.current,N={type:"move",id:_.current,...H};o.current.forEach(U=>{U.open&&U.send(N)})},50)},[y]),x=(w,b)=>{var H;if(b.type==="move"){let N=l.current.get(b.id);if(N)Object.assign(N,b);else{const U=b.color||"#ff0000",$=y(U);(H=c.current)==null||H.add($),N={...b,mesh:$},l.current.set(b.id,N)}}else b.type==="state"&&Object.entries(b.players).forEach(([N,U])=>{var $;if(N!==_.current){let he=l.current.get(N);if(he)Object.assign(he,U);else{const T=y(U.color||"#ff0000");($=c.current)==null||$.add(T),he={...U,mesh:T},l.current.set(N,he)}}})},S=w=>{const b={type:"state",players:{}};l.current.forEach((H,N)=>{N!==_.current&&(b.players[N]={x:H.x,y:H.y,z:H.z,yaw:H.yaw,color:H.color})}),w.open&&w.send(b)},D=()=>{t(!0)};return an.useEffect(()=>{if(e){const w=E();return C(),w}},[e,E,C]),e?Gs.jsx("div",{ref:s}):Gs.jsxs("div",{id:"enter",onClick:D,children:[Gs.jsx("h1",{children:"3D SPACE"}),Gs.jsx("p",{children:"Click to enter · WASD to move · Mouse to look"})]})}oy.createRoot(document.getElementById("root")).render(Gs.jsx(an.StrictMode,{children:Gs.jsx(n1,{})}));
