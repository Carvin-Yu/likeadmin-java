import{H as u}from"./highlight.js.4ebdf9a4.js";import{d as c,r as d,w as h,e as t,h as g}from"./@vue.791b8507.js";var i=c({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(e){var a=d(e.language);h(function(){return e.language},function(n){a.value=n});var r=t(function(){return e.autodetect||!a.value}),o=t(function(){return!r.value&&!u.getLanguage(a.value)});return{className:t(function(){return o.value?"":"hljs "+a.value}),highlightedCode:t(function(){var n;if(o.value)return console.warn('The language "'+a.value+'" you specified could not be found.'),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(r.value){var l=u.highlightAuto(e.code);return a.value=(n=l.language)!==null&&n!==void 0?n:"",l.value}return(l=u.highlight(e.code,{language:a.value,ignoreIllegals:e.ignoreIllegals})).value})}},render:function(){return g("pre",{},[g("code",{class:this.className,innerHTML:this.highlightedCode})])}}),f={install:function(e){e.component("highlightjs",i)},component:i};export{f as o};
