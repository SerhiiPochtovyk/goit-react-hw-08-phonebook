"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[457],{1457:function(e,t,n){n.r(t),n.d(t,{default:function(){return ge}});var o=n(9434),r=n(3634),a="NOT_FOUND";var i=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},o=n.equalityCheck,r=void 0===o?i:o,s=n.maxSize,c=void 0===s?1:s,l=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var o=t.length,r=0;r<o;r++)if(!e(t[r],n[r]))return!1;return!0}}(r),d=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:a},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function o(e){var o=n.findIndex((function(n){return t(e,n.key)}));if(o>-1){var r=n[o];return o>0&&(n.splice(o,1),n.unshift(r)),r.value}return a}return{get:o,put:function(t,r){o(t)===a&&(n.unshift({key:t,value:r}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,u);function f(){var t=d.get(arguments);if(t===a){if(t=e.apply(null,arguments),l){var n=d.getEntries(),o=n.find((function(e){return l(e.value,t)}));o&&(t=o.value)}d.put(arguments,t)}return t}return f.clearCache=function(){return d.clear()},f}function c(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];var a,i=0,s={memoizeOptions:void 0},l=o.pop();if("object"===typeof l&&(s=l,l=o.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var u=s,d=u.memoizeOptions,f=void 0===d?n:d,m=Array.isArray(f)?f:[f],p=c(o),v=e.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(m)),h=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return a=v.apply(null,e)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:v,dependencies:p,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return r}var u=l(s),d=function(e){return e.contactList.contacts.items},f=function(e){return e.contactList.contacts.isLoading},m=function(e){return e.contactList.contacts.error},p=function(e){return e.contactList.contacts.deletedId},v=u([d,function(e){return e.filter.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().trim().includes(t.toLowerCase().trim())||e.number.toLowerCase().trim().includes(t.toLowerCase().trim())}))})),h=n(9983);function x(e){return(0,h.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm240 80c0-8.8 7.2-16 16-16c45 0 85.6 20.5 115.7 53.1c6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9c-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47c0-20 28.6-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47zM367.6 208a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"}}]})(e)}var g=n(1413),y=n(2791),b=n(1134),w=n(4942),E=n(9439),C=n(4925),T=n(3433);function L(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=L(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var N=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=L(e))&&(o&&(o+=" "),o+=t);return o},j=["theme","type"],Z=["delay","staleId"],k=function(e){return"number"==typeof e&&!isNaN(e)},I=function(e){return"string"==typeof e},_=function(e){return"function"==typeof e},O=function(e){return I(e)||_(e)?e:null},M=function(e){return(0,y.isValidElement)(e)||I(e)||_(e)||k(e)};function R(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,a=e.position,s=e.preventExitTransition,l=e.done,u=e.nodeRef,d=e.isIn,f=r?"".concat(t,"--").concat(a):t,m=r?"".concat(n,"--").concat(a):n,p=(0,y.useRef)(0);return(0,y.useLayoutEffect)((function(){var e,t=u.current,n=f.split(" "),o=function e(o){var r;o.target===u.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===p.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,T.Z)(n)))};(e=t.classList).add.apply(e,(0,T.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,y.useEffect)((function(){var e=u.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,c):l()};d||(s?t():(p.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[d]),y.createElement(y.Fragment,null,o)}}function z(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var A={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,T.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},B=function(e){var t=e.theme,n=e.type,o=(0,C.Z)(e,j);return y.createElement("svg",(0,g.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},P={info:function(e){return y.createElement(B,(0,g.Z)({},e),y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return y.createElement(B,(0,g.Z)({},e),y.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return y.createElement(B,(0,g.Z)({},e),y.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return y.createElement(B,(0,g.Z)({},e),y.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return y.createElement("div",{className:"Toastify__spinner"})}};function S(e){var t=(0,y.useReducer)((function(e){return e+1}),0),n=(0,E.Z)(t,2)[1],o=(0,y.useState)([]),r=(0,E.Z)(o,2),a=r[0],i=r[1],s=(0,y.useRef)(null),c=(0,y.useRef)(new Map).current,l=function(e){return-1!==a.indexOf(e)},u=(0,y.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:function(e){return c.get(e)}}).current;function d(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function f(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function m(){var e=u.queue.shift();v(e.toastContent,e.toastProps,e.staleId)}function p(e,t){var o=t.delay,r=t.staleId,a=(0,C.Z)(t,Z);if(M(e)&&!function(e){return!s.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||c.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,l=a.updateId,d=a.data,p=u.props,h=function(){return f(i)},x=null==l;x&&u.count++;var b,w,T=(0,g.Z)((0,g.Z)((0,g.Z)({},p),{},{style:p.toastStyle,key:u.toastKey++},Object.fromEntries(Object.entries(a).filter((function(e){var t=(0,E.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:i,updateId:l,data:d,closeToast:h,isIn:!1,className:O(a.className||p.toastClassName),bodyClassName:O(a.bodyClassName||p.bodyClassName),progressClassName:O(a.progressClassName||p.progressClassName),autoClose:!a.isLoading&&(b=a.autoClose,w=p.autoClose,!1===b||k(b)&&b>0?b:w),deleteToast:function(){var e=z(c.get(i),"removed");c.delete(i),A.emit(4,e);var t=u.queue.length;if(u.count=null==i?u.count-u.displayedToast:u.count-1,u.count<0&&(u.count=0),t>0){var o=null==i?u.props.limit:1;if(1===t||1===o)u.displayedToast++,m();else{var r=o>t?t:o;u.displayedToast=r;for(var a=0;a<r;a++)m()}}else n()}});T.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(_(r)?a=r(i):(0,y.isValidElement)(r)?a=(0,y.cloneElement)(r,i):I(r)||k(r)?a=r:o?a=P.spinner():function(e){return e in P}(n)&&(a=P[n](i))),a}(T),_(a.onOpen)&&(T.onOpen=a.onOpen),_(a.onClose)&&(T.onClose=a.onClose),T.closeButton=p.closeButton,!1===a.closeButton||M(a.closeButton)?T.closeButton=a.closeButton:!0===a.closeButton&&(T.closeButton=!M(p.closeButton)||p.closeButton);var L=e;(0,y.isValidElement)(e)&&!I(e.type)?L=(0,y.cloneElement)(e,{closeToast:h,toastProps:T,data:d}):_(e)&&(L=e({closeToast:h,toastProps:T,data:d})),p.limit&&p.limit>0&&u.count>p.limit&&x?u.queue.push({toastContent:L,toastProps:T,staleId:r}):k(o)?setTimeout((function(){v(L,T,r)}),o):v(L,T,r)}}function v(e,t,n){var o=t.toastId;n&&c.delete(n);var r={content:e,props:t};c.set(o,r),i((function(e){return[].concat((0,T.Z)(e),[o]).filter((function(e){return e!==n}))})),A.emit(4,z(r,null==r.props.updateId?"added":"updated"))}return(0,y.useEffect)((function(){return u.containerId=e.containerId,A.cancelEmit(3).on(0,p).on(1,(function(e){return s.current&&f(e)})).on(5,d).emit(2,u),function(){c.clear(),A.emit(3,u)}}),[]),(0,y.useEffect)((function(){u.props=e,u.isToastActive=l,u.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(c.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:l}}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function F(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function q(e){var t=(0,y.useState)(!1),n=(0,E.Z)(t,2),o=n[0],r=n[1],a=(0,y.useState)(!1),i=(0,E.Z)(a,2),s=i[0],c=i[1],l=(0,y.useRef)(null),u=(0,y.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,y.useRef)(e),f=e.autoClose,m=e.pauseOnHover,p=e.closeToast,v=e.onClick,h=e.closeOnClick;function x(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",T),document.addEventListener("touchmove",C),document.addEventListener("touchend",T);var n=l.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=D(t.nativeEvent),u.y=F(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function g(t){if(u.boundingRect){var n=u.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&u.x>=a&&u.x<=i&&u.y>=o&&u.y<=r?w():b()}}function b(){r(!0)}function w(){r(!1)}function C(t){var n=l.current;u.canDrag&&n&&(u.didMove=!0,o&&w(),u.x=D(t),u.y=F(t),u.delta="x"===e.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(u.delta,"px)"),n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function T(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",T);var t=l.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,y.useEffect)((function(){d.current=e})),(0,y.useEffect)((function(){return l.current&&l.current.addEventListener("d",b,{once:!0}),_(e.onOpen)&&e.onOpen((0,y.isValidElement)(e.children)&&e.children.props),function(){var e=d.current;_(e.onClose)&&e.onClose((0,y.isValidElement)(e.children)&&e.children.props)}}),[]),(0,y.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",b),window.addEventListener("blur",w)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",w))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:x,onTouchStart:x,onMouseUp:g,onTouchEnd:g};return f&&m&&(L.onMouseEnter=w,L.onMouseLeave=b),h&&(L.onClick=function(e){v&&v(e),u.canCloseOnClick&&p()}),{playToast:b,pauseToast:w,isRunning:o,preventExitTransition:s,toastRef:l,eventHandlers:L}}function H(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return y.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},y.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},y.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function V(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,s=e.className,c=e.style,l=e.controlledProgress,u=e.progress,d=e.rtl,f=e.isIn,m=e.theme,p=i||l&&0===u,v=(0,g.Z)((0,g.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:p?0:1});l&&(v.transform="scaleX(".concat(u,")"));var h=N("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":d}),x=_(s)?s({rtl:d,type:a,defaultClassName:h}):N(h,s);return y.createElement("div",(0,w.Z)({role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:x,style:v},l&&u>=1?"onTransitionEnd":"onAnimationEnd",l&&u<1?null:function(){f&&o()}))}var Q=function(e){var t=q(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,l=e.onClick,u=e.type,d=e.hideProgressBar,f=e.closeToast,m=e.transition,p=e.position,v=e.className,h=e.style,x=e.bodyClassName,b=e.bodyStyle,w=e.progressClassName,E=e.progressStyle,C=e.updateId,T=e.role,L=e.progress,j=e.rtl,Z=e.toastId,k=e.deleteToast,I=e.isIn,O=e.isLoading,M=e.iconOut,R=e.closeOnClick,z=e.theme,A=N("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(u),{"Toastify__toast--rtl":j},{"Toastify__toast--close-on-click":R}),B=_(v)?v({rtl:j,position:p,type:u,defaultClassName:A}):N(A,v),P=!!L||!c,S={closeToast:f,type:u,theme:z},D=null;return!1===i||(D=_(i)?i(S):(0,y.isValidElement)(i)?(0,y.cloneElement)(i,S):H(S)),y.createElement(m,{isIn:I,done:k,position:p,preventExitTransition:o,nodeRef:r},y.createElement("div",(0,g.Z)((0,g.Z)({id:Z,onClick:l,className:B},a),{},{style:h,ref:r}),y.createElement("div",(0,g.Z)((0,g.Z)({},I&&{role:T}),{},{className:_(x)?x({type:u}):N("Toastify__toast-body",x),style:b}),null!=M&&y.createElement("div",{className:N("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},M),y.createElement("div",null,s)),D,y.createElement(V,(0,g.Z)((0,g.Z)({},C&&!P?{key:"pb-".concat(C)}:{}),{},{rtl:j,theme:z,delay:c,isRunning:n,isIn:I,closeToast:f,hide:d,type:u,style:E,className:w,controlledProgress:P,progress:L||0}))))},U=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},W=R(U("bounce",!0)),Y=(R(U("slide",!0)),R(U("zoom")),R(U("flip")),(0,y.forwardRef)((function(e,t){var n=S(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,l=e.containerId;function u(e){var t=N("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return _(i)?i({position:e,rtl:c,defaultClassName:t}):N(t,O(i))}return(0,y.useEffect)((function(){t&&(t.current=r.current)}),[]),y.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?(0,g.Z)({},s):(0,g.Z)((0,g.Z)({},s),{},{pointerEvents:"none"});return y.createElement("div",{className:u(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return y.createElement(Q,(0,g.Z)((0,g.Z)({},r),{},{isIn:a(r.toastId),style:(0,g.Z)((0,g.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));Y.displayName="ToastContainer",Y.defaultProps={position:"top-right",transition:W,autoClose:5e3,closeButton:H,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var X,G=new Map,K=[],J=1;function $(){return""+J++}function ee(e){return e&&(I(e.toastId)||k(e.toastId))?e.toastId:$()}function te(e,t){return G.size>0?A.emit(0,e,t):K.push({content:e,options:t}),t.toastId}function ne(e,t){return(0,g.Z)((0,g.Z)({},t),{},{type:t&&t.type||e,toastId:ee(t)})}function oe(e){return function(t,n){return te(t,ne(e,n))}}function re(e,t){return te(e,ne("default",t))}function ae(e){return(0,h.w_)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}}]})(e)}re.loading=function(e,t){return te(e,ne("default",(0,g.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},re.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=I(r)?re.loading(r,n):re.loading(r.render,(0,g.Z)((0,g.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,r){if(null!=t){var a=(0,g.Z)((0,g.Z)((0,g.Z)({type:e},s),n),{},{data:r}),i=I(t)?{render:t}:t;return o?re.update(o,(0,g.Z)((0,g.Z)({},a),i)):re(i.render,(0,g.Z)((0,g.Z)({},a),i)),r}re.dismiss(o)},l=_(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},re.success=oe("success"),re.info=oe("info"),re.error=oe("error"),re.warning=oe("warning"),re.warn=re.warning,re.dark=function(e,t){return te(e,ne("default",(0,g.Z)({theme:"dark"},t)))},re.dismiss=function(e){G.size>0?A.emit(1,e):K=K.filter((function(t){return null!=e&&t.options.toastId!==e}))},re.clearWaitingQueue=function(e){return void 0===e&&(e={}),A.emit(5,e)},re.isActive=function(e){var t=!1;return G.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},re.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=G.get(n||X);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=(0,g.Z)((0,g.Z)((0,g.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:$()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,te(i,a)}}),0)},re.done=function(e){re.update(e,{progress:1})},re.onChange=function(e){return A.on(4,e),function(){A.off(4,e)}},re.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},re.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},A.on(2,(function(e){X=e.containerId||e,G.set(X,e),K.forEach((function(e){A.emit(0,e.content,e.options)})),K=[]})).on(3,(function(e){G.delete(e.containerId||e),0===G.size&&A.off(0).off(1).off(5)}));var ie=n(184),se=function(){var e,t,n=(0,o.v9)(d),a=(0,o.I0)(),i=(0,b.cI)(),s=i.register,c=i.handleSubmit,l=i.reset,u=i.formState.errors;return(0,ie.jsxs)("form",{onSubmit:c((function(e){if(n.find((function(t){return t.name.toLowerCase().trim()===e.name.toLowerCase().trim()})))re.info("".concat(e.name," is already in your contacts."));else{var t=e.name,o=e.number;re.success("".concat(t," added to your phonebook.")),a((0,r.je)({name:t,number:o})),l()}})),className:" flex items-center justify-center max-w-md mx-auto p-4 rounded-md flex-col space-y-3 md:items-center xl:flex-row xl:space-y-0 xl:space-x-8",children:[(0,ie.jsx)("input",(0,g.Z)((0,g.Z)({},s("name",{required:"This is required"})),{},{type:"text",className:"input input-bordered input-info w-full max-w-xs sm:max-w-md md:min-w-[400px] md:max-w-lg lg:max-w-xl",placeholder:"Name"})),(0,ie.jsx)("p",{className:"text-red-500 text-sm",children:null===(e=u.name)||void 0===e?void 0:e.message}),(0,ie.jsx)("input",(0,g.Z)((0,g.Z)({},s("number",{required:"This is required"})),{},{type:"tel",className:"input input-bordered input-info w-full max-w-xs sm:max-w-md md:min-w-[400px] md:max-w-lg lg:max-w-xl",placeholder:"Number"})),(0,ie.jsx)("p",{className:"text-red-500 text-sm",children:null===(t=u.number)||void 0===t?void 0:t.message}),(0,ie.jsx)("button",{type:"submit",className:" w-[90px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold text-white bg-sky-400 border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-sky-600 focus:bg-sky-600 flex items-center justify-center md:ml-2 xl:min-w-[90px]",children:(0,ie.jsx)(ae,{size:30})})]})},ce=n(1634),le=function(){var e=(0,o.v9)((function(e){return e.filter.filter})),t=(0,o.I0)();return(0,ie.jsx)("input",{name:"filter",type:"text",value:e,onChange:function(e){t((0,ce.W)(e.target.value))},placeholder:"Find contact by name",className:"input input-bordered input-warning w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"})},ue=n(4164),de=document.querySelector("#modal"),fe=function(e){var t=e.children,n=e.closeModal;(0,y.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return document.addEventListener("keydown",e),document.body.style.overflow="hidden",function(){document.removeEventListener("keydown",e),document.body.style.overflow="visible"}}),[n]);return ue.createPortal((0,ie.jsx)("div",{className:"fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50",onClick:function(e){e.currentTarget===e.target&&n()},children:(0,ie.jsx)("div",{className:"bg-white p-6 rounded-md max-w-md w-full m-4 relative z-10",children:t})}),de)},me=function(e){var t=e.closeModal,n=e.contact,a=(0,b.cI)({defaultValues:n}),i=a.handleSubmit,s=a.register,c=(0,o.I0)();return(0,ie.jsxs)("form",{onSubmit:i((function(e){if(n){var o={id:n.id,name:e.name,number:e.number};c((0,r.KY)(o)),t()}})),className:"max-w-md mx-auto p-4 rounded-md bg-white shadow-md",children:[(0,ie.jsxs)("div",{className:"mb-4",children:[(0,ie.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Name"}),(0,ie.jsx)("input",(0,g.Z)((0,g.Z)({},s("name")),{},{type:"text",className:"input input-bordered input-info w-full p-2 rounded-md"}))]}),(0,ie.jsxs)("div",{className:"mb-4",children:[(0,ie.jsx)("label",{className:"block text-black-700 text-sm font-bold mb-2",children:"Number"}),(0,ie.jsx)("input",(0,g.Z)((0,g.Z)({},s("number")),{},{type:"tel",className:"input input-bordered input-info w-full p-2 rounded-md"}))]}),(0,ie.jsxs)("div",{className:"flex justify-end",children:[(0,ie.jsx)("button",{onClick:t,type:"button",className:"mr-2 px-4 py-2 bg-amber-400 text-white rounded-md hover:bg-amber-600 transition-all duration-300 ease-in-out cursor-pointer",children:"Cancel"}),(0,ie.jsx)("button",{type:"submit",className:"px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-all duration-300 ease-in-out cursor-pointer",children:"Update"})]})]})};function pe(e){return(0,h.w_)({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 19.15625 3 C 18.390625 3.003906 17.644531 3.300781 17.09375 3.90625 C 17.085938 3.914063 17.101563 3.929688 17.09375 3.9375 C 15.863281 5.175781 15.386719 6.40625 14.96875 7.5 C 14.789063 7.972656 14.609375 8.417969 14.375 8.875 C 13.914063 8.34375 13.25 8 12.5 8 C 11.132813 8 10 9.132813 10 10.5 C 10 11.867188 11.132813 13 12.5 13 C 13.242188 13 13.882813 12.648438 14.34375 12.125 L 14.40625 12.1875 L 5.28125 21.28125 L 5 21.59375 L 5 25.5625 L 4 26.59375 L 5.40625 28 L 6.4375 27 L 10.40625 27 L 10.71875 26.71875 L 27.28125 10.125 L 27.3125 10.09375 C 28.464844 8.941406 28.464844 7.058594 27.3125 5.90625 L 26.09375 4.6875 C 25.515625 4.109375 24.765625 3.8125 24 3.8125 C 23.285156 3.8125 22.589844 4.089844 22.03125 4.59375 L 21.3125 3.90625 C 20.722656 3.316406 19.933594 2.996094 19.15625 3 Z M 19.1875 5 C 19.433594 5.003906 19.699219 5.105469 19.90625 5.3125 L 20.59375 6 L 14.46875 12.09375 C 15.824219 10.65625 16.421875 9.320313 16.84375 8.21875 C 17.273438 7.09375 17.542969 6.269531 18.5 5.3125 L 18.5625 5.25 C 18.710938 5.082031 18.941406 4.996094 19.1875 5 Z M 24 5.78125 C 24.234375 5.78125 24.464844 5.871094 24.6875 6.09375 L 25.90625 7.3125 C 26.351563 7.757813 26.351563 8.242188 25.90625 8.6875 L 25 9.5625 L 22.4375 7 L 23.21875 6.21875 L 23.3125 6.09375 C 23.535156 5.871094 23.765625 5.78125 24 5.78125 Z M 21 8.4375 L 23.5625 11 L 16 18.5625 L 13.4375 16 Z M 12.5 10 C 12.789063 10 13 10.210938 13 10.5 C 13 10.789063 12.789063 11 12.5 11 C 12.210938 11 12 10.789063 12 10.5 C 12 10.210938 12.210938 10 12.5 10 Z M 12 17.4375 L 14.5625 20 L 9.5625 25 L 7 25 L 7 22.4375 Z"}}]})(e)}function ve(e){return(0,h.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"}}]})(e)}var he=function(){var e=(0,o.v9)(v),t=(0,o.v9)(p),n=(0,o.v9)(f),a=(0,o.I0)(),i=function(){var e=(0,y.useState)(!1),t=(0,E.Z)(e,2),n=t[0],o=t[1];return{isOpen:n,openModal:function(){o(!0)},closeModal:function(){o(!1)}}}(),s=i.isOpen,c=i.openModal,l=i.closeModal,u=(0,y.useState)(null),d=(0,E.Z)(u,2),m=d[0],h=d[1];return(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsx)("ul",{className:"mt-4",children:e.length?e.map((function(e){return(0,ie.jsxs)("li",{className:"mb-4 p-4 bg-white rounded-md shadow-md relative",children:[(0,ie.jsxs)("div",{className:"flex flex-col sm:flex-row md:px-2 lg:px-4",children:[(0,ie.jsx)("p",{className:"text-2xl font-semibold text-sky-500 sm:w-[200px]  lg:w-[400px]",children:e.name}),(0,ie.jsx)("p",{className:"text-sky-800 text-xl sm:w-[200px] md:text-2xl",children:e.number})]}),(0,ie.jsxs)("div",{className:"flex mt-2 absolute bottom-3 right-3 md:px-2 lg:px-4",children:[(0,ie.jsx)("button",{onClick:function(){return function(e){h(e),c()}(e)},className:" mr-3 w-[60px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-yellow-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-yellow-600 focus:bg-yellow-600 flex items-center justify-center md:mr-6 lg:mr-10",children:(0,ie.jsx)(pe,{size:30})}),n&&t===e.id?(0,ie.jsx)("button",{className:"  w-[80px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-red-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-red-600 focus:bg-red-600 flex items-center justify-center",children:"Deleting"}):(0,ie.jsx)("button",{onClick:function(){return a((0,r.xX)(e.id))},className:"w-[60px] h-10 font-roboto text-xs uppercase tracking-wide font-semibold bg-red-400 text-white border-none rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-red-600 focus:bg-red-600 flex items-center justify-center",children:(0,ie.jsx)(ve,{size:30})})]})]},e.id)})):(0,ie.jsx)("p",{className:"text-gray-700 text-3xl text-center",children:"Unfortunately, there are no matches"})}),s?(0,ie.jsx)(fe,{closeModal:l,children:(0,ie.jsx)(me,{closeModal:l,contact:m})}):null]})},xe=function(e){var t=e.message;return(0,ie.jsx)("div",{className:"text-gray-700 text-3xl text-center",children:t})},ge=function(){var e=(0,o.v9)(d),t=(0,o.v9)(f),n=(0,o.v9)(m),a=(0,o.I0)();return(0,y.useEffect)((function(){a((0,r.n7)())}),[a]),(0,ie.jsx)(ie.Fragment,{children:(0,ie.jsx)("div",{className:"flex min-h-screen bg-yellow-100",children:n?(0,ie.jsx)("div",{className:"text-center",children:(0,ie.jsxs)("p",{className:"text-2xl mb-4",children:[(0,ie.jsx)(x,{size:80,className:"mb-2 text-red-500"}),(0,ie.jsx)("br",{})," ",n]})}):(0,ie.jsxs)("div",{className:"p-4 sm:p-8 md:p-12 lg:p-16 bg-sky-50 w-full max-w-screen-xl mx-auto ",children:[(0,ie.jsx)("div",{className:"mb-6",children:(0,ie.jsx)("h1",{className:"text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500",children:"Add new contact"})}),(0,ie.jsx)(se,{}),(0,ie.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-10 md:mb-6",children:[(0,ie.jsx)("h2",{className:"text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-8 mb-4 text-yellow-500",children:"Your list"}),(0,ie.jsx)(le,{})]}),e.length>0?(0,ie.jsx)(he,{}):(0,ie.jsx)("div",{className:"mt-4",children:!t&&(0,ie.jsx)(xe,{message:"Your contact list is empty"})})]})})})}}}]);
//# sourceMappingURL=457.d04d2346.chunk.js.map