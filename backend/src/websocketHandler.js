const WebSocket = require('ws');

function initWebsockets(server) {
    const wss = new WebSocket.Server({ server, path: '/ws' });

    wss.on('connection', (ws, req) => {
        const remote = req && req.socket ? `${req.socket.remoteAddress}:${req.socket.remotePort}` : 'unknown';
        console.log('Client connected:', remote);

        ws.on('message', msg => {
            console.log('Received:', msg.toString());
        });

        ws.on('close', () => {
            console.log('Client disconnected:', remote);
        });

        ws.on('error', err => {
            console.error('WebSocket error:', err);
        });
    });

    console.log('WebSocket server initialized');
    return wss;
}

module.exports = initWebsockets;