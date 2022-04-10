import { ISocket } from "../interfaces";
import { activeContactsHandler, messagesHandler } from "./handlers";
import { io } from "../server";

// onConnection handlers for handling events
function onConnection(socket: ISocket): void {
    socket.emit("welcome", "Hello new user", socket.id);
    // add the messagesHandler function
    messagesHandler(io, socket);
    activeContactsHandler(io, socket);
}

// start listening to the socket
export function startIO(): void {
    // subscribe handlers to the connection event
    io.on("connection", onConnection);
}
