var le=Object.defineProperty,me=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var Q=(e,o,n)=>o in e?le(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,w=(e,o)=>{for(var n in o||(o={}))ue.call(o,n)&&Q(e,n,o[n]);if(x)for(var n of x(o))pe.call(o,n)&&Q(e,n,o[n]);return e},F=(e,o)=>me(e,de(o));import{dx as _,dJ as Y,dy as G,_ as ye,q as fe,de as ce,ci as ge,az as he,d5 as ve,dK as $,a2 as A,c as Ce,j as U,o as b,d as k,J as D,a1 as I,k as h,a as J,g as N,n as we,f as be,t as v,w as Se,I as Te,dp as De,c$ as Me,e as Ae,ab as ke,O as Ie,K as He,db as H,a3 as Z}from"./index-1c0225fa.js";import"./index-2df56599.js";import{eT as Oe}from"./components-fa52395b.js";import{s as W}from"./index-d2bd87eb.js";import"./_commonjsHelpers-45ea234c.js";import"./vue.runtime.esm-bundler-525e2c5f.js";import"./QTooltip-71a0a1dd.js";import"./json-editor-0838f8cb.js";var ze=864e5;function Ke(e,o){_(2,arguments);var n=W(e),p=W(o),t=n.getTime()-Y(n),y=p.getTime()-Y(p);return Math.round((t-y)/ze)}function X(e,o){var n=e.getFullYear()-o.getFullYear()||e.getMonth()-o.getMonth()||e.getDate()-o.getDate()||e.getHours()-o.getHours()||e.getMinutes()-o.getMinutes()||e.getSeconds()-o.getSeconds()||e.getMilliseconds()-o.getMilliseconds();return n<0?-1:n>0?1:n}function Le(e,o){_(2,arguments);var n=G(e),p=G(o),t=X(n,p),y=Math.abs(Ke(n,p));n.setDate(n.getDate()-t*y);var C=Number(X(n,p)===-t),S=t*(y-C);return S===0?0:S}const Fe=fe({name:"ModuleHistoryGraph",props:["_containerSize","_widgetSize","widget"],provide:{[Oe]:"dark"},setup(e){var E;const o=ce(),n=ge(),p=he(e.widget,"config"),t=ve.joinConfig(p.value,$);t.stepLineChart=!1;const y=new Date(new Date().getTime()-7*24*3600*1e3),C=new Date;t.timeTimelineDate=w({from:{year:y.getFullYear(),month:y.getMonth()+1,day:y.getDate()},to:{year:C.getFullYear(),month:C.getMonth()+1,day:C.getDate()}},t.timeTimelineDate||{});const S=((E=o.instanceList)==null?void 0:E.val)||[];t.defaultHistoryAdapter=S.find(a=>["history","sql","influxdb"].includes(a.substr(0,a.indexOf("."))));const f=A(t),O=A(t),ee=$.find(a=>a.parameter==="timeType").options,te=$.find(a=>a.parameter==="timeReviewUnit").options,R=A(!1),z=A({}),M=A([]);let K={};const ae=(a,i,s,r)=>{let l=i.label||r&&r.name||r&&r.label||"???",T=0;for(;Object.values(K).includes(l);)T++,l=l+" ("+T+")";K[r.id+":"+s.stateKey]=l;const c=parseInt(t.maxEntries)||500,g=a.length>c?Math.ceil(a.length/c):null;let m=[];a.forEach(({ts:d,val:u},L)=>{(g===null||L%g===0)&&(typeof u=="boolean"&&(t.stepLineChart=!0,u=u===!0?1:0),u=parseFloat(u)||u,m.push([d,u,s.unit||Z._defaults&&Z._defaults[i.primaryStateKey]&&Z._defaults[i.primaryStateKey].unit||""]))});const j={deviceId:i.deviceId,stateKey:i.primaryStateKey,name:l,type:t.chartType==="bar"?"bar":"line",yAxisIndex:H.isPro()&&t.yAxis&&Array.isArray(t.yAxis)&&t.yAxis.length>1&&i.moduleConfig&&i.moduleConfig.yaxis||0,step:t.stepLineChart||(t.chartType==="stepped"?"start":void 0),smooth:t.chartType==="smooth",showSymbol:t.showSymbol!==void 0?t.showSymbol:!1,lineStyle:{width:2,color:i.moduleConfig&&i.moduleConfig.color},itemStyle:{width:2,color:i.moduleConfig&&i.moduleConfig.color},emphasis:{lineStyle:{width:2}},connectNulls:!0,symbol:"roundRect",data:m},P=M.value.findIndex(d=>d.deviceId===i.deviceId&&d.stateKey===i.primaryStateKey);M.value[P]=j},B=()=>{const a=F(w(w({},t),f.value),{count:9999999,aggregate:"none"});if(a.timeType==="timeline")a.start=new Date(a.timeTimelineDate.from.year,a.timeTimelineDate.from.month-1,a.timeTimelineDate.from.day).getTime(),a.end=new Date(a.timeTimelineDate.to.year,a.timeTimelineDate.to.month-1,a.timeTimelineDate.to.day).getTime(),a.count=Le(a.end,a.start)*200,a.step=a.count*10*60*60;else{let i=(a.timeReviewValue||7)*1e3,s=100;switch(a.timeReviewUnit){case"seconds":break;case"minutes":i=i*60,s=s*10;break;case"hours":i=i*60*60,s=s*60*10;break;case"weeks":i=i*60*60*24*7,s=s*60*60*24*10;break;case"months":i=i*60*60*24*31,s=s*60*60*24*10;break;case"days":default:i=i*60*60*24,s=s*60*60*10;break}a.step=s/1e3,a.review=i}K={},e.widget.items.forEach(i=>{if(i.type==="device"){M.value.some(d=>d.deviceId===i.deviceId&&d.stateKey===i.primaryStateKey)||M.value.push({deviceId:i.deviceId,stateKey:i.primaryStateKey,type:t.chartType==="bar"?"bar":"line",data:[]});const s=(d,{subscriptionKey:u,history:L},V,q)=>{if(R.value=!0,d||!L){const re=d&&d.message||"Invalid History Data";return z.value[u]=V.stateKey+": "+re+"!",z.value}delete z.value[u],delete K[q.id+":"+V.stateKey],ae(L,i,V,q)},{start:r,end:l,review:T,step:c,count:g,ack:m,ignoreNull:j,aggregate:P}=a;De.history(i.deviceId,i.primaryStateKey,{start:r,end:l,review:T,step:c,count:g,ack:m,ignoreNull:j,aggregate:P,instance:i.historyAdapter||t.defaultHistoryAdapter},s)}})},ie=Ce(()=>{const a=H.isPro()&&t.yAxis?t.yAxis:null;!H.isPro()&&(t.xAxis||t.yAxis)&&H.warn("HistoryGraph: Axis Configuration is only available to Pro!");let i=7;const s=2;let r=90;return t.zoom&&(i+=10,r-=10),t.dataZoom&&(r-=17),t.legend==="top"&&(i+=10,r-=10),t.legend==="bottom"&&(r-=10),{backgroundColor:"transparent",tooltip:{trigger:"axis",formatter:l=>{const T=l.map(c=>{let[,g,m]=c.data||[];return m=typeof m=="object"?m[g]||m.default:m,""+c.marker+'<span style="font-size:14px;color:#666;font-weight:400;margin-left:2px">'+c.seriesName+'</span><span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">'+(typeof g=="number"?g.toFixed(2):"-")+(m?" "+m:"")+"</span>"});return l[0].axisValueLabel.replace(" 00:00:00","")+"<br />"+T.join("<br />")}},legend:{show:t.legend!=="off",bottom:t.legend==="bottom"?t.dataZoom?50:0:"auto",padding:[10,10,0,10],textStyle:{color:n.dark.isActive?"#fff":"#666"}},grid:{top:i+"%",left:"2%",right:"2%",bottom:s+"%",containLabel:!0,height:r+"%"},toolbox:{feature:{dataZoom:{show:t.zoom,yAxisIndex:"none"}}},xAxis:F(w({axisLabel:{fontSize:10,formatter:t.dateFormat?t.dateFormat.replace("HH:mm|dd.MM.","{HH}:{mm}|{dd}.{MM}.").replace(/\|/g,`
`):{year:"{yyyy}",month:"{MMM}",day:`
{dd}.{MM}.`,hour:`{HH}:{mm}
{dd}.{MM}.`,minute:"{HH}:{mm}",second:"{HH}:{mm}:{ss}",millisecond:"{hh}:{mm}:{ss} {SSS}",none:"{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}"}}},H.isPro()&&t.xAxis||{}),{type:"time"}),yAxis:a&&Array.isArray(a)&&a.length>0?a.map(l=>w({splitLine:{lineStyle:{color:"#ccc"}}},l)):F(w({splitLine:{lineStyle:{color:"#ccc"}}},a||{}),{type:"value",show:!t.stepLineChart}),dataZoom:t.dataZoom&&[{start:100-(t.dataZoom===1?100:parseInt(t.dataZoom)||100),end:100}],series:M.value}}),oe=()=>{f.value=O.value,R.value=!1,B()},ne=()=>{O.value=f.value},se=a=>{O.value[a.id]=a.value};return B(),{loaded:R,errors:z,moduleConfig:t,userConfig:f,tempConfig:O,chartOptions:ie,onApply:oe,onCancel:ne,onChange:se,optionsTimeType:ee,optionsTimeReviewUnits:te}}}),Ne={style:{"min-width":"1px","min-height":"1px"}},Re={key:0},je={key:1},Pe={class:"row no-wrap q-pa-sm items-center bg-primary text-white"};function Ve(e,o,n,p,t,y){const C=U("alert"),S=U("v-chart"),f=U("inputs");return b(),k("div",Ne,[D(h(Me,{indeterminate:""},null,512),[[I,!e.loaded]]),Object.values(e.errors).length>0?(b(),J(C,{key:0,title:Object.values(e.errors).join("<br />")},null,8,["title"])):N("",!0),e.loaded?(b(),k("div",{key:1,style:we({"min-width":"100%","min-height":"100%",width:(e._widgetSize.width||e._containerSize.width)+"px",height:e._containerSize.height-25+"px"})},[h(S,{autoresize:"",ref:"vchart",option:e.chartOptions},null,8,["option"])],4)):N("",!0),e.moduleConfig.timeConfigurable?D((b(),k("a",{key:2,class:be("chartConfiguration chartConfiguration-"+e.widget.id)},[e.userConfig.timeType==="timeline"?(b(),k("span",Re,v(e.zero(e.userConfig.timeTimelineDate.from.day))+"."+v(e.zero(e.userConfig.timeTimelineDate.from.month))+"."+v(e.userConfig.timeTimelineDate.from.year)+" - "+v(e.zero(e.userConfig.timeTimelineDate.to.day))+"."+v(e.zero(e.userConfig.timeTimelineDate.to.month))+"."+v(e.userConfig.timeTimelineDate.to.year),1)):(b(),k("span",je,v(e.userConfig.timeReviewValue)+" "+v(e.$t(e.userConfig.timeReviewUnit)),1)),e.moduleConfig.timeConfigurable?(b(),J(Te,{key:2,fit:"",cover:"",target:".chartConfiguration-"+e.widget.id,onHide:e.onCancel},{default:Se(()=>[Ae("div",Pe,[h(f,{class:"text-white",id:"timeType",type:"Select",dense:"",value:e.tempConfig.timeType,onOnSelect:e.onChange,options:e.optionsTimeType},null,8,["value","onOnSelect","options"]),D(h(f,{id:"timeTimelineDate",type:"Date",dense:"",value:e.tempConfig.timeTimelineDate,onOnChange:e.onChange},null,8,["value","onOnChange"]),[[I,e.tempConfig.timeType==="timeline"]]),D(h(f,{id:"timeReviewValue",type:"Number",dense:"",value:e.tempConfig.timeReviewValue,onOnChange:e.onChange},null,8,["value","onOnChange"]),[[I,e.tempConfig.timeType==="review"]]),D(h(f,{id:"timeReviewUnit",type:"Select",dense:"",value:e.tempConfig.timeReviewUnit,options:e.optionsTimeReviewUnits,onOnSelect:e.onChange},null,8,["value","options","onOnSelect"]),[[I,e.tempConfig.timeType==="review"]]),h(ke),D(h(Ie,{flat:"",label:e.$t("Apply"),onClick:e.onApply},null,8,["label","onClick"]),[[He]])])]),_:1},8,["target","onHide"])):N("",!0)],2)),[[I,e.loaded]]):N("",!0)])}var Ge=ye(Fe,[["render",Ve]]);export{Ge as default};