const getUsers = function(req,res,connection){
    const querySql = 'SELECT * FROM user';
    connection.query(querySql,(err,users)=>{
        if(err){
            return res.send({
                code:400,
                msg:'获取所有用户失败'
            })
        }else{
            // res.send({
            //     code:200,
            //     msg:'获取所有用户成功',
            //     data:users
            // })
            const userIds = users.map(user => user.roleId);
            const queryRolesSql = 'SELECT * FROM role WHERE roleId IN (?)';
            connection.query(queryRolesSql,[userIds],(err,roles)=>{
                if(err){
                    return res.send({
                        code:400,
                        msg:'获取所有用户失败',
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
                    code:200,
                    msg:'获取所有用户成功',
                    data:usersWithRoles
                })
            })
        }
    })
}
module.exports = {
    getUsers,
}