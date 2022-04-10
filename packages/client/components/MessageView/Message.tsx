// types
import type { IMessagePayload } from "../../interfaces";
// dependencies
import React from "react";
import { useRecoilValue } from "recoil";
import { socketState } from "../../states";

interface Props extends IMessagePayload {}

const Message: React.FC<Props> = ({ sender_id, receiver_id, body }) => {
  // recoil states
  const socketData = useRecoilValue(socketState);

  return (
    <div
      className={`flex items-center w-full ${
        sender_id === socketData.socketId ? "justify-end" : "justify-start"
      }`}
    >
      <p
        className={`p-2 rounded-md max-w-[85%] break-words ${
          sender_id === socketData.socketId
            ? "bg-blue-500 text-white"
            : "bg-gray-100"
        }`}
      >
        {body}
      </p>
    </div>
  );
};

export default Message;
