import{l as u,b as i,d as p,e as r,T as _}from"./entry.550c88f2.js";import{n as m}from"./app.config.cd7a789a.js";import{F as l,h as d,G as f,u as y,A as g,L,Z as b,_ as S,$ as h}from"./runtime-core.esm-bundler.75832562.js";import{_ as j}from"./_plugin-vue_export-helper.c27b6911.js";const v=l({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(n,t){const o=await u[n.name]().then(e=>e.default||e);return()=>d(o,t.attrs,t.slots)}}),x=l({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(n,t){const o=y("_route"),e=o===m()?i():o,a=f(()=>g(n.name)??e.meta.layout??"default");return()=>{const s=a.value&&a.value in u,c=e.meta.layoutTransition??p;return r(_,s&&c,{default:()=>r(v,s&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),P=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));let T=new Date().getFullYear();const O={data(){return{year:T}}},$={class:"text-md text-center text-zinc-50"};function B(n,t,o,e,a,s){return L(),b("div",null,[S("p",$,h("Salguento 👾 "+a.year),1)])}const F=j(O,[["render",B]]),R=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{R as F,x as _,F as a,P as l};
