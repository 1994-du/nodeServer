import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";import{r as d,b as _,I as i,d as f,j as p,k as u,l as h,q as n,m as o,F as v,y as m,z as g}from"./index-104000c2.js";const s=e=>(m("data-v-238b8a36"),e=e(),g(),e),b=s(()=>o("h4",null,"ref",-1)),R=s(()=>o("h4",null,"reactive",-1)),j=s(()=>o("h4",null,"toRefs",-1)),x={__name:"refReactiveTorefs",setup(e){const a=d(),c=_({name:"dx",age:12}),r=i(c);return console.log(r),f(()=>{a.value.style.background="red"}),(y,k)=>{const t=p("highlightjs");return u(),h(v,null,[b,n(t,{code:`创建响应式的Number或String类型状态
例如：const str=ref('')`}),n(t,{code:`获取dom节点
<div ref='testRef' style='width: 20px;height: 20px;'></div>
<script setup>
    const testRef =ref()
    onMounted(()=>{
        testRef.value.style.background='red'
        console.log(testRef.value)
    })
<\/script>`}),o("div",{ref_key:"testRef",ref:a,style:{width:"20px",height:"20px"}},null,512),R,n(t,{code:`创建响应式的引用类型对象
例如：const obj=reactive({
    name:'dx',
    age:12
})`}),j,n(t,{code:`将一个响应式对象（reactive），转换为普通对象，并将其属性转换为ref对象
vue3.0版本需要return
const obj=reactive({
    name:'dx',
    age:12
})
const obj2 = toRefs(obj)
console.log(obj2)
return{
    ...obj2
}
<template>{{ name }}--{{ age }}</template>

vue3.2有setup语法糖后不需要return导出
const {name,age}=toRefs(obj)
`})],64)}}},w=l(x,[["__scopeId","data-v-238b8a36"]]);export{w as default};
