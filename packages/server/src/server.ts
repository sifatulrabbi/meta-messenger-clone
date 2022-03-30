import * as http from "http";
import { Server } from "socket.io";
import {
    IClientToServerEvents,
    IServerToClientEvents,
    ISocketData,
    IInterServerEvents,
} from "./interfaces";

export const server = http.createServer();
export const socket = new Server<
    IClientToServerEvents,
    IServerToClientEvents,
    IInterServerEvents,
    ISocketData
>(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET"],
    },
});

socket.on("connect", (conn) => {
    console.log(conn.id);
    conn.emit("welcome", "welcome to the server");

    conn.on("connect_req", (user_id) => {
        console.log(user_id);
        socket.emit("welcome", "Wait a moment...");
        setTimeout(() => {
            conn.emit("welcome", "You request cannot be completed");
        }, 1000);
    });
});
