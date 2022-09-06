import{bt as W,a4 as J,bI as q,dg as G,cr as I,d4 as V,as as E,k as h,dh as k,aw as j,cF as Y,aG as Q,ay as c,W as d,b3 as p,bn as m,X as t,a2 as s,b1 as o,a1 as P,D as i,bO as u,cM as C,bN as B,bB as R,I as f,aE as L,bP as y,dd as F,bz as K,A as X,bA as Z,bJ as z}from"./index-a04ffada.js";import{m as x}from"./marked.esm-5c8832de.js";const ee=J({name:"AccountPage",setup(){console.log("AccountPage","setup()");const e=q(),T=G(),b=I.get("sessionId")||V();I.set("sessionId",b);const M="Ad8Db5feNlBy6SdFa7O0fpJ2QYIcyFO9SGSg4tNpxOgOlLyWTkN6JmOFBV58ItTpdUwfBGW2L8WuoIAn";E(()=>{const n=document.createElement("script");n.setAttribute("src","https://www.paypal.com/sdk/js?client-id="+M+"&components=buttons&currency=EUR&vault=true&intent=subscription"),n.setAttribute("data-namespace","paypal_sdk"),document.body.appendChild(n)});const N=h(),S=h(!1),_=h(I.get("userId")!==null),v=h(I.get("userId")),a=h([]),$=h(),D=h([]);k.post("user/details",{action:"getLoginBySessionId",sessionId:b}).then(n=>{if(!n)throw new Error("User not signed in!");console.log("AccountPage","UserDetails",n),_.value=!0,v.value=n,I.set("userId",n),console.log("AccountPage","User signed-in: "+n),k.post("user/invoice",{action:"getInvoicesByUserId",userId:n}).then(l=>{D.value=l}).catch(l=>{console.warn("AccountPage",l.message)}),k.post("user/details",{action:"getInstallations",userId:n}).then(l=>{a.value=l.map(r=>{const g=JSON.parse(r.system),H={value:r.ioBrokerId,label:"System: "+g.hostname+" ("+g.platform+"), ID: "+r.ioBrokerId};return r.selected==="1"&&($.value=H),H})}).catch(l=>{console.warn("AccountPage",b,l.message)})}).catch(n=>{console.warn("AccountPage",b,n.message),n.value=n.message,_.value=!1});let w=null;const U=()=>{window.paypal?window.paypal.use(["login"],n=>{const l=T.meta.uuid,r=T.meta.system,g=F.getSystemId(r);n.render({appid:"Ad8Db5feNlBy6SdFa7O0fpJ2QYIcyFO9SGSg4tNpxOgOlLyWTkN6JmOFBV58ItTpdUwfBGW2L8WuoIAn",scopes:"openid",containerid:"paypal-button-login",responseType:"code",locale:"de-de",buttonType:"LWP",buttonShape:"pill",buttonSize:"lg",fullPage:"true",state:btoa(b+"|"+l+"|"+g+"|"+JSON.stringify(r)+"|"+window.location.href),returnurl:"https://www.zefau.net/jarvis/user/paypal_login.php"})}):setTimeout(()=>U(),100)},O=()=>{if(!window.paypal_sdk)setTimeout(()=>O(),100);else{document.querySelector("#paypal-button-subscribe");const n={style:{shape:"rect",color:"blue",layout:"horizontal",label:"buynow",tagline:!1},createSubscription:(l,r)=>r.subscription.create({plan_id:"P-8EY03930L1769123MMEFPZPI"}),onApprove:(l,r)=>{S.value=!0,k.post("user/invoice",{action:"assignUserToInvoice",userId:v.value,subscriptionId:l.subscriptionID}).then(g=>F.setToken(g,l.subscriptionID,$.value.value)).catch(g=>console.error(g)).finally(()=>{S.value="done",window.location.reload()})}};w=window.paypal_sdk.Buttons(n),w.render("#paypal-button-subscribe")}};E(()=>{U(),O()}),j(()=>{w&&w.close&&w.close(),Object.keys(window).forEach(n=>{/paypal|zoid|post_robot/.test(n)&&delete window[n]})});const A={};return["SupportByBuying","UsageNotice","Termination","Disclaimer"].forEach(n=>{let l="",r=0;for(A[n]=[];(l=e.t(n+"["+r+"]"))!==n+"["+r+"]";)r++,A[n].push(l)}),{format:Y,marked:x,now:Math.ceil(Date.now()/1e3),t:A,installations:a,invoices:D,userId:v,isLogin:_,isPaying:S,error:N}}}),se={class:"row q-px-sm"},te={class:"col"},ne={class:"row q-pa-md no-wrap justify-center"},oe={class:"col-3"},ae={class:"text-h6"},le=t("div",{class:"text-subtitle2"},null,-1),ie={class:"text-center"},re={class:"row"},ue={class:"col-12"},ce={class:"text-center"},de=t("div",{id:"paypal-button-login"},null,-1),pe=[de],me={class:"text-h6"},ge=t("div",{class:"text-subtitle2"},null,-1),he={class:"col-shrink items-center"},ye={class:"col-5"},be={class:"text-h6"},fe=t("div",{class:"text-subtitle2"},null,-1),_e=["innerHTML"],ve=["innerHTML"],we=["innerHTML"],Ie=t("div",{id:"paypal-button-subscribe"},null,-1),Le={class:"col-shrink items-center"},Se={class:"col-3"},ke={class:"text-h6"},Pe=t("div",{class:"text-subtitle2"},null,-1),Be=["innerHTML"];function Te(e,T,b,M,N,S){const _=Q("alert"),v=Q("inputs");return c(),d("div",null,[p(t("div",se,[t("div",te,[s(_,null,{default:o(()=>[P(i(e.error),1)]),_:1})])],512),[[m,e.error]]),t("div",ne,[t("div",oe,[s(B,null,{default:o(()=>[s(u,{class:"bg-primary text-white"},{default:o(()=>[t("div",ae,i(e.isLogin===!0?e.$t("User")+" ID":e.$t("Sign In")),1),le]),_:1}),s(u,null,{default:o(()=>[p(t("div",ie,[s(C,{color:"primary",size:"3em"})],512),[[m,e.isLogin===null]]),p(t("div",null,[t("div",re,[t("div",ue,[s(v,{standout:"",value:e.userId,label:"User",disable:""},null,8,["value"])])])],512),[[m,e.isLogin===!0]]),p(t("div",ce,pe,512),[[m,e.isLogin===!1]])]),_:1})]),_:1}),p(s(B,{class:"q-mt-md"},{default:o(()=>[s(u,{class:"bg-primary text-white"},{default:o(()=>[t("div",me,i(e.$t("Bills")),1),ge]),_:1}),s(u,null,{default:o(()=>[s(R,null,{default:o(()=>[(c(!0),d(f,null,L(e.invoices,a=>(c(),d(f,{key:"item-"+a.invoiceId},[s(K,{class:X({"bg-positive":a.expires>e.now})},{default:o(()=>[s(Z,null,{default:o(()=>[s(z,null,{default:o(()=>[P(i(a.date)+", #"+i(a.invoiceId),1)]),_:2},1024),s(z,{caption:""},{default:o(()=>[P(i(e.$t("valid to"))+" "+i(e.format(a.expires*1e3,"dd. MMM yyyy, HH:mm")),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]),s(y)],64))),128))]),_:1})]),_:1})]),_:1},512),[[m,e.invoices.length>0]])]),t("div",he,[s(y,{vertical:"",style:{margin:"0 16px",height:"100%"}})]),t("div",ye,[s(B,null,{default:o(()=>[s(u,{class:"bg-primary text-white"},{default:o(()=>[t("div",be,i(e.$t("Buy"))+" & "+i(e.$t("Subscribe")),1),fe]),_:1}),s(u,null,{default:o(()=>[(c(!0),d(f,null,L(e.t.SupportByBuying,a=>(c(),d("p",{key:a},[t("span",{innerHTML:e.marked.parse(a)},null,8,_e)]))),128))]),_:1}),s(y),s(u,null,{default:o(()=>[t("strong",null,i(e.$t("Usage Notice")),1),(c(!0),d(f,null,L(e.t.UsageNotice,a=>(c(),d("p",{key:a},[t("span",{innerHTML:e.marked.parse(a)},null,8,ve)]))),128))]),_:1}),s(y),s(u,null,{default:o(()=>[t("strong",null,i(e.$t("Legal Remarks")),1),(c(!0),d(f,null,L(e.t.Disclaimer,a=>(c(),d("p",{key:a},[t("span",{innerHTML:e.marked.parse(a)},null,8,we)]))),128))]),_:1}),s(y),p(s(u,{class:"text-center"},{default:o(()=>[P(i(e.$t("Login first to buy & subscribe"))+". ",1)]),_:1},512),[[m,e.isLogin===!1]]),p(s(u,{class:"text-center"},{default:o(()=>[p(t("div",null,[Ie,t("em",null,i(e.$t("buy now")),1),s(y,{class:"q-mt-sm"})],512),[[m,e.isPaying===!1]]),p(t("div",null,[s(C,{color:"primary",size:"3em"})],512),[[m,e.isPaying===!0]])]),_:1},512),[[m,e.isLogin===!0&&e.userId]])]),_:1})]),t("div",Le,[s(y,{vertical:"",style:{margin:"0 16px",height:"100%"}})]),t("div",Se,[s(B,null,{default:o(()=>[s(u,{class:"bg-primary text-white"},{default:o(()=>[t("div",ke,i(e.$t("Unsubscribe"))+" / "+i(e.$t("Terminate")),1),Pe]),_:1}),s(u,null,{default:o(()=>[(c(!0),d(f,null,L(e.t.Termination,a=>(c(),d("p",{key:a},[t("span",{innerHTML:e.marked.parse(a)},null,8,Be)]))),128))]),_:1})]),_:1})])])])}var Ne=W(ee,[["render",Te]]);export{Ne as default};