var $e=Object.defineProperty,ke=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var ve=(e,o,i)=>o in e?$e(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,K=(e,o)=>{for(var i in o||(o={}))Se.call(o,i)&&ve(e,i,o[i]);if(me)for(var i of me(o))Oe.call(o,i)&&ve(e,i,o[i]);return e},oe=(e,o)=>ke(e,Ie(o));import{Q as _e}from"./QToolbarTitle-fde1564f.js";import{Q as We}from"./QToolbar-de448639.js";import{q as le,W as ce,co as te,a2 as Q,x as ge,cw as re,c as L,d7 as Te,d8 as De,_ as ne,d4 as ae,j as D,o as m,d as k,k as l,w as t,a as S,a5 as fe,e as d,t as c,ab as ze,O as H,a6 as B,J as I,a1 as O,Y as Pe,F as N,l as J,L as A,M as h,Z as j,i as w,cK as Le,N as ee,g as R,a7 as Ee,a4 as je,a8 as qe,cr as Ae,m as Z,f as U,n as X,p as ye,I as he,ct as He,cu as Qe,d9 as Fe,da as Ve,H as Be,db as Re,cO as Me}from"./index-1c0225fa.js";import{Q as ie}from"./QBtnDropdown-6aba6674.js";import{D as be,a as Ce}from"./useDragDrop-c3bdf6ab.js";import{J as Ne}from"./json-editor-0838f8cb.js";import{Q as ue}from"./QTooltip-71a0a1dd.js";import{Q as we}from"./QExpansionItem-9d1946de.js";import{W as Je}from"./WidgetPage-d224c292.js";import"./_commonjsHelpers-45ea234c.js";import"./vue.runtime.esm-bundler-525e2c5f.js";import"./QSlideTransition-cd7c3aae.js";const Ue=le({name:"WidgetPopup",props:["widget"],emits:["onClose","onSave"],components:{WidgetPage:Je},setup(e,{emit:o}){const i=ce(),P=te(),z=[{label:i.t("top aligned"),value:"top"},{label:i.t("middle aligned"),value:"middle"},{label:i.t("bottom aligned"),value:"bottom"}],E=[{label:i.t("left aligned"),value:"left"},{label:i.t("center aligned"),value:"center"},{label:i.t("right aligned"),value:"right"},{label:i.t("fill full width"),value:"fill-width"}];let u={};Object.values(P.widgets).forEach(b=>{u[b.module]=u[b.module]||{label:b.module,widgets:[]},b._deleted!==!0&&u[b.module].widgets.push(oe(K({},b),{value:b.id,label:b.label?b.label+" "+(b.title?"("+b.title+")":""):b.title||""}))}),u=Object.values(u);const p=Q(u),g=Q(null);ge(()=>e.widget,b=>{g.value=b?re(K({items:[]},b)):null});const $=L(()=>g.value.scaleToFitContents!==void 0?g.value.scaleToFitContents:!0),n=L(()=>g.value.alignmentVertical||"top"),r=L(()=>g.value.alignmentHorizontal||"center"),C=L(()=>g.value.allowFullscreen||!1),a=L(()=>g.value.items?g.value.items.map(b=>P.widgets[b]||{}):[]),_=(b,pe)=>{let de=u;b&&(b=b.toLowerCase(),de=[],u.forEach(Y=>{const V=[];Y.widgets.forEach(x=>{(x.module&&x.module.toLowerCase().indexOf(b)!==-1||x.title&&x.title.toLowerCase().indexOf(b)!==-1||x.label&&x.label.toLowerCase().indexOf(b)!==-1)&&V.push(x)}),V.length>0&&de.push({label:Y.label+" ("+V.length+")",widgets:V})})),pe(()=>{p.value=de.sort((Y,V)=>(Y=Y.label?Y.label.toLowerCase():"",V=V.label?V.label.toLowerCase():"",Y===V?0:Y>V?1:-1))})},v=Q(null);let W=!1;const F=b=>{g.value[b.id]=b.value},M=b=>{b&&W===!0&&y({id:v.value}),W=!1,v.value=null},f=()=>{g.value=null,o("onClose")},s=()=>{o("onSave",g.value),f()},T=Q(),y=b=>{g.value.items.push(b.id),T.value.hidePopup()};return{ScaleExceptions:Te,AlignmentExceptions:De,alignmentHorizontal:E,alignmentVertical:z,inputValueAlignmentHorizontal:r,inputValueAlignmentVertical:n,inputScaleToFitContents:$,inputValueAllowFullscreen:C,onChange:F,onClose:M,onCancel:f,onSave:s,onFilter:_,itemList:a,widgetListFiltered:p,selectedWidgetId:v,container:g,addWidgetElement:T,assignWidget:y,addWidget:()=>{W=!0,v.value=ae()},editWidget:b=>{v.value=b},deleteWidget:b=>{confirm(i.t("Really delete item?"))&&g.value.items.splice(g.value.items.indexOf(b),1)}}}}),Ge={class:"text-h6"},Ye={class:"text-h7 primary q-ma-sm"},Ke={class:"row"},Ze={class:"col"},Xe={class:"col-1",style:{"text-align":"center","line-height":"56px"}},xe={class:"col-3",style:{"text-align":"center","line-height":"56px"}},el={key:0},ll={class:"row items-center"},tl={class:"text-h7 primary q-ma-sm",style:{"margin-top":"16px"}},nl={class:"row q-pb-xs"},ol={class:"col"},al={class:"col"},il={class:"col"},sl={class:"col"};function dl(e,o,i,P,z,E){const u=D("widget-page"),p=D("icon"),g=D("inputs");return m(),k("div",null,[l(u,{onOnClose:e.onClose,widgetId:e.selectedWidgetId},null,8,["onOnClose","widgetId"]),l(qe,{"model-value":e.container!==null,persistent:""},{default:t(()=>[e.container?(m(),S(je,{key:0,class:"column",style:{width:"1200px","max-width":"90vw"}},{default:t(()=>[l(fe,{class:"row items-center"},{default:t(()=>[d("div",Ge,c(e.$t("Assign Widget to Box")),1),l(ze),l(H,{flat:"",round:"",color:"grey",icon:"close",onClick:e.onCancel},null,8,["onClick"])]),_:1}),l(B),l(fe,{class:"col defaultPadding-2 q-pt-none scroll body"},{default:t(()=>[d("div",Ye,c(e.$t("Widget")),1),l(B,{style:{margin:"0 0 8px 0"}}),I(d("div",Ke,[d("div",Ze,[l(Pe,{onFilter:e.onFilter,ref:"addWidgetElement",label:e.$t("Assign Widget"),options:e.widgetListFiltered,"model-value":"","use-input":"","stack-label":"",style:{margin:"0 8px"}},{option:t($=>[l(we,{"expand-separator":"","header-class":"text-weight-bold",label:$.opt.label},{default:t(()=>[(m(!0),k(N,null,J($.opt.widgets,n=>I((m(),S(A,{key:n.id,clickable:"",onClick:r=>e.assignWidget(n)},{default:t(()=>[l(h,null,{default:t(()=>[n.label?(m(),S(j,{key:0,class:"q-ml-md"},{default:t(()=>[w(c(n.label),1)]),_:2},1024)):(m(),S(j,{key:1,class:"q-ml-md"},{default:t(()=>[d("em",null,"("+c(e.$t("no title"))+")",1)]),_:1})),l(j,{class:"q-ml-md",caption:""},{default:t(()=>[w(c(n.id),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Le]])),128))]),_:2},1032,["label"])]),_:1},8,["onFilter","label","options"])]),d("div",Xe,c(e.$t("or")),1),d("div",xe,[l(H,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget},null,8,["label","onClick"])])],512),[[O,e.itemList.length===0]]),l(ee,null,{default:t(()=>[(m(!0),k(N,null,J(e.itemList,($,n)=>(m(),S(A,{key:$.id+"-"+n,class:"list-group-item"},{default:t(()=>[$.icon?(m(),S(h,{key:0,avatar:""},{default:t(()=>[l(p,{color:"primary",name:$.icon},null,8,["name"])]),_:2},1024)):R("",!0),l(h,null,{default:t(()=>[l(j,null,{default:t(()=>[w(c($.label||$.title||e.$t("no title"))+" ",1),$._deleted?(m(),k("em",el,"[ "+c(e.$t("deleted"))+" ]",1)):R("",!0)]),_:2},1024),l(j,{caption:""},{default:t(()=>[w("Widget ID: "+c($.id)+", Module: "+c($.module),1)]),_:2},1024)]),_:2},1024),l(h,{side:""},{default:t(()=>[d("div",ll,[$._deleted!==!0?(m(),S(H,{key:0,size:"sm",flat:"",round:"",onClick:r=>e.editWidget($.id),icon:"mdi-pencil"},null,8,["onClick"])):R("",!0),l(H,{size:"sm",flat:"",round:"",onClick:r=>e.deleteWidget($.id),icon:"mdi-delete",color:"negative"},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1}),d("div",tl,c(e.$t("Options")),1),l(B,{style:{margin:"0 0 8px 0"}}),d("div",nl,[d("div",ol,[l(g,{icon:"mdi-resize",onOnChange:e.onChange,id:"allowFullscreen",label:"Allow fullscreen",type:"switch",value:e.inputValueAllowFullscreen},null,8,["onOnChange","value"])]),d("div",al,[I(l(g,{icon:"mdi-fit-to-page",onOnChange:e.onChange,id:"scaleToFitContents",label:"Scale contents to fit widget",type:"switch",value:e.inputScaleToFitContents},null,8,["onOnChange","value"]),[[O,e.itemList[0]&&e.ScaleExceptions.includes(e.itemList[0].module)===!1]])]),d("div",il,[I(l(g,{icon:"mdi-arrow-split-horizontal",onOnSelect:e.onChange,id:"alignmentVertical",label:"Vertical alignment",type:"select",options:e.alignmentVertical,value:e.inputValueAlignmentVertical},null,8,["onOnSelect","options","value"]),[[O,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])]),d("div",sl,[I(l(g,{icon:"mdi-arrow-split-vertical",onOnSelect:e.onChange,id:"alignmentHorizontal",label:"Horizontal alignment",type:"select",options:e.alignmentHorizontal,value:e.inputValueAlignmentHorizontal},null,8,["onOnSelect","options","value"]),[[O,e.itemList[0]&&e.AlignmentExceptions.includes(e.itemList[0].module)===!1]])])])]),_:1}),l(B),l(Ee,{align:"right"},{default:t(()=>[l(H,{flat:"",label:e.$t("Cancel"),color:"negative",onClick:e.onCancel},null,8,["label","onClick"]),l(H,{flat:"",label:e.$t("Apply"),color:"primary",onClick:e.onSave},null,8,["label","onClick"])]),_:1})]),_:1})):R("",!0)]),_:1},8,["model-value"])])}var ul=ne(Ue,[["render",dl]]);const rl=le({name:"WidgetSection",props:["pageId","tabId","id","label","icon","fullscreen","widgetEdges","widgetConfig","items"],components:{WidgetPopup:ul},setup(e){const o=ce(),i=te(),P=[{id:"copy",icon:"mdi-content-copy",label:o.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:o.t("duplicate")}],z=L(()=>e.id!=="desktop"&&e.widgetConfig[e.id+"SameAs"]!=="specific-layout"),E=L(()=>[{label:o.t("wie Desktop"),value:"desktop"},{label:o.t("wie Smartphone"),value:"smartphone"},{label:o.t("eigenes Layout"),value:"specific-layout"}].filter(s=>s.value!==e.id));ge(()=>e.fullscreen,s=>s===!0&&C.value.length===0&&v());const u=s=>{i.setWidgetConfig({pageId:e.pageId,tabId:e.tabId,key:s.id,val:s.value})},p=Q({}),g=(s,T,y,q,G)=>{p.value[s]=p.value[s]||{width:(100/(12/y)).toFixed(2),height:q}},$=(s,T,y,q,G)=>{p.value[s]={width:(100/(12/y)).toFixed(2),height:q}},n=s=>i.widgets[s]||{items:[]},r=s=>!s||s.length===0?o.t("No widgets assigned"):s.map(T=>{const y=n(T);y.items=y.items||[];const q=y.items.filter(G=>G.type==="divider").length;return y.module+(!y.label&&!y.title?"":" ("+(y.label||y.title)+(y.module!=="StateList"?"":", "+y.items.length+" "+o.t("items")+" "+o.t("apprx.")+" "+((y.hideTitle!==!0?56:0)+q+(y.items.length-q)*46)+"px "+o.t("in height"))+")")}).join(", "),C=Q(re(e.items)||[]),a=s=>{i.setWidgets({pageId:e.pageId,tabId:e.tabId,key:"widgets"+Ae(e.id),val:s})},_=Q(),v=()=>{let s=0,T=0;for(const y of C.value){const q=y.y+y.h;q>T&&(T=q,s=y.x)}if(C.value.push({x:s,y:T,w:4,h:4,i:ae()}),_.value&&_.value[_.value.length-1]){const y=_.value[_.value.length-1].$el,{top:q,height:G}=y.getBoundingClientRect();y.parentElement.parentElement.scrollTo(0,q+G+1e3)}a(C.value)},W=s=>{const T=s.id,y=re(C.value.find(q=>q.i===T));y.i=ae(),s.val==="copy"&&(y.items=y.items||[],y.items=y.items.map(q=>{const G=n(q),se=ae();return i.copyWidget({id:se,widget:G}),se})),C.value.push(y),a(C.value)},F=s=>{confirm(o.t("Really delete item?"))&&(C.value.splice(C.value.findIndex(y=>y.i===s),1),a(C.value))},M=Q(null),f=s=>{C.value.splice(C.value.findIndex(T=>T.i===M.value.i),1,K(K({},M.value),s)),M.value=null,a(C.value)};return{gridItemElements:_,expanded:e.id==="desktop",copyMenu:P,onChange:u,onResize:g,onResized:$,widgets:C,widgetSizes:p,setWidgets:a,getWidgetsData:r,selectedWidget:M,addWidget:v,copyWidget:W,deleteWidget:F,saveWidgetAssignments:f,disabled:z,options:E}}}),cl={style:{padding:"0 16px 8px 16px","min-height":"64px"},class:"row"},gl={class:"grid-item tooltip-widget"},pl={class:"row justify-between"},ml={class:"row items-center",style:{"padding-left":"8px"}},vl={class:"row"},fl={style:{padding:"0 16px 8px 16px","min-height":"64px"},class:"row"},hl={class:"grid-layout-container",style:{height:"800px","overflow-y":"scroll"}},yl={class:"row justify-between"},bl={class:"row items-center",style:{"padding-left":"8px"}},Cl=w("\xA0 "),wl={key:0},$l={class:"row"},kl={class:"row q-pa-sm tooltip-widget",style:{overflow:"hidden"}};function Il(e,o,i,P,z,E){const u=D("widget-popup"),p=D("icon"),g=D("inputs"),$=D("grid-item"),n=D("grid-layout");return m(),k("div",null,[l(u,{onOnClose:o[0]||(o[0]=r=>e.selectedWidget=null),onOnSave:e.saveWidgetAssignments,widget:e.selectedWidget},null,8,["onOnSave","widget"]),l(we,{"onUpdate:modelValue":o[5]||(o[5]=r=>e.expanded=!e.expanded),"model-value":e.disabled!==!0?e.expanded:!1,class:"full-width paper",disable:e.disabled},{header:t(()=>[l(h,{avatar:""},{default:t(()=>[l(p,{name:e.icon},null,8,["name"])]),_:1}),l(h,{style:{height:"40px"}},{default:t(()=>[w(c(e.label),1)]),_:1}),e.id!=="desktop"?(m(),S(h,{key:0,side:"",class:"notDisabled"},{default:t(()=>[l(g,{onOnSelect:e.onChange,type:"select",options:e.options,dense:"",label:e.$t("Use same layout as"),id:e.id+"SameAs",onClick:o[1]||(o[1]=Z(()=>{},["prevent"])),value:e.widgetConfig[e.id+"SameAs"]||"desktop",style:{width:"150px"}},null,8,["onOnSelect","options","label","id","value"])]),_:1})):R("",!0)]),default:t(()=>[d("div",null,[I(d("div",null,[I(d("div",cl,[l(H,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"])],512),[[O,e.widgets.length===0]]),l(B),I(d("div",gl,[d("div",pl,[d("div",ml,c(e.$t("Fullscreen")),1),d("div",vl,[l(H,{size:"sm",flat:"",round:"",icon:"mdi-pencil",onClick:o[2]||(o[2]=r=>e.selectedWidget=e.widgets[0])})])])],512),[[O,e.widgets[0]!==void 0]])],512),[[O,e.fullscreen===!0]]),I(d("div",null,[d("div",fl,[l(H,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Widget"),onClick:e.addWidget,style:{margin:"auto 0"}},null,8,["label","onClick"]),l(g,{dense:"",type:"switch",inline:"",label:e.$t("Height of all widgets equal to page height (no scrollbars)"),id:e.id+"FitPageHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"FitPageHeight"]||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","id","onOnChange","value"]),I(l(g,{set:e.rowHeight=parseInt(e.widgetConfig[e.id+"FitPageHeight"]!==!0&&e.widgetConfig[e.id+"WidgetHeight"])||50,dense:"",type:"number",min:10,label:e.$t("Widget height")+" ("+e.$t("in pixels")+")",id:e.id+"WidgetHeight",onOnChange:e.onChange,value:e.widgetConfig[e.id+"WidgetHeight"]||50,style:{margin:"auto 0 auto 16px"}},null,8,["set","label","id","onOnChange","value"]),[[O,e.widgetConfig[e.id+"FitPageHeight"]!==!0]]),l(g,{set:e.gapSize=parseInt(e.widgetConfig[e.id+"GapSize"]||5),dense:"",type:"number",min:0,label:e.$t("Widget gaps")+" ("+e.$t("in pixels")+")",id:e.id+"GapSize",onOnChange:e.onChange,value:e.widgetConfig[e.id+"GapSize"]||5,style:{margin:"auto 0 auto 16px"}},null,8,["set","label","id","onOnChange","value"])]),l(B),d("div",hl,[l(n,{onLayoutUpdated:e.setWidgets,layout:e.widgets,"onUpdate:layout":o[4]||(o[4]=r=>e.widgets=r),"row-height":e.rowHeight,margin:[e.gapSize,e.gapSize],"use-css-transforms":!0,responsive:!1,preventCollision:!1,style:{"min-height":"50px"}},{default:t(()=>[(m(!0),k(N,null,J(e.widgets,(r,C)=>(m(),S($,{key:r.i,ref_for:!0,ref:"gridItemElements",x:r.x,y:r.y,w:r.w,h:r.h,i:r.i,class:U(["grid-item tooltip-widget",{"rounded-borders":e.widgetEdges!==!0}]),onResized:e.onResized,onResize:e.onResize,onContainerResized:e.onResized},{default:t(()=>[l(ue,{target:".tooltip-widget"},{default:t(()=>[w(c(e.getWidgetsData(r.items)),1)]),_:2},1024),d("div",yl,[d("div",bl,[d("span",{class:U("sort-"+C)},"[ "+c(C)+" ]",3),Cl,l(ue,{target:".sort-"+C},{default:t(()=>[w(c(e.$t("Responsive Position"))+": "+c(C),1)]),_:2},1032,["target"]),w(" "+c(e.$t("Position")+": "+r.x+"x * "+r.y+"y")+" ",1),e.widgetSizes[r.i]?(m(),k("span",wl,"\xA0- "+c(e.$t("Size")+": "+r.w+"w ("+e.widgetSizes[r.i].width+"%) * "+r.h+"h ("+e.widgetSizes[r.i].height+"px)"),1)):R("",!0)]),d("div",$l,[l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-pencil",tooltip:e.$t("edit"),onClick:Z(a=>e.selectedWidget=r,["stop"])},null,8,["tooltip","onClick"]),l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:o[3]||(o[3]=Z(()=>{},["stop"])),items:e.copyMenu,onOnSelect:e.copyWidget,id:r.i,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"]),l(g,{class:"q-ma-none",type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:Z(a=>e.deleteWidget(r.i),["stop"])},null,8,["tooltip","onClick"])])]),d("div",kl,[w(c(e.getWidgetsData(r.items))+" ",1),l(ue,null,{default:t(()=>[w(c(e.getWidgetsData(r.items)),1)]),_:2},1024)])]),_:2},1032,["x","y","w","h","i","class","onResized","onResize","onContainerResized"]))),128)),d("div",{class:"grid-spacer",style:X({bottom:-3*e.rowHeight+"px",height:3*e.rowHeight+"px"})},null,4)]),_:1},8,["onLayoutUpdated","layout","row-height","margin"])])],512),[[O,e.fullscreen!==!0]])])]),_:1},8,["model-value","disable"])])}var Sl=ne(rl,[["render",Il]]);const Ol=le({name:"TabPage",props:["pageId","tabId"],components:{WidgetSection:Sl},setup(e){const o=te(),i=E=>{let u=E.value;try{u=u&&E.json!==void 0&&u.indexOf("{")>-1&&u.indexOf("}")>-1?JSON.parse(u):u}catch(p){console.warn(E.value,p)}o.editTab({pageId:e.pageId,tabId:e.tabId,key:E.id,val:u})},P=L(()=>(o.layout.find(p=>p.id===e.pageId)||{}).tabs.find(p=>p.id===e.tabId)||{}),z=L(()=>typeof P.value.title=="string"?P.value.title:P.value.title.default||Object.values(P.value.title)[0]);return{onChange:i,tab:P,tabTitle:z}}}),_l={style:{padding:"0 8px"}},Wl={class:"text-h6 primary q-ma-sm"},Tl={class:"row"},Dl={class:"col"},zl={class:"col"},Pl={class:"row"},Ll={class:"col"},El={class:"col"},jl={class:"row"},ql={class:"col-2"},Al={class:"col"},Hl={class:"text-h6 primary q-ma-sm",style:{"margin-top":"24px"}};function Ql(e,o,i,P,z,E){const u=D("inputs"),p=D("widget-section");return m(),k("div",_l,[d("div",Wl,c(e.$t("Tab"))+": "+c(e.tabTitle)+" ("+c(e.$t("ID")+": "+e.tab.id)+")",1),d("div",Tl,[d("div",Dl,[l(u,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Tab")+" "+e.$t("Icon"),value:e.tab.icon||"",icon:e.tab.icon},null,8,["onOnChange","label","value","icon"])]),d("div",zl,[l(u,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.tab.iconStyle},null,8,["onOnChange","value"])])]),d("div",Pl,[d("div",Ll,[l(u,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Tab")+" "+e.$t("Title"),value:e.tab.title||""},null,8,["onOnChange","label","value"])]),d("div",El,[l(u,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.tab.bodyStyle},null,8,["onOnChange","value"])])]),d("div",jl,[d("div",ql,[l(u,{type:"switch",inline:"",label:e.$t("Tab")+" "+e.$t("Fullscreen"),id:"fullscreen",onOnChange:e.onChange,value:e.tab.fullscreen||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),d("div",Al,[l(u,{type:"switch",inline:"",label:e.$t("Widgets edges (round or angled)"),id:"widgetEdges",onOnChange:e.onChange,value:e.tab.widgetEdges||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])])]),d("div",Hl,c(e.$t("Widgets of tab"))+": "+c(e.tabTitle),1),l(p,{pageId:e.pageId,tabId:e.tabId,id:"desktop",label:"Desktop",icon:"mdi-monitor",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsDesktop},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"]),l(p,{pageId:e.pageId,tabId:e.tabId,id:"smartphone",label:"Smartphone",icon:"mdi-cellphone",fullscreen:e.tab.fullscreen||!1,widgetEdges:e.tab.widgetEdges||!1,widgetConfig:e.tab.widgetConfig||{},items:e.tab.widgetsSmartphone},null,8,["pageId","tabId","fullscreen","widgetEdges","widgetConfig","items"])])}var Fl=ne(Ol,[["render",Ql]]);const Vl=le({name:"DrawerPage",props:["pageId"],components:{Draggable:be,TabSection:Fl},setup(e,{emit:o}){var M;const i=te(),P=L(()=>{const f=[];return i.getPagesWithoutDeletions.forEach(s=>{s.id!==e.pageId&&f.push(K({id:s.id,label:s.title},s))}),f}),z=L(()=>i.layout.find(f=>f.id===e.pageId)||{}),E=L(()=>typeof z.value.title=="string"?z.value.title:z.value.title.default||Object.values(z.value.title)[0]),u=L({get(){return(z.value.tabs||[]).map(s=>(s._hasIconBinding=typeof s.icon=="object",s._hasTitleBinding=typeof s.title=="object",s))},set(f){i.setTabs({pageId:e.pageId,tabs:f})}}),p=i.selectedTab?i.selectedTab:((M=z.value.tabs)==null?void 0:M[0])||{},g=Q(p.id||null),$=Q({}),n=(f,s)=>{console.warn(f,s),$.value[".tabOptions-move-"+f.id]=s};let r=null;ge(()=>e.pageId,()=>{var f,s;g.value=r||((s=(f=u.value)==null?void 0:f[0])==null?void 0:s.id)||null,r=null});const C=()=>{i.addTab({pageId:e.pageId}),g.value=u.value[u.value.length-1].id},a=(f,s=!1)=>{i.addTab({pageId:e.pageId,tabId:f,copyWidgets:s}),g.value=u.value[u.value.length-1].id},_=(f,s)=>{i.moveTab({pageId:e.pageId,tabId:f,destinationPageId:s}),g.value=f,r=f,o("onSelectPage",i.layout.find(T=>T.id===s)||{})},v=f=>{if(i.deleteTab({pageId:e.pageId,tabId:f}),g.value===f){const s=u.value.find(T=>T._deleted!==!0);g.value=s?s.id:null}},W=f=>{i.restoreTab({pageId:e.pageId,tabId:f}),g.value=f},F=f=>{let s=f.value;try{s=s&&f.json!==void 0&&f.value.indexOf("{")>-1&&f.value.indexOf("}")>-1?JSON.parse(f.value):f.value}catch(T){console.warn(f.value,T)}i.editDrawerItem({itemId:e.pageId,key:f.id,val:s})};return oe(K({},Ce()),{onChange:F,setRef:n,pages:P,page:z,pageTitle:E,tabs:u,tabOptions:$,selectedTab:g,addTab:C,copyTab:a,moveTab:_,deleteTab:v,restoreTab:W})}}),Bl={class:"text-h6 primary q-ma-sm"},Rl={class:"row"},Ml={class:"col"},Nl={class:"col"},Jl={class:"row"},Ul={class:"col"},Gl={class:"col"},Yl={key:0},Kl={class:"text-h6 primary q-ma-sm"},Zl={class:"q-ma-sm row"},Xl={key:0},xl={key:1},et={key:2},lt={key:3};function tt(e,o,i,P,z,E){const u=D("inputs"),p=D("icon"),g=D("draggable"),$=D("tab-section");return m(),k("div",{key:e.page.id},[d("div",Bl,c(e.$t("Page"))+": "+c(e.pageTitle)+" (ID: "+c(e.page.id)+")",1),d("div",Rl,[d("div",Ml,[l(u,{json:"",onOnChange:e.onChange,id:"icon",label:e.$t("Icon"),value:e.page.icon||"",icon:e.page.icon},null,8,["onOnChange","label","value","icon"])]),d("div",Nl,[l(u,{json:"",onOnChange:e.onChange,id:"iconStyle",label:"config#Devices#iconStyle#label",info:"config#Devices#iconStyle#info",value:e.page.iconStyle},null,8,["onOnChange","value"])])]),d("div",Jl,[d("div",Ul,[l(u,{json:"",onOnChange:e.onChange,id:"title",label:e.$t("Title"),value:e.page.title||""},null,8,["onOnChange","label","value"])]),d("div",Gl,[l(u,{json:"",onOnChange:e.onChange,id:"bodyStyle",label:"config#Devices#bodyStyle#label",info:"config#Devices#bodyStyle#info",value:e.page.bodyStyle},null,8,["onOnChange","value"])])]),!e.page.type||e.page.type==="page"?(m(),k("div",Yl,[d("div",Kl,c(e.$t("Tabs of page"))+": "+c(e.pageTitle),1),d("div",Zl,[l(H,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Tab"),onClick:e.addTab},null,8,["label","onClick"]),l(u,{type:"switch",inline:"",label:e.$t("Do not show Tab Labels (only Icons)"),id:"hideLabels",onOnChange:e.onChange,value:e.page.hideLabels||!1,style:{margin:"auto 0 auto 16px"}},null,8,["label","onOnChange","value"])]),l(Qe,{modelValue:e.selectedTab,"onUpdate:modelValue":o[3]||(o[3]=n=>e.selectedTab=n),"inline-label":"","outside-arrows":"","mobile-arrows":"",class:"bg-primary text-white full-width",align:"left"},{default:t(()=>[l(g,ye({class:"list-group",tag:"div","component-data":{style:"display: flex; flex-wrap: wrap",tag:"div",type:"transition",name:e.drag?null:"flip-list"},modelValue:e.tabs,"onUpdate:modelValue":o[0]||(o[0]=n=>e.tabs=n)},e.dragOptions,{onStart:o[1]||(o[1]=n=>e.drag=!0),onEnd:o[2]||(o[2]=n=>e.drag=!1),"item-key":"id",handle:".dragndrop"}),{item:t(({element:n})=>[(m(),S(He,{key:n.id,name:n.id,style:X({backgroundColor:n.backgroundColor}),class:U({"q-px-xs":!0,rowDeleted:n._deleted===!0}),disable:n._deleted===!0},{default:t(()=>[l(p,{size:"sm",name:"mdi-drag-vertical",class:"dragndrop",color:n.color},null,8,["color"]),n._hasIconBinding?(m(),k("div",Xl,[l(ie,{flat:"",dense:""},{label:t(()=>[l(p,{size:"xs",name:n.icon.default||Object.values(n.icon)[0],class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),default:t(()=>[l(ee,null,{default:t(()=>[(m(!0),k(N,null,J(n.icon,(r,C)=>(m(),S(A,{key:C},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:r,class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])]),_:2},1024),l(h,null,{default:t(()=>[l(j,null,{default:t(()=>[w(c(r),1)]),_:2},1024),l(j,{caption:""},{default:t(()=>[w(c(C),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(m(),k("div",xl,[l(p,{size:"xs",name:n.icon,class:"tabIcon q-mr-xs",color:n.iconColor||n.color},null,8,["name","color"])])),n._hasTitleBinding?(m(),k("div",et,[l(ie,{flat:"",dense:"",label:n.title.default||Object.values(n.title)[0]},{default:t(()=>[l(ee,null,{default:t(()=>[(m(!0),k(N,null,J(n.title,(r,C)=>(m(),S(A,{key:C},{default:t(()=>[l(h,null,{default:t(()=>[l(j,null,{default:t(()=>[w(c(r),1)]),_:2},1024),l(j,{caption:""},{default:t(()=>[w(c(C),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(m(),k("div",lt,[I(d("div",{class:"q-tab__label",style:X({color:n.color})},c(n.title),5),[[O,e.page.hideLabels!==!0]])])),d("div",{class:"row items-center no-wrap",style:X([{"margin-left":"16px"},{color:n.color}])},[l(B,{vertical:"",class:"q-ma-xs"}),I(l(u,{round:"",type:"button",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:r=>e.restoreTab(n.id)},null,8,["tooltip","onClick"]),[[O,n._deleted===!0]]),I(l(H,{class:U("tabOptions-"+n.id),dense:"",flat:"",round:"",color:"white",icon:"mdi-dots-vertical"},null,8,["class"]),[[O,n._deleted!==!0]]),l(he,{target:".tabOptions-"+n.id,anchor:"bottom left",self:"top left","auto-close":""},{default:t(()=>[I(l(A,{clickable:"",onClick:r=>e.copyTab(n.id,!0)},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:"mdi-content-copy"})]),_:1}),l(h,null,{default:t(()=>[w(c(e.$t("copy")),1)]),_:1})]),_:2},1032,["onClick"]),[[O,n._deleted!==!0]]),I(l(A,{clickable:"",onClick:r=>e.copyTab(n.id)},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:"mdi-content-duplicate"})]),_:1}),l(h,null,{default:t(()=>[w(c(e.$t("duplicate")),1)]),_:1})]),_:2},1032,["onClick"]),[[O,n._deleted!==!0]]),I(l(A,{class:U("tabOptions-move-"+n.id),onMouseover:r=>e.tabOptions[".tabOptions-move-"+n.id].show(),clickable:""},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:"mdi-folder-move-outline"})]),_:1}),l(h,null,{default:t(()=>[w(c(e.$t("move")),1)]),_:1}),l(h,{side:""},{default:t(()=>[l(p,{name:"mdi-chevron-right"})]),_:1}),l(he,{ref:r=>e.setRef(n,r),anchor:"top end",self:"top start","auto-close":""},{default:t(()=>[l(ee,null,{default:t(()=>[(m(!0),k(N,null,J(e.pages,r=>(m(),S(A,{key:r.id,clickable:"",onClick:C=>e.moveTab(n.id,r.id)},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:r.icon},null,8,["name"])]),_:2},1024),l(h,null,{default:t(()=>[w(c(r.title),1)]),_:2},1024),l(h,{side:""})]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:2},1536)]),_:2},1032,["class","onMouseover"]),[[O,n._deleted!==!0&&e.pages.length>0]]),l(A,{clickable:"",style:{color:"#fff",background:"var(--q-negative)"},onClick:r=>e.deleteTab(n.id)},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:"mdi-delete"})]),_:1}),l(h,null,{default:t(()=>[w(c(e.$t("delete")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1032,["target"])],4)]),_:2},1032,["name","style","class","disable"]))]),_:1},16,["component-data","modelValue"])]),_:1},8,["modelValue"]),l(Ve,{modelValue:e.selectedTab,"onUpdate:modelValue":o[4]||(o[4]=n=>e.selectedTab=n),animated:"","keep-alive":"",class:"border"},{default:t(()=>[(m(!0),k(N,null,J(e.tabs,n=>(m(),S(Fe,{key:n.id,name:n.id,style:{padding:"16px 0"},class:"body"},{default:t(()=>[l($,{pageId:e.page.id,tabId:n.id},null,8,["pageId","tabId"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])):R("",!0)])}var nt=ne(Vl,[["render",tt]]);const ot=le({name:"LayoutsPage",components:{Draggable:be,DrawerSection:nt,JsonEditor:Ne},setup(){const e=ce(),o=Be(),i=te(),P=[{id:"copy",icon:"mdi-content-copy",label:e.t("copy")},{id:"duplicate",icon:"mdi-content-duplicate",label:e.t("duplicate")}],z=v=>!v._error&&i.set({[v.id]:JSON.parse(v.value)}),E=v=>i.set({["settings."+v.id]:v.value}),u=L({get(){return(i.getLayout||[]).map(W=>(W._hasIconBinding=typeof W.icon=="object",W._hasTitleBinding=typeof W.title=="object",W))},set(v){i.setLayout(v)}}),p=Q(i.selectedPage?i.selectedPage:i.getLayout.find(v=>v.type==="page"&&v._deleted!==!0)),g=v=>{p.value=v},$=()=>i.addDrawerItem({type:"divider"}),n=()=>i.addDrawerItem({type:"header",title:e.t("New Header")}),r=()=>{i.addDrawerItem({type:"page",icon:"mdi-file",title:e.t("New Page"),tabs:[]}),p.value=u.value[u.value.length-1],i.addTab({pageId:p.value.id})},C=v=>{const W=v.id;i.copyDrawerItem({itemId:W,copyWidgets:v.val==="copy"});const F=u.value[u.value.length-1];F.type==="page"&&(p.value=F)},a=v=>{i.deleteDrawerItem({itemId:v}),p.value.id===v&&(p.value=u.value.find(W=>W.type==="page"&&W._deleted!==!0))},_=v=>{i.restoreDrawerItem({itemId:v});const W=u.value.find(F=>F.id===v);W.type==="page"&&(p.value=W)};return oe(K({},Ce()),{copyMenu:P,json:L(()=>i.layout),settings:L(()=>i.settings),proWarning:L(()=>!Re.isPro()&&u.value.filter(v=>v.type==="page").length>1),pageHeight:L(()=>o.pageHeight),pagesWithoutDeletionsCount:L(()=>i.getPagesWithoutDeletions.length),onChangeSettings:E,onJsonEditor:z,onSelectPage:g,selectedPage:p,pages:u,addDivider:$,addHeader:n,addPage:r,copyItem:C,deleteItem:a,restoreItem:_})}}),at={class:"full-height LayoutsPage"},it={class:"row no-wrap"},st={class:"row",style:{"margin-bottom":"54px"}},dt={class:"col-3"},ut={class:"text-h6 primary q-ma-sm"},rt={key:0},ct={key:1},gt={key:1},pt={key:2},mt={class:"row items-center"},vt={class:"col-9"};function ft(e,o,i,P,z,E){const u=D("alert"),p=D("icon"),g=D("inputs"),$=D("draggable"),n=D("paper"),r=D("drawer-section"),C=D("json-editor");return m(),k("div",at,[d("div",it,[l(We,{class:"paper",style:{"min-height":"56px"}},{default:t(()=>[l(_e,{shrink:""},{default:t(()=>[w(c(e.$t("Layout")),1)]),_:1})]),_:1})]),I(d("div",st,[d("div",dt,[l(n,{class:"q-pa-sm"},{default:t(()=>[d("div",ut,c(e.$t("Drawer")+" / "+e.$t("Pages")),1),l(Me,null,{default:t(()=>[l(H,{color:"primary",icon:"mdi-plus-circle",label:e.$t("Add Page"),onClick:e.addPage},null,8,["label","onClick"]),l(H,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Header"),onClick:e.addHeader},null,8,["label","onClick"]),l(H,{color:"secondary",icon:"mdi-plus-circle",label:e.$t("Add Divider"),onClick:e.addDivider},null,8,["label","onClick"])]),_:1}),I(l(u,{style:{margin:"16px 0 0 0"}},{default:t(()=>[w(c(e.$t("Only a single page is allowed without Pro. A single page may hold infinite tabs though."))+".",1)]),_:1},512),[[O,e.proWarning]]),l(B,{style:{margin:"16px 0"}}),l(ee,null,{default:t(()=>[l($,ye({class:"list-group",tag:"div","component-data":{tag:"div",type:"transition",name:e.drag?null:"flip-list"},modelValue:e.pages,"onUpdate:modelValue":o[1]||(o[1]=a=>e.pages=a)},e.dragOptions,{onStart:o[2]||(o[2]=a=>e.drag=!0),onEnd:o[3]||(o[3]=a=>e.drag=!1),"item-key":"id",handle:".dragndrop"}),{item:t(({element:a})=>[(m(),S(A,{key:a.id,clickable:!a.type||a.type==="page"||a.type==="header",onClick:_=>e.onSelectPage(a),class:U({rowDeleted:a._deleted===!0,selected:e.selectedPage.id===a.id}),disable:a._deleted===!0},{default:t(()=>[l(h,{avatar:"",center:""},{default:t(()=>[l(p,{size:"sm",name:"mdi-drag-horizontal",class:"dragndrop"})]),_:1}),!a.type||a.type==="page"?(m(),S(h,{key:0,avatar:"",center:"",style:X({backgroundColor:a.backgroundColor})},{default:t(()=>[a._hasIconBinding?(m(),k("div",rt,[l(ie,{flat:"",dense:""},{label:t(()=>[l(p,{name:a.icon.default||Object.values(a.icon)[0],color:e.selectedPage.id===a.id?"white":"primary",styles:{color:a.iconColor}},null,8,["name","color","styles"])]),default:t(()=>[l(ee,null,{default:t(()=>[(m(!0),k(N,null,J(a.icon,(_,v)=>(m(),S(A,{key:v},{default:t(()=>[l(h,{avatar:""},{default:t(()=>[l(p,{size:"xs",name:_,class:"pageIcon q-mr-xs",color:a.iconColor||a.color},null,8,["name","color"])]),_:2},1024),l(h,null,{default:t(()=>[l(j,null,{default:t(()=>[w(c(_),1)]),_:2},1024),l(j,{caption:""},{default:t(()=>[w(c(v),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)])):(m(),k("div",ct,[l(p,{name:a.icon,color:e.selectedPage.id===a.id?"white":"primary",styles:{color:a.iconColor}},null,8,["name","color","styles"])]))]),_:2},1032,["style"])):R("",!0),l(h,{class:U({itemDeleted:a._deleted===!0}),style:X({backgroundColor:a.backgroundColor,color:a.color})},{default:t(()=>[a.type==="divider"?(m(),S(B,{key:0})):R("",!0),a._hasTitleBinding?(m(),k("div",gt,[l(ie,{flat:"",dense:"",label:a.title.default||Object.values(a.title)[0]},{default:t(()=>[l(ee,null,{default:t(()=>[(m(!0),k(N,null,J(a.title,(_,v)=>(m(),S(A,{key:v},{default:t(()=>[l(h,null,{default:t(()=>[l(j,null,{default:t(()=>[w(c(_),1)]),_:2},1024),l(j,{caption:""},{default:t(()=>[w(c(v),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])])):(m(),k("div",pt,[l(j,{class:U({header:a.type==="header"}),style:X({color:a.color})},{default:t(()=>[w(c(a.title),1)]),_:2},1032,["class","style"])]))]),_:2},1032,["class","style"]),l(h,{side:"",class:U({rowDeleted:a._deleted===!0,selected:e.selectedPage.id===a.id})},{default:t(()=>[d("div",mt,[a.type==="page"?I((m(),S(g,{key:0,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:o[0]||(o[0]=Z(()=>{},["stop"])),items:e.copyMenu,onOnSelect:e.copyItem,id:a.id,denseMenu:""},null,8,["tooltip","items","onOnSelect","id"])),[[O,a.type!=="divider"&&a._deleted!==!0]]):I((m(),S(g,{key:1,type:"button",round:"",icon:"mdi-content-copy",tooltip:e.$t("copy"),onClick:Z(_=>e.copyItem({id:a.id}),["stop"])},null,8,["tooltip","onClick"])),[[O,a.type!=="divider"&&a._deleted!==!0]]),I(l(g,{type:"button",round:"",icon:"mdi-delete",tooltip:e.$t("delete"),color:"negative",onClick:Z(_=>e.deleteItem(a.id),["stop"])},null,8,["tooltip","onClick"]),[[O,(a.type&&a.type!=="page"||(!a.type||a.type==="page")&&e.pagesWithoutDeletionsCount>1)&&a._deleted!==!0]]),I(l(g,{type:"button",round:"",icon:"mdi-restore",tooltip:e.$t("restore"),color:"positive",onClick:Z(_=>e.restoreItem(a.id),["stop"]),class:"restore"},null,8,["tooltip","onClick"]),[[O,a._deleted===!0]])])]),_:2},1032,["class"])]),_:2},1032,["clickable","onClick","class","disable"]))]),_:1},16,["component-data","modelValue"]),l(B,{class:"q-my-sm"}),l(A,null,{default:t(()=>[l(h,{avatar:"",center:""}),l(h,{avatar:"",center:""},{default:t(()=>[l(p,{name:"mdi-cog",color:"primary"})]),_:1}),l(h,null,{default:t(()=>[l(j,null,{default:t(()=>[w(c(e.$t("Configuration"))+" & "+c(e.$t("Help")),1)]),_:1}),l(j,{caption:""},{default:t(()=>[w(c(e.$t("show in sidebar")),1)]),_:1})]),_:1}),l(h,{side:""},{default:t(()=>[l(g,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowSettings",value:e.settings.drawerShowSettings},null,8,["onOnChange","value"])]),_:1})]),_:1}),l(A,null,{default:t(()=>[l(h,{avatar:"",center:""}),l(h,{avatar:"",center:""},{default:t(()=>[l(p,{name:"mdi-menu",color:"primary"})]),_:1}),l(h,null,{default:t(()=>[l(j,null,{default:t(()=>[w(c(e.$t("Drawer")),1)]),_:1}),l(j,{caption:""},{default:t(()=>[w(c(e.$t("show button")),1)]),_:1})]),_:1}),l(h,{side:""},{default:t(()=>[l(g,{type:"Switch",inline:"",onOnChange:e.onChangeSettings,id:"drawerShowMenuButton",value:e.settings.drawerShowMenuButton},null,8,["onOnChange","value"])]),_:1})]),_:1})]),_:1})]),_:1})]),d("div",vt,[l(n,{class:"q-pa-sm"},{default:t(()=>[e.selectedPage&&e.selectedPage.id?(m(),S(r,{key:0,onOnSelectPage:e.onSelectPage,pageId:e.selectedPage.id},null,8,["onOnSelectPage","pageId"])):R("",!0)]),_:1})])],512),[[O,!e.settings.configExpertMode]]),I(l(n,{style:X({height:e.pageHeight-66-16+"px"})},{default:t(()=>[l(C,{id:"layout",json:e.json,onOnChange:e.onJsonEditor},null,8,["json","onOnChange"])]),_:1},8,["style"]),[[O,e.settings.configExpertMode]])])}var Dt=ne(ot,[["render",ft]]);export{Dt as default};