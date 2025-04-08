const getUsers = function(req,res,connection){
    // 获取分页参数
    const page = parseInt(req.body.page) || 1;
    const pageSize = parseInt(req.body.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    const querySql = 'SELECT * FROM user LIMIT ? OFFSET ?';
    connection.query(querySql,[pageSize,offset],(err,users)=>{
        if(err){
            return res.send({
                status:400,
                message:'获取用户列表失败'
            })
        }else{
            let totalSql = `SELECT COUNT(*) as total FROM user`;
            connection.query(totalSql, (totalErr, totalResp) => {
                if (totalErr) throw totalErr;
                const total = totalResp[0].total;

            
                const userIds = users.map(user => user.roleId);
                const queryRolesSql = 'SELECT * FROM role WHERE roleId IN (?)';
                connection.query(queryRolesSql,[userIds],(err,roles)=>{
                    if(err){
                        return res.send({
                            status:400,
                            message:'获取用户列表失败',
                            error:err.message
                        })
                    }
                    const rolesMap = roles.reduce((pre,cur)=>{
                        pre[cur.roleId] = cur.roleName;
                        return pre;
                    },{})
                    const usersWithRoles = users.map(user=>({
                        ...user,
                        roleName:rolesMap[user.roleId] || null
                    }))
                    res.send({
                        status:200,
                        message:'获取用户列表成功',
                        data:usersWithRoles,
                        page: page,
                        pageSize: pageSize,
                        total: total // 返回总数据量
                    })
                })
            })
        }
    })
}
const getUserDict = function(req, res, connection) {
    let sql = `select * from user`;
    connection.query(sql, (err, resp, fields) => {
        if (err) throw err;
        let userDict = resp.map((item)=>{
            return {
                label:item.userName,
                value:item.userId
            }
        })
        res.status(200).send({
            status: 200,
            message: '获取用户字典成功',
            data: userDict
        });
    })
}
const setUser = function(req, res, connection) {
    const { userId, username, roleId, avatar } = req.body;
    if (!username) {
        return res.status(400).send({
            message: '用户名不能为空'
        });
    }
    let sql = `UPDATE user SET username =?, roleId =?, avatar =? WHERE userId =?`;
    connection.query(sql, [username, roleId, avatar, userId], (err, result) => {
        if (err) {
            return res.status(500).send({
                message: '服务器错误',
                error: err
            });
        }
        res.status(200).send({
            status: 200,
            message: '修改用户成功',
            data: result
        })
    })
}
module.exports = {
    getUsers,
    getUserDict,
    setUser
}