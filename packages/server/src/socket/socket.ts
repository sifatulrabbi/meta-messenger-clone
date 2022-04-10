import { ISocket } from "../interfaces";
import { activeContactsHandler, messagesHandler } from "./handlers";
import { io } from "../server";

// onConnection handlers for handling events
function onConnection(socket: ISocket): void {
    socket.emit("welcome", "Hello new user", socket.id);
    // add handle messages function
    messagesHandler(io, socket);
    // add handle active contacts function
    activeContactsHandler(io, socket);
}

// start listening to the socket
export function startIO(): void {
    // subscribe handlers to the connection event
    io.on("connection", onConnection);
}
