module.exports={
    querySql:'SELECT id,name,account,password,avatar FROM user_info WHERE account=12;',// 查询
    updateSql:'UPDATE user_info SET ? WHERE ? ;',// 修改
    insertSql:'INSERT INTO user_info(id,name,account,password,avatar) VALUES(?,?,?,?,?);' // 插入
}