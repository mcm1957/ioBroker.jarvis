(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"7f9b":function(t,e,i){"use strict";i.r(e),e["default"]={Save:"speichern",Exit:"zurück",Apply:"übernehmen",Cancel:"abbrechen","Invalid JSON format":"Falsches JSON Format",Configuration:"Konfiguration","Expert mode":"Expertenmodus",Devices:"Geräte",Settings:"Einstellungen",Layout:"Layout","JSON Editor":"JSON Editor"}},"9a52":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"hHh lpR fFf"}},[!t.$store.state.jarvis.settings.secureConfiguration||t.$store.state.jarvis.settings.secureConfiguration&&t.login?i("q-header",[i("q-toolbar",[i("q-toolbar-title",[i("icon",{attrs:{name:"mdi-cog",vAlign:"middle"}}),t._v("\n\t\t\t\t"+t._s(t.$t("Configuration"))+" (v"+t._s(t.version)+")\n\t\t\t")],1),i("q-btn",{attrs:{flat:"",dense:"",round:"",icon:t.expertMode?"mdi-code-tags-check":"mdi-code-tags","aria-label":"$t('Expert Mode')"},on:{click:function(e){t.expertMode=!t.expertMode}}},[i("q-tooltip",[t._v(t._s(t.$t("Expert Mode")))])],1)],1),i("q-tabs",{attrs:{"inline-label":"",dense:"","outside-arrows":"","mobile-arrows":"",align:"left"},model:{value:t.configTab,callback:function(e){t.configTab=e},expression:"configTab"}},[t._l(t.tabs,(function(e){return[e.link?i("q-tab",{key:e.id,attrs:{name:e.id,label:t.$t(e.title),icon:e.icon},on:{click:function(i){return t.window.open(e.link,"_blank")}}}):i("q-route-tab",{key:e.id,attrs:{name:e.id,label:t.$t(e.title),icon:e.icon,to:t.to(e.id)}})]}))],2)],1):t._e(),i("q-page-container",{staticClass:"ConfigurationPage body"},[i("q-page",{attrs:{"style-fn":t.pageContainer}},[void 0===t.$store.state.jarvis.settings.secureConfiguration||!1===t.$store.state.jarvis.settings.secureConfiguration||t.login?t._e():i("Login",{attrs:{ns:"secureConfiguration",code:t.$store.state.jarvis.settings.secureConfiguration},on:{onSuccess:function(e){t.login=!0}}}),!t.$store.state.jarvis.settings.secureConfiguration||t.$store.state.jarvis.settings.secureConfiguration&&t.login?i("div",[i("router-view")],1):t._e()],1)],1),!t.$store.state.jarvis.settings.secureConfiguration||t.$store.state.jarvis.settings.secureConfiguration&&t.login?i("q-footer",[i("q-toolbar",[i("q-btn",{staticClass:"text-red",attrs:{flat:"",icon:"mdi-window-close","aria-label":"Cancel",label:t.$t("Cancel")},on:{click:t.cancel}}),i("q-space"),i("q-btn",{staticStyle:{"margin-right":"8px"},attrs:{disable:t.hasErrors,icon:"mdi-content-save","aria-label":"Save",label:t.$t("Save"),flat:"",color:"primary"},on:{click:function(e){return t.save(!1)}}}),i("q-btn",{attrs:{disable:t.hasErrors,icon:"mdi-content-save","aria-label":"Save & Exit",label:t.$t("Save")+" & "+t.$t("Exit"),color:"primary"},on:{click:function(e){return t.save(!0)}}})],1)],1):t._e()],1)},o=[],a=(i("e9c4"),i("5319"),i("ed09")),r=i("7ead"),n=i("a2b6"),c=i("ad54");const d=i("9224"),l=[{id:"devices",title:"Devices",icon:"mdi-devices"},{id:"widgets",title:"Widgets",icon:"mdi-view-grid"},{id:"layout",title:"Layout",icon:"mdi-file"},{id:"styles",title:"Styles",icon:"mdi-code-tags",pro:!0},{id:"settings",title:"Settings",icon:"mdi-cog"},{id:"account",title:"Pro-Account",icon:"mdi-star"},{id:"help",title:"Help",icon:"mdi-help-box"}],g=i("0050")();var u=Object(a["c"])({name:"ConfigurationPage",data(){const t=r["a"].get("secureConfiguration");return{tabs:l,login:t}},methods:{to(t){return window.location.href.endsWith("configuration")||window.location.href.endsWith("configuration/")?"/configuration/"+t:t},pageContainer(t,e){return this.$store.commit("jarvis/set",{pageHeight:e-t}),{"min-height":e-t+"px"}},cancel(){this.$store.commit("jarvis/set",{drawerLeftOpen:!1}),this.$router.push({name:"home",params:{...this.$route.params,tabId:this.$store.getters["jarvis/getSelectedTabId"]}}).catch((()=>{})),setTimeout((()=>{}),500)},save(t){let e=this.$store.state.editor.devices,i=g(this.$store.state.editor.widgets);const s=g(this.$store.getters["editor/getLayoutWithoutDeletions"])||[],o=this.$store.state.editor.styles,a=this.$store.state.editor.settings;for(const n in i)i[n].items=i[n].items||[],i[n].items=i[n].items.filter((t=>e[t.deviceId]&&(!e[t.deviceId].attributes||e[t.deviceId].attributes&&!0!==e[t.deviceId].attributes.deleted)));s.forEach((t=>{t.tabs=t.tabs||[],t.tabs.forEach((t=>{delete t.widgets,t.widgetsDesktop=t.widgetsDesktop||[],t.widgetsDesktop.forEach((t=>{t.items=t.items||[],t.items=t.items.filter((t=>i[t]&&!0!==i[t]._deleted))})),t.widgetsSmartphone=t.widgetsSmartphone||[],t.widgetsSmartphone.forEach((t=>{t.items=t.items||[],t.items=t.items.filter((t=>i[t]&&!0!==i[t]._deleted))}))}))})),e=this.$store.getters["editor/getDevicesWithoutDeletions"],i=this.$store.getters["editor/getWidgetsWithoutDeletions"];const r={};JSON.stringify(this.$store.state.jarvis.devices)!==JSON.stringify(e)&&(r.devices=e),JSON.stringify(this.$store.state.jarvis.layout)!==JSON.stringify(s)&&(r.layout=s),JSON.stringify(this.$store.state.jarvis.widgets)!==JSON.stringify(i)&&(r.widgets=i),JSON.stringify(this.$store.state.jarvis.settings)!==JSON.stringify(a)&&(r.settings=a),JSON.stringify(this.$store.state.jarvis.styles)!==JSON.stringify(o)&&(r.styles=o),this.$store.dispatch("editor/save",r),t?this.cancel():this.$store.commit("editor/init",{devices:e,layout:s,widgets:i,settings:a,styles:o})}},computed:{hasErrors(){return this.$store.getters["editor/hasErrors"]},expertMode:{get(){var t;return null===(t=this.$store.state.editor.settings)||void 0===t?void 0:t.configExpertMode},set(t){this.$store.commit("editor/set",{"settings.configExpertMode":t})}},configTab:{get(){var t;return null===(t=this.$store.state.editor.settings)||void 0===t?void 0:t.configTab},set(t){t&&this.$store.commit("editor/set",{"settings.configTab":t})}}},beforeCreate(){c["default"].register(this.$i18n,c["default"].translations),this.version=d.version,this.window=window;const t=this.$store.state.jarvis.layout;if(this.$store.commit("editor/init",{devices:this.$store.state.jarvis.devices,layout:Array.isArray(t)&&t.length>0?t:[{id:"2bbbe067-7506-4fac-8a1f-bfbf9f48a9e7",type:"page",icon:"mdi-view-dashboard-variant",title:"Overview",tabs:[{icon:"mdi-desktop-mac-dashboard",title:"Dashboard",id:"674d30a6-83d8-4876-9135-55791d7dfec9",widgetsDesktop:[],widgetsSmartphone:[]}]}],styles:this.$store.state.jarvis.styles,settings:this.$store.state.jarvis.settings,widgets:this.$store.state.jarvis.widgets}),"Configuration"===this.$route.name){var e;const t=Object(n["h"])((null===(e=this.$store.state.editor.settings)||void 0===e?void 0:e.configTab)||l[0].id)+"Page";setTimeout((()=>{this.$router.replace({name:t,params:this.$route.params}).catch((t=>console.error(t)))}),500)}}}),f=u,h=i("2877"),v=i("4d5a"),b=i("e359"),m=i("65c6"),p=i("6ac5"),$=i("9c40"),w=i("05c0"),y=i("429b"),j=i("7460"),S=i("7867"),C=i("09e3"),O=i("9989"),E=i("7ff0"),k=i("2c91"),x=i("eebe"),T=i.n(x),q=Object(h["a"])(f,s,o,!1,null,null,null);e["default"]=q.exports;T()(q,"components",{QLayout:v["a"],QHeader:b["a"],QToolbar:m["a"],QToolbarTitle:p["a"],QBtn:$["a"],QTooltip:w["a"],QTabs:y["a"],QTab:j["a"],QRouteTab:S["a"],QPageContainer:C["a"],QPage:O["a"],QFooter:E["a"],QSpace:k["a"]})},a71c:function(t,e,i){var s={"./":"ad54","./de":"7f9b","./de.js":"7f9b","./en":"e2a2","./en.js":"e2a2","./index":"ad54","./index.js":"ad54"};function o(t){var e=a(t);return i(e)}function a(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=a,t.exports=o,o.id="a71c"},ad54:function(t,e,i){"use strict";i.r(e);var s=i("0692");e["default"]={translations:Object(s["a"])((t=>i("a71c")("./"+t))),register:s["c"]}},e2a2:function(t,e,i){"use strict";i.r(e),e["default"]={}}}]);