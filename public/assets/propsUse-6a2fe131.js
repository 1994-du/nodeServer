import{_ as n}from"./_plugin-vue_export-helper-c27b6911.js";import{j as r,k as c,l as _,q as p,F as a,y as l,z as d,m as o}from"./index-104000c2.js";const s=e=>(l("data-v-a97cf697"),e=e(),d(),e),u=s(()=>o("h1",null,"Props使用",-1)),i=s(()=>o("h4",null,"vue3.0",-1)),h=s(()=>o("h4",null,"vue3.2",-1)),f={__name:"propsUse",props:{obj:{type:Object,default:()=>({})}},setup(e){return(m,j)=>{const t=r("highlightjs");return c(),_(a,null,[u,i,p(t,{code:`<script>
export default{
    props:['obj'],
    setup(props){
        console.log(props)
    }
}
<\/script>`}),h,p(t,{code:`<script setup>
import { defineProps } from 'vue';
const props=defineProps({
    obj:{
        type:Object,
        default:()=>{
            return{}
        }
    }
})
<\/script>`})],64)}}},b=n(f,[["__scopeId","data-v-a97cf697"]]);export{b as default};
