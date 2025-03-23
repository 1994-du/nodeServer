const fs = require('fs');
const path = require('path');
// 分片下载
const FragmentDownloadFile = function(req,res,connection){
    const filePath = path.join(__dirname,'../public/file',req.body.fileName)
    fs.stat(filePath,(err,stat)=>{
        if(err){
            return res.status(500).send({
                message:'服务器错误'
            })
        }
        const range = req.header.range
        // 没有range请求头
        if(!range){
            CommonDownloadFile(req,res,connection)
            return
        }
        // 获取range
        const positions = range.replace(/bytes=/,'').split('-')
        const start = parseInt(positions[0],10);
        const end = positions[1] ? parseInt(positions[1],10) : stat.size - 1;
        if(start >= stat.size || end >= stat.size){
            return res.status(416).send({
                message:'请求范围不符合要求'
            })
        }
        const chunksize = end - start + 1;
        const file = fs.createReadStream(filePath,{start,end})

        res.writeHead(206,{
            'Content-Type':'application/octet-stream',
            'Content-Length':chunksize,
            'Content-Range':`bytes ${start}-${end}/${stat.size}`,
            'Accept-Ranges':'bytes'
        })
        file.pipe(res)
        file.on('end',()=>{
            res.end()
        })
        file.on('error',(err)=>{
            file.destroy()
        })
        res.on('close',()=>{
            file.destroy()
        })

    })
}
// 常用下载
const CommonDownloadFile = function(req,res,connection){
    const filePath = path.join(__dirname,'../public/file',req.body.fileName)
    const stat = fs.statSync(filePath)
    res.setHeader('Content-Type','application/octet-stream')
    res.setHeader('Content-Length',stat.size)
    res.setHeader('Content-Disposition',`attachment;filename=${path.basename(filePath)}`)
    const readStream = fs.createReadStream(filePath)
    readStream.pipe(res)
    readStream.on('end',()=>{
        res.end()
    })
    res.on('close',()=>{
        readStream.destroy()
    })
    res.on('error',()=>{
        readStream.destroy()
    })
}

module.exports = {
    FragmentDownloadFile,
    CommonDownloadFile
}