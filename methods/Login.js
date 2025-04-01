const Login = function(req,res,connection){
    const {username,password} = req.body;
    let querySql=`SELECT * FROM user WHERE username=? AND password=?`;
    connection.query(querySql,[username,password],(err,resp,fields)=>{
        if(err){
            return res.status(500).send({
                message:'服务器错误'
            })
        }
        if(resp.length===0){
            return res.status(400).send({
                message:'用户不存在'
            })
        }
        const user = resp[0];
        if(user.password !== password){
            return res.status(401).send({
                message:'用户名或密码错误'
            })
        }
        // 根据用户的 roleid 查询菜单数据
        let menuQuerySql = `SELECT * FROM role WHERE roleId=?`;
        connection.query(menuQuerySql, [user.roleId], (menuErr, menuResp, menuFields) => {
            if (menuErr) {
                return res.status(500).send({
                    message: '服务器错误'
                });
            }
            console.log('menuResp', menuResp);
            
            const menuData = menuResp.length > 0 ? menuResp[0].menus : null;
            // 返回登录成功信息和菜单数据
            res.status(200).send({
                message: '登录成功',
                user,
                menus: menuData
            });
        });
    })
}
module.exports = Login;