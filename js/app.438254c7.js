(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"021f":function(e,t,a){},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Convert")],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("b-field",[a("b-upload",{staticClass:"upload-field",attrs:{"drag-drop":"",input:e.fileChange},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"content has-text-centered"},[a("p",[a("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),a("p",[e._v("Drop your files here or click to upload")])])])])],1),e._.isNull(e.file)?e._e():a("div",{staticClass:"card result-card"},[e._m(0),a("footer",{staticClass:"card-footer"},[a("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(t){return e.downloadFile("postman")}}},[a("b-icon",{attrs:{icon:"download"}}),e._v("Postman")],1),a("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[a("b-icon",{attrs:{icon:"download"}}),e._v("Insomnia")],1)])])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[e._v(" Nice! We have successfully converted your file ")])])}],c=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("2ef0")),l=a.n(c),d=(a("a4d3"),a("e01a"),a("b0c0"),a("4fad"),a("3835")),u=a("b85c"),p=a("d4ec"),f=a("bee2"),v=a("ade3"),m=a("11c1"),h=a("94be"),b=a.n(h),y=function(){function e(t){Object(p["a"])(this,e),Object(v["a"])(this,"workspace",{}),Object(v["a"])(this,"folders",{}),Object(v["a"])(this,"requests",{}),Object(v["a"])(this,"environments",{}),Object(v["a"])(this,"postman_folders",[]),Object(v["a"])(this,"postman_requests",[]),Object(v["a"])(this,"postman_environments",[]);var a,n=JSON.parse(t),r=Object(u["a"])(n["resources"]);try{for(r.s();!(a=r.n()).done;){var o=a.value;"workspace"==o["_type"]&&(this.workspace={name:o["name"],description:o["description"],_id:o["_id"],id:Object(m["v4"])()}),"request_group"==o["_type"]&&(this.folders[o["_id"]]={name:o["name"],description:o["description"],parent_id:o["parentId"],id:Object(m["v4"])()}),"request"==o["_type"]&&(this.requests[o["_id"]]={name:o["name"],url:o["url"],method:o["method"],headers:o["headers"],body:o["body"],parameters:o["parameters"],parent_id:o["parentId"],id:Object(m["v4"])()}),"environment"==o["_type"]&&(this.environments[o["_id"]]={name:o["name"],data:o["data"],parent_id:o["parentId"],id:Object(m["v4"])()})}}catch(s){r.e(s)}finally{r.f()}this.parseRequests(),this.parseEnvironments()}return Object(f["a"])(e,[{key:"parseRequests",value:function(){for(var e={},t=null,a=null,n=0,r=Object.entries(this.folders);n<r.length;n++){var o=Object(d["a"])(r[n],2),s=(o[0],o[1]);t=this.folders[s["parent_id"]]?this.folders[s["parent_id"]]["id"]:null;var i={id:s["id"],name:s["name"],description:s["description"],folder:t};this.postman_folders.push(i),t&&(l.a.isEmpty(e[t])?e[t]=[s["id"]]:e[t].push(s["id"]))}for(var c={},p=0,f=Object.entries(this.requests);p<f.length;p++){var v=Object(d["a"])(f[p],2),m=(v[0],v[1]);t=this.folders[m["parent_id"]]?this.folders[m["parent_id"]]["id"]:null;var h,b=[],y=Object(u["a"])(m["headers"]);try{for(y.s();!(h=y.n()).done;){var _=h.value;b.push({key:_["name"],value:_["value"],type:"text",enabled:!0})}}catch(F){y.e(F)}finally{y.f()}var j=[];if("multipart/form-data"==m["body"]["mimeType"]){k="params";var O,w=Object(u["a"])(m["body"]["params"]);try{for(w.s();!(O=w.n()).done;){var g=O.value;j.push({key:g["name"],value:g["value"],enabled:!g["disabled"]})}}catch(F){w.e(F)}finally{w.f()}}if("application/json"==m["body"]["mimeType"])var k="raw",C={raw:{language:"json"}},x=m["body"]["text"];var q,P=[],E=Object(u["a"])(m["parameters"]);try{for(E.s();!(q=E.n()).done;){var I=q.value;P.push({key:I["name"],value:I["value"]})}}catch(F){E.e(F)}finally{E.f()}a={id:m["id"],name:m["name"],url:m["url"],method:m["method"],headerData:b,folder:t,data:j,dataMode:k,dataOptions:C,rawModeData:x,queryParams:P},this.postman_requests.push(a),t&&(l.a.isEmpty(c[t])?c[t]=[m["id"]]:c[t].push(m["id"]))}var M,S=Object(u["a"])(this.postman_folders);try{for(S.s();!(M=S.n()).done;){var T=M.value;T["folders_order"]=e[T["id"]]||[],T["order"]=c[T["id"]]||[]}}catch(F){S.e(F)}finally{S.f()}}},{key:"parseEnvironments",value:function(){for(var e=0,t=Object.entries(this.environments);e<t.length;e++){var a=Object(d["a"])(t[e],2),n=(a[0],a[1]),r=[];if(!l.a.isEmpty(n["data"])){for(var o=0,s=Object.entries(n["data"]);o<s.length;o++){var i=Object(d["a"])(s[o],2),c=i[0],u=i[1];r.push({key:c,value:u,enabled:!0})}this.postman_environments.push({id:n["id"],name:n["name"],values:r})}}}},{key:"toFile",value:function(){var e={version:1,collections:[],environments:this.postman_environments};e["collections"].push({id:this.workspace["id"],name:this.workspace["name"],description:this.workspace["description"],folders:this.postman_folders,requests:this.postman_requests});var t=b()(e,null,2,80);return console.log(e),t}}]),e}(),_=y,j={name:"Convert",data:function(){return{file:null}},computed:{_:function(){return l.a}},methods:{downloadFile:function(e){var t=new FileReader;t.onload=function(t){var a,n=t.target.result;"postman"==e&&(a=new _(n));var r=window.URL.createObjectURL(new Blob([a.toFile()],{type:"application/json"})),o=document.createElement("a");o.href=r,o.setAttribute("download","Backup.postman_dump.json"),o.click()},t.readAsText(this.file)}}},O=j,w=(a("6bfa"),a("2877")),g=Object(w["a"])(O,s,i,!1,null,"3bd9ab1a",null),k=g.exports,C={name:"App",components:{Convert:k}},x=C,q=(a("034f"),Object(w["a"])(x,r,o,!1,null,null,null)),P=q.exports,E=a("289d"),I=(a("5abe"),a("ecee")),M=a("c074"),S=a("ad3d");I["c"].add(M["g"],M["h"],M["n"],M["k"],M["j"],M["d"],M["c"],M["b"],M["a"],M["l"],M["m"],M["e"],M["f"],M["o"],M["i"]),n["a"].config.productionTip=!1,n["a"].component("vue-fontawesome",S["a"]),n["a"].use(E["a"],{defaultIconPack:"fas",defaultIconComponent:"vue-fontawesome"}),new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"6bfa":function(e,t,a){"use strict";var n=a("021f"),r=a.n(n);r.a},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.438254c7.js.map