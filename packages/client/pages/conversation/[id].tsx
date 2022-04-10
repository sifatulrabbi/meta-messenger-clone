import { NextPage } from "next";
import React from "react";
import { SendMessageForm, ConversationView } from "../../features";
import { useSetRecoilState } from "recoil";
import { headerState } from "../../states";

const ConversationById: NextPage = () => {
    const setState = useSetRecoilState(headerState);

    // set mock value into the headerState
    React.useEffect(() => {
        setState({
            avatar: "show",
            returnHome: true,
            info: true,
            title: "Unknown user",
        });
    }, [setState]);

    return (
        <div className="w-full h-[calc(100vh-60px)] mt-[60px] flex flex-col justify-between">
            <ConversationView />
            <SendMessageForm />
        </div>
    );
};

export default ConversationById;
