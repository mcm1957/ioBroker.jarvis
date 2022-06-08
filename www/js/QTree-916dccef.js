var ke=Object.defineProperty,ye=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var V=(l,u,d)=>u in l?ke(l,u,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[u]=d,H=(l,u)=>{for(var d in u||(u={}))ge.call(u,d)&&V(l,d,u[d]);if(j)for(var d of j(u))xe.call(u,d)&&V(l,d,u[d]);return l},J=(l,u)=>ye(l,be(u));import{bW as _e,cQ as Se,cR as Ke,a2 as Q,b7 as qe,c as y,x as W,h,d3 as Ce,cM as Te,Q as Y,cL as Ae,ch as G,J as Ee,a1 as we,aY as me,B as ze,c_ as X}from"./index-1c0225fa.js";import{Q as Fe}from"./QSlideTransition-cd7c3aae.js";const Ne=["none","strict","leaf","leaf-filtered"];var Pe=_e({name:"QTree",props:J(H({},Se),{nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:l=>Ne.includes(l)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:Number,noConnectors:Boolean,noNodesLabel:String,noResultsLabel:String}),emits:["update:expanded","update:ticked","update:selected","lazy-load","after-show","after-hide"],setup(l,{slots:u,emit:d}){const{proxy:T}=me(),{$q:S}=T,A=Ke(l,S),g=Q({}),x=Q(l.ticked||[]),k=Q(l.expanded||[]);let E={};qe(()=>{E={}});const Z=y(()=>`q-tree q-tree--${l.dense===!0?"dense":"standard"}`+(l.noConnectors===!0?" q-tree--no-connectors":"")+(A.value===!0?" q-tree--dark":"")+(l.color!==void 0?` text-${l.color}`:"")),$=y(()=>l.selected!==void 0),p=y(()=>l.icon||S.iconSet.tree.icon),L=y(()=>l.controlColor||l.color),w=y(()=>l.textColor!==void 0?` text-${l.textColor}`:""),ee=y(()=>{const e=l.selectedColor||l.color;return e?` text-${e}`:""}),te=y(()=>l.filterMethod!==void 0?l.filterMethod:(e,i)=>{const t=i.toLowerCase();return e[l.labelKey]&&e[l.labelKey].toLowerCase().indexOf(t)>-1}),v=y(()=>{const e={},i=(t,n)=>{const r=t.tickStrategy||(n?n.tickStrategy:l.tickStrategy),c=t[l.nodeKey],o=t[l.childrenKey]&&t[l.childrenKey].length>0,_=o!==!0,f=t.disabled!==!0&&$.value===!0&&t.selectable!==!1,I=t.disabled!==!0&&t.expandable!==!1,he=r!=="none",C=r==="strict",R=r==="leaf-filtered",F=r==="leaf"||r==="leaf-filtered";let N=t.disabled!==!0&&t.tickable!==!1;F===!0&&N===!0&&n&&n.tickable!==!0&&(N=!1);let b=t.lazy;b===!0&&g.value[c]!==void 0&&Array.isArray(t[l.childrenKey])===!0&&(b=g.value[c]);const a={key:c,parent:n,isParent:o,isLeaf:_,lazy:b,disabled:t.disabled,link:t.disabled!==!0&&(f===!0||I===!0&&(o===!0||b===!0)),children:[],matchesFilter:l.filter?te.value(t,l.filter):!0,selected:c===l.selected&&f===!0,selectable:f,expanded:o===!0?k.value.includes(c):!1,expandable:I,noTick:t.noTick===!0||C!==!0&&b&&b!=="loaded",tickable:N,tickStrategy:r,hasTicking:he,strictTicking:C,leafFilteredTicking:R,leafTicking:F,ticked:C===!0||_===!0?x.value.includes(c):!1};if(e[c]=a,o===!0&&(a.children=t[l.childrenKey].map(s=>i(s,a)),l.filter&&(a.matchesFilter!==!0?a.matchesFilter=a.children.some(s=>s.matchesFilter):a.noTick!==!0&&a.disabled!==!0&&a.tickable===!0&&R===!0&&a.children.every(s=>s.matchesFilter!==!0||s.noTick===!0||s.tickable!==!0)===!0&&(a.tickable=!1)),a.matchesFilter===!0&&(a.noTick!==!0&&C!==!0&&a.children.every(s=>s.noTick)===!0&&(a.noTick=!0),F))){if(a.ticked=!1,a.indeterminate=a.children.some(s=>s.indeterminate===!0),a.tickable=a.tickable===!0&&a.children.some(s=>s.tickable),a.indeterminate!==!0){const s=a.children.reduce((U,ve)=>ve.ticked===!0?U+1:U,0);s===a.children.length?a.ticked=!0:s>0&&(a.indeterminate=!0)}a.indeterminate===!0&&(a.indeterminateNextState=a.children.every(s=>s.tickable!==!0||s.ticked!==!0))}return a};return l.nodes.forEach(t=>i(t,null)),e});W(()=>l.ticked,e=>{x.value=e}),W(()=>l.expanded,e=>{k.value=e});function K(e){const i=[].reduce,t=(n,r)=>{if(n||!r)return n;if(Array.isArray(r)===!0)return i.call(Object(r),t,n);if(r[l.nodeKey]===e)return r;if(r[l.childrenKey])return t(null,r[l.childrenKey])};return t(null,l.nodes)}function le(){return x.value.map(e=>K(e))}function ie(){return k.value.map(e=>K(e))}function re(e){return e&&v.value[e]?v.value[e].expanded:!1}function ne(){l.expanded!==void 0?d("update:expanded",[]):k.value=[]}function P(){const e=k.value,i=t=>{t[l.childrenKey]&&t[l.childrenKey].length>0&&t.expandable!==!1&&t.disabled!==!0&&(e.push(t[l.nodeKey]),t[l.childrenKey].forEach(i))};l.nodes.forEach(i),l.expanded!==void 0?d("update:expanded",e):k.value=e}function m(e,i,t=K(e),n=v.value[e]){if(n.lazy&&n.lazy!=="loaded"){if(n.lazy==="loading")return;g.value[e]="loading",Array.isArray(t[l.childrenKey])!==!0&&(t[l.childrenKey]=[]),d("lazy-load",{node:t,key:e,done:r=>{g.value[e]="loaded",t[l.childrenKey]=Array.isArray(r)===!0?r:[],ze(()=>{const c=v.value[e];c&&c.isParent===!0&&B(e,!0)})},fail:()=>{delete g.value[e],t[l.childrenKey].length===0&&delete t[l.childrenKey]}})}else n.isParent===!0&&n.expandable===!0&&B(e,i)}function B(e,i){let t=k.value;const n=l.expanded!==void 0;if(n===!0&&(t=t.slice()),i){if(l.accordion&&v.value[e]){const r=[];v.value[e].parent?v.value[e].parent.children.forEach(c=>{c.key!==e&&c.expandable===!0&&r.push(c.key)}):l.nodes.forEach(c=>{const o=c[l.nodeKey];o!==e&&r.push(o)}),r.length>0&&(t=t.filter(c=>r.includes(c)===!1))}t=t.concat([e]).filter((r,c,o)=>o.indexOf(r)===c)}else t=t.filter(r=>r!==e);n===!0?d("update:expanded",t):k.value=t}function ae(e){return e&&v.value[e]?v.value[e].ticked:!1}function q(e,i){let t=x.value;const n=l.ticked!==void 0;n===!0&&(t=t.slice()),i?t=t.concat(e).filter((r,c,o)=>o.indexOf(r)===c):t=t.filter(r=>e.includes(r)===!1),n===!0&&d("update:ticked",t)}function ce(e,i,t){const n={tree:T,node:e,key:t,color:l.color,dark:A.value};return X(n,"expanded",()=>i.expanded,r=>{r!==i.expanded&&m(t,r)}),X(n,"ticked",()=>i.ticked,r=>{r!==i.ticked&&q([t],r)}),n}function M(e){return(l.filter?e.filter(i=>v.value[i[l.nodeKey]].matchesFilter):e).map(i=>se(i))}function de(e){if(e.icon!==void 0)return h(Y,{class:"q-tree__icon q-mr-sm",name:e.icon,color:e.iconColor});const i=e.img||e.avatar;if(i)return h("img",{class:`q-tree__${e.img?"img":"avatar"} q-mr-sm`,src:i})}function ue(){d("after-show")}function oe(){d("after-hide")}function se(e){const i=e[l.nodeKey],t=v.value[i],n=e.header&&u[`header-${e.header}`]||u["default-header"],r=t.isParent===!0?M(e[l.childrenKey]):[],c=r.length>0||t.lazy&&t.lazy!=="loaded";let o=e.body&&u[`body-${e.body}`]||u["default-body"];const _=n!==void 0||o!==void 0?ce(e,t,i):null;return o!==void 0&&(o=h("div",{class:"q-tree__node-body relative-position"},[h("div",{class:w.value},[o(_)])])),h("div",{key:i,class:`q-tree__node relative-position q-tree__node--${c===!0?"parent":"child"}`},[h("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(t.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(t.selected===!0?" q-tree__node--selected":"")+(t.disabled===!0?" q-tree__node--disabled":""),tabindex:t.link===!0?0:-1,onClick:f=>{D(e,t,f)},onKeypress(f){Ce(f)!==!0&&(f.keyCode===13?D(e,t,f,!0):f.keyCode===32&&z(e,t,f,!0))}},[h("div",{class:"q-focus-helper",tabindex:-1,ref:f=>{E[t.key]=f}}),t.lazy==="loading"?h(Te,{class:"q-tree__spinner",color:L.value}):c===!0?h(Y,{class:"q-tree__arrow"+(t.expanded===!0?" q-tree__arrow--rotate":""),name:p.value,onClick(f){z(e,t,f)}}):null,t.hasTicking===!0&&t.noTick!==!0?h(Ae,{class:"q-tree__tickbox",modelValue:t.indeterminate===!0?null:t.ticked,color:L.value,dark:A.value,dense:!0,keepColor:!0,disable:t.tickable!==!0,onKeydown:G,"onUpdate:modelValue":f=>{fe(t,f)}}):null,h("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(t.selected===!0?ee.value:w.value)},[n?n(_):[de(e),h("div",e[l.labelKey])]])]),c===!0?h(Fe,{duration:l.duration,onShow:ue,onHide:oe},()=>Ee(h("div",{class:"q-tree__node-collapsible"+w.value,key:`${i}__q`},[o,h("div",{class:"q-tree__children"+(t.disabled===!0?" q-tree__node--disabled":"")},r)]),[[we,t.expanded]])):o])}function O(e){const i=E[e];i&&i.focus()}function D(e,i,t,n){n!==!0&&O(i.key),$.value&&i.selectable?l.noSelectionUnset===!1?d("update:selected",i.key!==l.selected?i.key:null):i.key!==l.selected&&d("update:selected",i.key||null):z(e,i,t,n),typeof e.handler=="function"&&e.handler(e)}function z(e,i,t,n){t!==void 0&&G(t),n!==!0&&O(i.key),m(i.key,!i.expanded,e,i)}function fe(e,i){if(e.indeterminate===!0&&(i=e.indeterminateNextState),e.strictTicking)q([e.key],i);else if(e.leafTicking){const t=[],n=r=>{r.isParent?(i!==!0&&r.noTick!==!0&&r.tickable===!0&&t.push(r.key),r.leafTicking===!0&&r.children.forEach(n)):r.noTick!==!0&&r.tickable===!0&&(r.leafFilteredTicking!==!0||r.matchesFilter===!0)&&t.push(r.key)};n(e),q(t,i)}}return Object.assign(T,{getNodeByKey:K,getTickedNodes:le,getExpandedNodes:ie,isExpanded:re,collapseAll:ne,expandAll:P,setExpanded:m,isTicked:ae,setTicked:q}),l.defaultExpandAll===!0&&P(),()=>{const e=M(l.nodes);return h("div",{class:Z.value},e.length===0?l.filter?l.noResultsLabel||S.lang.tree.noResults:l.noNodesLabel||S.lang.tree.noNodes:e)}}});export{Pe as Q};