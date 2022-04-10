import React from "react";
import type { IMessage } from "../interfaces";

interface Props {
    message: IMessage;
}

export const MessageView: React.FC<Props> = ({ message }) => {
    const userId = "user_one";

    return (
        <div
            className={`flex items-start gap-2  ${
                message.sender_id === userId
                    ? "self-end flex-row-reverse max-w-[75%]"
                    : "flex-row max-w-[85%]"
            }`}
        >
            {message.sender_id !== userId && (
                <div className="h-[2rem] w-[2rem] min-w-[2rem] min-h-[2rem] rounded-full bg-gray-300"></div>
            )}
            <p
                className={`flex justify-start items-start text-left rounded-lg p-2 ${
                    userId === message.sender_id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                }`}
                style={
                    userId === message.sender_id
                        ? { borderTopRightRadius: 0 }
                        : { borderTopLeftRadius: 0 }
                }
            >
                {message.body}
            </p>
        </div>
    );
};
