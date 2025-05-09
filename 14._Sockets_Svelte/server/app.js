import express from 'express';

const app = express();

app.use(express.static("public"));

import http from 'http';

const server = http.createServer(app);

import { Server } from 'socket.io';

const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A client connected", socket.id);

    socket.on("client-sends-color", (data) => {
        // emits to all sockets in the io namespace
        io.emit("server-sends-color", data);

        // broadcasts to all other sockets but itself
        // socket.broadcast.emit("server-sends-color", data);

        // emits to the socket itself
        // socket.emit("server-sends-color", data);
    });

    
    socket.on("disconnect", () => {
        console.log("A client disconnected", socket.id);
    });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));
