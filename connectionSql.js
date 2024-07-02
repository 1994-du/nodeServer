const mysql = require('mysql')
const connection = mysql.createConnection({
    multipleStatements:true,
    host:'127.0.0.1',
    user:'root',
    password:'174621',
    database:'localhost'
})
module.exports=connection;