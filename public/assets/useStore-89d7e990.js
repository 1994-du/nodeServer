import{u as l,o as _,j as h,k as d,l as f,m as n,t as m,n as g,q as r,y as A,z as x}from"./index-104000c2.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const a=t=>(A("data-v-f9b6e7eb"),t=t(),x(),t),S={class:"use_store"},v={class:"store_box"},b=a(()=>n("h2",null,"一、创建store文件",-1)),C=a(()=>n("p",null,"1.store/index.js",-1)),j=a(()=>n("p",null,"2.main.js",-1)),k=a(()=>n("h2",null,"二、使用store",-1)),B={__name:"useStore",setup(t){const e=l(),i=o=>{e.commit("changAge",{num:o})},p=o=>{e.dispatch("asyncChangeAge",{num:o})};return _(()=>{console.log(e),console.log(e.state),console.log(e.getters.info),console.log(e.getters.moreinfo),console.log(e.getters.setName("sss"))}),(o,s)=>{const c=h("highlightjs");return d(),f("div",S,[n("div",v,[n("p",null,"姓名："+m(g(e).state.name),1),n("p",null,"年龄："+m(g(e).state.age),1),n("button",{onClick:s[0]||(s[0]=u=>i(3))},"修改年龄+3"),n("button",{onClick:s[1]||(s[1]=u=>p(3))},"异步调用actions修改年龄")]),b,C,r(c,{code:`
import {createStore} from 'vuex';
export default createStore({
    //全局变量
    state:{
        islogin:0,
        name:'dxx',
        age:28
    },
    //同步操作
    mutations:{
        changAge(state,arg){
            state.age+=arg.num
        }
    },
    //异步操作
    actions:{
        asyncChangeAge(context,arg){
            return new Promise(()=>{
                setTimeout(()=>{
                    context.commit('changAge',{num:arg.num})
                },1000)
            })
        }
    },
    // 计算属性
    getters:{
        info:(state)=>state.age+state.name,
        moreinfo:(state,gettets)=>state.age+state.name+gettets.info,
        setName:(state=>((p)=>state.name+p))
    }
})
        `}),j,r(c,{code:`
import store from './store'
const app = createApp(App);
app.use(store)
app.mount('#app')
        `}),k,r(c,{code:`
import {useStore} from 'vuex'
const store = useStore()
//使用commit调用 mutation 中的方法同步修改state中的值
const changAge = ((num)=>{
    store.commit('changAge',{num:num})
    // or
    // store.commit({
    //     type:'changAge',
    //     num:4
    // })
})
//使用dispatch调用 actions 中的方法异步修改state中的值
const asyncChangAge =((num)=>{
    store.dispatch('asyncChangeAge',{num:num})
    // or
    // store.dispatch({
    //     type:'asyncChangeAge',
    //     num:num
    // })
})
`})])}}},$=y(B,[["__scopeId","data-v-f9b6e7eb"]]);export{$ as default};
