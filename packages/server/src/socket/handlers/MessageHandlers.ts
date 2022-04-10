import type { ISocketServer, IMessagePayload, ISocket } from "../../interfaces";

// handles all the message events
export class MessageHandlers {
    constructor(
        private readonly io: ISocketServer,
        private readonly socket: ISocket,
    ) {
        this.io = io;
        this.socket = socket;
    }

    // handle message events
    handle() {
        // handle sending message event
        this.socket.on("message:send", this.messageSend);
    }

    // handles message:send event
    messageSend({ sender_id, receiver_id, body }: IMessagePayload): void {
        console.log("SENDER: ", sender_id);
        console.log("RECEIVER: ", receiver_id);
        console.log("BODY: ", body);
    }

    // handles message:receive event
    messageReceive({ sender_id, receiver_id, body }: IMessagePayload): void {
        console.log("SENDER %d", sender_id);
        console.log("RECEIVER %d", receiver_id);
        console.log("BODY %d", body);
    }
}
