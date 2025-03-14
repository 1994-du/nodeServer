const queryRole = 'SELECT * FROM role';
const updateRole = 'UPDATE role SET ? WHERE ?';
const insertRole = 'INSERT INTO role (id, role) VALUES (?, ?)';
const deleteRole = 'DELETE FROM role WHERE id = ?';

export{
    queryRole,
    updateRole,
    insertRole,
    deleteRole
}