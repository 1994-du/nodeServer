import{r as s,b as i,J as a,j as V,k as h,l as g,q as c,m as l,F as w}from"./index-104000c2.js";const _=l("h1",null,"Watch",-1),p=l("h4",null,"vue2监听写法",-1),v=l("h4",null,"vue3监听ref",-1),f=l("h4",null,"vue3监听reactive",-1),j={__name:"watch",setup(b){let d=s(0),m=s(2),t=i({a:1,b:2}),r=i({c:1,d:2});a(d,(n,e)=>{console.log(n,e)},{immediate:!0}),a([d,m],(n,e)=>{console.log(n,e)},{immediate:!0}),a(t,(n,e)=>{console.log(n,e)},{immediate:!0}),a([t,r],(n,e)=>{console.log(n,e)},{immediate:!0});const u=()=>{t.a+=1};return(n,e)=>{const o=V("highlightjs");return h(),g(w,null,[_,p,c(o,{code:`
// 监听一个值
watch:{
    data1(newVal,oldVal){
        console.log(newVal,oldVal);
    },
    data2:{
        handler(newVal,oldVal){
            console.log(newVal,oldVal);
        },
        deep:true,
        immediate:true
    }
}
// 监听多个值（结合计算属性）
computed:{
    data3(){
        let {data1,data2} = this
        return {data1,data2}
    }
}
watch:{
    data3(newVal,oldVal){
        console.log(newVal,oldVal)
    }
}
`}),v,c(o,{code:`
let num = ref(0)
let num2 = ref(2)
// 监听一个值
watch(num,
(newVal,oldVal)=>{
    console.log(newVal,oldVal);
},
{
    immediate:true
})
// 监听多个值
watch([num,num2],
(newVal,oldVal)=>{
    console.log(newVal,oldVal);
},
{
    immediate:true
})
`}),f,c(o,{code:`
let single = reactive({a:1,b:2})
let single2 = reactive({c:1,d:2})
watch(single,
(newVal,oldVal)=>{
    console.log(newVal,oldVal);
},
{
    immediate:true
})
watch([single,single2],
(newVal,oldVal)=>{
    console.log(newVal,oldVal);
},
{
    immediate:true
})
`}),l("button",{onClick:u},"+")],64)}}};export{j as default};
