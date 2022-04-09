import { v4 } from "uuid";
import { IMessage } from "../interfaces";

export class MessageModel implements IMessage {
    readonly id: string;

    readonly sender_id: string;

    readonly receiver_id: string;

    readonly body: string;

    readonly sent_date: Date;

    received_date!: Date;

    constructor(sender_id: string, receiver_id: string, body: string) {
        this.id = v4();
        this.sender_id = sender_id;
        this.receiver_id = receiver_id;
        this.body = body;
        this.sent_date = new Date();
    }
}
