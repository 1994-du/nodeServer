const queryUser = `SELECT * FROM user WHERE id = ?`;
const updateUser = `UPDATE user SET ? WHERE ?`;
const insertUser = `INSERT INTO user (id, username, password, email) VALUES (?, ?, ?, ?)`;
const deleteUser = `DELETE FROM user WHERE id = ?`;
export{
    queryUser,
    updateUser,
    insertUser,
    deleteUser
}