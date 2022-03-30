import React from "react";
import { FaUser } from "react-icons/fa";

interface Props {
    active?: boolean;
}

export const ConversationAvatar: React.FC<Props> = ({ active }) => {
    return (
        <div
            className={`flex justify-center items-center bg-gray-100 h-[48px] min-h-[48px] w-[48px] min-w-[48px] rounded-full overflow-hidden border-2 ${
                active ? "border-blue-500" : "border-transparent"
            }`}
        >
            <FaUser className="text-gray-200 font-4xl" />
        </div>
    );
};
