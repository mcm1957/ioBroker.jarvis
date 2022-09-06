import{s as M,bY as V,cu as w,b_ as Y,cQ as z,c2 as J,cR as U,k as T,c8 as F,Q as l,aY as b,cS as W,ao as X,ac as t,a9 as Z,bP as _,bz as p,b3 as ee,bn as ne,ch as te,bJ as k,bA as m,bu as q,cj as ae}from"./index-a04ffada.js";import{Q as ie}from"./QSlideTransition-80c19884.js";const u=M({}),oe=Object.keys(w);var ce=V({name:"QExpansionItem",props:{...w,...Y,...z,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...J,"click","after-show","after-hide"],setup(e,{slots:r,emit:g}){const{proxy:{$q:v}}=Z(),f=U(e,v),i=T(e.modelValue!==null?e.modelValue:e.defaultOpened),h=T(null),{hide:L,toggle:x}=F({showing:i});let o,c;const y=l(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),C=l(()=>{if(e.contentInsetLevel===void 0)return null;const n=v.lang.rtl===!0?"Right":"Left";return{["padding"+n]:e.contentInsetLevel*56+"px"}}),s=l(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),Q=l(()=>{const n={};return oe.forEach(a=>{n[a]=e[a]}),n}),O=l(()=>s.value===!0||e.expandIconToggle!==!0),B=l(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||v.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),P=l(()=>e.disable!==!0&&(s.value===!0||e.expandIconToggle===!0));b(()=>e.group,n=>{c!==void 0&&c(),n!==void 0&&I()});function j(n){s.value!==!0&&x(n),g("click",n)}function N(n){n.keyCode===13&&S(n,!0)}function S(n,a){a!==!0&&h.value!==null&&h.value.focus(),x(n),ae(n)}function R(){g("after-show")}function A(){g("after-hide")}function I(){o===void 0&&(o=W()),i.value===!0&&(u[e.group]=o);const n=b(i,d=>{d===!0?u[e.group]=o:u[e.group]===o&&delete u[e.group]}),a=b(()=>u[e.group],(d,K)=>{K===o&&d!==void 0&&d!==o&&L()});c=()=>{n(),a(),u[e.group]===o&&delete u[e.group],c=void 0}}function D(){const n={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},a=[t(q,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:B.value})];return P.value===!0&&(Object.assign(n,{tabindex:0,onClick:S,onKeyup:N}),a.unshift(t("div",{ref:h,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),t(m,n,()=>a)}function E(){let n;return r.header!==void 0?n=[].concat(r.header({expanded:i.value===!0})):(n=[t(m,()=>[t(k,{lines:e.labelLines},()=>e.label||""),e.caption?t(k,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&n[e.switchToggleSide===!0?"push":"unshift"](t(m,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>t(q,{name:e.icon})))),e.disable!==!0&&n[e.switchToggleSide===!0?"unshift":"push"](D()),n}function H(){const n={ref:"item",style:e.headerStyle,class:e.headerClass,dark:f.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return O.value===!0&&(n.clickable=!0,n.onClick=j,s.value===!0&&Object.assign(n,Q.value)),t(p,n,E)}function $(){return ee(t("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:C.value},te(r.default)),[[ne,i.value]])}function G(){const n=[H(),t(ie,{duration:e.duration,onShow:R,onHide:A},$)];return e.expandSeparator===!0&&n.push(t(_,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:f.value}),t(_,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:f.value})),n}return e.group!==void 0&&I(),X(()=>{c!==void 0&&c()}),()=>t("div",{class:y.value},[t("div",{class:"q-expansion-item__container relative-position"},G())])}});export{ce as Q};