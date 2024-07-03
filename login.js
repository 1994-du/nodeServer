const Login = function(req,res,connection){
    res.writeHead(200,{'content-type':'text/html;charset=UTF8'})
    let param = req.body;
    let querySql=`SELECT id,name,account,password,avatar FROM user_info WHERE account=${param.account} AND password=${param.password};`
    connection.query(querySql,(err,resp,fields)=>{
        if(err) throw err;
        let result = JSON.parse(JSON.stringify(resp));
        if(result.length>0){
            res.end(JSON.stringify({
                message:"登录成功",
                status:'success',
                data:{
                    id:result[0].id,
                    name:result[0].name,
                    avatar:result[0].avatar
                }
            }))
        }else{
            res.end(JSON.stringify({
                message:"账号或密码错误",
                status:'error'
            }))
        }
        
    })
}
module.exports=Login