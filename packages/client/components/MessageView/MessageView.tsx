// types
import { IMessagePayload } from "../../interfaces";
// dependencies
import React from "react";
import { v4 } from "uuid";

// components
import Message from "./Message";

interface Props {
  messages: IMessagePayload[];
}

export const MessageView: React.FC<Props> = ({ messages }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full h-full overflow-y-auto mt-[60px] mb-[76px]">
      {messages.map((message) => (
        <Message key={v4()} {...message} />
      ))}
    </div>
  );
};
