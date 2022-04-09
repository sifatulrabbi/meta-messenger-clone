import { IMessage, IDone } from "../interfaces";
import { MessageModel } from "../models";
import { db } from "../db";

class MessagesService {
    private readonly tableName = "message";

    // create a message object and save it in the db
    async create(
        {
            sender_id,
            receiver_id,
            body,
        }: Pick<IMessage, "sender_id" | "receiver_id" | "body">,
        done: IDone<IMessage>,
    ): Promise<void> {
        try {
            // creating a message object
            const message: IMessage = new MessageModel(
                sender_id,
                receiver_id,
                body,
            );

            await db.query<IMessage[]>(
                `INSERT INTO message (id, sender_id, receiver_id, body, sent_date, received_date)
                    VALUES(
                        '${message.id}',
                        '${message.sender_id}',
                        '${message.receiver_id}',
                        '${message.body}',
                        '${message.sent_date}',
                        '${message.received_date}'
                    );`,
            );

            done(null, message);
        } catch (err) {
            console.error(err);
            done(err, null);
        }
    }

    // update the message data with the sent date
    async updateSentDate(
        message_id: string,
        date: Date,
        done: IDone<IMessage>,
    ): Promise<void> {
        try {
            done(null);
        } catch (err) {
            console.error(err);
            done(err, null);
        }
    }

    // get all the messages of a conversation between two users
    async getConversationMessages(
        sender_id: string,
        receiver_id: string,
        done: IDone<IMessage[]>,
    ): Promise<void> {
        try {
            done(null);
        } catch (err) {
            console.error(err);
            done(err);
        }
    }
}

export const messagesService = new MessagesService();
