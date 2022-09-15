import{d as a,A as e,Y as s,o as t,c as l,w as r,h as u,b as c,l as i,t as m,k as d,n as p,r as n,a as f,z as o}from"./index.f454d8a6.js";import{_ as x}from"./u-parse.e7b36706.js";import{_}from"./u-icon.67abb9d0.js";import{_ as v}from"./icon_visit.5f8ba9a3.js";import{b as w,c as h,d as b}from"./news.51b7c944.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";var j=y(a({__name:"news_detail",setup(a){const y=e({});let j="";const g=async a=>{y.value=await w({id:a})};return s((a=>{j=a.id,g(j)})),(a,e)=>{const s=d,w=p,k=n(f("u-parse"),x),I=n(f("u-icon"),_),z=o;return t(),l(s,{class:"news-detail bg-white"},{default:r((()=>[u(" 标题信心 "),c(s,{class:"news-detail-header py-[20rpx] px-[30rpx]"},{default:r((()=>[c(s,{class:"text-3xl font-medium"},{default:r((()=>[i(m(y.value.title),1)])),_:1}),c(s,{class:"flex mt-[20rpx] text-xs"},{default:r((()=>[y.value.author?(t(),l(s,{key:0,class:"mr-[40rpx]"},{default:r((()=>[i("作者: "+m(y.value.author),1)])),_:1})):u("v-if",!0),c(s,{class:"text-muted mr-[40rpx]"},{default:r((()=>[i(m(y.value.createTime),1)])),_:1}),c(s,{class:"flex items-center text-muted"},{default:r((()=>[c(w,{src:v,class:"w-[30rpx] h-[30rpx]"}),c(s,{class:"ml-[10rpx]"},{default:r((()=>[i(m(y.value.visit),1)])),_:1})])),_:1})])),_:1})])),_:1}),u(" 咨询内容 "),c(s,{class:"news-detail-section bg-white p-[20rpx]"},{default:r((()=>[u(" 摘要 "),y.value.summary?(t(),l(s,{key:0,class:"summary p-[20rpx] text-base"},{default:r((()=>[i(" 摘要: "+m(y.value.summary),1)])),_:1})):u("v-if",!0),u(" 封面 "),y.value.image?(t(),l(s,{key:1,class:"mt-[20rpx]"},{default:r((()=>[c(w,{class:"w-full",src:y.value.image,mode:"widthFix"},null,8,["src"])])),_:1})):u("v-if",!0),u(" 内容 "),c(s,{class:"mt-[20rpx]"},{default:r((()=>[c(k,{html:y.value.content},null,8,["html"])])),_:1})])),_:1}),c(s,{class:"panel-btn flex items-center px-[34rpx]",onClick:e[0]||(e[0]=a=>(async a=>{try{y.value.collect?await h({articleId:a}):await b({articleId:a}),g(j)}catch(e){}})(y.value.id))},{default:r((()=>[c(I,{name:y.value.collect?"star-fill":"star",size:"36"},null,8,["name"]),c(z,{class:"ml-[10rpx]"},{default:r((()=>[i("收藏")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-3e7e0c12"]]);export{j as default};
