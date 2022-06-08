var ne=Object.defineProperty,oe=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var T=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))le.call(t,n)&&T(e,n,t[n]);if(F)for(var n of F(t))re.call(t,n)&&T(e,n,t[n]);return e},z=(e,t)=>oe(e,se(t));import{dx as V,dy as ie,dz as U,bW as de,cQ as ue,bZ as ce,cR as ve,c3 as ge,c as b,h as P,T as me,aY as fe,cM as J,W as ye,_ as pe,q as he,ci as Ce,az as be,d5 as ke,dA as we,a2 as C,b5 as De,A as Se,j as N,o as Q,d as I,J as Y,a1 as x,k as u,e as m,a as _e,w as f,a8 as Me,g as qe,dB as Ae,E as ze,c$ as Pe,a5 as j,t as S,ab as Qe,O as Be,a6 as $e,a4 as Ne,F as Ie,l as Ye,n as xe,dm as Ee,dC as Le,i as Re}from"./index-1c0225fa.js";import Oe from"./EventList-ebc08ac4.js";import{n as We}from"./index-015e474d.js";import{s as E}from"./index-d2bd87eb.js";import"./QTooltip-71a0a1dd.js";import"./___vite-browser-external_commonjs-proxy-0107ae2e.js";import"./_commonjsHelpers-45ea234c.js";function H(e,t){V(2,arguments);var n=ie(e),v=U(t);return isNaN(v)?new Date(NaN):(v&&n.setDate(n.getDate()+v),n)}function Fe(e,t){V(2,arguments);var n=U(t);return H(e,-n)}var Te=de({name:"QInnerLoading",props:z(D(D({},ue),ce),{showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]}),setup(e,{slots:t}){const n=fe(),v=ve(e,n.proxy.$q),{transition:_,transitionStyle:r}=ge(e,b(()=>e.showing)),k=b(()=>"q-inner-loading absolute-full column flex-center"+(v.value===!0?" q-inner-loading--dark":"")),y=b(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function c(){const g=[P(J,{size:e.size,color:e.color})];return e.label!==void 0&&g.push(P("div",{class:y.value,style:e.labelStyle},[e.label])),g}function s(){return e.showing===!0?P("div",{class:k.value,style:r.value},t.default!==void 0?t.default():c()):null}return()=>P(me,{name:_.value,appear:!0},s)}});function je(e=!1){const t=ye(),n=t.locale.value||t.locale;return e?n.substr(0,2):n}const Ve=he({name:"ModuleCalendar",props:["_size","widget"],components:{EventList:Oe},setup(e){const t=Ee.getConnection,n=Ce(),v=je(!0),_=be(e.widget,"config"),r=ke.joinConfig(_.value,we);r.timezone=r.timezone||"Europe/Amsterdam",r.calendars=r.calendars||[];const k=b(()=>n.dark.isActive),y=C(!1),c=C(new Date);We.scheduleJob("0 0 0 * * *",()=>{c.value=new Date});const s=C({year:c.value.getFullYear(),month:c.value.getMonth()+1}),g=({year:a,month:o})=>{(s.value.month!==o||s.value.year!==a)&&(s.value.year=a,s.value.month=o,y.value=O[a+"-"+o]||!1,q(a,o).then(()=>{M()}))},p=E(Fe(c.value,r.daysReview)),Z=E(H(c.value,r.daysPreview)),h=C([p,Z]),G=({date:a})=>{r.calendarAgenda===!1||r.calendarAgenda!==!1&&h.value.length===2?h.value=[a]:a<h.value[0]?h.value.unshift(a):h.value.push(a),M()},K=b(()=>{let[a,o]=h.value;return o=E(o?a.getMonth()!==o.getMonth()?Le(a):o:a),c.value.getFullYear()!==s.value.year||c.value.getMonth()+1!==s.value.month?[]:[{key:"selectedEnd",highlight:{contentStyle:{backgroundColor:"var(--q-accent)",opacity:1,color:"#fff"}},dates:o,order:102},{key:"selectedStart",highlight:{contentStyle:{backgroundColor:"var(--q-accent)",opacity:1,color:"#fff"}},dates:a,order:101},{key:"selected",highlight:{style:{backgroundColor:"var(--q-accent)",opacity:.3},contentStyle:{color:"var(--q-accent)"}},dates:{start:a,end:o},order:99},{key:"today",highlight:{style:{backgroundColor:"var(--q-primary)"},contentStyle:{color:"#fff",fontWeight:"bold"}},dates:c.value,order:200}]}),L=C([]),R=(a,o)=>{const i=[];W.value.forEach(l=>{!i.some(A=>A.uid===l.uid&&A.isAllDay)&&(l&&l.start>=a&&l.start<=o||l&&l.start<=a&&l.end>=a)&&i.push(l)}),L.value=i},M=()=>{let[a,o]=h.value;if(o=Ae(o||a),a.getMonth()===o.getMonth())R(a,o);else{let i=s.value.month+1;const l=i>12?s.value.year+1:s.value.year;i=i>12?1:i,q(l,i).then(()=>{R(a,o)})}},O=C({}),B=C({}),W=b(()=>Object.values(B.value).flat()),X=(a,o,i)=>new Promise((l,A)=>{t.getSpecial("Calendar",{calendar:a,year:o,month:i,options:z(D({},r),{language:locale.value})},w=>{if(w.error)return console.warn("Calendar-a99xoa47",w.error),A(w.error);if(w.events&&Array.isArray(w.events)){const ae=w.events.map((d,te)=>(d.start=new Date(d.start),d.end=new Date(d.end),z(D({calendar:a},d),{key:d.uid+":"+te,dot:{style:{backgroundColor:a.color||ze.getPaletteColor("primary")}},popover:{label:d.summary},dates:d.duration<=0?d.start:{start:d.start,end:d.end},customData:{calendar:a,summary:d.summary,time:d.time}})));O[o+"-"+i]=!0,B.value[a.id+":"+o+"-"+i]=ae,l(B.value[a.id])}})}),q=(a,o)=>{const i=r.calendars.map(l=>X(l,a,o));return Promise.allSettled(i).then(l=>(y.value=!0,l))};let $=null;De(()=>{q(s.value.year,s.value.month).then(()=>{M()}),$=setInterval(()=>{console.debug("Calendar-d53dca17","Refreshing ical data..."),q(s.value.year,s.value.month).then(()=>{M()})},r.refresh*60*1e3)}),Se(()=>$&&clearInterval($));const ee=b(()=>[...W.value,...K.value]);return{loaded:y,language:v,isDarkMode:k,moduleConfig:r,setDate:g,setRange:G,attributes:ee,agenda:L}}}),Ue={style:{position:"relative"}},Je={class:"text-h6"},He=Re(' /* :timezone="moduleConfig.timezone" trim-weeks: By default, calendar panes always displays the maximum number of weeks in a month, even if the max week does not contain any days in the current month displayed. */ '),Ze={class:"text-xs text-gray-300 font-semibold"},Ge={class:"Calendar-Popover-List"};function Ke(e,t,n,v,_,r){const k=N("event-list"),y=N("icon"),c=N("v-calendar");return Q(),I("div",null,[Y(u(Pe,{indeterminate:""},null,512),[[x,!e.loaded]]),m("div",Ue,[e.moduleConfig.calendarAgenda===!1?(Q(),_e(Me,{key:0,"model-value":e.popup,onHide:t[1]||(t[1]=s=>e.popup=!1)},{default:f(()=>[u(Ne,{style:{width:"800px","max-width":"80vw"}},{default:f(()=>[u(j,{class:"row items-center"},{default:f(()=>[m("div",Je,S(e.$t("Calendar Details")),1),u(Qe),u(Be,{flat:"",round:"",color:"grey",icon:"close",onClick:t[0]||(t[0]=s=>e.popup=!1)})]),_:1}),u($e),u(j,{class:"col q-pa-none scroll body"},{default:f(()=>[u(k,{agenda:e.agenda},null,8,["agenda"])]),_:1})]),_:1})]),_:1},8,["model-value"])):qe("",!0),Y(m("div",null,[u(c,{"onUpdate:toPage":e.setDate,onDayclick:e.setRange,class:"Calendar",attributes:e.attributes,"is-dark":e.isDarkMode,locale:e.language,masks:{dayPopover:"WWW, D. MMMM YYYY"},"trim-weeks":"","show-iso-weeknumbers":"","disable-page-swipe":""},{"header-title":f(({monthLabel:s,year:g})=>[m("div",null,S(s+" "+g),1),u(y,{name:"mdi-calendar-cursor",size:"xs",class:"q-ml-xs"})]),"day-popover":f(({dayTitle:s,attributes:g})=>[m("div",null,[m("strong",Ze,S(s),1),m("ul",Ge,[(Q(!0),I(Ie,null,Ye(g,p=>(Q(),I("li",{key:p.key+"-"+(p.customData.calendar.color||""),style:xe({color:p.customData.calendar.color||"var(--q-primary)"})},[m("span",null,S(p.customData.time)+", "+S(p.customData.summary),1)],4))),128))])])]),default:f(()=>[He]),_:1},8,["onUpdate:toPage","onDayclick","attributes","is-dark","locale","masks"]),u(Te,{showing:!e.loaded},{default:f(()=>[u(J,{size:"50px",color:"primary"})]),_:1},8,["showing"])],512),[[x,e.moduleConfig.calendarPreview!==!1]]),Y(u(k,{agenda:e.agenda},null,8,["agenda"]),[[x,e.moduleConfig.calendarAgenda!==!1]])])])}var ra=pe(Ve,[["render",Ke]]);export{ra as default};