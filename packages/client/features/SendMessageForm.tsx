import React from "react";
import { MdSend } from "react-icons/md";

export const SendMessageForm: React.FC = () => {
    function getMessage(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className="absolute bottom-0 right-0 left-0 bg-white h-[75px] flex flex-row w-full items-center p-4">
            <form
                className="flex flex-row w-full items-center gap-2"
                onSubmit={getMessage}
            >
                <textarea className="bg-gray-200 rounded-lg w-full p-2 resize-none h-[50px]"></textarea>
                <button
                    type="submit"
                    className="text-white text-xl p-2 bg-blue-500 rounded-full"
                >
                    <MdSend />
                </button>
            </form>
        </div>
    );
};
