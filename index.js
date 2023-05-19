const http = require('http')
const fs = require('fs')
const url = require('url')
const Login = require('./login')
const indexHtml = fs.readFileSync(require.resolve('./index.html'),{encoding:'utf8'})
const server = http.createServer((req,res)=>{
    const pathname = url.parse(req.url).pathname
    res.writeHead(200,{'content-type':'text/html;charset=UTF8'})
    switch(pathname){
        case '/login':
            Login(req,res)
        break;
        default:
            res.end(indexHtml)
        break;
    }
})

server.listen(80,function(){
    console.log('运行端口：80')
})