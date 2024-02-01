import{A as S,k as d,l as p,m as e,B as s,n,r as h,j as c,q as a,w as _,p as v,F as x,s as B,t as w,x as j,y as z,z as C}from"./index-104000c2.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const F=""+new URL("../static/image/smallportal.webp",import.meta.url).href;const L={class:"bg_left"},R={class:"bg_right"},T={__name:"bg",props:{width:{type:Number,default:()=>100}},setup(o){const m=o,t=S(()=>m.width);return(f,y)=>(d(),p("div",{class:"bg_wrap",style:s({width:n(t)+"px",height:n(t)+"px"})},[e("div",{class:"circle_point circle_point_left",style:s({width:n(t)/4+"px",height:n(t)/4+"px"})},null,4),e("div",{class:"circle_point circle_point_right",style:s({width:n(t)/4+"px",height:n(t)/4+"px"})},null,4),e("div",L,[e("div",{class:"big_circle",style:s({width:n(t)+"px",height:n(t)+"px"})},[e("div",{class:"small_circle",style:s({width:n(t)/2+"px",height:n(t)/2+"px"})},null,4)],4)]),e("div",R,[e("div",{class:"big_circle",style:s({width:n(t)+"px",height:n(t)+"px"})},[e("div",{class:"small_circle",style:s({width:n(t)/2+"px",height:n(t)/2+"px"})},null,4)],4)])],4))}},U=b(T,[["__scopeId","data-v-1e5e6985"]]),q=[{name:"animation-name",content:"动画名称",values:[]},{name:"animation-duration",content:"动画完成时间",values:["例如：1s"]},{name:"animation-timing-function",content:"动画速度曲线",values:["ease:低俗开始然后加速结束前变慢","linear:匀速执行","ease-in:低速开始","ease-out:低俗结束","ease-in-out：低速开始并结束"]},{name:"animation-fill-mode",content:"动画暂停状态",values:[]},{name:"animation-delay",content:"动画延迟播放时间",values:[]},{name:"animation-interation-count",content:"动画播放次数",values:["n","infinite"]}];const i=o=>(z("data-v-ad2c0fe9"),o=o(),C(),o),A={class:"use_keyframes"},D=i(()=>e("h1",null,"animation:动画",-1)),E=i(()=>e("h4",null,"keyframes:关键帧",-1)),H={class:"el-drawer-wrap"},G={class:"container"},J=i(()=>e("div",{class:"img_transform"},[e("img",{src:F,alt:""})],-1)),K=i(()=>e("div",{class:"icon1"},null,-1)),M=i(()=>e("div",{class:"login"},[e("span"),e("span"),e("span"),e("span"),e("span",null,"登录")],-1)),O=i(()=>e("div",{class:"item"},null,-1)),P=i(()=>e("div",{class:"light_ball"},null,-1)),Q={__name:"animation",setup(o){let m=h(q),t=h(!1),f=h("rtl");return(y,r)=>{const u=c("el-table-column"),$=c("el-table"),k=c("highlightjs"),V=c("el-button"),I=c("el-drawer");return d(),p(x,null,[e("div",A,[D,a($,{data:n(m),style:{width:"100%",margin:"10px 0"},border:""},{default:_(()=>[a(u,{prop:"name",label:"属性"}),a(u,{prop:"content",label:"描述"}),a(u,{label:"值"},{default:_(l=>[(d(!0),p(x,null,B(l.row.values,(g,N)=>(d(),p("div",{key:g+N},[e("span",null,w(g),1)]))),128))]),_:1})]),_:1},8,["data"]),E,a(k,{code:`
@keyframes animationName{
    from{}
    percentage{}
    to{}
    //或者
    0%{}
    percentage{}
    100%{}
}
// sass 使用for循环
@for $i from 1 through $n{
    &:nth-child(#{$i}){
        transform: rotate(#{360deg / $n * $i});
        &::after,&::before{
            animation-delay: - calc($animationTime / $n * ($i - 1) * 6);
        }
    }
}`}),a(V,{onClick:r[0]||(r[0]=l=>v(t)?t.value=!0:t=!0),style:{position:"fixed",bottom:"20px"}},{default:_(()=>[j("展开"+w(n(t)),1)]),_:1})]),e("div",H,[a(I,{withHeader:!1,modelValue:n(t),"onUpdate:modelValue":r[1]||(r[1]=l=>v(t)?t.value=l:t=l),direction:n(f),size:"50%"},{default:_(()=>[e("div",G,[J,K,M,O,P,a(U,{width:100})])]),_:1},8,["modelValue","direction"])])],64)}}},Y=b(Q,[["__scopeId","data-v-ad2c0fe9"]]);export{Y as default};
