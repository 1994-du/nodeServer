const Registry = function(req,res,connection){
    res.writeHead(200,{'content-type':'text/html;charset=UTF8'})
    let param = req.body;

    let querySqls=`SELECT * FROM user WHERE username=?;`
    connection.query(querySqls,[param.username],(err,rst,fields)=>{
        if(err){
            res.end(JSON.stringify({
                msg:err,
                status:'error'
            }))
        }else{
            let result = JSON.parse(JSON.stringify(rst));
            if(result.length>0){
                res.end(JSON.stringify({
                    msg:"账号已存在！",
                    status:'error'
                }))
            }else{
                let insertSqls=`INSERT INTO user(id,userId,roleId,username,password,avatar) VALUES(?,?,?,?,?,?)`
                let id = new Date().getTime().toString().slice(6)
                let userId = new Date().getTime().toString().slice(6)
                let roleId = new Date().getTime().toString().slice(6)
                let values=[id,userId,roleId,param.username,param.password,'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png']
                connection.query(insertSqls,values,(err2,resinser,fieldsi)=>{
                    if(err2){
                        res.end(JSON.stringify({
                            msg:err2,
                            status:'error'
                        }))
                    }else{
                        // connection.query(`INSERT INTO user_menu(id,menus) VALUES(?,?)`,[userId,JSON.stringify([{
                        //     menuName:'首页',
                        //     menuLink:'/home'
                        // }])])
                        res.end(JSON.stringify({
                            msg:"注册成功！",
                            status:'success'
                        }))
                    }
                })
            }
        }
    })
}
module.exports=Registry