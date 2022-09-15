import{o as e,c as t,w as n,b as i,p as o,q as a,G as r,h as s,k as c,A as l,d,a9 as u,u as p,ac as f,m,B as g,Q as h,ab as v,a3 as y,ad as _,ae as w,Y as S,M as k,g as x,l as b,t as I,e as T,F as C,y as M,a8 as L,af as V,L as A,r as P,a as B,i as O}from"./index.ef372d98.js";import{_ as N}from"./u-image.48553c64.js";import{_ as U}from"./u-icon.7d02c0ea.js";import{_ as E,a as W}from"./u-form-item.3e4ea6bc.js";import{_ as R}from"./u-verification-code.5c5fbd7d.js";import{_ as D}from"./u-form.33540811.js";import{_ as j}from"./u-checkbox.23ce3001.js";import{_ as J}from"./u-button.7e0d03be.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import{i as q,g as z,O as $,l as F}from"./account.0621c489.js";import{S as G}from"./appEnums.a2ba827b.js";import{c as Z}from"./util.ed3f348a.js";var H=Q({name:"u-divider",props:{halfWidth:{type:[Number,String],default:150},borderColor:{type:String,default:"#dcdfe6"},type:{type:String,default:"primary"},color:{type:String,default:"#909399"},fontSize:{type:[Number,String],default:26},bgColor:{type:String,default:"#ffffff"},height:{type:[Number,String],default:"auto"},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0},useSlot:{type:Boolean,default:!0}},computed:{lineStyle(){let e={};return-1!=String(this.halfWidth).indexOf("%")?e.width=this.halfWidth:e.width=this.halfWidth+"rpx",this.borderColor&&(e.borderColor=this.borderColor),e}},methods:{click(){this.$emit("click")}}},[["render",function(l,d,u,p,f,m){const g=c;return e(),t(g,{class:"u-divider",style:a({height:"auto"==u.height?"auto":u.height+"rpx",backgroundColor:u.bgColor,marginBottom:u.marginBottom+"rpx",marginTop:u.marginTop+"rpx"}),onClick:m.click},{default:n((()=>[i(g,{class:o(["u-divider-line",[u.type?"u-divider-line--bordercolor--"+u.type:""]]),style:a([m.lineStyle])},null,8,["class","style"]),u.useSlot?(e(),t(g,{key:0,class:"u-divider-text",style:a({color:u.color,fontSize:u.fontSize+"rpx"})},{default:n((()=>[r(l.$slots,"default",{},void 0,!0)])),_:3},8,["style"])):s("v-if",!0),i(g,{class:o(["u-divider-line",[u.type?"u-divider-line--bordercolor--"+u.type:""]]),style:a([m.lineStyle])},null,8,["class","style"])])),_:3},8,["style","onClick"])}],["__scopeId","data-v-ba53c472"]]);var X,Y={exports:{}};X=window,Y.exports=function(e,t){if(!e.jWeixin){var n,i={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},o=function(){var e={};for(var t in i)e[i[t]]=t;return e}(),a=e.document,r=a.title,s=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),l=!(!c.match("mac")&&!c.match("win")),d=-1!=s.indexOf("wxdebugger"),u=-1!=s.indexOf("micromessenger"),p=-1!=s.indexOf("android"),f=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),m=(n=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/))?n[1]:"",g={initStartTime:P(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:f?1:p?2:-1,clientVersion:m,url:encodeURIComponent(location.href)},v={},y={_completes:[]},_={state:0,data:{}};B((function(){g.initEndTime=P()}));var w=!1,S=[],k={config:function(t){A("config",v=t);var n=!1!==v.check;B((function(){if(n)I(i.config,{verifyJsApiList:V(v.jsApiList),verifyOpenTagList:V(v.openTagList)},function(){y._complete=function(e){g.preVerifyEndTime=P(),_.state=1,_.data=e},y.success=function(e){h.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):_.state=-1};var e=y._completes;return e.push((function(){!function(){if(!(l||d||v.debug||m<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=v.appId,h.initTime=g.initEndTime-g.initStartTime,h.preVerifyTime=g.preVerifyEndTime-g.preVerifyStartTime,k.getNetworkType({isInnerInvoke:!0,success:function(t){h.networkType=t.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=n}})}}()})),y.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();y._completes=[]},y}()),g.preVerifyStartTime=P();else{_.state=1;for(var e=y._completes,t=0,o=e.length;t<o;++t)e[t]();y._completes=[]}})),k.invoke||(k.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,C(n),i)},k.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=_.state?e():(y._completes.push(e),!u&&v.debug&&e())},error:function(e){m<"6.0.2"||(-1==_.state?e(_.data):y._fail=e)},checkJsApi:function(e){I("checkJsApi",{jsApiList:V(e.jsApiList)},(e._complete=function(e){if(p){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=o[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){T(i.onMenuShareTimeline,{complete:function(){I("shareTimeline",{title:e.title||r,desc:e.title||r,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){T(i.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?I("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):I("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){T(i.onMenuShareQQ,{complete:function(){I("shareQQ",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){T(i.onMenuShareWeibo,{complete:function(){I("shareWeiboApp",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){T(i.onMenuShareQZone,{complete:function(){I("shareQZone",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){I("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){I("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){I("startRecord",{},e)},stopRecord:function(e){I("stopRecord",{},e)},onVoiceRecordEnd:function(e){T("onVoiceRecordEnd",e)},playVoice:function(e){I("playVoice",{localId:e.localId},e)},pauseVoice:function(e){I("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){I("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){T("onVoicePlayEnd",e)},uploadVoice:function(e){I("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){I("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){I("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){I("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(p){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(n){}}},e))},getLocation:function(e){},previewImage:function(e){I(i.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){I("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){I("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===w?(w=!0,I("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(w=!1,0<S.length){var t=S.shift();wx.getLocalImgData(t)}},e))):S.push(e)},getNetworkType:function(e){I("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){I("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){I(i.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){I("hideOptionMenu",{},e)},showOptionMenu:function(e){I("showOptionMenu",{},e)},closeWindow:function(e){I("closeWindow",{},e=e||{})},hideMenuItems:function(e){I("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){I("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){I("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){I("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){I("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(f){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))},openAddress:function(e){I(i.openAddress,{},(e._complete=function(e){var t;(t=e).postalCode=t.addressPostalCode,delete t.addressPostalCode,t.provinceName=t.proviceFirstStageName,delete t.proviceFirstStageName,t.cityName=t.addressCitySecondStageName,delete t.addressCitySecondStageName,t.countryName=t.addressCountiesThirdStageName,delete t.addressCountiesThirdStageName,t.detailInfo=t.addressDetailInfo,delete t.addressDetailInfo,e=t},e))},openProductSpecificView:function(e){I(i.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var r=t[o],s={card_id:r.cardId,card_ext:r.cardExt};n.push(s)}I(i.addCard,{card_list:n},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){I("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,n=[],o=0,a=t.length;o<a;++o){var r=t[o],s={card_id:r.cardId,code:r.code};n.push(s)}I(i.openCard,{card_list:n},e)},consumeAndShareCard:function(e){I(i.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){I(i.chooseWXPay,M(e),e)},openEnterpriseRedPacket:function(e){I(i.openEnterpriseRedPacket,M(e),e)},startSearchBeacons:function(e){I(i.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){I(i.stopSearchBeacons,{},e)},onSearchBeacons:function(e){T(i.onSearchBeacons,e)},openEnterpriseChat:function(e){I("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){I("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){I("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(p){var t=e.extraData;if(t)try{e.extraData=JSON.parse(t)}catch(n){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},B((function(){I("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){B((function(){I("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){B((function(){I("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){B((function(){I("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){B((function(){I("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){B((function(){I("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(t){B((function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},x=1,b={};return a.addEventListener("error",(function(e){if(!p){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=x++,t["wx-id"]=o),b[o])return;b[o]=!0,wx.ready((function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})}))}}}),!0),a.addEventListener("load",(function(e){if(!p){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(b[i]=!1)}}}),!0),t&&(e.wx=e.jWeixin=k),k}function I(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,C(n),(function(e){L(t,e,i)})):A(t,i)}function T(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,(function(e){i&&i.trigger&&i.trigger(e),L(t,e,n)})):A(t,i||n)}function C(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function M(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function L(e,t,n){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=o[n];i&&(n=i);var a="ok";if(t){var r=t.indexOf(":");"confirm"==(a=t.substring(r+1))&&(a="ok"),"failed"==a&&(a="fail"),-1!=a.indexOf("failed_")&&(a=a.substring(7)),-1!=a.indexOf("fail_")&&(a=a.substring(5)),"access denied"!=(a=(a=a.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=a||(a="permission denied"),"config"==n&&"function not exist"==a&&(a="ok"),""==a&&(a="fail")}return n+":"+a}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",v.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var a=i.indexOf(":");switch(i.substring(a+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function V(e){if(e){for(var t=0,n=e.length;t<n;++t){var o=e[t],a=i[o];a&&(e[t]=a)}return e}}function A(e,t){if(!(!v.debug||t&&t.isInnerInvoke)){var n=o[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function P(){return(new Date).getTime()}function B(t){u&&(e.WeixinJSBridge?t():a.addEventListener&&a.addEventListener("WeixinJSBridgeReady",t,!1))}}(X);var K=Y.exports;const ee={getSignLink:()=>(void 0!==window.signLink&&""!==window.signLink||(window.signLink=location.href.split("#")[0]),q()?location.href.split("#")[0]:window.signLink),getUrl(){z().then((e=>{location.href=e.url}))},authLogin:e=>new Promise(((t,n)=>{$({code:e}).then((e=>{t(e)})).catch((e=>{n(e)}))})),ready:()=>new Promise((e=>{K.ready((()=>{e("success")}))})),share(e){this.ready().then((()=>{const{shareTitle:t,shareLink:n,shareImage:i,shareDesc:o}=e;K.updateTimelineShareData({title:t,link:n,imgUrl:i}),K.updateAppMessageShareData({title:t,link:n,imgUrl:i,desc:o}),K.onMenuShareWeibo({title:t,link:n,imgUrl:i,desc:o})}))},getAddress(){return new Promise(((e,t)=>{this.ready().then((()=>{K.openAddress({success:t=>{e(t)},fail:e=>{t(e)}})}))}))},getLocation(){return new Promise(((e,t)=>{this.ready().then((()=>{K.getLocation({type:"gcj02",success:t=>{e(t)},fail:e=>{t(e)}})}))}))}};var te=(e=>(e.MOBILE="mobile",e.ACCOUNT="account",e.MNP="mnp",e))(te||{}),ne=(e=>(e[e.ACCOUNT=1]="ACCOUNT",e[e.MOBILE=2]="MOBILE",e))(ne||{});const ie=d({__name:"login",setup(o){const a=l(!0),r=u(),d=p(),Q=f(),q=l(),z=l(""),$=l(!1),Y=m({scene:"",username:"",password:"",code:"",mobile:""}),K=e=>{z.value=e},ie=async()=>{var e,t;if(!Y.mobile)return uni.$u.toast("请输入手机号码");(null==(e=Q.value)?void 0:e.canGetCode)&&(await V({scene:G.LOGIN,mobile:Y.mobile}),uni.$u.toast("发送成功"),null==(t=Q.value)||t.start())},oe=(e,t)=>{Y.scene=e,q.value=t},ae=e=>d.getLoginConfig.loginWay.includes(e),re=g((()=>1==d.getLoginConfig.openAgreement)),se=g((()=>1==d.getLoginConfig.openOtherAuth)),ce=g((()=>1==d.getLoginConfig.forceBindMobile)),le=async e=>{const{token:t,isBindMobile:n}=e;if(!n&&ce.value)return r.temToken=t,A({url:"/pages/bind_mobile/bind_mobile"}),void _();r.login(e.token),await r.getUser(),uni.$u.toast("登录成功"),_(),w({success:()=>{const{onLoad:e,options:t}=Z();e&&e(t)}})},{lockFn:de}=function(e){const t=l(!1);return{isLock:t,lockFn:async(...n)=>{if(!t.value){t.value=!0;try{const i=await e(...n);return t.value=!1,i}catch(X){throw t.value=!1,X}}}}}((async(e,t)=>{if(!$.value&&re.value)return uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》");if("account"==e){if(!Y.username)return uni.$u.toast("请输入账号/手机号码");if(!Y.password)return uni.$u.toast("请输入密码")}if("mobile"==e){if(!Y.mobile)return uni.$u.toast("请输入手机号码");if(!Y.code)return uni.$u.toast("请输入验证码")}const n={...Y,scene:e};t&&(n.code=t),y({title:"请稍后..."});try{const e=await F(n);le(e)}catch(i){throw _(),new Error(i)}})),ue=async()=>{a.value&&ee.getUrl()};return h((()=>d.getLoginConfig),(e=>{e.loginWay&&(q.value=e.loginWay[0],Y.scene=te[ne[q.value]])}),{immediate:!0}),v((async()=>{try{r.isLogin&&(y({title:"请稍后..."}),await r.getUser(),_(),w())}catch(e){_()}})),S((async e=>{if(r.isLogin)return void k({url:"/pages/index/index"});const{code:t}=e;if(t){y({title:"请稍后..."});try{const e=await ee.authLogin(t);le(e)}catch(n){throw _(),new Error(n)}}})),(o,a)=>{const r=P(B("u-image"),N),l=c,u=P(B("u-icon"),U),p=P(B("u-input"),E),f=P(B("u-form-item"),W),m=O,g=P(B("u-verification-code"),R),h=P(B("u-form"),D),v=P(B("u-checkbox"),j),y=P(B("u-button"),J),_=P(B("u-divider"),H);return e(),t(l,{class:"bg-white login min-h-full flex flex-col items-center px-[40rpx] pt-[80rpx] box-border"},{default:n((()=>[i(l,null,{default:n((()=>[i(r,{src:x(d).config.website.logo,mode:"widthFix",height:"160",width:"160"},null,8,["src"])])),_:1}),i(l,{class:"mt-4"},{default:n((()=>[b(I(x(d).config.website.name),1)])),_:1}),i(l,{class:"w-full mt-[60rpx] pb-[60rpx]"},{default:n((()=>[i(h,{borderBottom:""},{default:n((()=>[1==q.value&&ae(1)?(e(),T(C,{key:0},[i(f,{borderBottom:""},{default:n((()=>[i(u,{class:"mr-2",size:36,name:"/static/images/icon/icon_user.png"}),i(p,{class:"flex-1",modelValue:Y.username,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.username=e),border:!1,placeholder:"请输入账号/手机号码"},null,8,["modelValue"])])),_:1}),i(f,{borderBottom:""},{default:n((()=>[i(u,{class:"mr-2",size:36,name:"/static/images/icon/icon_password.png"}),i(p,{class:"flex-1",modelValue:Y.password,"onUpdate:modelValue":a[1]||(a[1]=e=>Y.password=e),type:"password",placeholder:"请输入密码",border:!1},null,8,["modelValue"]),i(m,{url:"/pages/forget_pwd/forget_pwd","hover-class":"none"},{default:n((()=>[i(l,{class:"border-l border-solid border-0 border-light pl-3 text-muted leading-4 ml-3"},{default:n((()=>[b(" 忘记密码？ ")])),_:1})])),_:1})])),_:1})],64)):s("v-if",!0),2==q.value&&ae(2)?(e(),T(C,{key:1},[i(f,{borderBottom:""},{default:n((()=>[i(u,{class:"mr-2",size:36,name:"/static/images/icon/icon_mobile.png"}),i(p,{class:"flex-1",modelValue:Y.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>Y.mobile=e),border:!1,placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1}),i(f,{borderBottom:""},{default:n((()=>[i(u,{class:"mr-2",size:36,name:"/static/images/icon/icon_code.png"}),i(p,{class:"flex-1",modelValue:Y.code,"onUpdate:modelValue":a[3]||(a[3]=e=>Y.code=e),placeholder:"请输入验证码",border:!1},null,8,["modelValue"]),i(l,{class:"border-l border-solid border-0 border-light pl-3 text-muted leading-4 ml-3 w-[180rpx]",onClick:ie},{default:n((()=>[i(g,{ref_key:"uCodeRef",ref:Q,seconds:60,onChange:K,"change-text":"x秒"},null,512),b(" "+I(z.value),1)])),_:1})])),_:1})],64)):s("v-if",!0)])),_:1}),x(re)?(e(),t(l,{key:0,class:"mt-[40rpx]"},{default:n((()=>[i(v,{modelValue:$.value,"onUpdate:modelValue":a[6]||(a[6]=e=>$.value=e),shape:"circle"},{default:n((()=>[i(l,{class:"text-xs flex"},{default:n((()=>[b(" 已阅读并同意 "),i(m,{onClick:a[4]||(a[4]=M((()=>{}),["stop"])),class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=service"},{default:n((()=>[b(" 《服务协议》 ")])),_:1}),b(" 和"),i(m,{onClick:a[5]||(a[5]=M((()=>{}),["stop"])),class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=privacy"},{default:n((()=>[b(" 《隐私协议》 ")])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})):s("v-if",!0),i(l,{class:"mt-[60rpx]"},{default:n((()=>[i(y,{type:"primary",shape:"circle",onClick:a[7]||(a[7]=e=>x(de)(Y.scene))},{default:n((()=>[b(" 登 录 ")])),_:1})])),_:1}),i(l,{class:"text-content flex justify-between mt-[40rpx]"},{default:n((()=>[i(l,{class:"flex-1"},{default:n((()=>[2==q.value&&ae(1)?(e(),t(l,{key:0,onClick:a[8]||(a[8]=e=>oe("account",1))},{default:n((()=>[b(" 账号密码登录 ")])),_:1})):s("v-if",!0),1==q.value&&ae(2)?(e(),t(l,{key:1,onClick:a[9]||(a[9]=e=>oe("mobile",2))},{default:n((()=>[b(" 短信验证码登录 ")])),_:1})):s("v-if",!0)])),_:1}),i(m,{url:"/pages/register/register","hover-class":"none"},{default:n((()=>[b("注册账号")])),_:1})])),_:1}),x(se)?(e(),t(l,{key:1,class:"mt-[80rpx]"},{default:n((()=>{return[i(_,null,{default:n((()=>[b("第三方登录")])),_:1}),L("div",{class:"flex justify-center mt-[40rpx]"},[(t=1,d.getLoginConfig.autoLoginAuth.includes(t)?(e(),T("div",{key:0,class:"flex flex-col items-center",onClick:ue},[L("img",{src:"/assets/icon_wx.a848c744.png",class:"w-[80rpx] h-[80rpx]"}),L("div",{class:"text-sm mt-[10px]"},"微信登录")])):s("v-if",!0))])];var t})),_:1})):s("v-if",!0)])),_:1})])),_:1})}}});var oe=Q(ie,[["__scopeId","data-v-06d3f9c6"]]);export{oe as default};
