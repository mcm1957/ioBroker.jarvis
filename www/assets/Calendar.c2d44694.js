var ne=Object.defineProperty,oe=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var W=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))le.call(t,n)&&W(e,n,t[n]);if(T)for(var n of T(t))re.call(t,n)&&W(e,n,t[n]);return e},P=(e,t)=>oe(e,se(t));import{dF as U,dG as ie,dH as V,W as de,Y as ue,c7 as ce,Z as ve,cd as me,a as k,h as Q,T as ge,a2 as fe,cZ as G,ab as ye,_ as pe,x as he,cv as Ce,aM as ke,de as be,dI as we,a0 as C,dJ as De,bh as Se,G as _e,m as $,o as z,f as I,N as Y,ah as x,q as u,d8 as Me,g,b as qe,w as f,a8 as Ae,k as Pe,dK as Qe,aj as ze,t as S,U as Be,ak as j,al as Ne,F as $e,s as Ie,n as Ye,dv as xe,l as Le}from"./index.21fe8de3.js";import{Q as Ee}from"./QSpace.df85bd0f.js";import Fe from"./EventList.aad682d6.js";import{n as Re}from"./index.bb276868.js";import{c as Oe}from"./quasar.esm.prod.f7b06fd8.js";import{s as L}from"./index.a770142f.js";import"./QTooltip.e15a36dd.js";import"./___vite-browser-external_commonjs-proxy.87b0d4b0.js";import"./_commonjsHelpers.8402d862.js";function H(e,t){U(2,arguments);var n=ie(e),v=V(t);return isNaN(v)?new Date(NaN):(v&&n.setDate(n.getDate()+v),n)}function Te(e,t){U(2,arguments);var n=V(t);return H(e,-n)}var We=de({name:"QInnerLoading",props:P(D(D({},ue),ce),{showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]}),setup(e,{slots:t}){const n=fe(),v=ve(e,n.proxy.$q),{transition:_,transitionStyle:r}=me(e,k(()=>e.showing)),b=k(()=>"q-inner-loading absolute-full column flex-center"+(v.value===!0?" q-inner-loading--dark":"")),y=k(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function c(){const m=[Q(G,{size:e.size,color:e.color})];return e.label!==void 0&&m.push(Q("div",{class:y.value,style:e.labelStyle},[e.label])),m}function s(){return e.showing===!0?Q("div",{class:b.value,style:r.value},t.default!==void 0?t.default():c()):null}return()=>Q(ge,{name:_.value,appear:!0},s)}});function je(e=!1){const t=ye(),n=t.locale.value||t.locale;return e?n.substr(0,2):n}const Ue=he({name:"Calendar",props:["_size","widget"],components:{EventList:Fe},setup(e){const t=xe.getConnection,n=Ce(),v=je(!0),_=ke(e.widget,"config"),r=be.joinConfig(_.value,we);r.timezone=r.timezone||"Europe/Amsterdam",r.calendars=r.calendars||[];const b=k(()=>n.dark.isActive),y=C(!1),c=C(new Date);Re.scheduleJob("0 0 0 * * *",()=>{c.value=new Date});const s=C({year:c.value.getFullYear(),month:c.value.getMonth()+1}),m=({year:a,month:o})=>{(s.value.month!==o||s.value.year!==a)&&(s.value.year=a,s.value.month=o,y.value=R[a+"-"+o]||!1,q(a,o).then(()=>{M()}))},p=L(Te(c.value,r.daysReview)),J=L(H(c.value,r.daysPreview)),h=C([p,J]),Z=({date:a})=>{r.calendarAgenda===!1||r.calendarAgenda!==!1&&h.value.length===2?h.value=[a]:a<h.value[0]?h.value.unshift(a):h.value.push(a),M()},K=k(()=>{let[a,o]=h.value;return o=L(o?a.getMonth()!==o.getMonth()?De(a):o:a),c.value.getFullYear()!==s.value.year||c.value.getMonth()+1!==s.value.month?[]:[{key:"selectedEnd",highlight:{contentStyle:{backgroundColor:"var(--q-accent)",opacity:1,color:"#fff"}},dates:o,order:102},{key:"selectedStart",highlight:{contentStyle:{backgroundColor:"var(--q-accent)",opacity:1,color:"#fff"}},dates:a,order:101},{key:"selected",highlight:{style:{backgroundColor:"var(--q-accent)",opacity:.3},contentStyle:{color:"var(--q-accent)"}},dates:{start:a,end:o},order:99},{key:"today",highlight:{style:{backgroundColor:"var(--q-primary)"},contentStyle:{color:"#fff",fontWeight:"bold"}},dates:c.value,order:200}]}),E=C([]),F=(a,o)=>{const i=[];O.value.forEach(l=>{!i.some(A=>A.uid===l.uid&&A.isAllDay)&&(l&&l.start>=a&&l.start<=o||l&&l.start<=a&&l.end>=a)&&i.push(l)}),E.value=i},M=()=>{let[a,o]=h.value;if(o=Qe(o||a),a.getMonth()===o.getMonth())F(a,o);else{let i=s.value.month+1;const l=i>12?s.value.year+1:s.value.year;i=i>12?1:i,q(l,i).then(()=>{F(a,o)})}},R=C({}),B=C({}),O=k(()=>Object.values(B.value).flat()),X=(a,o,i)=>new Promise((l,A)=>{t.getSpecial("Calendar",{calendar:a,year:o,month:i,options:P(D({},r),{language:locale.value})},w=>{if(w.error)return console.warn("Calendar-a99xoa47",w.error),A(w.error);if(w.events&&Array.isArray(w.events)){const ae=w.events.map((d,te)=>(d.start=new Date(d.start),d.end=new Date(d.end),P(D({calendar:a},d),{key:d.uid+":"+te,dot:{style:{backgroundColor:a.color||Oe.getPaletteColor("primary")}},popover:{label:d.summary},dates:d.duration<=0?d.start:{start:d.start,end:d.end},customData:{calendar:a,summary:d.summary,time:d.time}})));R[o+"-"+i]=!0,B.value[a.id+":"+o+"-"+i]=ae,l(B.value[a.id])}})}),q=(a,o)=>{const i=r.calendars.map(l=>X(l,a,o));return Promise.allSettled(i).then(l=>(y.value=!0,l))};let N=null;Se(()=>{q(s.value.year,s.value.month).then(()=>{M()}),N=setInterval(()=>{console.debug("Calendar-d53dca17","Refreshing ical data..."),q(s.value.year,s.value.month).then(()=>{M()})},r.refresh*60*1e3)}),_e(()=>N&&clearInterval(N));const ee=k(()=>[...O.value,...K.value]);return{loaded:y,language:v,isDarkMode:b,moduleConfig:r,setDate:m,setRange:Z,attributes:ee,agenda:E}}}),Ve={style:{position:"relative"}},Ge={class:"text-h6"},He=Le(' /* :timezone="moduleConfig.timezone" trim-weeks: By default, calendar panes always displays the maximum number of weeks in a month, even if the max week does not contain any days in the current month displayed. */ '),Je={class:"text-xs text-gray-300 font-semibold"},Ze={class:"Calendar-Popover-List"};function Ke(e,t,n,v,_,r){const b=$("event-list"),y=$("icon"),c=$("v-calendar");return z(),I("div",null,[Y(u(Me,{indeterminate:""},null,512),[[x,!e.loaded]]),g("div",Ve,[e.moduleConfig.calendarAgenda===!1?(z(),qe(Ae,{key:0,"model-value":e.popup,onHide:t[1]||(t[1]=s=>e.popup=!1)},{default:f(()=>[u(ze,{style:{width:"800px","max-width":"80vw"}},{default:f(()=>[u(j,{class:"row items-center"},{default:f(()=>[g("div",Ge,S(e.$t("Calendar Details")),1),u(Ee),u(Be,{flat:"",round:"",color:"grey",icon:"close",onClick:t[0]||(t[0]=s=>e.popup=!1)})]),_:1}),u(Ne),u(j,{class:"col q-pa-none scroll body"},{default:f(()=>[u(b,{agenda:e.agenda},null,8,["agenda"])]),_:1})]),_:1})]),_:1},8,["model-value"])):Pe("",!0),Y(g("div",null,[u(c,{"onUpdate:toPage":e.setDate,onDayclick:e.setRange,class:"Calendar",attributes:e.attributes,"is-dark":e.isDarkMode,locale:e.language,masks:{dayPopover:"WWW, D. MMMM YYYY"},"trim-weeks":"","show-iso-weeknumbers":"","disable-page-swipe":""},{"header-title":f(({monthLabel:s,year:m})=>[g("div",null,S(s+" "+m),1),u(y,{name:"mdi-calendar-cursor",size:"xs",class:"q-ml-xs"})]),"day-popover":f(({dayTitle:s,attributes:m})=>[g("div",null,[g("strong",Je,S(s),1),g("ul",Ze,[(z(!0),I($e,null,Ie(m,p=>(z(),I("li",{key:p.key+"-"+(p.customData.calendar.color||""),style:Ye({color:p.customData.calendar.color||"var(--q-primary)"})},[g("span",null,S(p.customData.time)+", "+S(p.customData.summary),1)],4))),128))])])]),default:f(()=>[He]),_:1},8,["onUpdate:toPage","onDayclick","attributes","is-dark","locale","masks"]),u(We,{showing:!e.loaded},{default:f(()=>[u(G,{size:"50px",color:"primary"})]),_:1},8,["showing"])],512),[[x,e.moduleConfig.calendarPreview!==!1]]),Y(u(b,{agenda:e.agenda},null,8,["agenda"]),[[x,e.moduleConfig.calendarAgenda!==!1]])])])}var da=pe(Ue,[["render",Ke]]);export{da as default};