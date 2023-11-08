(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{8530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return u}});let n=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class r{disable(){throw n}getStore(){}run(){throw n}exit(){throw n}enterWith(){throw n}}let o=globalThis.AsyncLocalStorage;function u(){return o?new o:new r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5182:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(8754),n(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return v},usePathname:function(){return y},ServerInsertedHTMLContext:function(){return a.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return a.useServerInsertedHTML},useRouter:function(){return b},useParams:function(){return g},useSelectedLayoutSegments:function(){return h},useSelectedLayoutSegment:function(){return m},redirect:function(){return c.redirect},notFound:function(){return f.notFound}});let r=n(7294),o=n(4224),u=n(8463),i=n(5182),l=n(2526),a=n(3014),c=n(8781),f=n(8147),s=Symbol("internal for urlsearchparams readonly");function d(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[s][Symbol.iterator]()}append(){throw d()}delete(){throw d()}set(){throw d()}sort(){throw d()}constructor(e){this[s]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function v(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(u.SearchParamsContext),t=(0,r.useMemo)(()=>e?new p(e):null,[e]);return t}function y(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(u.PathnameContext)}function b(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function g(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,n){void 0===n&&(n={});let r=t[1];for(let t of Object.values(r)){let r=t[0],o=Array.isArray(r),u=o?r[1]:r;if(!u||u.startsWith("__PAGE__"))continue;let i=o&&("c"===r[2]||"oc"===r[2]);i?n[r[0]]=r[1].split("/"):o&&(n[r[0]]=r[1]),n=e(t,n)}return n}(e.tree):null}function h(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(o.LayoutRouterContext);return function e(t,n,r,o){let u;if(void 0===r&&(r=!0),void 0===o&&(o=[]),r)u=t[1][n];else{var i;let e=t[1];u=null!=(i=e.children)?i:Object.values(e)[0]}if(!u)return o;let a=u[0],c=(0,l.getSegmentValue)(a);return!c||c.startsWith("__PAGE__")?o:(o.push(c),e(u,n,!1,o))}(t,e)}function m(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=h(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return o}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return(null==e?void 0:e.digest)===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return l},redirect:function(){return a},isRedirectError:function(){return c},getURLFromRedirectError:function(){return f},getRedirectTypeFromError:function(){return s}});let u=n(4505),i="NEXT_REDIRECT";function l(e,t){let n=Error(i);n.digest=i+";"+t+";"+e;let r=u.requestAsyncStorage.getStore();return r&&(n.mutableCookies=r.mutableCookies),n}function a(e,t){throw void 0===t&&(t="replace"),l(e,t)}function c(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,n,r]=e.digest.split(";",3);return t===i&&("replace"===n||"push"===n)&&"string"==typeof r}function f(e){return c(e)?e.digest.split(";",3)[2]:null}function s(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=r||(r={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let r=n(8530),o=(0,r.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2526:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return i}});let r=n(1757),o=r._(n(7294)),u=o.default.createContext(null);function i(e){let t=(0,o.useContext)(u);t&&t(e)}},9332:function(e,t,n){n(1414)},1163:function(e,t,n){e.exports=n(6885)},8386:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),o=function(e){return"object"==typeof e&&null!==e},u=function(e){var t=e.value,n=void 0===t?"":t,u=e.numInputs,i=void 0===u?4:u,l=e.onChange,a=e.onPaste,c=e.renderInput,f=e.shouldAutoFocus,s=void 0!==f&&f,d=e.inputType,p=void 0===d?"text":d,v=e.renderSeparator,y=e.placeholder,b=e.containerStyle,g=e.inputStyle,h=e.skipDefaultStyles,m=void 0!==h&&h,_=r.useState(0),S=_[0],j=_[1],P=r.useRef([]),O=function(){return n?n.toString().split(""):[]},E="number"===p||"tel"===p;r.useEffect(function(){P.current=P.current.slice(0,i)},[i]),r.useEffect(function(){var e;s&&(null===(e=P.current[0])||void 0===e||e.focus())},[s]);var x=function(){if("string"==typeof y){if(y.length===i)return y;y.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},M=function(e){return(E?!isNaN(Number(e)):"string"==typeof e)&&1===e.trim().length},C=function(e){var t=e.target.value;M(t)&&(I(t),k(S+1))},w=function(e){var t=e.nativeEvent;M(e.target.value)||(null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),I(""),k(S-1)),e.target.value="")},A=function(){j(S-1)},L=function(e){var t=O();[e.code,e.key].includes("Backspace")?(e.preventDefault(),I(""),k(S-1)):"Delete"===e.code?(e.preventDefault(),I("")):"ArrowLeft"===e.code?(e.preventDefault(),k(S-1)):"ArrowRight"===e.code?(e.preventDefault(),k(S+1)):e.key===t[S]?(e.preventDefault(),k(S+1)):("Spacebar"===e.code||"Space"===e.code||"ArrowUp"===e.code||"ArrowDown"===e.code)&&e.preventDefault()},k=function(e){var t,n,r=Math.max(Math.min(i-1,e),0);P.current[r]&&(null===(t=P.current[r])||void 0===t||t.focus(),null===(n=P.current[r])||void 0===n||n.select(),j(r))},I=function(e){var t=O();t[S]=e[0],R(t)},R=function(e){l(e.join(""))},D=function(e){e.preventDefault();var t,n=O(),r=S,o=e.clipboardData.getData("text/plain").slice(0,i-S).split("");if(!(E&&o.some(function(e){return isNaN(Number(e))}))){for(var u=0;u<i;++u)u>=S&&o.length>0&&(n[u]=null!==(t=o.shift())&&void 0!==t?t:"",r++);k(r),R(n)}};return r.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},o(b)&&b),className:"string"==typeof b?b:void 0,onPaste:a},Array.from({length:i},function(e,t){return t}).map(function(e){var t,n,u;return r.createElement(r.Fragment,{key:e},c({value:null!==(t=O()[e])&&void 0!==t?t:"",placeholder:null!==(u=null===(n=x())||void 0===n?void 0:n[e])&&void 0!==u?u:void 0,ref:function(t){return P.current[e]=t},onChange:C,onFocus:function(t){j(e),t.target.select()},onBlur:A,onKeyDown:L,onPaste:D,autoComplete:"off",maxLength:1,"aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(m?{}:{width:"1em",textAlign:"center"},o(g)?g:{}),className:"string"==typeof g?g:void 0,type:p,inputMode:E?"numeric":"text",onInput:w},e),e<i-1&&("function"==typeof v?v(e):v))}))}}}]);