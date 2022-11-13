import{bM as Et,k as tt,Q as wt,aZ as yt}from"./index-1758e27f.js";function Zt(o){const e=Et(),t=tt(o||{}),n=wt(()=>Object.keys(t.value).length!==0);return{errors:t,hasErrors:n,addError:(l,s)=>{t.value[l]=e.t(s)},removeError:l=>{delete t.value[l]},resetErrors:()=>{t.value={}}}}/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Ue(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),t.push.apply(t,n)}return t}function Y(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ue(Object(t),!0).forEach(function(n){Dt(o,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Ue(Object(t)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(t,n))})}return o}function be(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?be=function(e){return typeof e}:be=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},be(o)}function Dt(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function j(){return j=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},j.apply(this,arguments)}function _t(o,e){if(o==null)return{};var t={},n=Object.keys(o),i,r;for(r=0;r<n.length;r++)i=n[r],!(e.indexOf(i)>=0)&&(t[i]=o[i]);return t}function St(o,e){if(o==null)return{};var t=_t(o,e),n,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,n)||(t[n]=o[n]))}return t}var Tt="1.15.0";function H(o){if(typeof window!="undefined"&&window.navigator)return!!navigator.userAgent.match(o)}var z=H(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Oe=H(/Edge/i),qe=H(/firefox/i),Ee=H(/safari/i)&&!H(/chrome/i)&&!H(/android/i),nt=H(/iP(ad|od|hone)/i),ot=H(/chrome/i)&&H(/android/i),it={capture:!1,passive:!1};function E(o,e,t){o.addEventListener(e,t,!z&&it)}function v(o,e,t){o.removeEventListener(e,t,!z&&it)}function _e(o,e){if(!!e){if(e[0]===">"&&(e=e.substring(1)),o)try{if(o.matches)return o.matches(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e)}catch{return!1}return!1}}function Ct(o){return o.host&&o!==document&&o.host.nodeType?o.host:o.parentNode}function X(o,e,t,n){if(o){t=t||document;do{if(e!=null&&(e[0]===">"?o.parentNode===t&&_e(o,e):_e(o,e))||n&&o===t)return o;if(o===t)break}while(o=Ct(o))}return null}var $e=/\s+/g;function x(o,e,t){if(o&&e)if(o.classList)o.classList[t?"add":"remove"](e);else{var n=(" "+o.className+" ").replace($e," ").replace(" "+e+" "," ");o.className=(n+(t?" "+e:"")).replace($e," ")}}function h(o,e,t){var n=o&&o.style;if(n){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(o,""):o.currentStyle&&(t=o.currentStyle),e===void 0?t:t[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=t+(typeof t=="string"?"":"px")}}function ne(o,e){var t="";if(typeof o=="string")t=o;else do{var n=h(o,"transform");n&&n!=="none"&&(t=n+" "+t)}while(!e&&(o=o.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(t)}function rt(o,e,t){if(o){var n=o.getElementsByTagName(e),i=0,r=n.length;if(t)for(;i<r;i++)t(n[i],i);return n}return[]}function L(){var o=document.scrollingElement;return o||document.documentElement}function T(o,e,t,n,i){if(!(!o.getBoundingClientRect&&o!==window)){var r,a,l,s,f,d,c;if(o!==window&&o.parentNode&&o!==L()?(r=o.getBoundingClientRect(),a=r.top,l=r.left,s=r.bottom,f=r.right,d=r.height,c=r.width):(a=0,l=0,s=window.innerHeight,f=window.innerWidth,d=window.innerHeight,c=window.innerWidth),(e||t)&&o!==window&&(i=i||o.parentNode,!z))do if(i&&i.getBoundingClientRect&&(h(i,"transform")!=="none"||t&&h(i,"position")!=="static")){var m=i.getBoundingClientRect();a-=m.top+parseInt(h(i,"border-top-width")),l-=m.left+parseInt(h(i,"border-left-width")),s=a+r.height,f=l+r.width;break}while(i=i.parentNode);if(n&&o!==window){var S=ne(i||o),w=S&&S.a,b=S&&S.d;S&&(a/=b,l/=w,c/=w,d/=b,s=a+d,f=l+c)}return{top:a,left:l,bottom:s,right:f,width:c,height:d}}}function Ve(o,e,t){for(var n=Ke(o,!0),i=T(o)[e];n;){var r=T(n)[t],a=void 0;if(t==="top"||t==="left"?a=i>=r:a=i<=r,!a)return n;if(n===L())break;n=Ke(n,!1)}return!1}function oe(o,e,t,n){for(var i=0,r=0,a=o.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==p.ghost&&(n||a[r]!==p.dragged)&&X(a[r],t.draggable,o,!1)){if(i===e)return a[r];i++}r++}return null}function He(o,e){for(var t=o.lastElementChild;t&&(t===p.ghost||h(t,"display")==="none"||e&&!_e(t,e));)t=t.previousElementSibling;return t||null}function M(o,e){var t=0;if(!o||!o.parentNode)return-1;for(;o=o.previousElementSibling;)o.nodeName.toUpperCase()!=="TEMPLATE"&&o!==p.clone&&(!e||_e(o,e))&&t++;return t}function Ze(o){var e=0,t=0,n=L();if(o)do{var i=ne(o),r=i.a,a=i.d;e+=o.scrollLeft*r,t+=o.scrollTop*a}while(o!==n&&(o=o.parentNode));return[e,t]}function Ot(o,e){for(var t in o)if(!!o.hasOwnProperty(t)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===o[t][n])return Number(t)}return-1}function Ke(o,e){if(!o||!o.getBoundingClientRect)return L();var t=o,n=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var i=h(t);if(t.clientWidth<t.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return L();if(n||e)return t;n=!0}}while(t=t.parentNode);return L()}function It(o,e){if(o&&e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}function xe(o,e){return Math.round(o.top)===Math.round(e.top)&&Math.round(o.left)===Math.round(e.left)&&Math.round(o.height)===Math.round(e.height)&&Math.round(o.width)===Math.round(e.width)}var Ae;function Pt(o,e){return function(){if(!Ae){var t=arguments,n=this;t.length===1?o.call(n,t[0]):o.apply(n,t),Ae=setTimeout(function(){Ae=void 0},e)}}}function Nt(o,e,t){o.scrollLeft+=e,o.scrollTop+=t}function at(o){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(o).cloneNode(!0):t?t(o).clone(!0)[0]:o.cloneNode(!0)}var F="Sortable"+new Date().getTime();function xt(){var o=[],e;return{captureAnimationState:function(){if(o=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(h(i,"display")==="none"||i===p.ghost)){o.push({target:i,rect:T(i)});var r=Y({},o[o.length-1].rect);if(i.thisAnimationDuration){var a=ne(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(n){o.push(n)},removeAnimationState:function(n){o.splice(Ot(o,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var r=!1,a=0;o.forEach(function(l){var s=0,f=l.target,d=f.fromRect,c=T(f),m=f.prevFromRect,S=f.prevToRect,w=l.rect,b=ne(f,!0);b&&(c.top-=b.f,c.left-=b.e),f.toRect=c,f.thisAnimationDuration&&xe(m,c)&&!xe(d,c)&&(w.top-c.top)/(w.left-c.left)===(d.top-c.top)/(d.left-c.left)&&(s=Mt(w,m,S,i.options)),xe(c,d)||(f.prevFromRect=d,f.prevToRect=c,s||(s=i.options.animation),i.animate(f,w,c,s)),s&&(r=!0,a=Math.max(a,s),clearTimeout(f.animationResetTimer),f.animationResetTimer=setTimeout(function(){f.animationTime=0,f.prevFromRect=null,f.fromRect=null,f.prevToRect=null,f.thisAnimationDuration=null},s),f.thisAnimationDuration=s)}),clearTimeout(e),r?e=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),o=[]},animate:function(n,i,r,a){if(a){h(n,"transition",""),h(n,"transform","");var l=ne(this.el),s=l&&l.a,f=l&&l.d,d=(i.left-r.left)/(s||1),c=(i.top-r.top)/(f||1);n.animatingX=!!d,n.animatingY=!!c,h(n,"transform","translate3d("+d+"px,"+c+"px,0)"),this.forRepaintDummy=At(n),h(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),h(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){h(n,"transition",""),h(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function At(o){return o.offsetWidth}function Mt(o,e,t,n){return Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*n.animation}var Q=[],Me={initializeByDefault:!0},ce={mount:function(e){for(var t in Me)Me.hasOwnProperty(t)&&!(t in e)&&(e[t]=Me[t]);Q.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Q.push(e)},pluginEvent:function(e,t,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var r=e+"Global";Q.forEach(function(a){!t[a.pluginName]||(t[a.pluginName][r]&&t[a.pluginName][r](Y({sortable:t},n)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](Y({sortable:t},n)))})},initializePlugins:function(e,t,n,i){Q.forEach(function(l){var s=l.pluginName;if(!(!e.options[s]&&!l.initializeByDefault)){var f=new l(e,t,e.options);f.sortable=e,f.options=e.options,e[s]=f,j(n,f.defaults)}});for(var r in e.options)if(!!e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a!="undefined"&&(e.options[r]=a)}},getEventProperties:function(e,t){var n={};return Q.forEach(function(i){typeof i.eventProperties=="function"&&j(n,i.eventProperties.call(t[i.pluginName],e))}),n},modifyOption:function(e,t,n){var i;return Q.forEach(function(r){!e[r.pluginName]||r.optionListeners&&typeof r.optionListeners[t]=="function"&&(i=r.optionListeners[t].call(e[r.pluginName],n))}),i}};function Ft(o){var e=o.sortable,t=o.rootEl,n=o.name,i=o.targetEl,r=o.cloneEl,a=o.toEl,l=o.fromEl,s=o.oldIndex,f=o.newIndex,d=o.oldDraggableIndex,c=o.newDraggableIndex,m=o.originalEvent,S=o.putSortable,w=o.extraEventProperties;if(e=e||t&&t[F],!!e){var b,k=e.options,U="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!z&&!Oe?b=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(b=document.createEvent("Event"),b.initEvent(n,!0,!0)),b.to=a||t,b.from=l||t,b.item=i||t,b.clone=r,b.oldIndex=s,b.newIndex=f,b.oldDraggableIndex=d,b.newDraggableIndex=c,b.originalEvent=m,b.pullMode=S?S.lastPutMode:void 0;var N=Y(Y({},w),ce.getEventProperties(n,e));for(var q in N)b[q]=N[q];t&&t.dispatchEvent(b),k[U]&&k[U].call(e,b)}}var Rt=["evt"],P=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,r=St(n,Rt);ce.pluginEvent.bind(p)(e,t,Y({dragEl:u,parentEl:_,ghostEl:g,rootEl:y,nextEl:Z,lastDownEl:we,cloneEl:D,cloneHidden:G,dragStarted:se,putSortable:C,activeSortable:p.active,originalEvent:i,oldIndex:te,oldDraggableIndex:ue,newIndex:A,newDraggableIndex:W,hideGhostForTarget:ft,unhideGhostForTarget:dt,cloneNowHidden:function(){G=!0},cloneNowShown:function(){G=!1},dispatchSortableEvent:function(l){I({sortable:t,name:l,originalEvent:i})}},r))};function I(o){Ft(Y({putSortable:C,cloneEl:D,targetEl:u,rootEl:y,oldIndex:te,oldDraggableIndex:ue,newIndex:A,newDraggableIndex:W},o))}var u,_,g,y,Z,we,D,G,te,A,ue,W,pe,C,ee=!1,Se=!1,Te=[],$,R,Fe,Re,Qe,Je,se,J,fe,de=!1,ge=!1,ye,O,Xe=[],ke=!1,Ce=[],Ie=typeof document!="undefined",me=nt,et=Oe||z?"cssFloat":"float",Xt=Ie&&!ot&&!nt&&"draggable"in document.createElement("div"),lt=function(){if(!!Ie){if(z)return!1;var o=document.createElement("x");return o.style.cssText="pointer-events:auto",o.style.pointerEvents==="auto"}}(),st=function(e,t){var n=h(e),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=oe(e,0,t),a=oe(e,1,t),l=r&&h(r),s=a&&h(a),f=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+T(r).width,d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+T(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&l.float&&l.float!=="none"){var c=l.float==="left"?"left":"right";return a&&(s.clear==="both"||s.clear===c)?"vertical":"horizontal"}return r&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||f>=i&&n[et]==="none"||a&&n[et]==="none"&&f+d>i)?"vertical":"horizontal"},Yt=function(e,t,n){var i=n?e.left:e.top,r=n?e.right:e.bottom,a=n?e.width:e.height,l=n?t.left:t.top,s=n?t.right:t.bottom,f=n?t.width:t.height;return i===l||r===s||i+a/2===l+f/2},kt=function(e,t){var n;return Te.some(function(i){var r=i[F].options.emptyInsertThreshold;if(!(!r||He(i))){var a=T(i),l=e>=a.left-r&&e<=a.right+r,s=t>=a.top-r&&t<=a.bottom+r;if(l&&s)return n=i}}),n},ut=function(e){function t(r,a){return function(l,s,f,d){var c=l.options.group.name&&s.options.group.name&&l.options.group.name===s.options.group.name;if(r==null&&(a||c))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return t(r(l,s,f,d),a)(l,s,f,d);var m=(a?l:s).options.group.name;return r===!0||typeof r=="string"&&r===m||r.join&&r.indexOf(m)>-1}}var n={},i=e.group;(!i||be(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=t(i.pull,!0),n.checkPut=t(i.put),n.revertClone=i.revertClone,e.group=n},ft=function(){!lt&&g&&h(g,"display","none")},dt=function(){!lt&&g&&h(g,"display","")};Ie&&!ot&&document.addEventListener("click",function(o){if(Se)return o.preventDefault(),o.stopPropagation&&o.stopPropagation(),o.stopImmediatePropagation&&o.stopImmediatePropagation(),Se=!1,!1},!0);var V=function(e){if(u){e=e.touches?e.touches[0]:e;var t=kt(e.clientX,e.clientY);if(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[F]._onDragOver(n)}}},Bt=function(e){u&&u.parentNode[F]._isOutsideThisEl(e.target)};function p(o,e){if(!(o&&o.nodeType&&o.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));this.el=o,this.options=e=j({},e),o[F]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(o.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return st(o,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:p.supportPointer!==!1&&"PointerEvent"in window&&!Ee,emptyInsertThreshold:5};ce.initializePlugins(this,o,t);for(var n in t)!(n in e)&&(e[n]=t[n]);ut(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:Xt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?E(o,"pointerdown",this._onTapStart):(E(o,"mousedown",this._onTapStart),E(o,"touchstart",this._onTapStart)),this.nativeDraggable&&(E(o,"dragover",this),E(o,"dragenter",this)),Te.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),j(this,xt())}p.prototype={constructor:p,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(J=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,u):this.options.direction},_onTapStart:function(e){if(!!e.cancelable){var t=this,n=this.el,i=this.options,r=i.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(l||e).target,f=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,d=i.filter;if(qt(n),!u&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||i.disabled)&&!f.isContentEditable&&!(!this.nativeDraggable&&Ee&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=X(s,i.draggable,n,!1),!(s&&s.animated)&&we!==s)){if(te=M(s),ue=M(s,i.draggable),typeof d=="function"){if(d.call(this,e,s,this)){I({sortable:t,rootEl:f,name:"filter",targetEl:s,toEl:n,fromEl:n}),P("filter",t,{evt:e}),r&&e.cancelable&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(c){if(c=X(f,c.trim(),n,!1),c)return I({sortable:t,rootEl:c,name:"filter",targetEl:s,fromEl:n,toEl:n}),P("filter",t,{evt:e}),!0}),d)){r&&e.cancelable&&e.preventDefault();return}i.handle&&!X(f,i.handle,n,!1)||this._prepareDragStart(e,l,s)}}},_prepareDragStart:function(e,t,n){var i=this,r=i.el,a=i.options,l=r.ownerDocument,s;if(n&&!u&&n.parentNode===r){var f=T(n);if(y=r,u=n,_=u.parentNode,Z=u.nextSibling,we=n,pe=a.group,p.dragged=u,$={target:u,clientX:(t||e).clientX,clientY:(t||e).clientY},Qe=$.clientX-f.left,Je=$.clientY-f.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,u.style["will-change"]="all",s=function(){if(P("delayEnded",i,{evt:e}),p.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!qe&&i.nativeDraggable&&(u.draggable=!0),i._triggerDragStart(e,t),I({sortable:i,name:"choose",originalEvent:e}),x(u,a.chosenClass,!0)},a.ignore.split(",").forEach(function(d){rt(u,d.trim(),Ye)}),E(l,"dragover",V),E(l,"mousemove",V),E(l,"touchmove",V),E(l,"mouseup",i._onDrop),E(l,"touchend",i._onDrop),E(l,"touchcancel",i._onDrop),qe&&this.nativeDraggable&&(this.options.touchStartThreshold=4,u.draggable=!0),P("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Oe||z))){if(p.eventCanceled){this._onDrop();return}E(l,"mouseup",i._disableDelayedDrag),E(l,"touchend",i._disableDelayedDrag),E(l,"touchcancel",i._disableDelayedDrag),E(l,"mousemove",i._delayedDragTouchMoveHandler),E(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&E(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){u&&Ye(u),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;v(e,"mouseup",this._disableDelayedDrag),v(e,"touchend",this._disableDelayedDrag),v(e,"touchcancel",this._disableDelayedDrag),v(e,"mousemove",this._delayedDragTouchMoveHandler),v(e,"touchmove",this._delayedDragTouchMoveHandler),v(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?E(document,"pointermove",this._onTouchMove):t?E(document,"touchmove",this._onTouchMove):E(document,"mousemove",this._onTouchMove):(E(u,"dragend",this),E(y,"dragstart",this._onDragStart));try{document.selection?De(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(ee=!1,y&&u){P("dragStarted",this,{evt:t}),this.nativeDraggable&&E(document,"dragover",Bt);var n=this.options;!e&&x(u,n.dragClass,!1),x(u,n.ghostClass,!0),p.active=this,e&&this._appendGhost(),I({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(R){this._lastX=R.clientX,this._lastY=R.clientY,ft();for(var e=document.elementFromPoint(R.clientX,R.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(R.clientX,R.clientY),e!==t);)t=e;if(u.parentNode[F]._isOutsideThisEl(e),t)do{if(t[F]){var n=void 0;if(n=t[F]._onDragOver({clientX:R.clientX,clientY:R.clientY,target:e,rootEl:t}),n&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);dt()}},_onTouchMove:function(e){if($){var t=this.options,n=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=g&&ne(g,!0),l=g&&a&&a.a,s=g&&a&&a.d,f=me&&O&&Ze(O),d=(r.clientX-$.clientX+i.x)/(l||1)+(f?f[0]-Xe[0]:0)/(l||1),c=(r.clientY-$.clientY+i.y)/(s||1)+(f?f[1]-Xe[1]:0)/(s||1);if(!p.active&&!ee){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(g){a?(a.e+=d-(Fe||0),a.f+=c-(Re||0)):a={a:1,b:0,c:0,d:1,e:d,f:c};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");h(g,"webkitTransform",m),h(g,"mozTransform",m),h(g,"msTransform",m),h(g,"transform",m),Fe=d,Re=c,R=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!g){var e=this.options.fallbackOnBody?document.body:y,t=T(u,!0,me,!0,e),n=this.options;if(me){for(O=e;h(O,"position")==="static"&&h(O,"transform")==="none"&&O!==document;)O=O.parentNode;O!==document.body&&O!==document.documentElement?(O===document&&(O=L()),t.top+=O.scrollTop,t.left+=O.scrollLeft):O=L(),Xe=Ze(O)}g=u.cloneNode(!0),x(g,n.ghostClass,!1),x(g,n.fallbackClass,!0),x(g,n.dragClass,!0),h(g,"transition",""),h(g,"transform",""),h(g,"box-sizing","border-box"),h(g,"margin",0),h(g,"top",t.top),h(g,"left",t.left),h(g,"width",t.width),h(g,"height",t.height),h(g,"opacity","0.8"),h(g,"position",me?"absolute":"fixed"),h(g,"zIndex","100000"),h(g,"pointerEvents","none"),p.ghost=g,e.appendChild(g),h(g,"transform-origin",Qe/parseInt(g.style.width)*100+"% "+Je/parseInt(g.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,i=e.dataTransfer,r=n.options;if(P("dragStart",this,{evt:e}),p.eventCanceled){this._onDrop();return}P("setupClone",this),p.eventCanceled||(D=at(u),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),x(D,this.options.chosenClass,!1),p.clone=D),n.cloneId=De(function(){P("clone",n),!p.eventCanceled&&(n.options.removeCloneOnHide||y.insertBefore(D,u),n._hideClone(),I({sortable:n,name:"clone"}))}),!t&&x(u,r.dragClass,!0),t?(Se=!0,n._loopId=setInterval(n._emulateDragOver,50)):(v(document,"mouseup",n._onDrop),v(document,"touchend",n._onDrop),v(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(n,i,u)),E(document,"drop",n),h(u,"transform","translateZ(0)")),ee=!0,n._dragStartId=De(n._dragStarted.bind(n,t,e)),E(document,"selectstart",n),se=!0,Ee&&h(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,n=e.target,i,r,a,l=this.options,s=l.group,f=p.active,d=pe===s,c=l.sort,m=C||f,S,w=this,b=!1;if(ke)return;function k(le,vt){P(le,w,Y({evt:e,isOwner:d,axis:S?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:c,fromSortable:m,target:n,completed:N,onMove:function(ze,bt){return ve(y,t,u,i,ze,T(ze),e,bt)},changed:q},vt))}function U(){k("dragOverAnimationCapture"),w.captureAnimationState(),w!==m&&m.captureAnimationState()}function N(le){return k("dragOverCompleted",{insertion:le}),le&&(d?f._hideClone():f._showClone(w),w!==m&&(x(u,C?C.options.ghostClass:f.options.ghostClass,!1),x(u,l.ghostClass,!0)),C!==w&&w!==p.active?C=w:w===p.active&&C&&(C=null),m===w&&(w._ignoreWhileAnimating=n),w.animateAll(function(){k("dragOverAnimationComplete"),w._ignoreWhileAnimating=null}),w!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(n===u&&!u.animated||n===t&&!n.animated)&&(J=null),!l.dragoverBubble&&!e.rootEl&&n!==document&&(u.parentNode[F]._isOutsideThisEl(e.target),!le&&V(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),b=!0}function q(){A=M(u),W=M(u,l.draggable),I({sortable:w,name:"change",toEl:t,newIndex:A,newDraggableIndex:W,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=X(n,l.draggable,t,!0),k("dragOver"),p.eventCanceled)return b;if(u.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||w._ignoreWhileAnimating===n)return N(!1);if(Se=!1,f&&!l.disabled&&(d?c||(a=_!==y):C===this||(this.lastPutMode=pe.checkPull(this,f,u,e))&&s.checkPut(this,f,u,e))){if(S=this._getDirection(e,n)==="vertical",i=T(u),k("dragOverValid"),p.eventCanceled)return b;if(a)return _=y,U(),this._hideClone(),k("revert"),p.eventCanceled||(Z?y.insertBefore(u,Z):y.appendChild(u)),N(!0);var B=He(t,l.draggable);if(!B||Lt(e,S,this)&&!B.animated){if(B===u)return N(!1);if(B&&t===e.target&&(n=B),n&&(r=T(n)),ve(y,t,u,i,n,r,e,!!n)!==!1)return U(),B&&B.nextSibling?t.insertBefore(u,B.nextSibling):t.appendChild(u),_=t,q(),N(!0)}else if(B&&Gt(e,S,this)){var Pe=oe(t,0,l,!0);if(Pe===u)return N(!1);if(n=Pe,r=T(n),ve(y,t,u,i,n,r,e,!1)!==!1)return U(),t.insertBefore(u,Pe),_=t,q(),N(!0)}else if(n.parentNode===t){r=T(n);var K=0,Ne,gt=u.parentNode!==t,We=!Yt(u.animated&&u.toRect||i,n.animated&&n.toRect||r,S),Ge=S?"top":"left",ie=Ve(n,"top","top")||Ve(u,"top","top"),mt=ie?ie.scrollTop:void 0;J!==n&&(Ne=r[Ge],de=!1,ge=!We&&l.invertSwap||gt),K=jt(e,n,r,S,We?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,ge,J===n);var re;if(K!==0){var Le=M(u);do Le-=K,re=_.children[Le];while(re&&(h(re,"display")==="none"||re===g))}if(K===0||re===n)return N(!1);J=n,fe=K;var je=n.nextElementSibling,ae=!1;ae=K===1;var he=ve(y,t,u,i,n,r,e,ae);if(he!==!1)return(he===1||he===-1)&&(ae=he===1),ke=!0,setTimeout(Wt,30),U(),ae&&!je?t.appendChild(u):n.parentNode.insertBefore(u,ae?je:n),ie&&Nt(ie,0,mt-ie.scrollTop),_=u.parentNode,Ne!==void 0&&!ge&&(ye=Math.abs(Ne-T(n)[Ge])),q(),N(!0)}if(t.contains(u))return N(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),v(document,"pointermove",this._onTouchMove),v(document,"dragover",V),v(document,"mousemove",V),v(document,"touchmove",V)},_offUpEvents:function(){var e=this.el.ownerDocument;v(e,"mouseup",this._onDrop),v(e,"touchend",this._onDrop),v(e,"pointerup",this._onDrop),v(e,"touchcancel",this._onDrop),v(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;if(A=M(u),W=M(u,n.draggable),P("drop",this,{evt:e}),_=u&&u.parentNode,A=M(u),W=M(u,n.draggable),p.eventCanceled){this._nulling();return}ee=!1,ge=!1,de=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Be(this.cloneId),Be(this._dragStartId),this.nativeDraggable&&(v(document,"drop",this),v(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ee&&h(document.body,"user-select",""),h(u,"transform",""),e&&(se&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),g&&g.parentNode&&g.parentNode.removeChild(g),(y===_||C&&C.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),u&&(this.nativeDraggable&&v(u,"dragend",this),Ye(u),u.style["will-change"]="",se&&!ee&&x(u,C?C.options.ghostClass:this.options.ghostClass,!1),x(u,this.options.chosenClass,!1),I({sortable:this,name:"unchoose",toEl:_,newIndex:null,newDraggableIndex:null,originalEvent:e}),y!==_?(A>=0&&(I({rootEl:_,name:"add",toEl:_,fromEl:y,originalEvent:e}),I({sortable:this,name:"remove",toEl:_,originalEvent:e}),I({rootEl:_,name:"sort",toEl:_,fromEl:y,originalEvent:e}),I({sortable:this,name:"sort",toEl:_,originalEvent:e})),C&&C.save()):A!==te&&A>=0&&(I({sortable:this,name:"update",toEl:_,originalEvent:e}),I({sortable:this,name:"sort",toEl:_,originalEvent:e})),p.active&&((A==null||A===-1)&&(A=te,W=ue),I({sortable:this,name:"end",toEl:_,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){P("nulling",this),y=u=_=g=Z=D=we=G=$=R=se=A=W=te=ue=J=fe=C=pe=p.dragged=p.ghost=p.clone=p.active=null,Ce.forEach(function(e){e.checked=!0}),Ce.length=Fe=Re=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":u&&(this._onDragOver(e),Ht(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,n=this.el.children,i=0,r=n.length,a=this.options;i<r;i++)t=n[i],X(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Ut(t));return e},sort:function(e,t){var n={},i=this.el;this.toArray().forEach(function(r,a){var l=i.children[a];X(l,this.options.draggable,i,!1)&&(n[r]=l)},this),t&&this.captureAnimationState(),e.forEach(function(r){n[r]&&(i.removeChild(n[r]),i.appendChild(n[r]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return X(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(t===void 0)return n[e];var i=ce.modifyOption(this,e,t);typeof i!="undefined"?n[e]=i:n[e]=t,e==="group"&&ut(n)},destroy:function(){P("destroy",this);var e=this.el;e[F]=null,v(e,"mousedown",this._onTapStart),v(e,"touchstart",this._onTapStart),v(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(e,"dragover",this),v(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Te.splice(Te.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!G){if(P("hideClone",this),p.eventCanceled)return;h(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),G=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(G){if(P("showClone",this),p.eventCanceled)return;u.parentNode==y&&!this.options.group.revertClone?y.insertBefore(D,u):Z?y.insertBefore(D,Z):y.appendChild(D),this.options.group.revertClone&&this.animate(u,D),h(D,"display",""),G=!1}}};function Ht(o){o.dataTransfer&&(o.dataTransfer.dropEffect="move"),o.cancelable&&o.preventDefault()}function ve(o,e,t,n,i,r,a,l){var s,f=o[F],d=f.options.onMove,c;return window.CustomEvent&&!z&&!Oe?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=o,s.dragged=t,s.draggedRect=n,s.related=i||e,s.relatedRect=r||T(e),s.willInsertAfter=l,s.originalEvent=a,o.dispatchEvent(s),d&&(c=d.call(f,s,a)),c}function Ye(o){o.draggable=!1}function Wt(){ke=!1}function Gt(o,e,t){var n=T(oe(t.el,0,t.options,!0)),i=10;return e?o.clientX<n.left-i||o.clientY<n.top&&o.clientX<n.right:o.clientY<n.top-i||o.clientY<n.bottom&&o.clientX<n.left}function Lt(o,e,t){var n=T(He(t.el,t.options.draggable)),i=10;return e?o.clientX>n.right+i||o.clientX<=n.right&&o.clientY>n.bottom&&o.clientX>=n.left:o.clientX>n.right&&o.clientY>n.top||o.clientX<=n.right&&o.clientY>n.bottom+i}function jt(o,e,t,n,i,r,a,l){var s=n?o.clientY:o.clientX,f=n?t.height:t.width,d=n?t.top:t.left,c=n?t.bottom:t.right,m=!1;if(!a){if(l&&ye<f*i){if(!de&&(fe===1?s>d+f*r/2:s<c-f*r/2)&&(de=!0),de)m=!0;else if(fe===1?s<d+ye:s>c-ye)return-fe}else if(s>d+f*(1-i)/2&&s<c-f*(1-i)/2)return zt(e)}return m=m||a,m&&(s<d+f*r/2||s>c-f*r/2)?s>d+f/2?1:-1:0}function zt(o){return M(u)<M(o)?1:-1}function Ut(o){for(var e=o.tagName+o.className+o.src+o.href+o.textContent,t=e.length,n=0;t--;)n+=e.charCodeAt(t);return n.toString(36)}function qt(o){Ce.length=0;for(var e=o.getElementsByTagName("input"),t=e.length;t--;){var n=e[t];n.checked&&Ce.push(n)}}function De(o){return setTimeout(o,0)}function Be(o){return clearTimeout(o)}Ie&&E(document,"touchmove",function(o){(p.active||ee)&&o.cancelable&&o.preventDefault()});p.utils={on:E,off:v,css:h,find:rt,is:function(e,t){return!!X(e,t,e,!1)},extend:It,throttle:Pt,closest:X,toggleClass:x,clone:at,index:M,nextTick:De,cancelNextTick:Be,detectDirection:st,getChild:oe};p.get=function(o){return o[F]};p.mount=function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(p.utils=Y(Y({},p.utils),n.utils)),ce.mount(n)})};p.create=function(o,e){return new p(o,e)};p.version=Tt;var ct=function(e){var t=e.originalEvent,n=e.putSortable,i=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(!!t){var f=n||r;l();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(d.clientX,d.clientY);s(),f&&!f.el.contains(c)&&(a("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function ht(){}ht.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=oe(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:ct};j(ht,{pluginName:"revertOnSpill"});function pt(){}pt.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable,i=n||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:ct};j(pt,{pluginName:"removeOnSpill"});function Kt(o,e,t){const n=tt(null),i=r=>{const a=o.value[r.oldIndex];o.value.splice(r.oldIndex,1),o.value.splice(r.newIndex,0,a),e&&e(o.value)};return yt(()=>{const r=n.value&&(n.value.$el||n.value);r&&p.create(r,{handle:".dragndrop",...t||{},onEnd:i})}),{elDragDrop:n}}export{Kt as a,Zt as u};