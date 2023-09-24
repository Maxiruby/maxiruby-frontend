import{a as x}from"/build/_shared/chunk-Q6JY3F4H.js";import{c as d}from"/build/_shared/chunk-ZSCMMWXX.js";var j=d(q=>{"use strict";var l=x();function g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var k=typeof Object.is=="function"?Object.is:g,_=l.useState,L=l.useEffect,M=l.useLayoutEffect,R=l.useDebugValue;function W(e,t){var r=t(),s=_({inst:{value:r,getSnapshot:t}}),n=s[0].inst,u=s[1];return M(function(){n.value=r,n.getSnapshot=t,S(n)&&u({inst:n})},[e,r,t]),L(function(){return S(n)&&u({inst:n}),e(function(){S(n)&&u({inst:n})})},[e]),R(r),r}function S(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!k(e,r)}catch{return!0}}function z(e,t){return t()}var A=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?z:W;q.useSyncExternalStore=l.useSyncExternalStore!==void 0?l.useSyncExternalStore:A});var V=d((T,w)=>{"use strict";w.exports=j()});var D=d(O=>{"use strict";var a=x(),B=V();function C(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var F=typeof Object.is=="function"?Object.is:C,G=B.useSyncExternalStore,H=a.useRef,I=a.useEffect,J=a.useMemo,K=a.useDebugValue;O.useSyncExternalStoreWithSelector=function(e,t,r,s,n){var u=H(null);if(u.current===null){var o={hasValue:!1,value:null};u.current=o}else o=u.current;u=J(function(){function y(i){if(!h){if(h=!0,p=i,i=s(i),n!==void 0&&o.hasValue){var c=o.value;if(n(c,i))return v=c}return v=i}if(c=v,F(p,i))return c;var m=s(i);return n!==void 0&&n(c,m)?c:(p=i,v=m)}var h=!1,p,v,E=r===void 0?null:r;return[function(){return y(t())},E===null?void 0:function(){return y(E())}]},[t,r,s,n]);var f=G(e,u[0],u[1]);return I(function(){o.hasValue=!0,o.value=f},[f]),K(f),f}});var P=d((X,N)=>{"use strict";N.exports=D()});export{V as a,P as b};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
