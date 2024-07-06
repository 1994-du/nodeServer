var { createServer } = require('http')
var express = require('express')
var { Server } = require('socket.io')
const bodyParser = require('body-parser')
const fs = require('fs')
const pool = require('./mysql_config.js')
const path = require('path')

// 每个接口请求用一个单独的js文件来处理
const Login = require('./login_register/login') // 登录
const Registry = require('./login_register/register') //注册
const Upload = require('./upload')//上传
const historyAvatar = require('./historyAvatar.js')

// 连接mysql
let mysql2;
pool.getConnection((err,connection) => {
	if (err) throw err;
	console.log("Connected to the MySQL server!")
	mysql2= connection;
})

// 默认首页
const indexHtml = fs.readFileSync(require.resolve('./public/index.html'), { encoding: 'utf8' })
var app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.all('/', (req, res) => {
	res.end(indexHtml)
})

// 所有请求
app.all('/tologin', (req, res) => Login(req, res, mysql2))
app.all('/toregistry', (req, res) => Registry(req, res, mysql2))
app.all('/toupload', (req, res) => Upload(req, res, mysql2))
app.all('/historyAvatar',(req,res)=>historyAvatar(req, res, mysql2))
app.all('/delaytest',(req,res)=>{
	res.send('delaytest')
})
var http = createServer(app)
// var io = new Server(http,{
//   cors:{
//     origin:'*',
//     methods:['get','post']
//   }
// })
// io.on('pool',(socket)=>{
//   socket.on('send-message',(data)=>{
//     socket.broadcast.emit('msg_res',data)
//   })
// })
http.listen(1234, () => {
	console.log('http://localhost:1234')
})