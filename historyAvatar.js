const historyAvatar=function(req,res,connection){
    res.writeHead(200,{'content-type':'text/html;charset=UTF8'})
    let param = req.body;
    let sql=`SELECT * FROM user_avatar WHERE id=${param.id}`
    connection.query(sql,(err,result)=>{
        if(err)throw err;
        res.end(JSON.stringify({
            list:JSON.parse(JSON.stringify(result))
        }))
    })
}
module.exports=historyAvatar;