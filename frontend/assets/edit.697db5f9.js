var G=Object.defineProperty;var h=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var U=(p,t,d)=>t in p?G(p,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):p[t]=d,C=(p,t)=>{for(var d in t||(t={}))I.call(t,d)&&U(p,d,t[d]);if(h)for(var d of h(t))L.call(t,d)&&U(p,d,t[d]);return p};import{u as z,m as R,n as q,o as P,p as j}from"./index.35939a80.js";import{F as H}from"./index.e175725f.js";import J from"./index.65104ac9.js";import{d as K,y as w,A as Q,r,a as v,i as e,w as a,o as f,_ as W,f as N,e as V,k as m}from"./vendor.26ab8f26.js";const X={class:"menu-edit"},Y={class:"m-t-15"},Z=m(" \u76EE\u5F55 "),ee=m(" \u83DC\u5355 "),ue=m(" \u6309\u94AE "),le={key:0},ae={class:"flex"},oe={key:1},te={key:2},ne={key:3},de={key:4},se=m("\u7F13\u5B58"),me=m("\u4E0D\u7F13\u5B58"),ie={key:5},re=m("\u663E\u793A"),pe=m("\u9690\u85CF"),_e=m("\u6B63\u5E38"),ve=m("\u505C\u7528"),fe=m("\u4FDD\u5B58"),Ce=K({setup(p){const t={CATALOG:"M",MENU:"C",BUTTON:"A"},{router:d,route:k}=z(),F=k.query.id,y=w(),D=w([]),l=w({pid:"",menuType:"M",menuName:"",menuIcon:"",menuSort:"",perms:"",paths:"",component:"",selected:"",params:"",isShow:1,isCache:0,isDisable:0}),A=async s=>{l.value=await R({id:s}),E()},E=async()=>{const s=await q()||[];D.value=[{id:0,menuName:"\u9876\u7EA7"},...s]},M=async()=>{await P(C({},l.value)),d.back()},g=async()=>{await j(C({},l.value)),d.back()},O=()=>{var s,u;(u=(s=y.value)==null?void 0:s.validate())==null||u.then(B=>{!B||(F?g():M())})},b=s=>{t.value=s};return Q(()=>{F&&A(F),E()}),(s,u)=>{const B=r("el-page-header"),T=r("el-card"),i=r("el-radio"),c=r("el-radio-group"),n=r("el-form-item"),S=r("el-cascader"),_=r("el-input"),x=r("el-form"),$=r("el-button");return f(),v("div",X,[e(T,{shadow:"never"},{default:a(()=>[e(B,{content:W(F)?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355",onBack:u[0]||(u[0]=o=>s.$router.back())},null,8,["content"])]),_:1}),e(T,{class:"m-t-15",shadow:"never"},{default:a(()=>[N("div",Y,[e(x,{ref_key:"formRefs",ref:y,model:l.value,"label-width":"120px",size:"small",style:{"max-width":"460px"}},{default:a(()=>[e(n,{label:"\u83DC\u5355\u7C7B\u578B"},{default:a(()=>[e(c,{modelValue:l.value.menuType,"onUpdate:modelValue":u[4]||(u[4]=o=>l.value.menuType=o)},{default:a(()=>[e(i,{label:t.CATALOG,onChange:u[1]||(u[1]=o=>b(t.CATALOG))},{default:a(()=>[Z]),_:1},8,["label"]),e(i,{label:t.MENU,onChange:u[2]||(u[2]=o=>b(t.MENU))},{default:a(()=>[ee]),_:1},8,["label"]),e(i,{label:t.BUTTON,onChange:u[3]||(u[3]=o=>b(t.BUTTON))},{default:a(()=>[ue]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u7236\u7EA7\u83DC\u5355"},{default:a(()=>[e(S,{modelValue:l.value.pid,"onUpdate:modelValue":u[5]||(u[5]=o=>l.value.pid=o),style:{width:"340px"},options:D.value,props:{checkStrictly:!0,emitPath:!1,label:"menuName",value:"id"},clearable:""},null,8,["modelValue","options"])]),_:1}),l.value.menuType==t.BUTTON==""?(f(),v("div",le,[e(n,{label:"\u8BF7\u9009\u62E9\u56FE\u6807"},{default:a(()=>[N("div",ae,[e(J,{icon:l.value.menuIcon,"onUpdate:icon":u[6]||(u[6]=o=>l.value.menuIcon=o)},null,8,["icon"])])]),_:1})])):V("",!0),e(n,{label:"\u83DC\u5355\u540D\u79F0"},{default:a(()=>[e(_,{modelValue:l.value.menuName,"onUpdate:modelValue":u[7]||(u[7]=o=>l.value.menuName=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l.value.menuType==t.BUTTON?(f(),v("div",oe,[e(n,{label:"\u83DC\u5355\u6743\u9650\u5B57\u7B26"},{default:a(()=>[e(_,{modelValue:l.value.perms,"onUpdate:modelValue":u[8]||(u[8]=o=>l.value.perms=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})])):V("",!0),l.value.menuType==t.BUTTON==""?(f(),v("div",te,[e(n,{label:"\u8DEF\u7531\u5730\u5740"},{default:a(()=>[e(_,{modelValue:l.value.paths,"onUpdate:modelValue":u[9]||(u[9]=o=>l.value.paths=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1})])):V("",!0),l.value.menuType==t.MENU?(f(),v("div",ne,[e(n,{label:"\u7EC4\u4EF6\u8DEF\u5F84"},{default:a(()=>[e(_,{modelValue:l.value.component,"onUpdate:modelValue":u[10]||(u[10]=o=>l.value.component=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u83DC\u5355\u6743\u9650\u5B57\u7B26"},{default:a(()=>[e(_,{modelValue:l.value.perms,"onUpdate:modelValue":u[11]||(u[11]=o=>l.value.perms=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u8DEF\u7531\u53C2\u6570"},{default:a(()=>[e(_,{modelValue:l.value.params,"onUpdate:modelValue":u[12]||(u[12]=o=>l.value.params=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u9009\u4E2D\u83DC\u5355"},{default:a(()=>[e(_,{modelValue:l.value.selected,"onUpdate:modelValue":u[13]||(u[13]=o=>l.value.selected=o),"show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u9009\u4E2D\u83DC\u5355\u8DEF\u5F84"},null,8,["modelValue"])]),_:1})])):V("",!0),e(n,{label:"\u83DC\u5355\u6392\u5E8F"},{default:a(()=>[e(_,{modelValue:l.value.menuSort,"onUpdate:modelValue":u[14]||(u[14]=o=>l.value.menuSort=o),"show-word-limit":"",type:"number",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F"},null,8,["modelValue"])]),_:1}),l.value.menuType==t.MENU?(f(),v("div",de,[e(n,{label:"\u662F\u5426\u7F13\u5B58"},{default:a(()=>[e(c,{modelValue:l.value.isCache,"onUpdate:modelValue":u[15]||(u[15]=o=>l.value.isCache=o)},{default:a(()=>[e(i,{label:1},{default:a(()=>[se]),_:1}),e(i,{label:0},{default:a(()=>[me]),_:1})]),_:1},8,["modelValue"])]),_:1})])):V("",!0),l.value.menuType==t.BUTTON==""?(f(),v("div",ie,[e(n,{label:"\u663E\u793A\u72B6\u6001"},{default:a(()=>[e(c,{modelValue:l.value.isShow,"onUpdate:modelValue":u[16]||(u[16]=o=>l.value.isShow=o)},{default:a(()=>[e(i,{label:1},{default:a(()=>[re]),_:1}),e(i,{label:0},{default:a(()=>[pe]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u83DC\u5355\u72B6\u6001"},{default:a(()=>[e(c,{modelValue:l.value.isDisable,"onUpdate:modelValue":u[17]||(u[17]=o=>l.value.isDisable=o)},{default:a(()=>[e(i,{label:0},{default:a(()=>[_e]),_:1}),e(i,{label:1},{default:a(()=>[ve]),_:1})]),_:1},8,["modelValue"])]),_:1})])):V("",!0)]),_:1},8,["model"])])]),_:1}),e(H,null,{default:a(()=>[e($,{type:"primary",size:"small",onClick:O},{default:a(()=>[fe]),_:1})]),_:1})])}}});export{Ce as default};
