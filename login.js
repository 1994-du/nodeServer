const fs = require('fs')
var usersData = JSON.parse(fs.readFileSync(require.resolve('./data/login.json'),{encoding:'utf8'}));//所有用户列表
console.log(usersData,typeof usersData);
const Login = function(req,res){
    req.on('data',(data)=>{
        let param = JSON.parse(data);
        console.log('参数',param);
        let filter = usersData.filter(el=>el.username===param.username&&el.password===param.password)
        console.log('筛选结果',filter);
        if(filter.length>0){
            res.end(JSON.stringify({
                msg:"登录成功",
                status:'success'
            }))
        }else{
            res.end(JSON.stringify({
                msg:"账号或密码错误",
                status:'error'
            }))
        }
        
    })
    
}
module.exports=Login