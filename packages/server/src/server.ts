import * as http from "http";
import { startIO } from "./socket";
import { config } from "./configs";
import { connectDb } from "./db";
import { app } from "./api/app";
import { Server } from "socket.io";
import { IIOServer } from "./interfaces";

// http server instance
export const server = http.createServer(app);
// socket io server instance with http server
export const io = new Server<IIOServer>(server, {
    cors: {
        methods: ["GET", "POST"],
        origin: "*",
    },
});

// start server function to start the server
export async function startServer() {
    await connectDb();
    server.listen(config.PORT, () => {
        console.log(server.address());
    });
    startIO();
}
