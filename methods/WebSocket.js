const ConnectWebSocket = function (WebSocket,wss) {
    // 存储所有连接的 WebSocket 客户端
    const clients = new Set();
    // 处理 WebSocket 连接
    wss.on('connection', (ws) => {
        let username = `默认用户名`; // 默认用户名
        clients.add(ws);
        // 处理客户端断开连接
        ws.on('close', () => {
            clients.delete(ws);
            // 广播消息给所有连接的客户端
            clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type:'tip',payload:`${username}已断开连接`}));
                }
            });
        });
        // 处理消息
        ws.on('message', (message) => {
            const data = JSON.parse(message);
            if(data.type === 'username'){
                username = data.payload;
                // 广播消息给所有连接的客户端
                clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type:'tip',payload:`${username}已连接`}));
                    }
                });
            }else if(data.type === 'chat'){
                clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type:'chat',payload:`${username}: ${data.payload}`}));
                    }
                });
            }
        });
    });
}
module.exports = ConnectWebSocket;