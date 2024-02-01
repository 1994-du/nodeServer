import{_ as n}from"./_plugin-vue_export-helper-c27b6911.js";import{j as p,k as c,l as a,q as s,F as r,y as l,z as d,m as o}from"./index-104000c2.js";const h={name:"prototype-proto"},t=e=>(l("data-v-db20e6ed"),e=e(),d(),e),i=t(()=>o("h1",null,"原型及原型链",-1)),u=t(()=>o("h4",null,"构造函数Cat",-1)),m=t(()=>o("h4",null,"使用构造函数生成一个实例对象，实例对象的__proto__指向构造函数的prototype",-1)),y=t(()=>o("h1",null,"new过程",-1)),b=t(()=>o("p",null,"1.创建一个空对象{}",-1)),f=t(()=>o("p",null,"2.新对象__proto__指向构造函数；obj.constructor=Cat obj.__proto__=Cat.prototype",-1)),j=t(()=>o("p",null,"3.构造函数的this指向新对象；Cat.call(obj)",-1)),C=t(()=>o("p",null,"4.返回新对象",-1));function g(e,v,x,I,$,k){const _=p("highlightjs");return c(),a(r,null,[i,u,s(_,{code:`function Cat(name){
    this.name=name;
    this.species='猫科'
}`}),m,s(_,{code:`tom.__proto__ ==> Cat.prototype
    Cat.prototype.__proto__ ==> Object.prototype
        Object.prototype.__proto__ ==> null`}),y,b,f,j,C],64)}const w=n(h,[["render",g],["__scopeId","data-v-db20e6ed"]]);export{w as default};
