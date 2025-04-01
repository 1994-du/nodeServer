const fs = require('fs');
const path = require('path');

const CommonUploadFile = function(req, res, connection) {

}

const FragmentUploadFile = function(req, res) {
    try {
        console.log('📂 正在接收文件分片:', req.file);
        const { filename, chunkNumber, totalChunks } = req.body;
        const folderName = filename.split('.')[0];

        // ✅ 分片存储路径
        const chunkPath = path.join(__dirname, '../public/file', folderName);
        if (!fs.existsSync(chunkPath)) {
            fs.mkdirSync(chunkPath, { recursive: true });
        }

        // ✅ 保存分片
        const chunkFilePath = path.join(chunkPath, `chunk_${chunkNumber}`);
        fs.writeFileSync(chunkFilePath, req.file.buffer);

        console.log(`✅ 分片 ${chunkNumber}/${totalChunks} 已保存`);

        // ✅ 检查是否所有分片都已上传
        let allChunksUploaded = true;
        for (let i = 1; i <= totalChunks; i++) {
            if (!fs.existsSync(path.join(chunkPath, `chunk_${i}`))) {
                allChunksUploaded = false;
                break;
            }
        }

        if (!allChunksUploaded) {
            return res.status(200).send({ 
                code:'chunk',
                status: 200,
                message: `分片 ${chunkNumber} 已上传，等待其他分片...`
            });
        }

        // ✅ 合并分片文件
        console.log(`🚀 所有分片上传完毕，开始合并 ${filename}`);
        const finalFilePath = path.join(__dirname, '../public/file', filename);
        
        const finalFileStream = fs.createWriteStream(finalFilePath);
        for (let i = 1; i <= totalChunks; i++) {
            const chunkFilePath = path.join(chunkPath, `chunk_${i}`);

            // 读取分片并同步追加到最终文件
            const chunkData = fs.readFileSync(chunkFilePath);
            finalFileStream.write(chunkData);

            // ✅ 删除已合并的分片
            fs.unlinkSync(chunkFilePath);
        }

        // ✅ 关闭流
        finalFileStream.end();

        // ✅ 删除分片文件夹
        fs.rmdirSync(chunkPath);

        console.log(`🎉 文件 ${filename} 合并完成！`);
        res.status(200).send({
            status: 200,
            message: `文件 ${filename} 上传成功！`,
            filePath: finalFilePath
        });

    } catch (err) {
        console.error("❌ 处理分片上传时发生错误:", err);
        res.status(500).send({ message: 'Error processing chunk upload.' });
    }
};

module.exports = {
    CommonUploadFile,
    FragmentUploadFile
}
