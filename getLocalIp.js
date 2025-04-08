const os = require('os');

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        const interfaceInfo = interfaces[interfaceName];
        for (const info of interfaceInfo) {
            // 只考虑 IPv4 地址，并且排除 127.0.0.1
            if (info.family === 'IPv4' &&!info.internal) {
                return info.address;
            }
        }
    }
    return null;
}

module.exports = getLocalIP;