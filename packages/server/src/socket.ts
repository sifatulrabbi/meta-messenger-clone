import type { Server } from "http";
import { Server as SocketServer } from "socket.io";
import { config } from "./configs";
import {
    IClientToServerEvents,
    IServerToClientEvents,
    IInterServerEvents,
    ISocketData,
    IMessage,
} from "./interfaces";

export class Socket {
    readonly io: SocketServer;

    constructor(server: Server) {
        this.io = new SocketServer<
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
    }

    sendMessage(message: IMessage) {
        console.log(message);
    }

    start() {
        this.io.listen(config.PORT);
        this.io.on("connection", (socket) => {
            console.log("New client: %d", socket.id);
            socket.emit("talk", "Hi there new client. How are you?");
            socket.on("talk", (msg) => {
                console.log(msg);
            });
            socket.on("send_message", this.sendMessage);
        });
    }
}
