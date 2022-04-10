import React from "react";
import { MdSend } from "react-icons/md";

export const SendMessageForm: React.FC = () => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    function getMessage(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(textareaRef.current?.textContent);
    }

    return (
        <div className="flex flex-row w-full items-center p-4">
            <form
                className="flex flex-row w-full items-center gap-2"
                onSubmit={getMessage}
            >
                <span
                    ref={textareaRef}
                    contentEditable
                    role="textbox"
                    className="bg-gray-200 rounded-lg w-full p-2"
                ></span>
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
