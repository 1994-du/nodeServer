const Registry = function(req,res,connection){
    res.writeHead(200,{'content-type':'text/html;charset=UTF8'})
    let param = req.body;

    let querySqls=`SELECT id,name,account,password,avatar FROM local_user WHERE account=${param.account};`
    connection.query(querySqls,(err,rst,fields)=>{
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
                let insertSqls=`INSERT INTO local_user(id,name,account,password,avatar) VALUES(?,?,?,?,?)`
                let values=[new Date().getTime()*Math.random()*100000,param.username,param.account,param.password,'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png']
                connection.query(insertSqls,values,(err2,resinser,fieldsi)=>{
                    if(err2){
                        res.end(JSON.stringify({
                            msg:err2,
                            status:'error'
                        }))
                    }else{
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