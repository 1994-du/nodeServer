import{_ as o}from"./_plugin-vue_export-helper-c27b6911.js";import{j as i,k as d,l as c,q as s,y as p,z as h,m as n}from"./index-104000c2.js";const _={name:"gitLine",components:{},data(){return{}},computed:{},watch:{},methods:{},created(){},mounted(){},beforeCreate(){},beforeMount(){},beforeUpdate(){},updated(){},activated(){}},a=e=>(p("data-v-798d847e"),e=e(),h(),e),r=a(()=>n("h1",null,"git命令行",-1)),l=a(()=>n("h4",null,"不提交当前分支修改内容，切换到其他分支",-1)),u=a(()=>n("h4",null,"假定文件未修改",-1));function g(e,m,f,x,v,y){const t=i("highlightjs");return d(),c("div",null,[r,s(t,{code:`基础命令
git add . //添加所有文件到暂存区
git commit -m '注释' //添加到本地仓库
git pull //获取远程仓库文件
git push //提交本地仓库文件到远程仓库`}),l,s(t,{code:`git stash //保存当前分支未提交的修改 
git stash list //查看保存的修改 例：stash@{0}: WIP on master: ea39ac0 20230212menu
git stash save '修改注释' //查看保存的修改 例：stash@{0}: On master: 20230217--2
git stash pop //取出保存的修改并删除此保存记录
git stash pop 'stash@{index}' //取出指定index修改，并删除修改记录 
git stash apply //取出保存的修改不删除此保存记录
git stash apply stash@{index} //取出指定index修改，并保存修改记录
`}),u,s(t,{code:`git update-index --assume-unchanged filename //忽略文件更改 
git update-index --no-assume-unchanged filename //取消忽略文件更改 `})])}const b=o(_,[["render",g],["__scopeId","data-v-798d847e"]]);export{b as default};
