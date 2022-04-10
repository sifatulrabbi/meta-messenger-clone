import { NextPage } from "next";
import React from "react";
import { SendMessageForm, ConversationView } from "../../features";

const ConversationById: NextPage = () => {
    return (
        <div className="w-full h-[calc(100vh-60px)] mt-[60px] flex flex-col justify-between">
            <ConversationView />
            <SendMessageForm />
        </div>
    );
};

export default ConversationById;
