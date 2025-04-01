var express = require('express'); // 引入express
var bodyParser = require('body-parser'); // 解析请求体
var multer = require('multer'); // 处理文件上传
const upload = multer(); // 内存存储（不保存到磁盘）
var cors = require('cors'); // 处理跨域
var fs = require('fs'); // 文件系统交互
var path = require('path'); // 路径
const connection = require('./connectionSql'); // 数据库连接
// 接口方法封装
var Register = require('./methods/Register'); // 注册
var Login = require('./methods/Login'); // 登录
var { getUsers } = require('./methods/User'); // 用户
var { getRoles, setRoles } = require('./methods/Role'); // 角色
var { CommonDownloadFile,FragmentDownloadFile } = require('./methods/DownloadFile'); // 文件下载
var { CommonUploadFile,FragmentUploadFile } = require('./methods/UploadFile'); // 文件上传

var app = express();
var PORT = 1234;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register',(req,res)=>Register(req,res,connection))
app.post('/login',(req,res)=>Login(req,res,connection))
app.get('/getUsers',(req,res)=>getUsers(req,res,connection))
app.post('/getRoles',(req,res)=>getRoles(req,res,connection))
app.post('/setRoles',(req,res)=>setRoles(req,res,connection))
app.post('/commonDownload', (req, res) =>CommonDownloadFile(req, res, connection))
app.post('/fragmentDownload', (req, res) =>FragmentDownloadFile(req, res, connection))
app.post('/commonUpload', (req, res) =>CommonUploadFile(req, res, connection))
app.post('/fragmentUpload',upload.single("file"),(req, res) =>FragmentUploadFile(req, res, connection))













app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});