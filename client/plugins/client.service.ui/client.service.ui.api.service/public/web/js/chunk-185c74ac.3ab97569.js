(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-185c74ac"],{"2bed":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),o=function(e){return Object(r["pushScopeId"])("data-v-28147e24"),e=e(),Object(r["popScopeId"])(),e},c={class:"forward-wrap"},a={class:"title t-c"},l={class:"inner"},u={class:"head flex"},d=Object(r["createTextVNode"])("增加转发监听"),i=Object(r["createTextVNode"])("刷新列表"),b=o((function(){return Object(r["createElementVNode"])("span",{class:"flex-1"},null,-1)})),f=Object(r["createTextVNode"])("配置插件"),s={class:"content"},O={class:"item"},j={class:"flex"},m={class:"flex-1 t-c"},p={class:"forwards"},w={class:"flex"},V=o((function(){return Object(r["createElementVNode"])("span",{class:"flex-1"},"访问",-1)})),h={class:"flex"},C=o((function(){return Object(r["createElementVNode"])("span",{class:"flex-1"},"目标",-1)})),N={class:"flex"},v=o((function(){return Object(r["createElementVNode"])("span",{class:"flex-1"},"通道",-1)})),g={class:"t-r"},T=Object(r["createTextVNode"])("删除"),x=Object(r["createTextVNode"])("编辑"),y={class:"btns t-r"},D=Object(r["createTextVNode"])("删除"),k=Object(r["createTextVNode"])("编辑"),I=Object(r["createTextVNode"])("增加转发");function _(e,t,n,o,_,S){var L=Object(r["resolveComponent"])("el-button"),A=Object(r["resolveComponent"])("ConfigureModal"),E=Object(r["resolveComponent"])("el-switch"),F=Object(r["resolveComponent"])("el-popconfirm"),B=Object(r["resolveComponent"])("el-collapse-item"),P=Object(r["resolveComponent"])("el-collapse"),U=Object(r["resolveComponent"])("el-col"),z=Object(r["resolveComponent"])("el-row"),J=Object(r["resolveComponent"])("el-alert"),R=Object(r["resolveComponent"])("AddForward"),M=Object(r["resolveComponent"])("AddListen");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createElementVNode"])("h3",a,Object(r["toDisplayString"])(e.$route.meta.name),1),Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(L,{type:"primary",size:"small",onClick:o.handleAddListen},{default:Object(r["withCtx"])((function(){return[d]})),_:1},8,["onClick"]),Object(r["createVNode"])(L,{size:"small",onClick:o.getData},{default:Object(r["withCtx"])((function(){return[i]})),_:1},8,["onClick"]),b,Object(r["createVNode"])(A,{className:"TcpForwardClientConfigure"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(L,{size:"small"},{default:Object(r["withCtx"])((function(){return[f]})),_:1})]})),_:1})]),Object(r["createElementVNode"])("div",s,[Object(r["createVNode"])(z,null,{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.list,(function(e,n){return Object(r["openBlock"])(),Object(r["createBlock"])(U,{key:n,xs:12,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("dl",null,[Object(r["createElementVNode"])("dt",j,[Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(o.shareData.aliveTypes[e.AliveType]),1),Object(r["createElementVNode"])("span",m,"0.0.0.0:"+Object(r["toDisplayString"])(e.Port),1),Object(r["createElementVNode"])("span",null,[Object(r["createVNode"])(E,{size:"small",onClick:t[0]||(t[0]=Object(r["withModifiers"])((function(){}),["stop"])),onChange:function(t){return o.onListeningChange(e)},modelValue:e.Listening,"onUpdate:modelValue":function(t){return e.Listening=t},style:{"margin-top":"-6px"}},null,8,["onChange","modelValue","onUpdate:modelValue"])])]),Object(r["createElementVNode"])("dd",null,Object(r["toDisplayString"])(e.Desc),1),Object(r["createElementVNode"])("dd",p,[Object(r["createVNode"])(P,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(B,{title:"转发列表"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.Forwards,(function(t,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:n},[Object(r["createElementVNode"])("p",w,[V,Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(t.SourceIp)+":"+Object(r["toDisplayString"])(e.Port),1)]),Object(r["createElementVNode"])("p",h,[C,Object(r["createElementVNode"])("span",null,"【"+Object(r["toDisplayString"])(t.Name)+"】"+Object(r["toDisplayString"])(t.TargetIp)+":"+Object(r["toDisplayString"])(t.TargetPort),1)]),Object(r["createElementVNode"])("p",N,[v,Object(r["createElementVNode"])("span",null,Object(r["toDisplayString"])(o.shareData.tunnelTypes[t.TunnelType]),1)]),Object(r["createElementVNode"])("p",g,[Object(r["createVNode"])(F,{title:"删除不可逆，是否确认",onConfirm:function(n){return o.handleRemoveForward(e,t)}},{reference:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(L,{plain:"",type:"danger",size:"small"},{default:Object(r["withCtx"])((function(){return[T]})),_:1})]})),_:2},1032,["onConfirm"]),Object(r["createVNode"])(L,{plain:"",size:"small",onClick:function(n){return o.handleEditForward(e,t)}},{default:Object(r["withCtx"])((function(){return[x]})),_:2},1032,["onClick"])])])})),128))])]})),_:2},1024)]})),_:2},1024)]),Object(r["createElementVNode"])("dd",y,[Object(r["createVNode"])(F,{title:"删除不可逆，是否确认",onConfirm:function(t){return o.handleRemoveListen(e)}},{reference:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(L,{plain:"",type:"danger",size:"small"},{default:Object(r["withCtx"])((function(){return[D]})),_:1})]})),_:2},1032,["onConfirm"]),Object(r["createVNode"])(L,{plain:"",type:"info",size:"small",onClick:function(t){return o.handleEditListen(e)}},{default:Object(r["withCtx"])((function(){return[k]})),_:2},1032,["onClick"]),2==e.AliveType||e.Forwards.length<1?(Object(r["openBlock"])(),Object(r["createBlock"])(L,{key:0,plain:"",type:"info",size:"small",onClick:function(t){return o.handleAddForward(e)}},{default:Object(r["withCtx"])((function(){return[I]})),_:2},1032,["onClick"])):Object(r["createCommentVNode"])("",!0)])])])]})),_:2},1024)})),128))]})),_:1})]),Object(r["createVNode"])(J,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"转发",description:"转发用于访问不同的地址，127.0.0.1:8000->127.0.0.1:80，A客户端访问127.0.0.1:8000 得到 B客户端的127.0.0.1:80数据，不适用于ftp双通道"}),e.showAddForward?(Object(r["openBlock"])(),Object(r["createBlock"])(R,{key:0,modelValue:e.showAddForward,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.showAddForward=t}),onSuccess:o.getData},null,8,["modelValue","onSuccess"])):Object(r["createCommentVNode"])("",!0),e.showAddListen?(Object(r["openBlock"])(),Object(r["createBlock"])(M,{key:1,modelValue:e.showAddListen,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.showAddListen=t}),onSuccess:o.getData},null,8,["modelValue","onSuccess"])):Object(r["createCommentVNode"])("",!0)])])}var S=n("5530"),L=(n("d81d"),n("a1e9")),A=n("f8aa"),E=n("49f5"),F=n("5c40"),B=["innerHTML"],P=Object(r["createTextVNode"])("取 消"),U=Object(r["createTextVNode"])("确 定");function z(e,t,n,o,c,a){var l=Object(r["resolveComponent"])("el-input"),u=Object(r["resolveComponent"])("el-form-item"),d=Object(r["resolveComponent"])("el-col"),i=Object(r["resolveComponent"])("el-option"),b=Object(r["resolveComponent"])("el-select"),f=Object(r["resolveComponent"])("el-row"),s=Object(r["resolveComponent"])("el-form"),O=Object(r["resolveComponent"])("el-button"),j=Object(r["resolveComponent"])("el-dialog");return Object(r["openBlock"])(),Object(r["createBlock"])(j,{title:"转发","destroy-on-close":"",modelValue:e.show,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.show=t}),center:"","close-on-click-modal":!1,width:"600px"},{footer:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(O,{onClick:o.handleCancel},{default:Object(r["withCtx"])((function(){return[P]})),_:1},8,["onClick"]),Object(r["createVNode"])(O,{type:"primary",loading:e.loading,onClick:o.handleSubmit},{default:Object(r["withCtx"])((function(){return[U]})),_:1},8,["loading","onClick"])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{ref:"formDom",model:e.form,rules:e.rules,"label-width":"80px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{span:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{label:"源host",prop:"SourceIp"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{disabled:1==o.addForwardData.currentLsiten.AliveType,modelValue:e.form.SourceIp,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.SourceIp=t})},null,8,["disabled","modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(d,{span:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{label:"目标端",prop:"Name"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{modelValue:e.form.Name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.Name=t}),placeholder:"选择目标"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.clients,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(i,{key:t,label:e.Name,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(u,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{span:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{label:"目标ip",prop:"TargetIp"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{modelValue:e.form.TargetIp,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.TargetIp=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(d,{span:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{label:"目标端口",prop:"TargetPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{modelValue:e.form.TargetPort,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.form.TargetPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(u,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{span:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{label:"通信通道",prop:"TunnelType"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{modelValue:e.form.TunnelType,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.form.TunnelType=t}),placeholder:"选择通信通道"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.shareData.tunnelTypes,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(i,{key:t,label:e,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(d,{span:12},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{label:"简单说明",prop:"Desc"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{modelValue:e.form.Desc,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.form.Desc=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules"]),Object(r["createElementVNode"])("div",{class:"remark t-c",innerHTML:o.remark},null,8,B)]})),_:1},8,["modelValue"])}n("a9e3"),n("a15b"),n("99af");var J=n("3fd2"),R=n("8286"),M={props:["modelValue"],emits:["update:modelValue","success"],setup:function(e,t){var n=t.emit,r={ListenID:0,ID:0,SourceIp:"0.0.0.0",Name:"B客户端",TargetIp:"127.0.0.1",TargetPort:80,AliveType:"1",Desc:"",TunnelType:"8"},o=Object(J["a"])(),c=Object(F["W"])("add-forward-data"),a=Object(R["a"])(),l=Object(L["p"])({show:e.modelValue,loading:!1,form:{ID:c.value.forward.ID||r.ID,SourceIp:c.value.forward.SourceIp||r.SourceIp,Name:c.value.forward.Name||r.Name,TargetIp:c.value.forward.TargetIp||r.TargetIp,TargetPort:c.value.forward.TargetPort||r.TargetPort,Desc:c.value.forward.Desc||r.Desc,TunnelType:(c.value.forward.TunnelType||r.TunnelType)+""},rules:{SourceIp:[{required:!0,message:"必填",trigger:"blur"}],TargetIp:[{required:!0,message:"必填",trigger:"blur"}],TargetPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}]}});Object(F["nc"])((function(){return l.show}),(function(e){e||setTimeout((function(){n("update:modelValue",e)}),300)}));var u=Object(L["c"])((function(){return["本客户端(".concat(l.form.SourceIp,":").concat(c.value.currentLsiten.Port,")"),"<br/>"," -> ","【".concat(a.aliveTypes[c.value.currentLsiten.AliveType],"】")," -> ","<br/>","".concat(l.form.Name,"(").concat(l.form.TargetIp,":").concat(l.form.TargetPort,")")].join("")})),d=Object(L["r"])(null),i=function(){d.value.validate((function(e){if(!e)return!1;l.loading=!0,l.form.TargetPort=Number(l.form.TargetPort),l.form.TunnelType=Number(l.form.TunnelType);var t={ListenID:c.value.currentLsiten.ID,Forward:l.form};console.log(t),Object(A["b"])(t).then((function(){l.loading=!1,l.show=!1,n("success")})).catch((function(e){l.loading=!1}))}))},b=function(){l.show=!1};return Object(S["a"])(Object(S["a"])(Object(S["a"])({shareData:a},Object(L["z"])(l)),Object(L["z"])(o)),{},{addForwardData:c,formDom:d,remark:u,handleSubmit:i,handleCancel:b})}},q=(n("cfd1"),n("6b0d")),H=n.n(q);const W=H()(M,[["render",z],["__scopeId","data-v-033e9f03"]]);var G=W,K=Object(r["createTextVNode"])("取 消"),$=Object(r["createTextVNode"])("确 定");function Q(e,t,n,o,c,a){var l=Object(r["resolveComponent"])("el-input"),u=Object(r["resolveComponent"])("el-form-item"),d=Object(r["resolveComponent"])("el-option"),i=Object(r["resolveComponent"])("el-select"),b=Object(r["resolveComponent"])("el-form"),f=Object(r["resolveComponent"])("el-button"),s=Object(r["resolveComponent"])("el-dialog");return Object(r["openBlock"])(),Object(r["createBlock"])(s,{title:e.form.ID>0?"编辑监听":"新增监听","destroy-on-close":"",modelValue:e.show,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.show=t}),center:"","close-on-click-modal":!1,width:"300px"},{footer:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{onClick:o.handleCancel},{default:Object(r["withCtx"])((function(){return[K]})),_:1},8,["onClick"]),Object(r["createVNode"])(f,{type:"primary",loading:e.loading,onClick:o.handleSubmit},{default:Object(r["withCtx"])((function(){return[$]})),_:1},8,["loading","onClick"])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(b,{ref:"formDom",model:e.form,rules:e.rules,"label-width":"80px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{label:"监听端口",prop:"Port"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{modelValue:e.form.Port,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.Port=t}),readonly:e.form.ID>0},null,8,["modelValue","readonly"])]})),_:1}),Object(r["createVNode"])(u,{label:"连接类型",prop:"AliveType"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:e.form.AliveType,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.AliveType=t}),placeholder:"选择类型"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.shareData.aliveTypes,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(d,{key:t,label:e,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(r["createVNode"])(u,{label:"简单说明",prop:"Desc"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{modelValue:e.form.Desc,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.form.Desc=t})},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["title","modelValue"])}n("e9c4");var X={props:["modelValue"],emits:["update:modelValue","success"],setup:function(e,t){var n=t.emit,r=Object(F["W"])("add-listen-data"),o=Object(R["a"])(),c=Object(L["p"])({show:e.modelValue,loading:!1,form:{ID:r.value.ID||0,Port:r.value.Port||0,AliveType:(r.value.AliveType||"1")+"",Desc:r.value.Desc||"",ForwardType:1,TunnelType:2},rules:{Port:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}]}});Object(F["nc"])((function(){return c.show}),(function(e){e||setTimeout((function(){n("update:modelValue",e)}),300)}));var a=Object(L["r"])(null),l=function(){a.value.validate((function(e){if(!e)return!1;c.loading=!0;var t=JSON.parse(JSON.stringify(c.form));t.Port=Number(t.Port),t.AliveType=Number(t.AliveType),t.ForwardType=Number(t.ForwardType),t.TunnelType=Number(t.TunnelType),Object(A["c"])(t).then((function(){c.loading=!1,c.show=!1,n("success")})).catch((function(e){c.loading=!1}))}))},u=function(){c.show=!1};return Object(S["a"])(Object(S["a"])({shareData:o},Object(L["z"])(c)),{},{formDom:a,handleSubmit:l,handleCancel:u})}};const Y=H()(X,[["render",Q]]);var Z=Y,ee={components:{ConfigureModal:E["a"],AddListen:Z,AddForward:G},setup:function(){var e=Object(R["a"])(),t=Object(L["p"])({loading:!1,list:[],currentLsiten:{Port:0},showAddListen:!1,showAddForward:!1}),n=Object(L["r"])([]),r=function(){Object(A["d"])().then((function(e){t.list=e}))},o=function(e,t){n.value=t.map((function(e){return e.ID}))},c=Object(L["r"])({ID:0});Object(F["Ab"])("add-listen-data",c);var a=function(){c.value={ID:0},t.showAddListen=!0},l=function(e){c.value=e,t.showAddListen=!0},u=function(e){Object(A["j"])(e.ID).then((function(){r()}))},d=function(e){e.Listening?Object(A["l"])(e.ID).then(r).catch(r):Object(A["n"])(e.ID).then(r).catch(r)},i=Object(L["r"])({forward:{ID:0},ListenID:0,currentLsiten:{ID:0,Port:0}});Object(F["Ab"])("add-forward-data",i);var b=function(e){i.value.currentLsiten=e,i.value.forward={ID:0},t.showAddForward=!0},f=function(e,n){i.value.currentLsiten=e,i.value.forward=n,t.showAddForward=!0},s=function(e,t){Object(A["i"])(e.ID,t.ID).then((function(){r()}))};return Object(F["rb"])((function(){r()})),Object(S["a"])(Object(S["a"])({},Object(L["z"])(t)),{},{shareData:e,getData:r,expandKeys:n,onExpand:o,handleRemoveListen:u,handleAddListen:a,handleEditListen:l,onListeningChange:d,handleAddForward:b,handleEditForward:f,handleRemoveForward:s})}};n("bc6b"),n("dd71");const te=H()(ee,[["render",_],["__scopeId","data-v-28147e24"]]);t["default"]=te},4492:function(e,t,n){},"7d4c":function(e,t,n){},"8c19":function(e,t,n){},bc6b:function(e,t,n){"use strict";n("4492")},cfd1:function(e,t,n){"use strict";n("7d4c")},dd71:function(e,t,n){"use strict";n("8c19")},f8aa:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"l",(function(){return l})),n.d(t,"n",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"j",(function(){return i})),n.d(t,"b",(function(){return b})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return O})),n.d(t,"a",(function(){return j})),n.d(t,"m",(function(){return m})),n.d(t,"o",(function(){return p})),n.d(t,"k",(function(){return w}));n("e9c4");var r=n("97af"),o=function(){return Object(r["c"])("tcpforward/list")},c=function(){return Object(r["c"])("tcpforward/listproxy")},a=function(){return Object(r["c"])("tcpforward/GetPac")},l=function(e){return Object(r["c"])("tcpforward/start",{ID:e})},u=function(e){return Object(r["c"])("tcpforward/stop",{ID:e})},d=function(e){return Object(r["c"])("tcpforward/AddListen",{ID:e.ID,Content:JSON.stringify(e)})},i=function(e){return Object(r["c"])("tcpforward/RemoveListen",{ID:e})},b=function(e){return Object(r["c"])("tcpforward/AddForward",{ID:e.Forward.ID,Content:JSON.stringify(e)})},f=function(e,t){return Object(r["c"])("tcpforward/RemoveForward",{ID:t,Content:JSON.stringify({ListenID:e,ForwardID:t})})},s=function(){return Object(r["c"])("tcpforward/ServerPorts")},O=function(){return Object(r["c"])("tcpforward/ServerForwards")},j=function(e){return Object(r["c"])("tcpforward/AddServerForward",e)},m=function(e){return Object(r["c"])("tcpforward/StartServerForward",e)},p=function(e){return Object(r["c"])("tcpforward/StopServerForward",e)},w=function(e){return Object(r["c"])("tcpforward/RemoveServerForward",e)}}}]);