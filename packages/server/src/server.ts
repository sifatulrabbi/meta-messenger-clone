import * as http from "http";
import { config } from "./configs";
import { connectDb } from "./db";
import { app } from "./app";
import { Server } from "socket.io";
import { IIOServer, ISocket } from "./interfaces";
import { socketHandlers } from "./socketHandlers";

// http server instance
const server = http.createServer(app);
// socket io server instance with http server
const io = new Server<IIOServer>(server, {
  cors: {
    methods: ["GET", "POST"],
    origin: "*",
  },
});

/**
 * Subscribe handler to handle socket io events
 */
io.on("connection", (socket: ISocket) => {
  socketHandlers(io, socket);
});

/**
 * Start listening to port and connect to the db
 */
export async function startServer() {
  await connectDb();
  server.listen(config.PORT, () => {
    console.log(server.address());
  });
}
