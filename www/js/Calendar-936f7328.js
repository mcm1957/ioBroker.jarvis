import{dE as R,dF as K,dG as T,bx as Z,cW as ee,c2 as ae,cX as te,c8 as ne,Q as y,ac as P,b6 as se,a9 as oe,cQ as U,bM as le,bt as re,a4 as ie,co as de,dc as ue,dH as ce,k as C,an as ve,aw as ge,aG as B,ay as Q,W as I,b3 as $,bn as N,a2 as d,d3 as me,X as m,U as fe,b1 as f,bT as V,D as _,bD as ye,bB as pe,bU as he,bS as be,bW as Ce,V as ke,I as we,aE as De,a1 as Se,dI as _e,C as Me,dJ as qe,bs as Pe,du as Qe}from"./index-7061e6d4.js";import Ae from"./EventList-8b6808b4.js";import{n as ze}from"./index-b5128d31.js";import{s as Y}from"./index-65b8a5a9.js";import"./QTooltip-a8d25a1e.js";import"./___vite-browser-external_commonjs-proxy-afe9cd7a.js";import"./_commonjsHelpers-55d1ff45.js";function F(e,o){R(2,arguments);var r=K(e),v=T(o);return isNaN(v)?new Date(NaN):(v&&r.setDate(r.getDate()+v),r)}function Be(e,o){R(2,arguments);var r=T(o);return F(e,-r)}var Ie=Z({name:"QInnerLoading",props:{...ee,...ae,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:o}){const r=oe(),v=te(e,r.proxy.$q),{transitionProps:k,transitionStyle:u}=ne(e),w=y(()=>"q-inner-loading absolute-full column flex-center"+(v.value===!0?" q-inner-loading--dark":"")),p=y(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function c(){const g=[P(U,{size:e.size,color:e.color})];return e.label!==void 0&&g.push(P("div",{class:p.value,style:e.labelStyle},[e.label])),g}function n(){return e.showing===!0?P("div",{class:w.value,style:u.value},o.default!==void 0?o.default():c()):null}return()=>P(se,k.value,n)}});function $e(e=!1){const o=le(),r=o.locale.value||o.locale;return e?r.substr(0,2):r}const Ne=ie({name:"ModuleCalendar",props:["_size","widget"],components:{EventList:Ae},setup(e){const o=Qe.getConnection,r=de(),v=$e(!0),k=y(()=>e.widget.config),u=y(()=>({...ue.joinConfig(k.value,ce),timezone:k.value.timezone||"Europe/Amsterdam",calendars:k.value.calendars||[]})),w=y(()=>r.dark.isActive),p=C(!1),c=C(new Date);ze.scheduleJob("0 0 0 * * *",()=>{c.value=new Date});const n=C({year:c.value.getFullYear(),month:c.value.getMonth()+1}),g=({year:a,month:t})=>{(n.value.month!==t||n.value.year!==a)&&(n.value.year=a,n.value.month=t,p.value=x[a+"-"+t]||!1,q(a,t).then(()=>{M()}))},h=Y(Be(c.value,u.value.daysReview)),O=Y(F(c.value,u.value.daysPreview)),b=C([h,O]),j=({date:a})=>{u.value.calendarAgenda===!1||u.value.calendarAgenda!==!1&&b.value.length===2?b.value=[a]:a<b.value[0]?b.value.unshift(a):b.value.push(a),M()},G=y(()=>{let[a,t]=b.value;return[{key:"selectedEnd",highlight:{contentStyle:{backgroundColor:"var(--q-accent)",opacity:1,color:"#fff"}},dates:t,order:102},{key:"selectedStart",highlight:{contentStyle:{backgroundColor:"var(--q-accent)",opacity:1,color:"#fff"}},dates:a,order:101},{key:"selected",highlight:{style:{backgroundColor:"var(--q-accent)",opacity:.3},contentStyle:{color:"var(--q-accent)"}},dates:{start:a,end:t},order:99},{key:"today",highlight:{style:{backgroundColor:"var(--q-primary)"},contentStyle:{color:"#fff",fontWeight:"bold"}},dates:c.value,order:200}]}),E=C([]),L=(a,t)=>{const l=[];W.value.forEach(s=>{!l.some(D=>D.uid===s.uid)&&(s&&s.start>=a&&s.start<=t||s&&s.start<=a&&s.end>=a)&&l.push(s)}),E.value=l.sort((s,D)=>s.start===D.start?0:s.start>D.start?1:-1)},M=()=>{let[a,t]=b.value;if(t=_e(t||a),a.getMonth()===t.getMonth())L(a,t);else{let l=n.value.month+1;const s=l>12?n.value.year+1:n.value.year;l=l>12?1:l,q(s,l).then(()=>{L(a,t)})}},x=C({}),A=C({}),W=y(()=>Object.values(A.value).flat()),H=(a,t,l)=>(a.color&&qe("calendar--"+a.name.toLowerCase().replace(/ /g,"-").replace(/\./g,"-"),a.color),new Promise((s,D)=>{o.getSpecial("Calendar",{calendar:a,year:t,month:l,options:{...u.value,language:v}},S=>{if(S.error)return console.warn("Calendar-a99xoa47",e.widget.id,S.error),D(S.error);if(S.events&&Array.isArray(S.events)){const X=S.events.map((i,Ye)=>(i.start=new Date(i.start),i.end=new Date(i.end),{calendar:a,...i,key:i.uid,dot:{style:{backgroundColor:a.color||Pe.getPaletteColor("primary")}},popover:{label:i.summary},dates:i.duration<=0?i.start:{start:i.start,end:i.end},customData:{calendar:a,summary:i.summary,time:i.time}}));x[t+"-"+l]=!0,A.value[a.id+":"+t+"-"+l]=X,s(A.value[a.id])}})})),q=(a,t)=>{const l=u.value.calendars.map(s=>H(s,a,t));return Promise.allSettled(l).then(s=>(p.value=!0,s))};let z=null;ve(()=>{q(n.value.year,n.value.month).then(()=>{M()}),z=setInterval(()=>{console.debug("Calendar-d53dca17",e.widget.id,"Refreshing ical data..."),q(n.value.year,n.value.month).then(()=>{M()})},u.value.refresh*60*1e3)}),ge(()=>z&&clearInterval(z));const J=y(()=>[...W.value,...G.value]);return{loaded:p,language:v,isDarkMode:w,moduleConfig:u,setDate:g,setRange:j,attributes:J,agenda:E}}}),Ee={style:{position:"relative"}},Le={class:"text-h6"},xe={class:"text-xs text-gray-300 font-semibold"},We={class:"Calendar-Popover-List"};function Ve(e,o,r,v,k,u){const w=B("event-list"),p=B("icon"),c=B("v-calendar");return Q(),I("div",null,[$(d(me,{indeterminate:""},null,512),[[N,!e.loaded]]),m("div",Ee,[e.moduleConfig.calendarAgenda===!1?(Q(),fe(Ce,{key:0,"model-value":e.popup,onHide:o[1]||(o[1]=n=>e.popup=!1)},{default:f(()=>[d(be,{style:{width:"800px","max-width":"80vw"}},{default:f(()=>[d(V,{class:"row items-center"},{default:f(()=>[m("div",Le,_(e.$t("Calendar Details")),1),d(ye),d(pe,{flat:"",round:"",color:"grey",icon:"close",onClick:o[0]||(o[0]=n=>e.popup=!1)})]),_:1}),d(he),d(V,{class:"col q-pa-none scroll body"},{default:f(()=>[d(w,{agenda:e.agenda},null,8,["agenda"])]),_:1})]),_:1})]),_:1},8,["model-value"])):ke("",!0),$(m("div",null,[d(c,{"onUpdate:toPage":e.setDate,onDayclick:e.setRange,class:"Calendar",attributes:e.attributes,"is-dark":e.isDarkMode,locale:e.language,masks:{dayPopover:"WWW, D. MMMM YYYY"},"trim-weeks":"","show-iso-weeknumbers":"","disable-page-swipe":""},{"header-title":f(({monthLabel:n,year:g})=>[m("div",null,_(n+" "+g),1),d(p,{name:"mdi-calendar-cursor",size:"xs",class:"q-ml-xs"})]),"day-popover":f(({dayTitle:n,attributes:g})=>[m("div",null,[m("strong",xe,_(n),1),m("ul",We,[(Q(!0),I(we,null,De(g,h=>(Q(),I("li",{key:h.key+"-"+(h.customData.calendar.color||""),style:Me({color:h.customData.calendar.color||"var(--q-primary)"})},[m("span",null,_(h.customData.time)+", "+_(h.customData.summary),1)],4))),128))])])]),default:f(()=>[Se(' /* :timezone="moduleConfig.timezone" trim-weeks: By default, calendar panes always displays the maximum number of weeks in a month, even if the max week does not contain any days in the current month displayed. */ ')]),_:1},8,["onUpdate:toPage","onDayclick","attributes","is-dark","locale","masks"]),d(Ie,{showing:!e.loaded},{default:f(()=>[d(U,{size:"50px",color:"primary"})]),_:1},8,["showing"])],512),[[N,e.moduleConfig.calendarPreview!==!1]]),$(d(w,{agenda:e.agenda},null,8,["agenda"]),[[N,e.moduleConfig.calendarAgenda!==!1]])])])}var He=re(Ne,[["render",Ve]]);export{He as default};