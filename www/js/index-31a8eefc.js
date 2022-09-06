import{Q as q}from"./QToolbarTitle-622a9661.js";import{a4 as O,cm as T,bI as A,cp as F,cn as S,k as B,aZ as X,bt as M,aG as y,ay as s,W as r,a2 as o,b1 as n,I as P,aE as U,b3 as V,bn as j,U as $,a1 as C,D as u,A as h,bC as k,V as E,X as z,cJ as Z,bw as K,Q as W,bU as Y,C as x,d4 as ee}from"./index-a04ffada.js";import{Q as te}from"./QToolbar-fbb89d4a.js";import{Q as oe}from"./QExpansionItem-a9cd436a.js";import{J as ie}from"./json-editor-5518238c.js";import{Q as G,a as I,b as v,c as se}from"./QTable-ab5b0db7.js";import{Q as ne}from"./QTooltip-c0d9add2.js";import{W as le}from"./WidgetPage-a09ddf4e.js";import"./QSlideTransition-80c19884.js";import"./_commonjsHelpers-55d1ff45.js";import"./QVirtualScroll-a3827607.js";import"./useDragDrop-cf965b8c.js";const ae=O({name:"WidgetsTable",props:["widgets"],emits:["onEditWidget"],setup(e,{emit:c}){T.dev("DEBUG","WidgetsTable","setup()",e.widgets);const g=A(),f=F(),m=S(),b={sortBy:"title",rowsPerPage:15},w=[{name:"id",label:g.t("ID"),field:"id",align:"left",sortable:!0},{name:"title",label:g.t("Title")+" ("+g.t("ID")+")",field:"title",align:"left",sortable:!0,style:{width:"20%"}},{name:"module",label:g.t("Module"),field:"module",align:"left",sortable:!0,style:{width:"15%"}},{name:"usage",label:g.t("Usage")+" [ #: "+g.t("Tab")+" ("+g.t("Page")+") ]",field:"usage",align:"left",sortable:!0,style:{width:"65%"}}],t=B({});return X(()=>{T.dev("DEBUG","WidgetsTable","watchEffect");const i={};for(const D of m.layout){const J=D.tabs||[];for(const _ of J){const H=[..._.widgetsDesktop||[],..._.widgetsSmartphone||[]];for(const R of H){const L=R.items||[];for(const Q of L)i[Q]=i[Q]||[],i[Q].push({widget:R,tab:_,page:D})}}}t.value=i}),{pagination:b,columns:w,usage:t,copyClipboard:i=>useCopyToClipboard(i),goTo:(i,D,J)=>{T.dev("DEBUG","WidgetsTable","goTo"),m.set({selectedPage:i,selectedTab:D}),f.push({name:"LayoutPage"})},isDeleted:i=>i._deleted===!0,onWidgetEdit:i=>c("onEditWidget",i),onWidgetCopy:i=>m.copyWidget({widget:i}),onWidgetRemove:i=>m.removeWidget({widget:i}),onWidgetRestore:i=>m.restoreWidget({widget:i})}}}),de={class:"q-pa-md"},re={key:0},ce=["onClick"],ge={key:0},ue={key:1},me={key:2};function we(e,c,g,f,m,b){const w=y("icon");return s(),r("div",de,[o(se,{rows:e.widgets,columns:e.columns,pagination:e.pagination,"rows-per-page-label":e.$t("Widgets per page")},{header:n(t=>[o(G,{props:t},{default:n(()=>[o(I,{"auto-width":""}),(s(!0),r(P,null,U(t.cols,l=>V((s(),$(I,{key:l.name,props:t},{default:n(()=>[C(u(l.label),1)]),_:2},1032,["props"])),[[j,l.field!=="id"]])),128)),o(I,{"auto-width":""})]),_:2},1032,["props"])]),body:n(t=>[o(G,{props:t,class:h({rowDeleted:e.isDeleted(t.row)})},{default:n(()=>[o(v,{"auto-width":""},{default:n(()=>[e.isDeleted(t.row)!==!0?(s(),r("div",re,[o(k,{size:"sm",flat:"",round:"",onClick:l=>e.onWidgetEdit(t.row),icon:"mdi-pencil"},null,8,["onClick"]),o(k,{size:"sm",flat:"",round:"",onClick:l=>e.onWidgetCopy(t.row),icon:"mdi-content-copy"},null,8,["onClick"])])):E("",!0)]),_:2},1024),o(v,null,{default:n(()=>[z("div",{class:h({itemDeleted:e.isDeleted(t.row)}),onClick:l=>e.copyClipboard(t.cols[0].value)},[o(ne,null,{default:n(()=>[C(" ID: "+u(t.cols[0].value)+" ("+u(e.$t("click to copy to clipboard"))+") ",1)]),_:2},1024),t.cols[1].value?(s(),r("span",ge,u(t.cols[1].value),1)):(s(),r("em",ue,"("+u(e.$t("no title"))+")",1)),t.row.label?(s(),r("span",me," ("+u(t.row.label)+")",1)):E("",!0),o(w,{name:"clipboard-text-multiple-outline",size:"xs",style:{"margin-left":"4px"}})],10,ce)]),_:2},1024),o(v,null,{default:n(()=>[z("div",{class:h({itemDeleted:e.isDeleted(t.row)})},u(t.cols[2].value),3)]),_:2},1024),o(v,null,{default:n(()=>[e.usage[t.row.id]?(s(),r("div",{key:1,class:h({itemDeleted:e.isDeleted(t.row)})},[C(u(e.usage[t.row.id].length)+": ",1),(s(!0),r(P,null,U(e.usage[t.row.id],({widget:l,tab:p,page:a},d)=>(s(),$(Z,{key:t.row.id+"-"+d,square:"",color:"primary","text-color":"white",onClick:N=>e.goTo(a,p,l),clickable:""},{default:n(()=>[C(u(p.title+" ("+a.title+")"),1)]),_:2},1032,["onClick"]))),128))],2)):(s(),r("div",{key:0,class:h({itemDeleted:e.isDeleted(t.row)})},null,2))]),_:2},1024),o(v,{"auto-width":""},{default:n(()=>[e.isDeleted(t.row)!==!0?(s(),$(k,{key:0,size:"sm",flat:"",round:"",onClick:l=>e.onWidgetRemove(t.row),icon:"mdi-delete",color:"negative"},null,8,["onClick"])):E("",!0),e.isDeleted(t.row)?(s(),$(k,{key:1,size:"sm",flat:"",round:"",onClick:l=>e.onWidgetRestore(t.row),icon:"mdi-restore",color:"positive"},null,8,["onClick"])):E("",!0)]),_:2},1024)]),_:2},1032,["props","class"])]),_:1},8,["rows","columns","pagination","rows-per-page-label"])])}var pe=M(ae,[["render",we]]);const fe=O({name:"WidgetsPage",components:{JsonEditor:ie,WidgetsTable:pe,WidgetPage:le},setup(){T.dev("DEBUG","WidgetsPage","setup()");const e=K(),c=S(),g=W(()=>e.pageHeight),f=W(()=>c.getGroupedWidgets),m=W(()=>c.getWidgetsWthoutDeletionsCount),b=W(()=>c.widgets),w=W(()=>{var d;return(d=c.settings)==null?void 0:d.configExpertMode}),t=B(),l=()=>{t.value=ee()},p=d=>{t.value=d.id},a=d=>!d._error&&c.set({[d.id]:JSON.parse(d.value)});return{expanded:B({}),pageHeight:g,groups:f,json:b,expertMode:w,widgetsCount:m,selectedWidgetId:t,addWidget:l,editWidget:p,onJsonEditor:a}}}),be={class:"full-height WidgetsPage"},he={class:"row no-wrap"};function We(e,c,g,f,m,b){const w=y("widget-page"),t=y("widgets-table"),l=y("json-editor"),p=y("paper");return s(),r("div",be,[z("div",he,[o(te,{class:"paper",style:{"min-height":"56px"}},{default:n(()=>[o(q,{shrink:""},{default:n(()=>[C(u(e.$t("Widgets"))+" ("+u(e.widgetsCount)+")",1)]),_:1}),o(Y),o(k,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget},null,8,["label","onClick"])]),_:1})]),o(w,{onOnClose:c[0]||(c[0]=a=>e.selectedWidgetId=null),widgetId:e.selectedWidgetId},null,8,["widgetId"]),(s(!0),r(P,null,U(e.groups,a=>V((s(),r("div",{class:"row no-wrap paper",key:a.id},[o(oe,{modelValue:e.expanded[a.id],"onUpdate:modelValue":d=>e.expanded[a.id]=d,icon:a.icon,label:a.label+" ("+a.widgets.length+")",class:"full-width"},{default:n(()=>[o(t,{onOnEditWidget:e.editWidget,widgets:a.widgets},null,8,["onOnEditWidget","widgets"])]),_:2},1032,["modelValue","onUpdate:modelValue","icon","label"])])),[[j,!e.expertMode&&a.widgets.length>0]])),128)),V(o(p,{style:x({height:e.pageHeight-66-16+"px"})},{default:n(()=>[o(l,{id:"widgets",json:e.json,onOnChange:e.onJsonEditor},null,8,["json","onOnChange"])]),_:1},8,["style"]),[[j,e.expertMode]])])}var Ve=M(fe,[["render",We]]);export{Ve as default};