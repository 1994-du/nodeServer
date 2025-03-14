const multiparty = require('multiparty')
const path = require('path') // 引入 path 模块以处理文件路径

const Upload = function(req, res, connection) {
    console.log('upload', req);

    res.writeHead(200, { 'content-type': 'text/html;charset=UTF8' })
    // formData传参
    let form = new multiparty.Form()
    form.encoding = 'UTF-8'
    form.uploadDir = path.join(__dirname, 'public', 'images') // 使用 path.join 确保路径正确
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.end(JSON.stringify({
                msg: err,
                status: 'error'
            }))
        }

        console.log('fields', fields);
        
        let file = files.file[0]
        let url = `http://localhost:1234/images/${path.basename(file.path)}`; // 使用 path.basename 获取文件名
        let updateSql = `UPDATE user_info SET ? WHERE ?;`
        let data = [{ avatar: url }, { id: fields.id }]
        connection.query(updateSql, data, (err, results) => {
            if (err) {
                return res.end(JSON.stringify({
                    msg: err,
                    status: 'error'
                }))
            }
        })

        let insertSqls = `INSERT INTO user_avatar (id, avatar) VALUES (?, ?)`
        let values = [fields.id, url]
        connection.query(insertSqls, values, (ierr, ires) => {
            if (ierr) throw ierr;
            res.end(JSON.stringify({
                status: 'success',
                msg: '上传成功！',
                url: url
            }))
        })
    })
}

module.exports = Upload
