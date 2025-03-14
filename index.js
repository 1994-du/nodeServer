var { createServer } = require('http')
var express = require('express')
var { Server } = require('socket.io')
const bodyParser = require('body-parser')
const fs = require('fs')
const Request = require('./Api/index.js')

const Login = require('./login') // 登录
const Registry = require('./registry') //注册
const Upload = require('./upload')//上传
const historyAvatar = require('./historyAvatar.js')
const delaytest = require('./delaytest.js')
const path = require('path')
const connection = require('./connectionSql.js')
const cors = require('cors') // 引入 cors 包

connection.connect(err => {
	if (err) throw err;
	console.log("Connected to the MySQL server!")
})

const indexHtml = fs.readFileSync(require.resolve('./index.html'), { encoding: 'utf8' })
var app = express()
app.use(cors()) // 使用 cors 中间件
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.all('/', (req, res) => {
	res.end(indexHtml)
})
// 登录接口
Request(app, '/login', connection, Login)

// app.all('/tologin', (req, res) => Login(req, res, connection))
app.all('/toregistry', (req, res) => Registry(req, res, connection))
app.all('/upload', (req, res) => Upload(req, res, connection))
app.all('/historyAvatar',(req,res)=>historyAvatar(req, res, connection))
app.all('/delaytest',(req,res)=>delaytest(req,res,connection))
var http = createServer(app)
// var io = new Server(http,{
//   cors:{
//     origin:'*',
//     methods:['get','post']
//   }
// })
// io.on('connection',(socket)=>{
//   socket.on('send-message',(data)=>{
//     socket.broadcast.emit('msg_res',data)
//   })
// })
http.listen(1234,'0.0.0.0',() => {
	console.log('http://localhost:1234')
})