import{Y as d}from"./element-plus.f93fd622.js";import{d as l,e as p,o as m,L as i,u as c,k as f}from"./@vue.cab01781.js";const _=l({__name:"index",props:{startTime:{default:""},endTime:{default:""}},emits:["update:startTime","update:endTime"],setup(o,{emit:e}){const r=o,a=p({get:()=>[r.startTime,r.endTime],set:t=>{t===null?(e("update:startTime",""),e("update:endTime","")):(e("update:startTime",t[0]),e("update:endTime",t[1]))}});return(t,n)=>{const u=d;return m(),i(u,{modelValue:c(a),"onUpdate:modelValue":n[0]||(n[0]=s=>f(a)?a.value=s:null),type:"daterange","range-separator":"-",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",clearable:""},null,8,["modelValue"])}}});export{_};
