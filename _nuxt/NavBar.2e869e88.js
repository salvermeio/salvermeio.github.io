import f from"./MobileMenuButton.6b77ea16.js";import d from"./LinksMenuNav.1c894752.js";import b from"./LogoNavbar.c557b785.js";import v from"./SocialBtn.23f3a265.js";import g from"./AboutPopUp.c0d495b3.js";import h from"./MobileMenu.c2f3680d.js";import{Q as x}from"./disclosure.5410cf4b.js";import{L as a,Z as s,a5 as t,O as w,_ as o,a6 as k,a7 as O,M as B,a2 as M,A as P}from"./runtime-core.esm-bundler.75832562.js";import"./Icon.b0d2fa16.js";import"./app.config.cd7a789a.js";import"./entry.550c88f2.js";import"./Icon.vue.df74b995.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./AboutBtn.e9d5fb01.js";import"./AboutHeader.84610694.js";import"./Footer.a6e66f2d.js";import"./transition.1695ad1c.js";import"./open-closed.a2beb7a6.js";const y={class:"fixed top-0 z-30 w-full"},T={class:"mx-auto max-w-6xl px-2 sm:px-6 lg:px-8"},j={class:"relative flex h-16 items-center justify-between"},L={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},N={class:"absolute inset-y-0 right-0 flex items-center gap-x-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},S={props:{navbar:{type:Object,required:!0}},data(){return{view:{atTopOfPage:!0}}},beforeMount(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll(){window.pageYOffset>0?this.view.atTopOfPage&&(this.view.atTopOfPage=!1):this.view.atTopOfPage||(this.view.atTopOfPage=!0)}}},W=Object.assign(S,{__name:"NavBar",setup(e){return(i,$)=>{const r=f,l=d,c=b,m=v,p=g,u=h;return a(),s("header",y,[t(P(x),{as:"nav",class:M(["w-full transition ease-in-out ui-open:bg-black/50 ui-open:backdrop-blur-xl",{"bg-black/50 backdrop-blur-xl":!i.view.atTopOfPage}])},{default:w(({open:_})=>[o("div",T,[o("div",j,[t(r,{open:_},null,8,["open"]),o("div",L,[t(l,{navigation:e.navbar.navigation},null,8,["navigation"]),t(c)]),o("div",N,[(a(!0),s(k,null,O(e.navbar.links,n=>(a(),B(m,{key:n.name,"social-btn":n,class:"hidden md:block"},null,8,["social-btn"]))),128)),t(p,{about:e.navbar.about},null,8,["about"])])])]),t(u,{navigation:e.navbar},null,8,["navigation"])]),_:1},8,["class"])])}}});export{W as default};
