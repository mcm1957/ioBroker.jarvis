const _uuid=require("uuid").v4;const JarvisClient=require("./jarvis.client.js");module.exports={connectClient(e,t){const s=new JarvisClient(this.adapter,e);const n=s.init(t);this.clients[n.id]=s;return n},listenClient(t){const e=this.clients[t.id];e.listen();e.on("message",e=>{e=e.toString();this.handleClientEvent(t.id,e)});e.on("disconnected",e=>{this.clients[t.id]&&this.updateClient(this.clients[t.id],{connected:false}).then(()=>{delete this.clients[t.id];this.adapter.log.info("Server has "+Object.values(this.clients).length+" connected clients.");this.emit("CLIENT_LIST",Object.values(this.clients).map(e=>{let t={...e};delete t.adapter;delete t.socket;return t}))})});this.adapter.log.info("Server has "+Object.values(this.clients).length+" connected clients.");this.emit("CLIENT_NEW",t);this.emit("CLIENT_LIST",Object.values(this.clients).map(e=>{let t={...e};delete t.adapter;delete t.socket;return t}));this.send(t.id,"#client",t);this.send(t.id,"#version",this.adapter.version)},updateClient(c,e={}){e.connected=e.connected!==undefined?e.connected:true;const o={connected:{name:"Indicates client connection",role:"indicator.connected",type:"boolean",value:e.connected},ip:{name:"Client IP",role:"info.ip",type:"string",value:c.ip},id:{name:"Client ID",role:"text",type:"string",value:c.id},userAgent:{name:"Client User Agent",role:"text",type:"string",value:c.userAgent},userPlatform:{name:"Client Platform Information",role:"text",type:"json",value:c.userPlatform},userBrowser:{name:"Client Browser",role:"text",type:"string",value:c.userBrowser},lastSeen:{name:"Client Last Seen",role:"value.time",type:"number",value:Date.now()}};return Promise.allSettled([new Promise(e=>{this.adapter.setObjectNotExists("clients."+c.id,{type:"device",common:{name:c.id},native:{}},()=>{Promise.allSettled(Object.keys(o).map(l=>{return new Promise(s=>{const n="clients."+c.id+"."+l;const{role:e,type:t,value:i,initial:a,subscribe:r}=o[l];this.adapter.setObjectNotExists(n,{type:"state",common:{role:e,type:t,write:false},native:{}},(e,t)=>{if(t&&a||i!==undefined){this.adapter.setState(n,typeof i==="object"?JSON.stringify(i,null,3):i,true)}s()})})})).then(e)})}),new Promise(e=>{const t="clients."+c.id+".setTabId";this.adapter.setObjectNotExists(t,{type:"state",common:{role:"text",type:"string",write:true},native:{}},()=>e())})])},handleClientEvent(e,t){try{const s=JSON.parse(t);if(s.event==="message"){const{messageId:n,index:i,length:a,chunk:r}=s;this.clientsMessages[n]=this.clientsMessages[n]||{};this.clientsMessages[n][i]=r;if(Object.keys(this.clientsMessages[n]).length===a){this.emit("message",e,Object.values(this.clientsMessages[n]).join(""));delete this.clientsMessages[n]}}}catch(e){this.adapter.log.warn("Warning listing for messages from clients: "+e.message);this.adapter.log.debug("event: "+t)}},handleClientMessage(n){try{const i=JSON.parse(n);let{messageId:e,command:t,params:s=[]}=i;s=Array.isArray(s)?s:[s];return{command:t,messageId:e,params:s}}catch(e){this.adapter.log.warn("Warning handling message: "+e.message+" (see debug-log for details)");this.adapter.log.debug(n)}return null},handleClientCommand(t,s,n,e){if(s&&this[s]){cb=e=>this.send(t,s,e,n);this[s]({cb:cb,command:s,clientId:t,messageId:n},...e)}else{this.adapter.log.warn("Unknown command: "+s+" (from client "+t+").")}},broadcast(e,t,s=this.clients){for(const n in s){this.send(n,e,t)}},send(n,i,e={},a=_uuid(),r="message"){if(e.err){e.err={name:e.err.name||e.err,message:e.err.message,stack:e.err.stack}}else if(e.err===null){e.err="_isNull"}const t=JSON.stringify(e).match(/.{1,100000}/g);const l=t.length;t.forEach((e,t)=>{const s={event:r,clientId:n,messageId:a,action:i,index:t,length:l,chunk:e};this.clients[n]&&this.clients[n].send(s,n)})}};