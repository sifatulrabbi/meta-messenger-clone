import type { IIOServer, IMessagePayload, ISocket } from "../../interfaces";

// message events handler function
export function messagesHandler(io: IIOServer, socket: ISocket): void {
    // message:send event handler function
    function messageSend(payload: IMessagePayload): void {
        // broadcast the message to all the clients
        socket.broadcast.emit("message:incoming", {
            sender_id: "server",
            receiver_id: "any",
            body: payload.body,
        });
    }

    // listen to the message:send event
    socket.on("message:send", messageSend);
}
