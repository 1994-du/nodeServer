const multiparty = require('multiparty')
const Upload = function(req,res,connection){
    res.writeHead(200,{'content-type':'text/html;charset=UTF8'})
    // base64传参长度太长
    // let updateSql=`UPDATE user_info SET ? WHERE ?;`
    // let data=[{avatar:req.body.file},{id:req.body.id}]
    // connection.query(updateSql,data,(err,results)=>{
    //     if(err){
    //         res.end(JSON.stringify({
    //             msg:err,
    //             status:'error'
    //         }))
    //     }else{
    //         res.end(JSON.stringify({
    //             status:'success',
    //             msg:'上传成功！',
    //             url:req.body.file
    //         }))
    //     }
    // })

    // formData传参
    let form = new multiparty.Form()
    form.encoding='UTF-8'
    form.uploadDir='public/images/'
    form.parse(req,(err,fields,files)=>{
        let file = files.file[0]
        let url = 'http://localhost:1234/images/'+file.path.split('/')[2];
        let updateSql=`UPDATE user_info SET ? WHERE ?;`
        let data=[{avatar:url},{id:fields.id}]
        connection.query(updateSql,data,(err,results)=>{
            if(err){
                res.end(JSON.stringify({
                    msg:err,
                    status:'error'
                }))
            }
        })
        let insertSqls=`INSERT INTO user_avatar (id,avatar) VALUES (?,?)`
        let values=[fields.id[0],url]
        connection.query(insertSqls,values,(ierr,ires)=>{
            if(ierr)throw ierr;
            res.end(JSON.stringify({
                status:'success',
                msg:'上传成功！',
                url:url
            }))
        })
    })
}
module.exports = Upload