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
