function Request(app,url,connection,callback) {
    app.all(url,(req,res)=>{
        res.writeHead(200,{'content-type':'text/html;charset=UTF8'})
        return callback(req,res,connection)
    })
}
module.exports = Request