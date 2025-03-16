var express = require('express'); // 引入express
var bodyParser = require('body-parser'); // 解析请求体
var multer = require('multer'); // 处理文件上传
var cors = require('cors'); // 处理跨域
var fs = require('fs'); // 文件系统交互
var path = require('path'); // 路径
const connection = require('./connectionSql'); // 数据库连接
// 接口方法封装
var Register = require('./methods/Register'); // 注册
var Login = require('./methods/Login'); // 登录
var { getUsers } = require('./methods/User'); // 用户


var app = express();
var PORT = 1234;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register',(req,res)=>Register(req,res,connection))
app.post('/login',(req,res)=>Login(req,res,connection))
app.get('/getUsers',(req,res)=>getUsers(req,res,connection))













app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});