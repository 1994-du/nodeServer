const getRoles = function(req, res, connection) {
    // 获取分页参数
    const page = parseInt(req.body.page) || 1;
    const pageSize = parseInt(req.body.pageSize) || 10;
    const offset = (page - 1) * pageSize;

    let sql = `select * from role LIMIT ? OFFSET ?`;
    connection.query(sql, [pageSize, offset], (err, resp, fields) => {
        if (err) throw err;

        // 计算总数据量
        let totalSql = `SELECT COUNT(*) as total FROM role`;
        connection.query(totalSql, (totalErr, totalResp) => {
            if (totalErr) throw totalErr;

            const total = totalResp[0].total;

            res.status(200).send({
                status: 200,
                message: '获取角色列表成功',
                data: resp,
                page: page,
                pageSize: pageSize,
                total: total // 返回总数据量
            });
        });
    });
}

// 修改: 将 createRole 函数改为更新角色的 SQL 语句
const setRoles = function(req, res, connection) {
    const { roleId, roleName, roleDesc, menus, checked } = req.body;
    if (!roleName) {
        return res.status(400).send({
            message: '角色名称不能为空'
        });
    }

    let sql = `UPDATE role SET roleName = ?, roleDesc = ?, menus = ?, checked = ? WHERE roleId = ?`;
    connection.query(sql, [roleName, roleDesc, menus, checked, roleId], (err, result) => {
        if (err) {
            return res.status(500).send({
                message: '服务器错误',
                error: err
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).send({
                message: '角色未找到'
            });
        }

        res.status(200).send({
            status: 200,
            message: '角色更新成功',
            data: {
                id: roleId,
                roleName: roleName,
                roleDesc: roleDesc
            }
        });
    });
}

module.exports = {
    getRoles,
    setRoles // 新增: 导出 createRole 函数
}