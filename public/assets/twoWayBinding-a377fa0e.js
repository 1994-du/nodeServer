import{_ as o}from"./_plugin-vue_export-helper-c27b6911.js";import{j as s,k as c,l as r,q as t,F as l,m as e}from"./index-104000c2.js";const a={},d=e("h4",null,"数据劫持和发布订阅者模式",-1),h=e("h4",null,"数据劫持:Vue2---Object.defineProperty",-1),_=e("h4",null,"数据劫持:Vue3---Proxy",-1),i=e("h1",null,"发布订阅者模式（观察者模式）",-1),u=e("h4",null,"发布者",-1),p=e("h4",null,"订阅者",-1),f=e("h4",null,"订阅收集",-1);function y(g,m){const n=s("highlightjs");return c(),r(l,null,[d,h,t(n,{code:`
const dep = new Dep()
Object.defineProperty(obj,key,
get(){
    //收集依赖
    dep.depend()
},
set(){
    //发布消息
    dep.notify()
})
`}),_,t(n,{code:`const proxy=new Proxy(Obj,
{
    get(target,key){
        return target[key]
    }
    set(target,key,value){
        return Reflect.set(target,key,value)
    }
})`}),i,u,p,f,t(n,{code:`
class Dep{
    constructor(){
        this.subs=[]
    },
    depend(){
        this.subs.push()
    },
    notify(){
        sbus.forEach(el=>{
            el.update()
        })
    }
}`})],64)}const j=o(a,[["render",y]]);export{j as default};
