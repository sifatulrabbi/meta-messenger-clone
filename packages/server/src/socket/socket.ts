import type { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";
import { ISocketServer, ISocket } from "../interfaces";
import { MessageHandlers } from "./handlers";

// Socket server class
export class SocketServer {
    private readonly io: ISocketServer;

    constructor(server: HttpServer) {
        // create socket instance with the http server
        this.io = new IOServer<ISocketServer>(server, {
            // enable cors for localhost:3000 (test mode)
            cors: {
                origin: ["http://localhost:3000"],
                methods: ["POST", "GET"],
            },
        });
    }

    // top level handler for all the events after a successful connection
    private onConnection(socket: ISocket) {
        socket.emit("welcome", "Hello client how are you?");
        console.log("WebSocket connection established");
        // enabling message handlers for handling message events
        const messageHandler = new MessageHandlers(this.io, socket);
        messageHandler.handle();
    }

    // start function to start listening for the events
    start() {
        this.io.on("connection", this.onConnection);
        console.log(this.io);
    }
}
