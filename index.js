const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}));

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true
    }
});

let value = 0;

io.on('connection', (socket) => {
const intervalId = setInterval(() => {
    value += 1;
    if (value > 50) {
        value = 1; 
    }
    socket.emit('multiplier', value);
    socket.emit('result', value*2);
}, 1000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        clearInterval(intervalId);
    });
});
const PORT = process.env.port || 4000
server.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`);
});
