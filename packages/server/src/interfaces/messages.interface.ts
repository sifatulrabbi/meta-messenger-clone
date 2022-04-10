// main message object interface (used for storing data in the db)
export interface IMessage {
    id: string;
    body: string;
    sender_id: string;
    receiver_id: string;
    sent_date: Date;
    received_date: Date;
}

// interface of the payload of the message events of socket
export type IMessagePayload = Pick<
    IMessage,
    "sender_id" | "receiver_id" | "body"
>;
