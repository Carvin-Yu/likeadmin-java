import{E as m,F as h}from"./element-plus.9e966673.js";import{s as p}from"./system.ada46ee1.js";import{C as n}from"./vue-echarts.730928be.js";import{d as v,r as b,a0 as F,o as f,c as C,V as o,M as i,a as e,U as l,u,b9 as E,b8 as A}from"./@vue.791b8507.js";import{d as y}from"./index.f4fbb0f6.js";import"./@vueuse.f02d1475.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./@element-plus.501b100e.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./resize-detector.4e96b72b.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./lodash.b68d77aa.js";import"./vue-router.253c1a48.js";import"./pinia.4792d4cc.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.47e0d2e4.js";const t=_=>(E("data-v-3616f757"),_=_(),A(),_),D={class:"cache"},B=t(()=>e("div",{class:"mb-4 lg"},"\u57FA\u672C\u4FE1\u606F",-1)),w={class:"el-table--enable-row-transition el-table--large el-table"},x={class:"el-table__body",cellspacing:"0"},g={class:"el-table__row"},S=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"Redis\u7248\u672C")],-1)),O={class:"el-table__cell"},k={class:"cell"},z=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"\u8FD0\u884C\u6A21\u5F0F")],-1)),I={class:"el-table__cell"},V={class:"cell"},M=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"\u7AEF\u53E3")],-1)),N={class:"el-table__cell"},P={class:"cell"},R=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"\u5BA2\u6237\u7AEF\u6570")],-1)),U={class:"el-table__cell"},K={class:"cell"},L={class:"el-table__row"},X=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"\u8FD0\u884C\u65F6\u95F4(\u5929)")],-1)),j={class:"el-table__cell"},q={class:"cell"},G=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"\u4F7F\u7528\u5185\u5B58")],-1)),H={class:"el-table__cell"},J={class:"cell"},Q=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"\u4F7F\u7528CPU")],-1)),T={class:"el-table__cell"},W={class:"cell"},Y=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"\u5185\u5B58\u914D\u7F6E")],-1)),Z={class:"el-table__cell"},$={class:"cell"},ee={class:"el-table__row"},se=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"AOF\u662F\u5426\u5F00\u542F")],-1)),te={class:"el-table__cell"},le={class:"cell"},oe=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"RDB\u662F\u5426\u6210\u529F")],-1)),ae={class:"el-table__cell"},ce={class:"cell"},_e=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"Key\u6570\u91CF")],-1)),ie={class:"el-table__cell"},de={class:"cell"},ne=t(()=>e("td",{class:"el-table__cell"},[e("div",{class:"cell"},"\u7F51\u7EDC\u5165\u53E3/\u51FA\u53E3")],-1)),ue={class:"el-table__cell"},re={class:"cell"},me={class:"sm:flex"},he=t(()=>e("div",{class:"mb-10"},"\u547D\u4EE4\u7EDF\u8BA1",-1)),pe={class:"flex h-[300px] items-center"},ve=t(()=>e("div",{class:"mb-10"},"\u5185\u5B58\u4FE1\u606F",-1)),be={class:"flex h-[300px] items-center"},Fe=v({__name:"cache",setup(_){const s=b({}),a=F({commandChartOption:{tooltip:{trigger:"item"},series:[{label:{show:!0},labelLine:{show:!0},type:"pie",radius:"85%",color:["#0D47A1","#1565C0","#1976D2","#1E88E5","#2196F3","#42A5F5","#64B5F6","#90CAF9","#BBDEFB","#E3F2FD","#CAF0F8","#ADE8F4","#90E0EF","#48CAE4","#00B4D8","#0096C7","#0077B6","#023E8A","#03045E","#8ecae6","#98c1d9","#D9ED92","#B5E48C","#99D98C","#76C893","#52B69A","#34A0A4","#168AAD","#1A759F","#1E6091","#184E77","#457b9d"],data:[{value:"",name:""}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},memoryChartOption:{tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",radius:"100%",detail:{formatter:"{value}"},data:[{value:"",name:"\u5185\u5B58\u6D88\u8017"}]}]}});return(async()=>{const c=await p();s.value=c.info,s.value.dbSize=c.dbSize,a.commandChartOption.series[0].data=c.commandStats,a.memoryChartOption.series[0].data[0].value=(c.info.used_memory/1024/1024).toFixed(2),a.memoryChartOption.series[0].detail.formatter="{value}M"})(),(c,Ce)=>{const r=m,d=h;return f(),C("div",D,[o(d,{class:"!border-none",shadow:"never"},{default:i(()=>[e("div",null,[B,e("div",w,[o(r,null,{default:i(()=>[e("table",x,[e("tbody",null,[e("tr",g,[S,e("td",O,[e("div",k,l(s.value.redis_version),1)]),z,e("td",I,[e("div",V,l(s.value.redis_mode=="standalone"?"\u5355\u673A":"\u96C6\u7FA4"),1)]),M,e("td",N,[e("div",P,l(s.value.tcp_port),1)]),R,e("td",U,[e("div",K,l(s.value.connected_clients),1)])]),e("tr",L,[X,e("td",j,[e("div",q,l(s.value.uptime_in_days),1)]),G,e("td",H,[e("div",J,l(s.value.used_memory_human),1)]),Q,e("td",T,[e("div",W,l(s.value.used_cpu_user_children),1)]),Y,e("td",Z,[e("div",$,l(s.value.maxmemory_human),1)])]),e("tr",ee,[se,e("td",te,[e("div",le,l(s.value.aof_enabled==0?"\u5F00\u542F":"\u5173\u95ED"),1)]),oe,e("td",ae,[e("div",ce,l(s.value.aof_enabled=="ok"?"\u6210\u529F":"\u5931\u8D25"),1)]),_e,e("td",ie,[e("div",de,l(s.value.dbSize),1)]),ne,e("td",ue,[e("div",re,l(s.value.instantaneous_input_kbps)+" / "+l(s.value.instantaneous_output_kbps),1)])])])])]),_:1})])])]),_:1}),e("div",me,[o(d,{class:"sm:mr-4 flex-1 !border-none mt-4",shadow:"never"},{default:i(()=>[e("div",null,[he,e("div",pe,[o(u(n),{autoresize:"",option:a.commandChartOption},null,8,["option"])])])]),_:1}),o(d,{class:"flex-1 !border-none mt-4",shadow:"never"},{default:i(()=>[e("div",null,[ve,e("div",be,[o(u(n),{autoresize:"",option:a.memoryChartOption},null,8,["option"])])])]),_:1})])])}}});const Ze=y(Fe,[["__scopeId","data-v-3616f757"]]);export{Ze as default};
