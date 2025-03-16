// connectionSql.js
const mysql = require('mysql2');

// 创建连接池
const createPool = () => {
  const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '174621',
    database: 'localhost',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  // 监听连接池事件
  pool.on('connection', (connection) => {
    console.log('New connection created in pool:', connection.threadId);
  });

  pool.on('enqueue', () => {
    console.log('Waiting for available connection slot');
  });

  pool.on('release', (connection) => {
    console.log('Connection released back to pool:', connection.threadId);
  });

  return pool;
};

// 创建并导出连接池
const pool = createPool();
module.exports = pool;