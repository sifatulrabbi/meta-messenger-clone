export interface IMessage {
    id: string;
    body: string;
    sender_id: string;
    receiver_id: string;
    sent_date: Date;
    received_date: Date;
}
