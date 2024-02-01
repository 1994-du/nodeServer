import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{r as l,j as f,E as x,k as I,l as F,q as u,m as a,t as h,n as v,G as H,F as j,y as k,z as B}from"./index-104000c2.js";const T=n=>(k("data-v-5daecdd1"),n=n(),B(),n),D=T(()=>a("h4",null,"防抖",-1)),E=T(()=>a("h4",null,"节流",-1)),N={__name:"debounceThrottling",setup(n){const s=l(""),d=l("");let c=l(""),i=l(""),r,m;const b=function(e){c.value=e,console.log("debounceValShow",c.value)},V=function(e){i.value=e,console.log("throttleValShow",i.value)},g=function(e){r&&clearTimeout(r),r=setTimeout(()=>{b(s.value)},e)},y=function(e){m||(m=setTimeout(()=>{V(d.value),m=null},e))};return(e,t)=>{const p=f("el-input"),_=f("highlightjs"),S=x("focus");return I(),F(j,null,[D,u(p,{clearable:"",type:"text",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),onInput:t[1]||(t[1]=o=>g(1e3))},null,8,["modelValue"]),a("p",null,h(v(c)),1),u(_,{code:`const debounceHandle=function(fn,delay){
    if(debounceTimer){
        clearTimeout(debounceTimer)
    }
    debounceTimer=setTimeout(()=>{
        fn()
    },delay)
}`}),E,H(u(p,{clearable:"",type:"text",modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=o=>d.value=o),onInput:t[3]||(t[3]=o=>y(1e3))},null,8,["modelValue"]),[[S]]),a("p",null,h(v(i)),1),u(_,{code:`const throttleHandle=function(fn,delay){
    if(!throttleTimer){
        throttleTimer=setTimeout(()=>{
            fn()
            throttleTimer=null
        },delay)
    }
}`})],64)}}},q=w(N,[["__scopeId","data-v-5daecdd1"]]);export{q as default};
