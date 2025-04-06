const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

import express from 'express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import router from './routes.mjs';

const app = express();
const httpServer = createServer(app);

app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

const io = new SocketIOServer(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use('/api', router);

io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado');
});

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
