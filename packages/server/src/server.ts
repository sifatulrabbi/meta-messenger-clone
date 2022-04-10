import * as http from "http";
import { SocketServer } from "./socket";
import { config } from "./configs";
import { connectDb } from "./db";
import { app } from "./api/app";

export const server = http.createServer(app);
const socket = new SocketServer(server);

export async function startServer() {
    await connectDb();
    server.listen(config.PORT, () => {
        console.log(server.address());
        socket.start();
    });
}
