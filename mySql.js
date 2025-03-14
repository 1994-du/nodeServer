module.exports={
    querySql:'SELECT id,name,account,password,avatar FROM local_user WHERE account=12;',// 查询
    updateSql:'UPDATE local_user SET ? WHERE ? ;',// 修改
    insertSql:'INSERT INTO local_user(id,name,account,password,avatar) VALUES(?,?,?,?,?);' // 插入
}