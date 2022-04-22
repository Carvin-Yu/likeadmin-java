var E=Object.defineProperty,$=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var B=(t,o,a)=>o in t?E(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,g=(t,o)=>{for(var a in o||(o={}))K.call(o,a)&&B(t,a,o[a]);if(V)for(var a of V(o))T.call(o,a)&&B(t,a,o[a]);return t},w=(t,o)=>$(t,A(o));import{i as z,j as q,k as N,l as S}from"./auth.a312480e.js";import{F as U}from"./index.692c64fd.js";import{_ as M,u as I,l as P}from"./index.b48d4574.js";import{d as j,q as C,a7 as x,r as G,o as H,a as u,b as J,c as L,f as l,w as s,e as O,m as F}from"./vendor.d574ef89.js";const Q=j({components:{FooterBtns:U},setup(){const{route:t,router:o}=I(),a=C(null),f=C(null),d=C(null),{formData:r,menu:c}=x(G({formData:{name:"",remark:"",auth_keys:[],isDisable:0,sort:""},menu:{permissionsTree:[],allAuthKeys:[]}})),v={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:["blur"]}]},_=()=>{var e;(e=a.value)==null||e.validate(m=>{!m||(d.value?p():k())})},i=()=>{z().then(e=>{c.value.permissionsTree=e;const m=P(e,[],"sons");c.value.allAuthKeys=m.map(h=>h.auth_key)}).catch(e=>{console.log("err",e)})},k=()=>{q(g({},r.value)).then(e=>{console.log("res",e),setTimeout(()=>{o.back()},500)}).catch(e=>{console.log("err",e)})},p=()=>{N(w(g({},r.value),{id:d.value})).then(e=>{console.log("res",e),setTimeout(()=>{o.back()},500)}).catch(e=>{console.log("err",e)})},y=()=>{S({id:d.value}).then(e=>{var m;console.log("res",e),r.value=e,(m=f.value)==null||m.setCheckedKeys(e.auth_keys)}).catch(e=>{console.log("err",e)})},D=(e,m)=>{if(console.log(e),!e.auth_key)return;const h=r.value.auth_keys.findIndex(R=>R==e.auth_key);if(m){h==-1&&r.value.auth_keys.push(e.auth_key);return}h!=-1&&r.value.auth_keys.splice(h,1)},b=()=>{var e;(e=f.value)==null||e.setCheckedKeys(c.value.allAuthKeys)},n=()=>{var e;(e=f.value)==null||e.setCheckedKeys([])};return H(()=>{const e=t.query;e.id&&(d.value=e.id*1,y()),i()}),{id:d,formData:r,menu:c,formRef:a,treeRef:f,rules:v,getMenu:i,roleAdd:k,roleEdit:p,roleDetail:y,onSubmit:_,handlePermissionsCheckChange:D,close:n,allSelect:b}}}),W={class:"role-edit"},X={class:"flex",style:{"margin-top":"3px"}},Y=F(" \u5168\u9009 "),Z=F(" \u5168\u4E0D\u9009 "),ee=F("\u4FDD\u5B58");function oe(t,o,a,f,d,r){const c=u("el-page-header"),v=u("el-card"),_=u("el-input"),i=u("el-form-item"),k=u("el-switch"),p=u("el-button"),y=u("el-tree"),D=u("el-form"),b=u("footer-btns");return J(),L("div",W,[l(v,{shadow:"never"},{default:s(()=>[l(c,{content:t.id?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272",onBack:o[0]||(o[0]=n=>t.$router.back())},null,8,["content"])]),_:1}),l(v,{shadow:"never",class:"m-t-15"},{default:s(()=>[l(D,{ref:"formRef",rules:t.rules,class:"ls-form",model:t.formData,"label-width":"150px",size:"small"},{default:s(()=>[l(i,{label:"\u540D\u79F0",prop:"name"},{default:s(()=>[l(_,{modelValue:t.formData.name,"onUpdate:modelValue":o[1]||(o[1]=n=>t.formData.name=n),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),l(i,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[l(_,{modelValue:t.formData.remark,"onUpdate:modelValue":o[2]||(o[2]=n=>t.formData.remark=n),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea",autosize:{minRows:4,maxRows:6}},null,8,["modelValue"])]),_:1}),l(i,{label:"\u6392\u5E8F"},{default:s(()=>[l(_,{modelValue:t.formData.sort,"onUpdate:modelValue":o[3]||(o[3]=n=>t.formData.sort=n),placeholder:"\u8BF7\u8F93\u5165",type:"number"},null,8,["modelValue"])]),_:1}),l(i,{label:"\u72B6\u6001"},{default:s(()=>[l(k,{modelValue:t.formData.isDisable,"onUpdate:modelValue":o[4]||(o[4]=n=>t.formData.isDisable=n),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1}),l(i,{label:"\u6743\u9650",prop:"auth_keys"},{default:s(()=>[O("div",X,[l(p,{type:"text",size:"mini",onClick:o[5]||(o[5]=n=>t.allSelect())},{default:s(()=>[Y]),_:1}),l(p,{type:"text",size:"mini",onClick:o[6]||(o[6]=n=>t.close())},{default:s(()=>[Z]),_:1})]),l(y,{ref:"treeRef",data:t.menu.permissionsTree,"node-key":"auth_key","default-expand-all":"",icon:"ArrowRight",props:{children:"children",label:"menuName"},"empty-text":"","show-checkbox":"",onCheckChange:t.handlePermissionsCheckChange},null,8,["data","onCheckChange"])]),_:1})]),_:1},8,["rules","model"])]),_:1}),l(b,null,{default:s(()=>[l(p,{type:"primary",size:"small",onClick:t.onSubmit},{default:s(()=>[ee]),_:1},8,["onClick"])]),_:1})])}var ue=M(Q,[["render",oe],["__scopeId","data-v-652b7e5a"]]);export{ue as default};