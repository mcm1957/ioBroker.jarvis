import{bx as Q,c2 as V,k as h,cR as x,Q as r,cS as P,aY as v,as as I,ac as i,bu as M,by as O,ck as _,bB as c,cT as H,cU as R,a9 as j,cV as L}from"./index-e1ede5b1.js";const B=Object.keys(R),z=B.reduce((e,a)=>(e[a]={})&&e,{}),T=e=>B.reduce((a,t)=>{const l=e[t];return l!==void 0&&(a[t]=l),a},{});var W=Q({name:"QBtnDropdown",props:{...z,...V,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:a,emit:t}){const{proxy:l}=j(),u=h(e.modelValue),o=h(null),s=x(),b=r(()=>{const n={"aria-expanded":u.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s,"aria-owns":s,"aria-label":e.toggleAriaLabel||l.$q.lang.label[u.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),m=r(()=>"q-btn-dropdown__arrow"+(u.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),f=r(()=>P(e)),w=r(()=>T(e));v(()=>e.modelValue,n=>{o.value!==null&&o.value[n?"show":"hide"]()}),v(()=>e.split,d);function S(n){u.value=!0,t("before-show",n)}function q(n){t("show",n),t("update:modelValue",!0)}function C(n){u.value=!1,t("before-hide",n)}function A(n){t("hide",n),t("update:modelValue",!1)}function D(n){t("click",n)}function y(n){L(n),d(),t("click",n)}function k(n){o.value!==null&&o.value.toggle(n)}function g(n){o.value!==null&&o.value.show(n)}function d(n){o.value!==null&&o.value.hide(n)}return Object.assign(l,{show:g,hide:d,toggle:k}),I(()=>{e.modelValue===!0&&g()}),()=>{const n=[i(M,{class:m.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(i(O,{ref:o,id:s,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:S,onShow:q,onBeforeHide:C,onHide:A},a.default)),e.split===!1?i(c,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...b.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:D},{default:()=>_(a.label,[]).concat(n),loading:a.loading}):i(H,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...f.value,glossy:e.glossy,stretch:e.stretch},()=>[i(c,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:y},{default:a.label,loading:a.loading}),i(c,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...b.value,...f.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{W as Q};