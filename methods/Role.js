const getRoles = function(req,res,connection){
    let sql = 'select * from role'
    connection.query(sql,(err,resp,fields)=>{
        if(err) throw err;
        res.status(200).send({
            message:'获取角色列表成功',
            data:resp
        })
    })
}
module.exports = {
    getRoles
}