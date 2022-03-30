import React from "react";
import { ConversationAvatar } from "../components";

interface Props {
    name: string;
    peek: string;
    timestamp: string;
    unread?: boolean;
    active?: boolean;
}

export const ConversationCard: React.FC<Props> = ({
    name,
    peek,
    timestamp,
    unread,
    active,
}) => {
    return (
        <button className="flex flex-row w-full justify-start items-center gap-4 py-3 px-4 hover:bg-gray-50">
            <ConversationAvatar active={active} />
            <div className="flex w-full flex-col justify-start items-start text-sm">
                <div className="w-full flex justify-between items-center">
                    <span
                        className={`font-primary ${
                            unread ? "text-black font-bold" : "text-gray-700"
                        }`}
                    >
                        {name}
                    </span>
                    <span
                        className={
                            unread ? "text-black font-bold" : "text-gray-700"
                        }
                    >
                        {timestamp}
                    </span>
                </div>
                <span
                    className={
                        unread ? "text-black font-medium" : "text-gray-700"
                    }
                >
                    {peek}
                </span>
            </div>
        </button>
    );
};
