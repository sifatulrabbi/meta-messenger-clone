import * as http from "http";
import { Socket } from "./socket";
import { config } from "./configs";
import { connectDb } from "./db";

export const server = http.createServer();
const socket = new Socket(server);

export async function startServer() {
    await connectDb();
    socket.start();
    server.listen(config.PORT, () => {
        console.log(server.address());
    });
}
