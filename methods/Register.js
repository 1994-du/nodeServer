const Register = function (req,res,connection) {
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).send({
            message:'请输入账号和密码'
        })
    }
    const querySql = 'INSERT INTO user (username,password) VALUES (?,?)';
    connection.query(querySql,[username,password],(err,result)=>{
        if(err) {
            if(err.code === 'ER_DUP_ENTRY'){
                return res.status(400).send({
                    message:'用户名已存在'
                })
            }
            return res.status(500).send({
                message:'服务器错误'
            })
        }
        res.status(200).send({
            message:'注册成功'
        })
    })
}
module.exports = Register