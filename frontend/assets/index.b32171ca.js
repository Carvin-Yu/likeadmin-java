var re=Object.defineProperty,ie=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,z=(e,t)=>{for(var o in t||(t={}))ce.call(t,o)&&q(e,o,t[o]);if(M)for(var o of M(t))ue.call(t,o)&&q(e,o,t[o]);return e},K=(e,t)=>ie(e,ae(t));import{d as y,r as le,o as X,a as l,b as d,c as m,e as n,f as c,w as u,t as p,g as D,p as de,h as _e,i as w,j as k,n as W,k as pe,F as x,l as j,m as R,q as Y,s as me,R as C,u as he,v as fe,E as I,x as ve,y as ge,z as ye,A as Ee,B as $e,C as be,K as Fe,D as we,N,G as Ae,H as ke,I as H,J as De,U as Be,L as Ce,M as xe,O as Ie,P as Pe,Q as Le,S as Oe,T as Se,V as Te,W as Re,X as Ve,Y as je,Z as Ne}from"./vendor.d574ef89.js";const Ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}};Ue();const Me={token:e=>e.user.token,userInfo:e=>e.user.user,config:e=>e.app.config,permission:e=>e.permission.permission,isAdmin:e=>e.permission.isAdmin},qe=1,ze="1.0.0";function Ke(e,t=1e3,o){let s=new Date(0).getTime();return function(...i){const a=new Date().getTime();if(a-s>t)return s=a,e.apply(o,i)}}function We(e=[],t=[],o="children"){return e.forEach(s=>{const i=s[o];i?We(i,t,o):t.push(s)}),t}const He="modulepreload",J={},Je="/",h=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${Je}${s}`,s in J)return;J[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":He,i||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),i)return new Promise((_,g)=>{r.addEventListener("load",_),r.addEventListener("error",g)})})).then(()=>t())};function Ge(){return f.get("/index/console")}var U="/assets/avatar.f16c9209.png";var E=(e,t)=>{const o=e.__vccOpts||e;for(const[s,i]of t)o[s]=i;return o};const Qe=y({setup(){const e=le({version:{version:"",website:""},today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line"}]}}),t=()=>{Ge().then(o=>{console.log("res",o),e.version=o.version,e.today=o.today,e.menu=o.menu,e.visitor=o.visitor,e.article=o.article,e.visitorOption.xAxis.data=[],e.visitorOption.series[0].data=[],o.visitor.date.reverse().forEach(s=>{e.visitorOption.xAxis.data.push(s)}),o.visitor.list[0].data.forEach(s=>{e.visitorOption.series[0].data.push(s)})}).catch(o=>{console.log("err",o)})};return X(()=>{t()}),{workbenchData:e,getWorkbench:t}}}),$=e=>(de("data-v-04a51223"),e=e(),_e(),e),Xe={class:"workbench"},Ye={class:"flex workbench-header"},Ze=$(()=>n("span",{class:"card-title"},"\u8D26\u53F7\u4FE1\u606F",-1)),et={class:"m-b-20"},tt=$(()=>n("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1)),ot={class:"muted xs m-l-15"},st={class:"flex"},nt={class:"flex-1"},rt=$(()=>n("div",{class:"lighter m-b-10"},"\u8BBF\u95EE\u91CF",-1)),it={class:"f-s-32 m-b-10"},at={class:"lighter"},ct={class:"flex-1"},ut=$(()=>n("div",{class:"lighter m-b-10"},"\u9500\u552E\u989D",-1)),lt={class:"f-s-32 m-b-10"},dt={class:"lighter"},_t={class:"flex-1"},pt=$(()=>n("div",{class:"lighter m-b-10"},"\u65B0\u589E\u7528\u6237",-1)),mt={class:"f-s-32 m-b-10"},ht={class:"lighter"},ft={class:"m-t-15 function"},vt=$(()=>n("span",{class:"card-title"},"\u5E38\u7528\u529F\u80FD",-1)),gt={class:"nav-lists"},yt=$(()=>n("div",{class:"nav-item flex-col m-t-10"},[n("view",{class:"flex flex-center"},[n("img",{style:{width:"48px",height:"48px"},src:U})]),n("div",{class:"m-t-8 normal text-center"},"\u5DE5\u4F5C\u53F0")],-1)),Et=$(()=>n("div",{class:"nav-item flex-col m-t-10"},[n("view",{class:"flex flex-center"},[n("img",{style:{width:"48px",height:"48px"},src:U})]),n("div",{class:"m-t-8 normal text-center"},"\u7F51\u7AD9\u4FE1\u606F")],-1)),$t=$(()=>n("div",{class:"nav-item flex-col m-t-10"},[n("view",{class:"flex flex-center"},[n("img",{style:{width:"48px",height:"48px"},src:U})]),n("div",{class:"m-t-8 normal text-center"},"\u7CFB\u7EDF\u73AF\u5883")],-1)),bt={class:"flex m-t-15 ranking"},Ft=$(()=>n("span",{class:"card-title"},"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1)),wt={class:"ranking-centent"},At=$(()=>n("div",null,[n("span",{class:"card-title"},"\u6587\u7AE0\u9605\u8BFB\u91CF\u6392\u540D")],-1)),kt={class:"ranking-centent"},Dt={key:0,class:"icon",style:{background:"#f86056",color:"#fff"}},Bt={key:1,class:"icon",style:{background:"#fc8d2e",color:"#fff"}},Ct={key:2,class:"icon",style:{background:"#fcbc2e",color:"#fff"}},xt={key:3,class:"icon"};function It(e,t,o,s,i,a){const r=l("el-card"),_=l("router-link"),g=l("v-chart"),b=l("el-table-column"),A=l("el-table");return d(),m("div",Xe,[n("div",Ye,[c(r,{class:"flex-1",shadow:"never"},{header:u(()=>[Ze]),default:u(()=>[n("div",null,[n("div",et,"\u7248\u672C\u53F7\uFF1A"+p(e.workbenchData.version.version),1),n("div",null,"\u5B98\u7F51\u5730\u5740\uFF1A"+p(e.workbenchData.version.website),1)])]),_:1}),c(r,{class:"flex-3 m-l-15",shadow:"never"},{header:u(()=>[n("div",null,[tt,n("span",ot,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+p(e.workbenchData.today.time),1)])]),default:u(()=>[n("div",st,[n("div",nt,[rt,n("div",it,p(e.workbenchData.today.todayVisits),1),n("div",at,"\u603B\u8BBF\u95EE\u91CF\uFF1A"+p(e.workbenchData.today.totalVisits),1)]),n("div",ct,[ut,n("div",lt,p(e.workbenchData.today.todaySales),1),n("div",dt,"\u603B\u9500\u552E\u989D\uFF1A"+p(e.workbenchData.today.totalSales),1)]),n("div",_t,[pt,n("div",mt,p(e.workbenchData.today.todayUsers),1),n("div",ht,"\u603B\u8BBF\u7528\u6237\uFF1A"+p(e.workbenchData.today.totalUsers),1)])])]),_:1})]),n("div",ft,[c(r,{class:"flex-1",shadow:"never"},{header:u(()=>[vt]),default:u(()=>[n("div",gt,[c(_,{to:""},{default:u(()=>[yt]),_:1}),c(_,{to:"/setting/website/information"},{default:u(()=>[Et]),_:1}),c(_,{to:"/setting/website/environment"},{default:u(()=>[$t]),_:1})])]),_:1})]),n("div",bt,[c(r,{class:"flex-1",shadow:"never"},{header:u(()=>[Ft]),default:u(()=>[n("div",wt,[c(g,{class:"chart",option:e.workbenchData.visitorOption},null,8,["option"])])]),_:1}),c(r,{class:"flex-1 m-l-15",shadow:"never"},{header:u(()=>[At]),default:u(()=>[n("div",kt,[c(A,{data:e.workbenchData.article,size:"medium"},{default:u(()=>[c(b,{label:"\u6392\u540D","min-width":"70",type:"index"},{default:u(v=>[v.$index==0?(d(),m("div",Dt,p(v.$index+1),1)):D("",!0),v.$index==1?(d(),m("div",Bt,p(v.$index+1),1)):D("",!0),v.$index==2?(d(),m("div",Ct,p(v.$index+1),1)):D("",!0),v.$index>2?(d(),m("div",xt,p(v.$index+1),1)):D("",!0)]),_:1}),c(b,{prop:"title",label:"\u6587\u7AE0\u540D\u79F0"}),c(b,{prop:"visit",label:"\u9605\u8BFB\u91CF"})]),_:1},8,["data"])])]),_:1})])])}var Pt=E(Qe,[["render",It],["__scopeId","data-v-04a51223"]]);const Lt=y({components:{},props:{route:{type:Object,default:()=>({})}},setup(e){return{hasChildren:w(()=>{var s;return!!((s=e.route.children)!=null?s:[]).filter(i=>{var a;return!((a=i.meta)==null?void 0:a.hidden)}).length})}}});function Ot(e,t,o,s,i,a){const r=l("el-sub-menu"),_=l("el-menu-item");return e.route.meta.hidden?D("",!0):(d(),m(x,{key:0},[e.hasChildren?(d(),k(r,{key:0,index:e.route.path},{title:u(()=>[n("i",{class:W(["iconfont m-r-10",e.route.meta.icon])},null,2),n("span",null,p(e.route.meta.title),1)]),default:u(()=>[pe(e.$slots,"default")]),_:3},8,["index"])):(d(),k(_,{key:1,index:e.route.path},{default:u(()=>[n("i",{class:W(["iconfont m-r-10",e.route.meta.icon])},null,2),n("span",null,p(e.route.meta.title),1)]),_:1},8,["index"]))],64))}var St=E(Lt,[["render",Ot]]);const Tt=y({components:{SubMenu:St},setup(){const{store:e,route:t}=P(),o=w(()=>e.state.permission.sidebar),s=w(()=>{var a,r;return(r=(a=t.meta)==null?void 0:a.parent)!=null?r:t.path});return{config:w(()=>e.getters.config),sidebar:o,currentPath:s}}}),Rt={class:"layout-aside"},Vt=["src"],jt={class:"line-1"},Nt={class:"scrollbar-wrap"};function Ut(e,t,o,s,i,a){const r=l("router-link"),_=l("sub-menu"),g=l("el-menu"),b=l("el-scrollbar");return d(),m("div",Rt,[c(r,{to:"/workbench",class:"logo flex col-center"},{default:u(()=>[n("img",{class:"logo-img",src:e.config.web_logo,alt:""},null,8,Vt),n("div",jt,p(e.config.web_name),1)]),_:1}),n("div",Nt,[c(b,{style:{height:"100%"},class:"ls-scrollbar"},{default:u(()=>[c(g,{"active-text-color":"#fff","background-color":"#2a2c41","default-active":e.currentPath,"text-color":"#E5E5E5",router:""},{default:u(()=>[(d(!0),m(x,null,j(e.sidebar,(A,v)=>(d(),k(_,{key:v,route:A},{default:u(()=>[(d(!0),m(x,null,j(A==null?void 0:A.children,(B,oe)=>(d(),k(_,{key:oe,route:B},{default:u(()=>[(d(!0),m(x,null,j(B==null?void 0:B.children,(se,ne)=>(d(),k(_,{key:ne,route:se},null,8,["route"]))),128))]),_:2},1032,["route"]))),128))]),_:2},1032,["route"]))),128))]),_:1},8,["default-active"])]),_:1})])])}var Mt=E(Tt,[["render",Ut],["__scopeId","data-v-02f335bc"]]);const qt=y({components:{},props:{},setup(e){const{store:t,route:o}=P(),s=w(()=>t.getters.permission),i=w(()=>t.getters.isAdmin),a=w(()=>{const{path:r,meta:_}=o;if(i.value)return!0;const g=s.value[r];return console.log(s.value,r),!g||!(_==null?void 0:_.permission)?!0:g.some(b=>(_==null?void 0:_.permission).includes(b))});return{permission:s,hasPermission:a}}}),zt={class:"perm"};function Kt(e,t,o,s,i,a){const r=l("router-view");return d(),m("div",zt,[c(r)])}var Wt=E(qt,[["render",Kt],["__scopeId","data-v-745cd63a"]]);const Ht=y({components:{Perm:Wt}}),Jt={class:"layout-main"},Gt={class:"p-15"};function Qt(e,t,o,s,i,a){const r=l("perm"),_=l("el-scrollbar");return d(),m("div",Jt,[c(_,null,{default:u(()=>[n("div",Gt,[c(r)])]),_:1})])}var Xt=E(Ht,[["render",Qt],["__scopeId","data-v-3e7655a7"]]);const Yt=y({setup(){const{store:e,router:t}=P();return{userInfo:w(()=>e.getters.userInfo),handleCommand:i=>{switch(i){case"logout":e.dispatch("user/logout").then(()=>{t.push("/login"),e.commit("permission/setPermission",{auth:null,root:0})})}}}}}),Zt={class:"layout-header"},eo={class:"admin-info flex flex-center m-l-40"},to={class:"m-l-10"},oo={class:"flex flex-center"},so=R("\u4E2A\u4EBA\u8BBE\u7F6E"),no=R("\u9000\u51FA\u767B\u5F55");function ro(e,t,o,s,i,a){const r=l("el-avatar"),_=l("arrow-down"),g=l("el-icon"),b=l("el-dropdown-item"),A=l("router-link"),v=l("el-dropdown-menu"),B=l("el-dropdown");return d(),m("div",Zt,[n("div",eo,[c(r,{size:40,src:e.userInfo.avatar},null,8,["src"]),n("div",to,[c(B,{trigger:"hover",onCommand:e.handleCommand},{dropdown:u(()=>[c(v,null,{default:u(()=>[c(A,{to:"/setting/personal/personal_data"},{default:u(()=>[c(b,null,{default:u(()=>[so]),_:1})]),_:1})]),_:1}),c(v,null,{default:u(()=>[c(b,{command:"logout"},{default:u(()=>[no]),_:1})]),_:1})]),default:u(()=>[n("div",oo,[R(p(e.userInfo.name)+" ",1),c(g,{class:"el-icon--right"},{default:u(()=>[c(_)]),_:1})])]),_:1},8,["onCommand"])])])])}var io=E(Yt,[["render",ro],["__scopeId","data-v-15ee1220"]]);const ao=y({components:{LayoutAside:Mt,LayoutMain:Xt,LayoutHeader:io}}),co={class:"layout"},uo={class:"aside"},lo={class:"main"};function _o(e,t,o,s,i,a){const r=l("layout-aside"),_=l("layout-header"),g=l("layout-main");return d(),m("div",co,[n("div",uo,[c(r)]),n("div",lo,[c(_),c(g)])])}var po=E(ao,[["render",_o]]);const mo=y({props:{code:Number,title:String},setup(){let e=null;const t=Y(5),{router:o}=P();return e=setInterval(()=>{t.value===0?(clearInterval(e),o.go(-1)):t.value--},1e3),me(()=>{clearInterval(e)}),{second:t}}}),ho={class:"error"},fo={class:"error-code"},vo={class:"lg lighter m-t-30 m-b-30"};function go(e,t,o,s,i,a){const r=l("el-button");return d(),m("div",ho,[n("div",null,[n("div",fo,p(e.code),1),n("div",vo,p(e.title),1),c(r,{type:"primary",size:"small",onClick:t[0]||(t[0]=_=>e.$router.go(-1))},{default:u(()=>[R(p(e.second)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})])])}var Z=E(mo,[["render",go],["__scopeId","data-v-8a4a4484"]]);const yo=y({components:{Error:Z},setup(){}}),Eo={class:"error404"};function $o(e,t,o,s,i,a){const r=l("error");return d(),m("div",Eo,[c(r,{code:404,title:"\u54CE\u5440\uFF0C\u51FA\u9519\u4E86\uFF01\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u2026"})])}var bo=E(yo,[["render",$o]]);const Fo=y({components:{Error:Z},setup(){}}),wo={class:"error500"};function Ao(e,t,o,s,i,a){const r=l("error");return d(),m("div",wo,[c(r,{code:500,title:"\u54CE\u5440\uFF0C\u51FA\u9519\u4E86\uFF01\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u2026"})])}var ko=E(Fo,[["render",Ao]]);const Do={path:"/setting",redirect:"/setting/service",component:C,meta:{title:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:"icon-setting"},children:[{path:"/setting/service",redirect:"/setting/service/online_service",component:C,meta:{title:"\u5BA2\u670D\u8BBE\u7F6E",hidden:!0},children:[{path:"/setting/service/online_service",component:()=>h(()=>import("./online_service.4c44d642.js"),["assets/online_service.4c44d642.js","assets/online_service.7224dad7.css","assets/index.257b9e44.js","assets/index.4c20d851.css","assets/vendor.d574ef89.js","assets/index.f84801a7.js","assets/index.2eb40577.css","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/index.f984bab9.js","assets/index.87a602e0.css","assets/setting.d8e1906e.js"]),meta:{title:"\u5728\u7EBF\u5BA2\u670D"}}]},{path:"/setting/website",redirect:"/setting/website/information",component:C,meta:{title:"\u7F51\u7AD9\u8BBE\u7F6E"},children:[{path:"/setting/website/information",component:()=>h(()=>import("./information.d0b27d17.js"),["assets/information.d0b27d17.js","assets/index.257b9e44.js","assets/index.4c20d851.css","assets/vendor.d574ef89.js","assets/index.f84801a7.js","assets/index.2eb40577.css","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/index.f984bab9.js","assets/index.87a602e0.css","assets/setting.d8e1906e.js"]),meta:{title:"\u7F51\u7AD9\u4FE1\u606F",permission:["view"]}},{path:"/setting/website/filing",component:()=>h(()=>import("./filing.c5188a9c.js"),["assets/filing.c5188a9c.js","assets/setting.d8e1906e.js","assets/index.f984bab9.js","assets/index.87a602e0.css","assets/vendor.d574ef89.js"]),meta:{title:"\u5907\u6848\u4FE1\u606F",permission:["view"]}},{path:"/setting/website/protocol",component:()=>h(()=>import("./protocol.ea713cd7.js"),["assets/protocol.ea713cd7.js","assets/protocol.267a7477.css","assets/setting.d8e1906e.js","assets/vendor.d574ef89.js","assets/index.257b9e44.js","assets/index.4c20d851.css","assets/index.f84801a7.js","assets/index.2eb40577.css","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/index.f984bab9.js","assets/index.87a602e0.css"]),meta:{title:"\u653F\u7B56/\u534F\u8BAE",permission:["view"],hidden:!0}}]},{path:"/setting/user",redirect:"/setting/user",component:C,meta:{title:"\u7528\u6237\u8BBE\u7F6E",hidden:!0},children:[{path:"/setting/user",component:()=>h(()=>import("./index.21492de0.js"),["assets/index.21492de0.js","assets/setting.d8e1906e.js","assets/index.257b9e44.js","assets/index.4c20d851.css","assets/vendor.d574ef89.js","assets/index.f84801a7.js","assets/index.2eb40577.css","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/index.f984bab9.js","assets/index.87a602e0.css"]),meta:{title:"\u7528\u6237\u8BBE\u7F6E",permission:["view"]}},{path:"/setting/user/login",component:()=>h(()=>import("./login.157196e9.js"),["assets/login.157196e9.js","assets/login.c93f0173.css","assets/setting.d8e1906e.js","assets/index.f984bab9.js","assets/index.87a602e0.css","assets/vendor.d574ef89.js"]),meta:{title:"\u767B\u5F55\u6CE8\u518C",permission:["view"]}}]},{path:"/setting/system",redirect:"/setting/system/environment",component:C,meta:{title:"\u7CFB\u7EDF\u7EF4\u62A4"},children:[{path:"/setting/website/environment",component:()=>h(()=>import("./environment.1071e55f.js"),["assets/environment.1071e55f.js","assets/setting.d8e1906e.js","assets/vendor.d574ef89.js"]),meta:{title:"\u7CFB\u7EDF\u73AF\u5883",permission:["view"]}},{path:"/setting/website/journal",component:()=>h(()=>import("./journal.6784e244.js"),["assets/journal.6784e244.js","assets/setting.d8e1906e.js","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/vendor.d574ef89.js"]),meta:{title:"\u7CFB\u7EDF\u65E5\u5FD7",permission:["view"]}},{path:"/setting/website/cache",component:()=>h(()=>import("./cache.8e0bf751.js"),["assets/cache.8e0bf751.js","assets/cache.63bfd287.css","assets/setting.d8e1906e.js","assets/vendor.d574ef89.js"]),meta:{title:"\u7CFB\u7EDF\u7F13\u5B58",permission:["view"]}}]},{path:"/setting/personal/personal_data",component:()=>h(()=>import("./personal_data.2998baeb.js"),["assets/personal_data.2998baeb.js","assets/index.257b9e44.js","assets/index.4c20d851.css","assets/vendor.d574ef89.js","assets/index.f84801a7.js","assets/index.2eb40577.css","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/index.f984bab9.js","assets/index.87a602e0.css"]),meta:{title:"\u4E2A\u4EBA\u8BBE\u7F6E",permission:["view"],hidden:!0}}]},Bo={path:"/permission",redirect:"/permission/admin",component:C,meta:{title:"\u6743\u9650\u7BA1\u7406",icon:"icon-quanxian"},children:[{path:"/permission/admin",component:()=>h(()=>import("./index.34a70b07.js"),["assets/index.34a70b07.js","assets/index.386e03b2.css","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/vendor.d574ef89.js","assets/index.f84801a7.js","assets/index.2eb40577.css","assets/auth.a54adaef.js"]),meta:{title:"\u7BA1\u7406\u5458",permission:["view"]}},{path:"/permission/admin/edit",component:()=>h(()=>import("./edit.8f9580a3.js"),["assets/edit.8f9580a3.js","assets/index.257b9e44.js","assets/index.4c20d851.css","assets/vendor.d574ef89.js","assets/index.f84801a7.js","assets/index.2eb40577.css","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/index.f984bab9.js","assets/index.87a602e0.css","assets/auth.a54adaef.js"]),meta:{title:"\u7BA1\u7406\u5458",parent:"/permission/admin",hidden:!0}},{path:"/permission/role",component:()=>h(()=>import("./index.1aeba31b.js"),["assets/index.1aeba31b.js","assets/auth.a54adaef.js","assets/index.a44de264.js","assets/index.104ca5ab.css","assets/vendor.d574ef89.js","assets/index.f84801a7.js","assets/index.2eb40577.css"]),meta:{title:"\u89D2\u8272",permission:["view"]}},{path:"/permission/role/edit",component:()=>h(()=>import("./edit.77ee8eaf.js"),["assets/edit.77ee8eaf.js","assets/edit.6a82806d.css","assets/auth.a54adaef.js","assets/index.f984bab9.js","assets/index.87a602e0.css","assets/vendor.d574ef89.js"]),meta:{title:"\u89D2\u8272",parent:"/permission/role",hidden:!0}},{path:"/permission/menu",component:()=>h(()=>import("./index.18c8a675.js"),["assets/index.18c8a675.js","assets/index.f84801a7.js","assets/index.2eb40577.css","assets/vendor.d574ef89.js","assets/auth.a54adaef.js"]),meta:{title:"\u83DC\u5355",permission:["view"]}},{path:"/permission/menu/edit",component:()=>h(()=>import("./edit.ec03b1bf.js"),["assets/edit.ec03b1bf.js","assets/index.f984bab9.js","assets/index.87a602e0.css","assets/vendor.d574ef89.js","assets/auth.a54adaef.js"]),meta:{title:"\u83DC\u5355",parent:"/permission/menu",hidden:!0}}]},ee=[{path:"/",redirect:"workbench",component:po,children:[{path:"/workbench",component:Pt,meta:{title:"\u5DE5\u4F5C\u53F0",icon:"icon-home",permission:["view"]}},Bo,Do]}],Co=[{path:"/login",component:()=>h(()=>import("./login.f3d0755b.js"),["assets/login.f3d0755b.js","assets/login.9b6bceb3.css","assets/vendor.d574ef89.js"])},{path:"/error/500",component:ko},{path:"/:pathMatch(.*)*",name:"404",component:bo}],V=he({history:fe("/"),routes:[...ee,...Co]}),S={key:"like_admin_",set(e,t,o){e=this.getKey(e);let s={expire:o?this.time()+o:"",value:t};typeof s=="object"&&(s=JSON.stringify(s));try{window.localStorage.setItem(e,s)}catch{return!1}},get(e){e=this.getKey(e);try{const t=window.localStorage.getItem(e);if(!t)return!1;const{value:o,expire:s}=JSON.parse(t);return s&&s<this.time()?(window.localStorage.removeItem(e),!1):o}catch{return!1}},time(){return Math.round(new Date().getTime()/1e3)},remove(e){e=this.getKey(e),window.localStorage.removeItem(e)},getKey(e){return this.key+e}},T="token",as="account",O={success:({show:e,msg:t,data:o})=>(e*1&&I({type:"success",message:t}),o),error:({show:e,msg:t})=>(e*1&&I({type:"error",message:t}),Promise.reject(t)),redirect:Ke(()=>(F.commit("user/setToken",""),F.commit("user/setUser",{}),S.remove(T),V.push("/login"),Promise.reject())),page:({data:e})=>(window.location.href=e.url,e)},f=ve.create({baseURL:"https://likeadmin-java-api.yixiangonline.com/api",timeout:60*1e3,headers:{"Content-Type":"application/json",version:ze}});f.interceptors.request.use(e=>{const t=F.getters.token;return e.headers&&(e.headers.token=t),e},e=>Promise.reject(e));f.interceptors.response.use(e=>{switch(e.data.code){case 200:return O.success(e.data);case 300:case 310:case 311:case 312:case 313:case 314:case 403:case 404:case 500:return O.error(e.data);case-1:case 330:case 331:case 332:case 333:return O.redirect();case 2:return O.page(e.data)}},e=>(console.log(e),I({type:"error",message:e}),Promise.reject(e)));function cs(e){return f.post("/album/cateAdd",e)}function us(e){return f.post("/file/editCate",e)}function ls(e){return f.post("/album/cateDel",e)}function ds(e){return f.get("/album/cateList",{params:e})}function _s(e){return f.get("/album/albumList",{params:e})}function ps(e){return f.post("/album/albumDel",e)}function ms(e){return f.post("/album/albumMove",e)}function xo(){return f.get("/index/config")}const Io={namespaced:!0,state:{config:{}},mutations:{setConfig(e,t){e.config=t}},actions:{getConfig({commit:e}){return new Promise((t,o)=>{xo().then(s=>{e("setConfig",s),t(s)})})}}},Po={namespaced:!0,state:{sidebar:[],permission:null,isAdmin:0},getters:{},mutations:{setSidebar(e,t){e.sidebar=t},setPermission(e,t){e.permission=t.auth,e.isAdmin=t.root}},actions:{getPermission({commit:e}){return new Promise((t,o)=>{t({})})}}};function Lo(e){return f.post("/system/login",K(z({},e),{terminal:qe}))}function Oo(){return f.post("/system/logout")}function So(){return f.get("/system/admin/self")}function hs(e){return f.post("/system/admin/upInfo",e)}const To={namespaced:!0,state:{token:S.get(T)||"",user:{}},mutations:{setToken(e,t){e.token=t,S.set(T,t)},setUser(e,t){e.user=t}},actions:{login({commit:e},t){const{account:o,password:s}=t;return console.log(t,"----------------------"),new Promise((i,a)=>{Lo({username:o,password:s}).then(r=>{e("setToken",r.token),i(r)}).catch(r=>{a(r)})})},logout({commit:e}){return new Promise((t,o)=>{Oo().then(s=>{e("setToken",""),e("setUser",{}),S.remove(T),t(s)}).catch(s=>{o(s)})})},getUser({commit:e}){return new Promise((t,o)=>{So().then(s=>{e("setUser",s),t(s)}).catch(s=>{o(s)})})}}};var Ro={app:Io,permission:Po,user:To};const Vo=ge({modules:Ro,getters:Me}),te=Symbol("vue-store");function jo(){return ye(te)}var F=Vo;function P(){const e=jo(),t=Ee(),o=$e();return{store:e,route:t,router:o}}const No=y({setup(){const{store:e,route:t}=P(),o=Y(!0),s=w(()=>t.meta.keepAlive);return be("reload",()=>{o.value=!1,we(()=>{o.value=!0})}),X(async()=>{const a=await e.dispatch("app/getConfig");console.log("data",a);let r=document.querySelector('link[rel="icon"]');if(r){r.href=a.webFavicon;return}r=document.createElement("link"),r.rel="icon",r.href=a.webFavicon,document.head.appendChild(r)}),{routerAlive:o,keepAlive:s}}});function Uo(e,t,o,s,i,a){const r=l("router-view");return d(),m(x,null,[(d(),k(Fe,null,[e.keepAlive&&e.routerAlive?(d(),k(r,{key:0})):D("",!0)],1024)),!e.keepAlive&&e.routerAlive?(d(),k(r,{key:0})):D("",!0)],64)}var Mo=E(No,[["render",Uo]]);N.configure({showSpinner:!1});const G="/login",qo="/",zo=["/login"];V.beforeEach(async(e,t,o)=>{var i;N.start(),((i=e.meta)==null?void 0:i.title)&&(document.title=e.meta.title),F.getters.token?(F.getters.permission==null&&(F.commit("permission/setSidebar",ee[0].children),await F.dispatch("user/getUser"),await F.dispatch("permission/getPermission")),e.path===G?o({path:qo}):o()):zo.includes(e.path)?o():o({path:G,query:{redirect:e.fullPath}})});V.afterEach(async(e,t)=>{N.done()});var Ko=e=>{e.use(Ae,{zIndex:3e3,locale:ke}),Object.keys(H).forEach(t=>{e.component(t,H[t])})};De([Ce,xe,Ie,Pe,Le,Oe,Se,Te,Re,Ve]);var Wo=e=>{e.component("VChart",Be)};const Ho="#4a5dff",Jo="#67c23a",Go="#fb9400",Qo="#f56c6c",Xo="#909399",Yo="#333333",Zo="#666666",es="#999999";var ts={color_primary:Ho,color_success:Jo,color_warning:Go,color_danger:Qo,color_ingo:Xo,font_color_primary:Yo,font_color_regular:Zo,font_color_secondary:es};(function(){const t=new je(".copy-btn");t.on("success",o=>{I.success("\u590D\u5236\u6210\u529F"),o.clearSelection()}),t.on("error",o=>{console.error(o),I.success("\u590D\u5236\u5931\u8D25")})})();var os={mounted:(e,t)=>{e.className=e.className+" copy-btn",e.setAttribute("data-clipboard-text",t.value)},updated:(e,t)=>{e.setAttribute("data-clipboard-text",t.value)}},ss=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:os});const Q={"./modules/copy.ts":ss};var ns=e=>{Object.keys(Q).forEach(t=>{const o=t.replace(/^\.\/(.*)\.\w+$/,"$1");e.directive(o,Q[t].default)})};const L=Ne(Mo);L.config.globalProperties.$variables=ts;Ko(L);Wo(L);ns(L);L.use(V).use(F,te).mount("#app");export{as as A,E as _,cs as a,us as b,S as c,ls as d,ds as e,ps as f,ms as g,_s as h,jo as i,So as j,hs as k,We as l,f as r,P as u,ze as v};
