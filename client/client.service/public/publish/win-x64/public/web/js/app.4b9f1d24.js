(function(e){function t(t){for(var c,r,u=t[0],i=t[1],l=t[2],f=0,s=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(c=!1)}c&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-122ba1c6":"b97770cb","chunk-2d0cba84":"2e0366e5","chunk-2d22d091":"e7deff7f","chunk-39ef0701":"0f269d94","chunk-3fd9853c":"68d48978","chunk-17b68636":"9724b962","chunk-246ec2e0":"aa473a9e","chunk-7e83f04b":"64a74dee","chunk-51d34d96":"252fc6dc","chunk-6da01461":"2c2f552f","chunk-a98f34f0":"19f7e774","chunk-cd3c6bf0":"b29262aa"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-122ba1c6":1,"chunk-39ef0701":1,"chunk-3fd9853c":1,"chunk-17b68636":1,"chunk-246ec2e0":1,"chunk-7e83f04b":1,"chunk-51d34d96":1,"chunk-6da01461":1,"chunk-a98f34f0":1,"chunk-cd3c6bf0":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-122ba1c6":"58fb9475","chunk-2d0cba84":"31d6cfe0","chunk-2d22d091":"31d6cfe0","chunk-39ef0701":"2920375a","chunk-3fd9853c":"9711b394","chunk-17b68636":"609837d0","chunk-246ec2e0":"de3a3949","chunk-7e83f04b":"b601b57e","chunk-51d34d96":"9f3829e0","chunk-6da01461":"2fe4970b","chunk-a98f34f0":"2eadad7b","chunk-cd3c6bf0":"699c67a7"}[e]+".css",o=i.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===c||f===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===c||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var a=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",s.name="ChunkLoadError",s.type=c,s.request=r,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3fd2":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f}));n("a4d3"),n("e01a"),n("d3b7"),n("159b"),n("a9e3");var c=n("7a23"),r=n("97af"),o=n("c46c"),a=["未连接","已连接-打洞","已连接-中继"],u=["color:#333;","color:#148727;font-weight:bold;","color:#148727;font-weight:bold;"],i=Symbol(),l=function(){var e=Object(c["reactive"])({clients:[]});Object(c["provide"])(i,e),setInterval((function(){r["g"].connected?Object(o["a"])().then((function(t){t.forEach((function(e){e.udpConnectType=e.UdpConnected?e.UdpConnectType:Number(e.UdpConnected),e.tcpConnectType=e.TcpConnected?e.TcpConnectType:Number(e.TcpConnected),e.udpConnectTypeStr=a[e.udpConnectType],e.udpConnectTypeStyle=u[e.udpConnectType],e.tcpConnectTypeStr=a[e.tcpConnectType],e.tcpConnectTypeStyle=u[e.tcpConnectType]})),e.clients=t})):e.clients=[]}),1e3)},f=function(){return Object(c["inject"])(i)}},"4dce":function(e,t,n){n("d3b7"),n("159b"),n("ddb0");var c=n("7f95");c.keys().forEach((function(e){"./index.js"!=e&&c(e).default}))},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var c=n("7a23"),r=function(e){return Object(c["pushScopeId"])("data-v-57549f66"),e=e(),Object(c["popScopeId"])(),e},o={class:"body absolute"},a={class:"wrap flex flex-column flex-nowrap h-100"},u={class:"menu"},i={class:"content flex-1 relative scrollbar-10"},l=r((function(){return Object(c["createElementVNode"])("div",{class:"copyright"}," @snltty ",-1)}));function f(e,t,n,r,f,s){var d=Object(c["resolveComponent"])("Menu"),p=Object(c["resolveComponent"])("router-view"),b=Object(c["resolveComponent"])("auth-wrap"),m=Object(c["resolveComponent"])("el-config-provider");return Object(c["openBlock"])(),Object(c["createBlock"])(m,{locale:r.locale,size:"large"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(b,null,{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("div",u,[Object(c["createVNode"])(d)]),Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(p)]),l])])]})),_:1})]})),_:1},8,["locale"])}var s=n("9b19"),d=n.n(s),p=function(e){return Object(c["pushScopeId"])("data-v-6a0fb6da"),e=e(),Object(c["popScopeId"])(),e},b={class:"menu-wrap flex"},m=p((function(){return Object(c["createElementVNode"])("div",{class:"logo"},[Object(c["createElementVNode"])("img",{src:d.a,alt:""})],-1)})),h={class:"navs flex-1"},v=Object(c["createTextVNode"])("首页"),j=Object(c["createTextVNode"])("注册服务 "),O={class:"el-dropdown-link"},g=p((function(){return Object(c["createElementVNode"])("span",null,"客户端应用",-1)})),C={class:"el-dropdown-link"},k=p((function(){return Object(c["createElementVNode"])("span",null,"服务端应用",-1)})),y={class:"meta"},w=p((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-refresh"},null,-1)}));function S(e,t,n,r,o,a){var u=Object(c["resolveComponent"])("router-link"),i=Object(c["resolveComponent"])("ArrowDown"),l=Object(c["resolveComponent"])("el-icon"),f=Object(c["resolveComponent"])("el-dropdown-item"),s=Object(c["resolveComponent"])("auth-item"),d=Object(c["resolveComponent"])("el-dropdown-menu"),p=Object(c["resolveComponent"])("el-dropdown");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",b,[m,Object(c["createElementVNode"])("div",h,[Object(c["createVNode"])(u,{to:{name:"Home"}},{default:Object(c["withCtx"])((function(){return[v]})),_:1}),Object(c["createVNode"])(u,{to:{name:"Register"}},{default:Object(c["withCtx"])((function(){return[j,Object(c["createElementVNode"])("i",{class:Object(c["normalizeClass"])(["el-icon-circle-check",{active:r.registerState.LocalInfo.TcpConnected}])},null,2)]})),_:1}),Object(c["createVNode"])(p,{size:"small"},{dropdown:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,null,{default:Object(c["withCtx"])((function(){return[r.websocketState.connected?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(r.servicesMenus,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:t,name:e.service},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{to:{name:e.name}},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.text),1)]})),_:2},1032,["to"])]})),_:2},1024)]})),_:2},1032,["name"])})),128)):(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:1},Object(c["renderList"])(r.servicesMenus,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(f,{key:t},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{to:{name:e.name},class:"disabled"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.text),1)]})),_:2},1032,["to"])]})),_:2},1024)})),128))]})),_:1})]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",O,[g,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(r.serviceRouteName),1),Object(c["createVNode"])(l,{size:"30"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i)]})),_:1})])]})),_:1}),Object(c["createVNode"])(p,{size:"small"},{dropdown:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,null,{default:Object(c["withCtx"])((function(){return[r.websocketState.connected?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(r.serverMenus,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:t,name:e.service},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(f,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{to:{name:e.name}},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.text),1)]})),_:2},1032,["to"])]})),_:2},1024)]})),_:2},1032,["name"])})),128)):(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:1},Object(c["renderList"])(r.serverMenus,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(f,{key:t},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(u,{to:{name:e.name},class:"disabled"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.text),1)]})),_:2},1032,["to"])]})),_:2},1024)})),128))]})),_:1})]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",C,[k,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(r.serverRouteName),1),Object(c["createVNode"])(l,{size:"30"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(i)]})),_:1})])]})),_:1})]),Object(c["createElementVNode"])("div",y,[Object(c["createElementVNode"])("a",{href:"javascript:;",onClick:t[0]||(t[0]=function(){return r.editWsUrl&&r.editWsUrl.apply(r,arguments)}),title:"点击修改",class:Object(c["normalizeClass"])({active:r.websocketState.connected})},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(r.wsUrl)+" "+Object(c["toDisplayString"])(r.connectStr),1),w],2)])])}n("a9e3"),n("d81d"),n("4de4"),n("d3b7");var x=n("a1e9"),I=n("5c40"),N=n("6c02"),T=n("9709"),E=(n("a4d3"),n("e01a"),n("97af")),V=Symbol(),P=function(){var e=Object(c["reactive"])({connected:!1});Object(c["provide"])(V,e),Object(E["e"])((function(t){e.connected=t}))},B=function(){return Object(c["inject"])(V)};function L(e,t,n,r,o,a){var u=Object(c["resolveComponent"])("el-color-picker");return Object(c["openBlock"])(),Object(c["createBlock"])(u,{modelValue:e.color,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.color=t}),size:"small",style:{"margin-left":"1rem"}},null,8,["modelValue"])}var M=n("5530"),R=n("1da1"),_=(n("96cf"),n("159b"),n("ac1f"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("fb6a"),n("a15b"),n("99af"),n("b680"),n("00b4"),n("2167").version),A="#409EFF",F={setup:function(){var e=Object(x["p"])({chalk:"",color:"#409EFF",predefineColors:["#409EFF","#1890ff","#304156","#212121","#11a983","#13c2c2","#6959CD","#f5222d"]}),t=function(e,t,n){var c=e;return t.forEach((function(e,t){c=c.replace(new RegExp(e,"ig"),n[t])})),c},n=function(t,n){return new Promise((function(c){var r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&200===r.status&&(e[n]=r.responseText.replace(/@font-face{[^}]+}/,""),c())},r.open("GET",t),r.send()}))},c=function(e){for(var t=function(e,t){var n=parseInt(e.slice(0,2),16),c=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16);return 0===t?[n,c,r].join(","):(n+=Math.round(t*(255-n)),c+=Math.round(t*(255-c)),r+=Math.round(t*(255-r)),n=n.toString(16),c=c.toString(16),r=r.toString(16),"#".concat(n).concat(c).concat(r))},n=function(e,t){var n=parseInt(e.slice(0,2),16),c=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16);return n=Math.round((1-t)*n),c=Math.round((1-t)*c),r=Math.round((1-t)*r),n=n.toString(16),c=c.toString(16),r=r.toString(16),"#".concat(n).concat(c).concat(r)},c=[e],r=0;r<=9;r++)c.push(t(e,Number((r/10).toFixed(2))));return c.push(n(e,.1)),c},r=function(e){localStorage.setItem("ui-theme-color",e);var t=":root{\n                --main-color:#".concat(e,";\n                --header-bg-color:#").concat(e,";\n            }"),n=document.getElementById("theme-style");n||(n=document.createElement("style"),n.id="theme-style",document.body.appendChild(n)),n.innerHTML=t},o=function(){var o=Object(R["a"])(regeneratorRuntime.mark((function o(a){var u,i,l,f,s,d,p;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a||(a=localStorage.getItem("ui-theme-color")||"0A8463","undefined"!=a&&(e.color="#".concat(a))),a&&"undefined"!=a){o.next=3;break}return o.abrupt("return",!1);case 3:if(u=e.chalk?e.color:A,"string"===typeof a){o.next=6;break}return o.abrupt("return");case 6:if(i=c(a.replace("#","")),l=c(u.replace("#","")),f=function(n,r){return function(){var o=c(A.replace("#","")),a=t(e[n],o,i),u=document.getElementById(r);u||(u=document.createElement("style"),u.setAttribute("id",r),document.head.appendChild(u)),u.innerText=a}},e.chalk){o.next=13;break}return s="https://unpkg.com/element-plus@".concat(_,"/lib/theme-chalk/index.css"),o.next=13,n(s,"chalk");case 13:d=f("chalk","chalk-style"),d(),p=[].slice.call(document.querySelectorAll("style")).filter((function(e){var t=e.innerText;return new RegExp(u,"i").test(t)&&!/Chalk Variables/.test(t)})),p.forEach((function(e){var n=e.innerText;"string"===typeof n&&(e.innerText=t(n,l,i))})),r(i[0]);case 18:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}();return o(),Object(I["nc"])((function(){return e.color}),function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(M["a"])({},Object(x["z"])(e))}},U=n("6b0d"),D=n.n(U);const z=D()(F,[["render",L]]);var H=z,q=n("f9ba"),W=n("c9a1"),G={components:{Theme:H,AuthItem:q["a"]},setup:function(){var e=Object(T["a"])(),t=B(),n=Object(x["c"])((function(){return"".concat(["未连接","已连接"][Number(t.connected)])})),c=Object(N["d"])(),r=Object(N["c"])(),o=Object(x["c"])((function(){return r.matched.length>0&&"Services"==r.matched[0].name?"-".concat(r.meta.name):""})),a=c.options.routes.filter((function(e){return"Services"==e.name}))[0].children.map((function(e){return{name:e.name,text:e.meta.name,service:e.meta.service}})),u=Object(x["c"])((function(){return r.matched.length>0&&"Server"==r.matched[0].name?"-".concat(r.meta.name):""})),i=c.options.routes.filter((function(e){return"Server"==e.name}))[0].children.map((function(e){return{name:e.name,text:e.meta.name,service:e.meta.service}})),l=function(){W["a"].prompt("修改连接地址","修改连接地址",{inputValue:f.value}).then((function(e){var t=e.value;localStorage.setItem("wsurl",t),f.value=t,Object(E["a"])(f.value)}))},f=Object(x["r"])(localStorage.getItem("wsurl")||"ws://127.0.0.1:59411");return Object(I["rb"])((function(){Object(E["a"])(f.value)})),{registerState:e,serviceRouteName:o,servicesMenus:a,serverRouteName:u,serverMenus:i,websocketState:t,connectStr:n,wsUrl:f,editWsUrl:l}}};n("9488");const J=D()(G,[["render",S],["__scopeId","data-v-6a0fb6da"]]);var $=J,K=n("3fd2"),X=n("8286"),Y=n("b6c4"),Q=n("3ef0"),Z=n.n(Q),ee={components:{Menu:$,ElConfigProvider:Y["a"]},setup:function(){return Object(T["b"])(),P(),Object(K["b"])(),Object(X["b"])(),{locale:Z.a}}};n("efec");const te=D()(ee,[["render",f],["__scopeId","data-v-57549f66"]]);var ne=te,ce=(n("3ca3"),n("ddb0"),n("ae9f")),re=n("df7c"),oe=[];ce.keys().forEach((function(e,t){var n=ce(e).default,r="about-".concat(t);oe.push({path:"/".concat(r,".html"),name:r,meta:{name:re.basename(e,re.extname(e))},component:Object(c["defineComponent"])({name:r,render:function(){return Object(c["createVNode"])(Object(c["resolveComponent"])("v-md-preview"),{text:n},null)}})})}));var ae=[{path:"/",name:"Home",component:function(){return n.e("chunk-6da01461").then(n.bind(null,"9553"))}},{path:"/register.html",name:"Register",component:function(){return n.e("chunk-a98f34f0").then(n.bind(null,"73cf"))}},{path:"/services.html",name:"Services",component:function(){return n.e("chunk-2d22d091").then(n.bind(null,"f67b"))},redirect:{name:"ServiceConfigure"},children:[{path:"/service-tcp-forward.html",name:"ServiceTcpForward",component:function(){return Promise.all([n.e("chunk-3fd9853c"),n.e("chunk-246ec2e0")]).then(n.bind(null,"2bed"))},meta:{name:"TCP转发",service:"TcpForwardClientService"}},{path:"/service-http-proxy.html",name:"ServiceHttpProxy",component:function(){return n.e("chunk-cd3c6bf0").then(n.bind(null,"da23"))},meta:{name:"http代理",service:"TcpForwardClientService"}},{path:"/service-socks5.html",name:"ServiceSocks5",component:function(){return n.e("chunk-51d34d96").then(n.bind(null,"3476"))},meta:{name:"socks5代理",service:"Socks5ClientService"}},{path:"/service-ftp.html",name:"ServiceFtp",component:function(){return Promise.all([n.e("chunk-3fd9853c"),n.e("chunk-7e83f04b")]).then(n.bind(null,"a103"))},meta:{name:"文件服务",service:"FtpClientService"}},{path:"/webrtc.html",name:"Webrtc",component:function(){return n.e("chunk-39ef0701").then(n.bind(null,"89e5"))},meta:{name:"webrtc",service:"WebRTCClientService"}},{path:"/service-logger.html",name:"ServiceLogger",component:function(){return Promise.all([n.e("chunk-3fd9853c"),n.e("chunk-17b68636")]).then(n.bind(null,"0789"))},meta:{name:"日志信息",service:"LoggerClientService"}}]},{path:"/server.html",name:"Server",component:function(){return n.e("chunk-2d0cba84").then(n.bind(null,"4b33"))},redirect:{name:"ServerTcpForward"},children:[{path:"/server-tcp-forward.html",name:"ServerTcpForward",component:function(){return n.e("chunk-122ba1c6").then(n.bind(null,"566f"))},meta:{name:"服务器代理TCP转发",service:"TcpForwardClientService"}}]}],ue=Object(N["a"])({history:Object(N["b"])(),routes:ae}),ie=ue;n("7d05"),n("4dce");function le(e,t,n,r,o,a){return Object(c["renderSlot"])(e.$slots,"default")}var fe=n("dd69"),se={setup:function(){var e=Object(x["r"])([]);Object(fe["b"])().then((function(t){e.value=t})),Object(I["Ab"])("btn-auth-services",e)}};const de=D()(se,[["render",le]]);var pe=de,be={install:function(e){e.component("AuthWrap",pe),e.component("AuthItem",q["a"])}},me=n("c3a1"),he=(n("7437"),n("76b2")),ve=n("8569"),je=n("7580"),Oe=n("f4d4"),ge=Object(c["createApp"])(ne);ge.use(be),ge.component(he["a"].name,he["a"]),ge.component(ve["a"].name,ve["a"]),ge.component(je["a"].name,je["a"]),ge.component(Oe["a"].name,Oe["a"]),ge.use(me["a"]).use(ie).mount("#app")},"57a7":function(e,t,n){},"71f5":function(e,t,n){"use strict";n.r(t),t["default"]='\x3c!--\r\n * @Author: snltty\r\n * @Date: 2021-09-11 22:51:06\r\n * @LastEditors: snltty\r\n * @LastEditTime: 2022-04-02 14:03:28\r\n * @version: v1.0.0\r\n * @Descripttion: 功能说明\r\n * @FilePath: \\client.service.web\\src\\views\\about\\use1.md\r\n--\x3e\r\n\r\n## p2p打洞tcp转发流程\r\n1. A、B打洞成功，生成**通道1**\r\n2. A监听**端口8000**接收连接和数据，配置转发信息 ***A 127.0.0.1:8000->B 127.0.0.1:80***\r\n3. 浏览器访问***127.0.0.1:8000***，A **端口8000**收到<font color="green"> **数据1** </font>，通过**通道1**将<font color="green"> **数据1** </font>发送给B\r\n4. B收到<font color="green"> **数据1** </font>，根据数据信息 连接B本地的***127.0.0.1:80***，将<font color="green"> **数据1** </font>发送给***127.0.0.1:80***\r\n5. B 接收***127.0.0.1:80***数据，收到<font color="green"> **数据2** </font>，将<font color="green"> **数据2** </font>通过**通道1**发送给A\r\n6. 至此，一个请求流程走完，整体表现为，浏览器访问***A端127.0.0.1:8000***，得到***B端127.0.0.1:80***的数据\r\n\r\n<img src="./imgs/tcp-forward-p2p.png" width="100%">\r\n\r\n## 服务端代理tcp转发流程\r\n1. 服务端监听**端口8000**，接收连接和数据（短链接则服务端主动监听某端口，因为可以获取host来判断应该将数据发送给谁，所以只需要有限的一个或者多个端口即可，长连接则不主动监听，等待客户端注册端口监听）\r\n2. A注册到服务器，生成**通道1**\r\n3. A注册转发，***服务器IP:8000->B 127.0.0.1:80*** 或者 ***已解析的域名:8000->127.0.0.1:80***\r\n3. 浏览器访问 ***服务器IP:8000*** 或者 ***已解析的域名:8000***，服务器**端口8000**收到连接，收到<font color="green"> **数据1** </font>\r\n4. 服务器通过 **通道1** 将<font color="green"> **数据1** </font>发送给 A\r\n4. A 收到<font color="green"> **数据1** </font>，根据数据信息连接A本地的***127.0.0.1:80***，将<font color="green"> **数据1** </font>发送给***127.0.0.1:80***\r\n5. A 接收***127.0.0.1:80***数据，收到<font color="green"> **数据2** </font>，将<font color="green"> **数据2** </font>通过**通道1**发送给服务器\r\n6. 至此，一个请求流程走完，整体表现为，浏览器访问***服务器IP:8000***，得到***A端127.0.0.1:80***的数据\r\n\r\n<img src="./imgs/tcp-forward-server.png" width="100%">\r\n'},"781b":function(e,t,n){n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},Date.prototype.toJSON=function(){return this.format("yyyy-MM-dd hh:mm:ss")}},"7d05":function(e,t,n){},"7f95":function(e,t,n){var c={"./date.js":"781b","./index.js":"4dce","./number.js":"a3db"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=o,e.exports=r,r.id="7f95"},8286:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7");var c=n("7a23"),r=Symbol(),o=function(){var e=Object(c["reactive"])({aliveTypes:{1:"长连接",2:"短链接"},tunnelTypes:{2:"只tcp",4:"只udp",8:"优先tcp",16:"优先udp"}});Object(c["provide"])(r,e)},a=function(){return Object(c["inject"])(r)}},9488:function(e,t,n){"use strict";n("ff8e")},9709:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7");var c=n("7a23"),r=n("97af"),o=n("ea39"),a=Symbol(),u=function(){var e=Object(c["reactive"])({ClientConfig:{GroupId:"",Name:"",AutoReg:!1,AutoRegTimes:10,UseMac:!1,Encode:!1},ServerConfig:{Ip:"",UdpPort:0,TcpPort:0,Encode:!1},LocalInfo:{RouteLevel:0,Mac:"",Port:0,TcpPort:0,IsConnecting:!1,UdpConnected:!1,TcpConnected:!1,LocalIp:""},RemoteInfo:{Ip:"",UdpPort:0,TcpPort:0,ConnectId:0}});Object(c["provide"])(a,e),setInterval((function(){r["g"].connected?Object(o["a"])().then((function(t){e.LocalInfo.UdpConnected=t.LocalInfo.UdpConnected,e.LocalInfo.TcpConnected=t.LocalInfo.TcpConnected,e.LocalInfo.UdpPort=t.LocalInfo.UdpPort,e.LocalInfo.TcpPort=t.LocalInfo.TcpPort,e.LocalInfo.Mac=t.LocalInfo.Mac,e.LocalInfo.LocalIp=t.LocalInfo.LocalIp,e.RemoteInfo.UdpPort=t.RemoteInfo.UdpPort,e.RemoteInfo.TcpPort=t.RemoteInfo.TcpPort,e.RemoteInfo.Ip=t.RemoteInfo.Ip,e.RemoteInfo.ConnectId=t.RemoteInfo.ConnectId,e.LocalInfo.IsConnecting=t.LocalInfo.IsConnecting,e.LocalInfo.RouteLevel=t.LocalInfo.RouteLevel,e.ClientConfig.GroupId||(e.ClientConfig.GroupId=t.ClientConfig.GroupId),e.ServerConfig.Ip||(e.ServerConfig.Ip=t.ServerConfig.Ip,e.ServerConfig.UdpPort=t.ServerConfig.UdpPort,e.ServerConfig.TcpPort=t.ServerConfig.TcpPort)})):(e.UdpConnected=!1,e.TcpConnected=!1)}),300)},i=function(){return Object(c["inject"])(a)}},"97af":function(e,t,n){"use strict";n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O})),n.d(t,"f",(function(){return g}));n("a434"),n("a4d3"),n("e01a"),n("d3b7"),n("e9c4");var c=n("3ef4"),r=0,o=null,a="",u={},i=[],l={connected:!1},f=function e(){i.length>0&&l.connected&&o.send(i.shift()),setTimeout(e,1e3/60)};f();var s={subs:{},add:function(e,t){"function"==typeof t&&(this.subs[e]||(this.subs[e]=[]),this.subs[e].push(t))},remove:function(e,t){for(var n=this.subs[e]||[],c=n.length-1;c>=0;c--)n[c]==t&&n.splice(c,1)},push:function(e,t){for(var n=this.subs[e]||[],c=n.length-1;c>=0;c--)n[c](t)}},d=Symbol(),p=function(e){s.add(d,e)},b=function(){l.connected=!0,s.push(d,l.connected)},m=function(e){l.connected=!1,s.push(d,l.connected),v()},h=function(e){var t=JSON.parse(e.data),n=u[t.RequestId];n?(0==t.Code?n.resolve(t.Content):-1==t.Code?(n.reject(t.Content),n.errHandle||c["a"].error(t.Content)):s.push(t.Path,t.Content),delete u[t.RequestId]):s.push(t.Path,t.Content)},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;null!=o&&o.close(),a=e,o=new WebSocket(a),o.onopen=b,o.onclose=m,o.onmessage=h},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise((function(a,f){var s=++r;try{u[s]={resolve:a,reject:f,errHandle:n};var d=JSON.stringify({Path:e,RequestId:s,Content:"string"==typeof t?t:JSON.stringify(t)});l.connected?o.send(d):i.push(d)}catch(p){f("网络错误~"),c["a"].error("网络错误~"),delete u[s]}}))},O=function(e,t){s.add(e,t)},g=function(e,t){s.remove(e,t)}},"9b19":function(e,t,n){e.exports=n.p+"img/logo.e25f268a.svg"},a3db:function(e,t,n){n("a9e3"),n("b680"),Number.prototype.sizeFormat=function(){var e=["B","KB","MB","GB","TB"],t=e[0],n=this;while((t=e.shift())&&n>1024)n/=1024;return"B"==t?[n,t]:[n.toFixed(2),t]};var c=function(e){return e<10?"0"+e:e};Number.prototype.timeFormat=function(){var e=this;return[c(Math.floor(e/60/60/24)),c(Math.floor(e/60/60%24)),c(Math.floor(e/60%60)),c(Math.floor(e%60))]}},ae9f:function(e,t,n){var c={"./tcp转发大概原理流程.md":"71f5"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=o,e.exports=r,r.id="ae9f"},c46c:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return u}));var c=n("97af"),r=function(){return Object(c["c"])("clients/list")},o=function(e){return Object(c["c"])("clients/connect",{id:e})},a=function(e){return Object(c["c"])("clients/connectreverse",{id:e})},u=function(e){return Object(c["c"])("clients/Reset",{id:e})}},dd69:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));var c=n("97af"),r=function(e){return Object(c["c"])("configure/configure",{ClassName:e})},o=function(e,t){return Object(c["c"])("configure/save",{ClassName:e,Content:t})},a=function(){return Object(c["c"])("configure/services")}},ea39:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var c=n("97af"),r=function(){return Object(c["c"])("register/start")},o=function(){return Object(c["c"])("register/info")}},efec:function(e,t,n){"use strict";n("57a7")},f9ba:function(e,t,n){"use strict";n("b0c0");var c=n("7a23");function r(e,t,n,r,o,a){return r.services.indexOf(n.name)>=0?Object(c["renderSlot"])(e.$slots,"default",{key:0}):Object(c["createCommentVNode"])("",!0)}var o={props:["name"],setup:function(){var e=Object(c["inject"])("btn-auth-services");return{services:e}}},a=n("6b0d"),u=n.n(a);const i=u()(o,[["render",r]]);t["a"]=i},ff8e:function(e,t,n){}});