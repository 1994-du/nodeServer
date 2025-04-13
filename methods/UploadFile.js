const fs = require('fs');
const path = require('path');
const getLocalIP = require('../getLocalIp.js');
const localIp = getLocalIP();

const CommonUploadFile = function(req, res, connection) {
    console.log('本地IP地址:', localIp);
    try {
        console.log('📂 正在接收普通文件:', req.file);
        const { originalname } = req.file;

        
        // ✅ 文件读取路径
        const reqFilePath = path.join('file', originalname);
        const filePath = `http://${localIp}:1234/${reqFilePath}`;
        // ✅ 文件存储路径
        const localFilePath = path.join('public', 'file', originalname);
        // 保存文件到本地
        const localFullPath = path.join(__dirname, '../', localFilePath);
        fs.writeFileSync(localFullPath, req.file.buffer);

        console.log(`✅ 文件 ${originalname} 已保存`);

        res.status(200).send({
            status: 200,
            message: `文件 ${originalname} 上传成功！`,
            filePath: filePath
        });
    } catch (err) {
        console.error("❌ 处理普通文件上传时发生错误:", err);
        res.status(500).send({ message: 'Error processing normal file upload.' });
    }
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

        if (allChunksUploaded) {
            // ✅ 合并分片文件
            console.log(`🚀 所有分片上传完毕，开始合并 ${filename}`);
            const finalFilePath = path.join(__dirname, '../public/file', filename);
            const finalFileStream = fs.createWriteStream(finalFilePath);
            let currentChunk = 1;

            function appendNextChunk() {
                if (currentChunk > totalChunks) {
                    finalFileStream.end();
                    return;
                }
                const chunkFilePath = path.join(chunkPath, `chunk_${currentChunk}`);
                const chunkStream = fs.createReadStream(chunkFilePath);

                chunkStream.pipe(finalFileStream, { end: false });

                chunkStream.on('end', () => {
                    try {
                        // 删除已合并的分片
                        fs.unlinkSync(chunkFilePath);
                    } catch (unlinkErr) {
                        console.error("❌ 删除分片文件时发生错误:", unlinkErr);
                        finalFileStream.destroy();
                        res.status(500).send({ message: '删除分片文件时发生错误。' });
                        return;
                    }
                    currentChunk++;
                    appendNextChunk();
                });

                chunkStream.on('error', (err) => {
                    console.error("❌ 读取分片文件时发生错误:", err);
                    finalFileStream.destroy();
                    res.status(500).send({ message: '读取分片文件时发生错误。' });
                });
            }

            appendNextChunk();

            finalFileStream.on('error', (err) => {
                console.error("❌ 合并分片文件时发生错误:", err);
                res.status(500).send({ message: '合并分片文件时发生错误。' });
            });

            finalFileStream.on('finish', () => {
                try {
                    // 删除分片文件夹
                    fs.rmdirSync(chunkPath);
                } catch (rmdirErr) {
                    console.error("❌ 删除分片文件夹时发生错误:", rmdirErr);
                    res.status(500).send({ message: '删除分片文件夹时发生错误。' });
                    return;
                }
                console.log(`🎉 文件 ${filename} 合并完成！`);
                res.status(200).send({
                    status: 200,
                    message: `文件 ${filename} 上传成功！`,
                    filePath: finalFilePath
                });
            });
        } else {
            return res.status(200).send({ 
                code:'chunk',
                status: 200,
                message: `分片 ${chunkNumber} 已上传，等待其他分片...`
            });
        }
} catch (err) {
    console.error("❌ 处理分片上传时发生错误:", err);
    res.status(500).send({ message: '处理分片上传时发生错误。' });
}
};

module.exports = {
    CommonUploadFile,
    FragmentUploadFile
}
