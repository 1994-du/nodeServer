import{r as p,j as u,E as a,k as _,l as v,G as l,H as m,m as e,q as r,y as h,z as f}from"./index-104000c2.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const o=t=>(h("data-v-403e9279"),t=t(),f(),t),x={class:"customer_directive"},g={type:"text",style:{width:"100px",height:"20px",border:"none","border-radius":"3px","text-indent":"10px"}},y=o(()=>e("h1",null,"自定义指令",-1)),M=o(()=>e("h4",null,"vue3指令生命周期函数",-1)),j=o(()=>e("h4",null,"局部自定义指令",-1)),w=o(()=>e("h4",null,"全局自定义指令",-1)),D={__name:"customerDirective",setup(t){const c=p(!0),d={create(){},beforeMount(){},mounted(n){n.style.background="var(--fontColor)",n.style.color="var(--inputColor)"},beforeUpdate(){},updated(){},beforeUnmount(){},unmounted(){}};return(n,U)=>{const s=u("highlightjs"),i=a("focus");return _(),v("div",x,[l(e("input",g,null,512),[[i],[m,c.value],[d]]),y,M,r(s,{code:`created:元素初始化的时候
beforeMound:指令绑定到元素后调用，只调用一次
Mound:元素插入父级DOM调用
beforeUpdate:元素被更新之前调用
updated:在包含组件的VNode及其子组件的VNode更新后调用
beforeUnmount:元素被移除前调用
unmounted:指令被移除后调用，只调用一次`}),j,r(s,{code:`指令命名规则：小写v开头
const vMove={
    create(){},
    beforeMount(){},
    mounted(el){
        el.style.background='red'
    },
    beforeUpdate(){},
    updated(){},
    beforeUnmount(){},
    unmounted(){}
}
<div style='width:50px;height:50px' v-move></div>`}),w,r(s,{code:`import { createApp } from 'vue';
import App from './App.vue';
const app=createApp(App);
app.directive('focue',{
    mounted(el){
        el.focus()
    }
})
//多个指令可以封装单独js文件
import directive from ./directives.js
directives(app)

./directives.js
const directive=(app)=>{
    app.directive('focus',{
        mounted(el) {
            el.focus()
        }
    })
}
export default directive`})])}}},S=b(D,[["__scopeId","data-v-403e9279"]]);export{S as default};
