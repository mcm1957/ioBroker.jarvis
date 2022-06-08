var qe=Object.defineProperty,xe=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var ee=(t,r,i)=>r in t?qe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,O=(t,r)=>{for(var i in r||(r={}))Ce.call(r,i)&&ee(t,i,r[i]);if(p)for(var i of p(r))Te.call(r,i)&&ee(t,i,r[i]);return t},j=(t,r)=>xe(t,Be(r));import{bW as Se,bY as $e,cQ as Oe,c0 as De,cR as Me,c2 as We,u as Pe,cj as Le,a2 as k,c as o,c6 as ze,dq as Ae,dr as N,x as s,B as te,ds as D,z as _e,b6 as Ie,J as Qe,h as M,dt as ae,cf as Fe,aY as Ve,du as He}from"./index-1c0225fa.js";const ue=150;var Ue=Se({name:"QDrawer",inheritAttrs:!1,props:j(O(O({},$e),Oe),{side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...De,"on-layout","mini-state"],setup(t,{slots:r,emit:i,attrs:R}){const m=Ve(),{proxy:{$q:f}}=m,le=Me(t,f),{preventBodyScroll:W}=He(),{registerTimeout:U}=We(),a=Pe(Le,()=>{console.error("QDrawer needs to be child of QLayout")});let P,L,q;const n=k(t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint),x=o(()=>t.mini===!0&&n.value!==!0),v=o(()=>x.value===!0?t.miniWidth:t.width),l=k(t.showIfAbove===!0&&n.value===!1?!0:t.modelValue===!0),Y=o(()=>t.persistent!==!0&&(n.value===!0||re.value===!0));function E(e,u){if(oe(),e!==!1&&a.animate(),c(0),n.value===!0){const d=a.instances[S.value];d!==void 0&&d.belowBreakpoint===!0&&d.hide(!1),b(1),a.isContainer.value!==!0&&W(!0)}else b(0),e!==!1&&F(!1);U(()=>{e!==!1&&F(!0),u!==!0&&i("show",e)},ue)}function J(e,u){ie(),e!==!1&&a.animate(),b(0),c(w.value*v.value),V(),u!==!0&&U(()=>{i("hide",e)},ue)}const{show:z,hide:B}=ze({showing:l,hideOnRouteChange:Y,handleShow:E,handleHide:J}),{addToHistory:oe,removeFromHistory:ie}=Ae(l,B,Y),T={belowBreakpoint:n,hide:B},h=o(()=>t.side==="right"),w=o(()=>(f.lang.rtl===!0?-1:1)*(h.value===!0?1:-1)),K=k(0),g=k(!1),A=k(!1),X=k(v.value*w.value),S=o(()=>h.value===!0?"left":"right"),_=o(()=>l.value===!0&&n.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:v.value:0),I=o(()=>t.overlay===!0||t.miniToOverlay===!0||a.view.value.indexOf(h.value?"R":"L")>-1||f.platform.is.ios===!0&&a.isContainer.value===!0),C=o(()=>t.overlay===!1&&l.value===!0&&n.value===!1),re=o(()=>t.overlay===!0&&l.value===!0&&n.value===!1),ne=o(()=>"fullscreen q-drawer__backdrop"+(l.value===!1&&g.value===!1?" hidden":"")),se=o(()=>({backgroundColor:`rgba(0,0,0,${K.value*.4})`})),G=o(()=>h.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),de=o(()=>h.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ve=o(()=>{const e={};return a.header.space===!0&&G.value===!1&&(I.value===!0?e.top=`${a.header.offset}px`:a.header.space===!0&&(e.top=`${a.header.size}px`)),a.footer.space===!0&&de.value===!1&&(I.value===!0?e.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(e.bottom=`${a.footer.size}px`)),e}),ce=o(()=>{const e={width:`${v.value}px`,transform:`translateX(${X.value}px)`};return n.value===!0?e:Object.assign(e,ve.value)}),fe=o(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),he=o(()=>`q-drawer q-drawer--${t.side}`+(A.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(le.value===!0?" q-drawer--dark q-dark":"")+(g.value===!0?" no-transition":l.value===!0?"":" q-layout--prevent-focus")+(n.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(I.value===!0||C.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(G.value===!0?" q-drawer--top-padding":""))),me=o(()=>{const e=f.lang.rtl===!0?t.side:S.value;return[[N,ge,void 0,{[e]:!0,mouse:!0}]]}),be=o(()=>{const e=f.lang.rtl===!0?S.value:t.side;return[[N,Z,void 0,{[e]:!0,mouse:!0}]]}),ye=o(()=>{const e=f.lang.rtl===!0?S.value:t.side;return[[N,Z,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function Q(){ke(n,t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint)}s(n,e=>{e===!0?(P=l.value,l.value===!0&&B(!1)):t.overlay===!1&&t.behavior!=="mobile"&&P!==!1&&(l.value===!0?(c(0),b(0),V()):z(!1))}),s(()=>t.side,(e,u)=>{a.instances[u]===T&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[e]=T,a[e].size=v.value,a[e].space=C.value,a[e].offset=_.value}),s(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&Q()}),s(()=>t.behavior+t.breakpoint,Q),s(a.isContainer,e=>{l.value===!0&&W(e!==!0),e===!0&&Q()}),s(a.scrollbarWidth,()=>{c(l.value===!0?0:void 0)}),s(_,e=>{y("offset",e)}),s(C,e=>{i("on-layout",e),y("space",e)}),s(h,()=>{c()}),s(v,e=>{c(),H(t.miniToOverlay,e)}),s(()=>t.miniToOverlay,e=>{H(e,v.value)}),s(()=>f.lang.rtl,()=>{c()}),s(()=>t.mini,()=>{t.modelValue===!0&&(we(),a.animate())}),s(x,e=>{i("mini-state",e)});function c(e){e===void 0?te(()=>{e=l.value===!0?0:v.value,c(w.value*e)}):(a.isContainer.value===!0&&h.value===!0&&(n.value===!0||Math.abs(e)===v.value)&&(e+=w.value*a.scrollbarWidth.value),X.value=e)}function b(e){K.value=e}function F(e){const u=e===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function we(){clearTimeout(L),m.proxy&&m.proxy.$el&&m.proxy.$el.classList.add("q-drawer--mini-animate"),A.value=!0,L=setTimeout(()=>{A.value=!1,m&&m.proxy&&m.proxy.$el&&m.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ge(e){if(l.value!==!1)return;const u=v.value,d=D(e.distance.x,0,u);if(e.isFinal===!0){d>=Math.min(75,u)===!0?z():(a.animate(),b(0),c(w.value*u)),g.value=!1;return}c((f.lang.rtl===!0?h.value!==!0:h.value)?Math.max(u-d,0):Math.min(0,d-u)),b(D(d/u,0,1)),e.isFirst===!0&&(g.value=!0)}function Z(e){if(l.value!==!0)return;const u=v.value,d=e.direction===t.side,$=(f.lang.rtl===!0?d!==!0:d)?D(e.distance.x,0,u):0;if(e.isFinal===!0){Math.abs($)<Math.min(75,u)===!0?(a.animate(),b(1),c(0)):B(),g.value=!1;return}c(w.value*$),b(D(1-$/u,0,1)),e.isFirst===!0&&(g.value=!0)}function V(){W(!1),F(!0)}function y(e,u){a.update(t.side,e,u)}function ke(e,u){e.value!==u&&(e.value=u)}function H(e,u){y("size",e===!0?t.miniWidth:u)}return a.instances[t.side]=T,H(t.miniToOverlay,v.value),y("space",C.value),y("offset",_.value),t.showIfAbove===!0&&t.modelValue!==!0&&l.value===!0&&t["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),_e(()=>{i("on-layout",C.value),i("mini-state",x.value),P=t.showIfAbove===!0;const e=()=>{(l.value===!0?E:J)(!1,!0)};if(a.totalWidth.value!==0){te(e);return}q=s(a.totalWidth,()=>{q(),q=void 0,l.value===!1&&t.showIfAbove===!0&&n.value===!1?z(!1):e()})}),Ie(()=>{q!==void 0&&q(),clearTimeout(L),l.value===!0&&V(),a.instances[t.side]===T&&(a.instances[t.side]=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const e=[];n.value===!0&&(t.noSwipeOpen===!1&&e.push(Qe(M("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),me.value)),e.push(ae("div",{ref:"backdrop",class:ne.value,style:se.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",t.noSwipeBackdrop!==!0&&l.value===!0,()=>ye.value)));const u=x.value===!0&&r.mini!==void 0,d=[M("div",j(O({},R),{key:""+u,class:[fe.value,R.class]}),u===!0?r.mini():Fe(r.default))];return t.elevated===!0&&l.value===!0&&d.push(M("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(ae("aside",{ref:"content",class:he.value,style:ce.value},d,"contentclose",t.noSwipeClose!==!0&&n.value===!0,()=>be.value)),M("div",{class:"q-drawer-container"},e)}}});export{Ue as Q};