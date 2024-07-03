const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let currentStatus = 'NOK';

wss.on('connection', ws => {
    ws.send(currentStatus);

    ws.on('message', message => {
        currentStatus = message;
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(currentStatus);
            }
        });
    });
});

app.use(express.static('public'));

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
