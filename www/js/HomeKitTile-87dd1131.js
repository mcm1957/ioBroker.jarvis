import{_ as M,q as N,W as P,cq as J,H as R,az as Q,d5 as U,dL as W,c as w,a2 as b,y as G,A as X,dp as m,a3 as C,j as O,o as d,d as v,g as u,J as h,a1 as E,k as q,w as Y,F as B,l as $,f as k,n as Z,c$ as _,i as x,t as ee,a as c,ad as S,dM as te}from"./index-9ff9d6ec.js";const{capitalize:ne}=te,ae=N({name:"ModuleHomeKitTile",props:["_containerSize","widget"],setup(e){const K=P(),z=J(),I=R(),j=Q(e.widget,"config"),l=U.joinConfig(j.value,W),t=w(()=>e.widget.items&&e.widget.items[0]||{}),r=w(()=>m.get(t.value.deviceId)),n=b({}),a=b({}),f=w(()=>({on:"true",off:"false",...n.value&&n.value.properties||{}})),F=w(()=>n.value&&n.value.val!==void 0&&n.value.val.toString()===f.value.on.toString()),T=(o,i)=>{if(y.value=!0,o){p.value=o;return}n.value=i},D=(o,i)=>{if(y.value=!0,o){p.value=o;return}a.value=i},y=b(!1),p=b();G(()=>{r.value?t.value.bodyStateKey||t.value.primaryStateKey?(t.value.primaryStateKey&&m.listen(r.value.id,t.value.primaryStateKey,T),t.value.bodyStateKey&&m.listen(r.value.id,t.value.bodyStateKey,D)):y.value=!0:(p.value="HomeKitTile: "+K.t("Device {deviceId} not found").replace("{deviceId}",t.value.deviceId),console.warn(p.value),y.value=!0)}),X(()=>{r.value&&(m.unlisten(r.value.id,t.value.primaryStateKey,T),m.unlisten(r.value.id,t.value.bodyStateKey,D))});const H=(o,i,s)=>{if(Array.isArray(s))return s.some(L=>H(o,i,L));const g=l[o+ne(i)];return s==="secondaryStates"?g===s&&t.value.secondaryStatesKeys:s==="state"?g===s&&t.value.primaryStateKey:s==="bodyElement"?g===s&&t.value.bodyStateKey&&t.value.bodyElement:s==="actionElement"?g===s&&t.value.primaryStateKey&&t.value.actionElement:g===s},V=(o,i="action",s="State")=>C.Components[o]&&C.Components[o][i][s]||C.Components._defaults&&C.Components._defaults[i][s]||null,A=()=>{if(l.action==="website"&&(l.website.indexOf("http")>-1||l.website.indexOf("www")>-1))window.open((l.website.indexOf("http")===-1?"http://":"")+l.website,"_blank");else if(l.action==="page"&&l.jumper)z.push({params:{tabId:l.jumper}}).catch(o=>console.warn(o));else if(l.action==="popup"&&r.value)I.set({selectedDeviceId:r.value.id});else if(r.value&&l.action==="trigger"&&t.value.primaryStateKey){const o=F.value?f.value.setOff:f.value.setOn;let i=F.value?f.value.off:f.value.on;i=typeof i=="string"&&(i==="true"||i==="false")?i==="true":i,m.set(r.value.id,t.value.primaryStateKey,o!==void 0?o:i)}};return{FunctionsComponents:C.Components,horizontal:["left","center","right"],vertical:["top","middle","bottom"],moduleConfig:l,loaded:y,error:p,device:r,deviceConfig:t,primaryState:n,bodyState:a,getComponent:V,hasElement:H,jump:A}}}),ie=["v-ripple"],oe={key:0,class:"q-focus-helper"},se={key:1,class:"q-pa-sm full-height"};function le(e,K,z,I,j,l){const t=O("alert"),r=O("icon");return d(),v("div",{class:k(["HomeKitTile grid",{"cursor-pointer":e.moduleConfig.action&&e.moduleConfig.action!=="none","q-hoverable":e.moduleConfig.action&&e.moduleConfig.action!=="none"}]),style:Z({height:e._containerSize.height+"px",width:e._containerSize.width+"px"}),onClick:K[0]||(K[0]=(...n)=>e.jump&&e.jump(...n)),"v-ripple":e.moduleConfig.action&&e.moduleConfig.action!=="none"},[e.moduleConfig.action&&e.moduleConfig.action!=="none"?(d(),v("span",oe)):u("",!0),h(q(_,{indeterminate:""},null,512),[[E,!e.loaded&&!e.error]]),h(q(t,null,{default:Y(()=>[x(ee(e.error),1)]),_:1},512),[[E,e.loaded&&e.error]]),e.device?h((d(),v("div",se,[(d(!0),v(B,null,$(e.vertical,n=>(d(),v("div",{key:n,class:k([n,"item row nowrap"])},[(d(!0),v(B,null,$(e.horizontal,a=>(d(),v("div",{key:a,class:k(["col-grow",a])},[e.hasElement(n,a,"icon")?(d(),c(r,{key:0,alignment:a,styles:e.primaryState.iconStyle||{},loading:!e.loaded,name:e.primaryState.icon,color:"primary",IconButton:""},null,8,["alignment","styles","loading","name"])):u("",!0),e.hasElement(n,a,"label")?(d(),c(S(e.FunctionsComponents._defaults.components.Title),{key:1,alignment:a,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):u("",!0),e.hasElement(n,a,"secondaryStates")?(d(),c(S(e.FunctionsComponents._defaults.components.SecondaryStates),{key:2,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):u("",!0),e.hasElement(n,a,"state")?(d(),c(S(e.FunctionsComponents._defaults.components.State),{key:3,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):u("",!0),e.hasElement(n,a,"bodyElement")?(d(),c(S(e.getComponent(e.device.function,"body",e.deviceConfig.bodyElement)),{key:4,alignment:a,device:e.device,state:e.bodyState,stateKey:e.deviceConfig.bodyStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):u("",!0),e.hasElement(n,a,"actionElement")?(d(),c(S(e.getComponent(e.device.function,"action",e.deviceConfig.actionElement)),{key:5,alignment:a,device:e.device,state:e.primaryState,stateKey:e.deviceConfig.primaryStateKey,deviceConfig:e.deviceConfig},null,8,["alignment","device","state","stateKey","deviceConfig"])):u("",!0)],2))),128))],2))),128))],512)),[[E,e.loaded&&!e.error]]):u("",!0)],14,ie)}var de=M(ae,[["render",le],["__scopeId","data-v-7c42c76d"]]);export{de as default};