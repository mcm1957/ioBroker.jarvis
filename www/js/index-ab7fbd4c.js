import{Q as b}from"./QToolbarTitle-622a9661.js";import{Q as S}from"./QToolbar-fbb89d4a.js";import{Q as V}from"./QExpansionItem-a9cd436a.js";import{bt as E,a4 as j,cn as k,bw as O,Q as p,k as Q,de as J,aG as c,ay as a,W as t,X as _,a2 as o,b1 as i,a1 as $,D as M,I as w,aE as y,b3 as u,bn as m,C as N,A as T,ak as x}from"./index-a04ffada.js";import{J as B}from"./json-editor-5518238c.js";import"./QSlideTransition-80c19884.js";import"./_commonjsHelpers-55d1ff45.js";const D=j({name:"SettingsPage",components:{JsonEditor:B},setup(){const n=k(),g=O(),h=p(()=>g.pageHeight),f=p(()=>n.settings),v=p(()=>{var e;return(e=n.settings)==null?void 0:e.configExpertMode}),C=e=>n.settings[e.id]!==void 0?e.validate?e.validate(n.settings[e.id]):n.settings[e.id]:e.value,r=e=>!e._error&&n.set({[e.id]:JSON.parse(e.value)}),d=({id:e,value:s})=>n.set({["settings."+e]:s}),l=e=>e?e(n):!0;return{expanded:Q({}),groups:J,pageHeight:h,expertMode:v,json:f,dependencies:l,getValue:C,onChange:d,onJsonEditor:r}}}),H={class:"full-height"},P={class:"row no-wrap"},z={class:"row",style:{padding:"8px 16px"}};function I(n,g,h,f,v,C){const r=c("inputs"),d=c("json-editor"),l=c("paper");return a(),t("div",H,[_("div",P,[o(S,{class:"paper",style:{"min-height":"56px"}},{default:i(()=>[o(b,{shrink:""},{default:i(()=>[$(M(n.$t("Settings")),1)]),_:1})]),_:1})]),(a(!0),t(w,null,y(n.groups,e=>u((a(),t("div",{class:"row no-wrap paper",key:e.id},[o(V,{modelValue:n.expanded[e.id],"onUpdate:modelValue":s=>n.expanded[e.id]=s,icon:e.icon,label:n.$t(e.label),class:"full-width"},{default:i(()=>[_("div",z,[(a(!0),t(w,null,y(e.settings,s=>u((a(),t("div",{class:T("col-"+(s.columns||2)),key:s.id},[o(r,x(s,{onOnChange:n.onChange,onOnSelect:n.onChange,value:n.getValue(s)}),null,16,["onOnChange","onOnSelect","value"])],2)),[[m,n.dependencies(s.dependency)]])),128))])]),_:2},1032,["modelValue","onUpdate:modelValue","icon","label"])])),[[m,!n.expertMode]])),128)),u(o(l,{style:N({height:n.pageHeight-66-16+"px"})},{default:i(()=>[o(d,{id:"settings",json:n.json,onOnChange:n.onJsonEditor},null,8,["json","onOnChange"])]),_:1},8,["style"]),[[m,n.expertMode]])])}var q=E(D,[["render",I]]);export{q as default};