(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62602cd8"],{"1b57":function(e,t,n){"use strict";n("2777")},2777:function(e,t,n){},da23:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),c={class:"proxy-wrap"},o={class:"title t-c"},a={class:"form"},l={class:"w-100"},u={class:"w-100"},d=Object(r["createTextVNode"])("确 定"),i={class:"w-100"};function f(e,t,n,f,b,s){var m=Object(r["resolveComponent"])("el-alert"),O=Object(r["resolveComponent"])("el-input"),j=Object(r["resolveComponent"])("el-form-item"),p=Object(r["resolveComponent"])("el-col"),w=Object(r["resolveComponent"])("el-option"),V=Object(r["resolveComponent"])("el-select"),N=Object(r["resolveComponent"])("el-row"),h=Object(r["resolveComponent"])("el-checkbox"),x=Object(r["resolveComponent"])("el-tooltip"),C=Object(r["resolveComponent"])("el-button"),v=Object(r["resolveComponent"])("el-form");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createElementVNode"])("h3",o,Object(r["toDisplayString"])(e.$route.meta.name),1),Object(r["createVNode"])(m,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"http1.1代理，如果服务端开启，则也可以代理到服务端"}),Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(v,{ref:"formDom",model:f.state.form,rules:f.state.rules,"label-width":"80px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(N,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{label:"监听端口",prop:"Port"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{modelValue:f.state.form.Port,"onUpdate:modelValue":t[0]||(t[0]=function(e){return f.state.form.Port=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{label:"通信通道",prop:"TunnelType"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{modelValue:f.state.form.TunnelType,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.state.form.TunnelType=e}),placeholder:"选择类型"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(f.shareData.tunnelTypes,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(w,{key:t,label:e,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{label:"目标端",prop:"Name"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(V,{modelValue:f.state.form.Name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.state.form.Name=e}),placeholder:"选择目标"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(f.targets,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(w,{key:t,label:e.label,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(j,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(N,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{"label-width":"0",prop:"Listening"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:f.state.form.Listening,"onUpdate:modelValue":t[3]||(t[3]=function(e){return f.state.form.Listening=e}),label:"开启端口监听"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{"label-width":"0",prop:"IsPac"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{class:"box-item",effect:"dark",content:"勾选则设置系统代理，不勾选则需要自己设置",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:f.state.form.IsPac,"onUpdate:modelValue":t[4]||(t[4]=function(e){return f.state.form.IsPac=e}),label:"设置系统代理"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{"label-width":"0",prop:"IsCustomPac"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{class:"box-item",effect:"dark",content:"自定义pac还是使用预制的pac规则",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h,{modelValue:f.state.form.IsCustomPac,"onUpdate:modelValue":t[5]||(t[5]=function(e){return f.state.form.IsCustomPac=e}),label:"自定义pac"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(p,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,{"label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,{type:"primary",loading:f.state.loading,onClick:f.handleSubmit},{default:Object(r["withCtx"])((function(){return[d]})),_:1},8,["loading","onClick"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(j,{"label-width":"0",class:"hidden-xs-only"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(O,{modelValue:f.state.form.Pac,"onUpdate:modelValue":t[6]||(t[6]=function(e){return f.state.form.Pac=e}),rows:22,type:"textarea",placeholder:"写pac内容",resize:"none"},null,8,["modelValue"])])]})),_:1})]})),_:1},8,["model","rules"])])])}n("d3b7"),n("25f0"),n("99af"),n("d81d"),n("a9e3"),n("e9c4");var b=n("a1e9"),s=n("f8aa"),m=n("5c40"),O=n("3ef4"),j=n("3fd2"),p=n("8286"),w={setup:function(){var e=Object(j["a"])(),t=Object(p["a"])(),n=function(){Object(s["e"])().then((function(e){var t=e[0]||{ID:0,Port:5412,ForwardType:2,TunnelType:"8",AliveType:2,Name:"",Listening:!1,Pac:"",IsPac:!1,IsCustomPac:!1};o.form.ID=t.ID,o.form.Port=t.Port,o.form.TunnelType=t.TunnelType.toString(),o.form.AliveType=t.AliveType,o.form.Name=t.Name,o.form.Listening=t.Listening,o.form.Pac=t.Pac,o.form.IsPac=t.IsPac,o.form.IsCustomPac=t.IsCustomPac,r()}))},r=function(){Object(s["f"])().then((function(e){o.form.Pac=e}))};Object(m["rb"])((function(){n()}));var c=Object(b["c"])((function(){return[{Name:"",label:"服务器"}].concat(e.clients.map((function(e){return{Name:e.Name,label:e.Name}})))})),o=Object(b["p"])({loading:!1,pac:"",form:{ID:0,Port:5412,ForwardType:2,TunnelType:"8",AliveType:2,Name:"",Listening:!1,Pac:"",IsPac:!1,IsCustomPac:!1},rules:{Port:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}]}}),a=Object(b["r"])(null),l=function(){a.value.validate((function(e){if(!e)return!1;o.loading=!0;var t=JSON.parse(JSON.stringify(o.form));t.Port=Number(t.Port),t.TunnelType=Number(t.TunnelType),console.log(t),Object(s["c"])(t).then((function(){o.loading=!1,O["a"].success("操作成功！"),n()})).catch((function(e){o.loading=!1}))}))};return{targets:c,shareData:t,state:o,formDom:a,handleSubmit:l}}},V=(n("1b57"),n("6b0d")),N=n.n(V);const h=N()(w,[["render",f],["__scopeId","data-v-7cd03876"]]);t["default"]=h},f8aa:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"l",(function(){return l})),n.d(t,"n",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"j",(function(){return i})),n.d(t,"b",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return O})),n.d(t,"m",(function(){return j})),n.d(t,"o",(function(){return p})),n.d(t,"k",(function(){return w}));n("e9c4");var r=n("97af"),c=function(){return Object(r["c"])("tcpforward/list")},o=function(){return Object(r["c"])("tcpforward/listproxy")},a=function(){return Object(r["c"])("tcpforward/GetPac")},l=function(e){return Object(r["c"])("tcpforward/start",{ID:e})},u=function(e){return Object(r["c"])("tcpforward/stop",{ID:e})},d=function(e){return Object(r["c"])("tcpforward/AddListen",{ID:e.ID,Content:JSON.stringify(e)})},i=function(e){return Object(r["c"])("tcpforward/RemoveListen",{ID:e})},f=function(e){return Object(r["c"])("tcpforward/AddForward",{ID:e.Forward.ID,Content:JSON.stringify(e)})},b=function(e,t){return Object(r["c"])("tcpforward/RemoveForward",{ID:t,Content:JSON.stringify({ListenID:e,ForwardID:t})})},s=function(){return Object(r["c"])("tcpforward/ServerPorts")},m=function(){return Object(r["c"])("tcpforward/ServerForwards")},O=function(e){return Object(r["c"])("tcpforward/AddServerForward",e)},j=function(e){return Object(r["c"])("tcpforward/StartServerForward",e)},p=function(e){return Object(r["c"])("tcpforward/StopServerForward",e)},w=function(e){return Object(r["c"])("tcpforward/RemoveServerForward",e)}}}]);