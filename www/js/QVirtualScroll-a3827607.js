import{bY as _,cQ as B,cR as z,Q as n,ac as i,ch as C,a9 as F,d0 as M,k as w,d1 as x,aY as g,cf as A,d2 as q,an as D,as as E,am as L,aq as R,ao as $,bB as p,cC as I}from"./index-a04ffada.js";const O=["horizontal","vertical","cell","none"];var P=_({name:"QMarkupTable",props:{...B,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>O.includes(e)}},setup(e,{slots:a}){const s=F(),t=z(e,s.proxy.$q),l=n(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(t.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>i("div",{class:l.value},[i("table",{class:"q-table"},C(a.default))])}});function Y(e,a){return i("div",e,[i("table",{class:"q-table"},a)])}const H={list:p,table:P},N=["list","table","__qtable"];var j=_({name:"QVirtualScroll",props:{...M,type:{type:String,default:"list",validator:e=>N.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:s}){let t;const l=w(null),u=n(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:r,localResetVirtualScroll:v,padVirtualScroll:y,onVirtualScrollEvt:f}=x({virtualScrollLength:u,getVirtualScrollTarget:V,getVirtualScrollEl:m}),T=n(()=>{if(u.value===0)return[];const o=(k,Q)=>({index:r.value.from+Q,item:k});return e.itemsFn===void 0?e.items.slice(r.value.from,r.value.to).map(o):e.itemsFn(r.value.from,r.value.to-r.value.from).map(o)}),b=n(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),h=n(()=>e.scrollTarget!==void 0?{}:{tabindex:0});g(u,()=>{v()}),g(()=>e.scrollTarget,()=>{d(),c()});function m(){return l.value.$el||l.value}function V(){return t}function c(){t=A(m(),e.scrollTarget),t.addEventListener("scroll",f,q.passive)}function d(){t!==void 0&&(t.removeEventListener("scroll",f,q.passive),t=void 0)}function S(){let o=y(e.type==="list"?"div":"tbody",T.value.map(a.default));return a.before!==void 0&&(o=a.before().concat(o)),I(a.after,o)}return D(()=>{v()}),E(()=>{c()}),L(()=>{c()}),R(()=>{d()}),$(()=>{d()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Y({ref:l,class:"q-table__middle "+b.value},S()):i(H[e.type],{...s,ref:l,class:[s.class,b.value],...h.value},S)}}});export{j as Q,Y as g};