import React from "react";
import { MessageView } from "../components";
import { fakeMessages } from "../assets/data";

export const ConversationView: React.FC = () => {
    return (
        <section className="max-w-full h-full mb-[75px] flex flex-col gap-2 p-4 overflow-y-auto">
            {fakeMessages.map((message) => (
                <MessageView key={message.body} message={message} />
            ))}
        </section>
    );
};
