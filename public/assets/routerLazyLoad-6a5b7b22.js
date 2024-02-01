import{_ as n}from"./_plugin-vue_export-helper-c27b6911.js";import{j as t,k as s,l as a,q as c,F as r,y as d,z as i,m as p}from"./index-104000c2.js";const _={},l=e=>(d("data-v-177af402"),e=e(),i(),e),m=l(()=>p("h4",null,"路由懒加载",-1));function u(e,f){const o=t("highlightjs");return s(),a(r,null,[m,c(o,{code:e.$stripIndent`
        将不同的路由对应的文件打包成一个个的js代码块
        1.component:resolve=>require(['@/index.vue'],resolve)
        2.component:()=>import('@/index.vue')
        3.const index =()=>import('@/index.vue'); component:index
        4.import index from '@/index.vue'; component:index
    `},null,8,["code"])],64)}const x=n(_,[["render",u],["__scopeId","data-v-177af402"]]);export{x as default};
