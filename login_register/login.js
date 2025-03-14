const Login = function(req,res,connection){
    // res.writeHead(200,{'content-type':'text/html;charset=UTF8'})
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('ip:',ip);
    
    let param = req.body;
    console.log('param:',param);
    console.log('connection',connection.state);
    
    let querySql=`SELECT * FROM user WHERE username=? AND password=?`;
    connection.query(querySql,[param.username,param.password],(err,resp,fields)=>{
        if(err) throw err;
        let result = JSON.parse(JSON.stringify(resp));
        console.log('result:',result);
        
        if(result.length>0){
            // let queryMenu=`SELECT id,menus FROM user_menu WHERE id='${result[0].id}';`
            // connection.query(queryMenu,(err2,resp2,fields2)=>{
            //     let result2 = JSON.parse(JSON.stringify(resp2));
            //     res.end(JSON.stringify({
            //         message:"登录成功",
            //         status:'success',
            //         data:{
            //             id:result[0].id,
            //             name:result[0].name,
            //             avatar:result[0].avatar,
            //             navList:JSON.parse(result2[0].menus)
            //         }
            //     }))
            // })
            res.end(JSON.stringify({
                message:"登录成功",
                status:'success',
                data:{
                    id:result[0].id,
                    userId:result[0].userId,
                    roleId:result[0].roleId,
                    username:result[0].username,
                    avatar:result[0].avatar,
                    navList:[]
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