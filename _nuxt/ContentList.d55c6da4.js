import n from"./ContentQuery.6ec00a4f.js";import{F as c,U as h,h as p}from"./runtime-core.esm-bundler.75832562.js";import"./app.config.cd7a789a.js";import"./asyncData.d4928b05.js";import"./entry.550c88f2.js";import"./query.1aa74179.js";import"./cookie.43cdc36d.js";import"./query.c3f7607a.js";import"./utils.6ccb8667.js";const N=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=h(),{path:f,query:r}=u,m={...r||{},path:f||(r==null?void 0:r.path)||"/"},a=(e,o)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:o},null,2));return p(n,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):({data:e})=>a("default",e),empty:e=>t!=null&&t.empty?t.empty(e):a("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):a("not-found",e==null?void 0:e.data)}})}});export{N as default};
