// dependencies
import React from "react";
import type { NextPage } from "next";
import { io } from "socket.io-client";
import { IMessagePayload, ISocket } from "../interfaces";
import { useRecoilValue, useRecoilState } from "recoil";
import { roomState, socketState } from "../states";

// components
import { MessageView, Header } from "../components";

const socket: ISocket = io("http://localhost:8080");

const Home: NextPage = () => {
  // react states
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState<IMessagePayload[]>([]);
  // recoil states
  const room = useRecoilValue(roomState);
  const [socketData, setSocketState] = useRecoilState(socketState);

  /**
   * Update the socket state with socket id and username on page load
   */
  React.useEffect(() => {
    // Wait for the socket to start then set the state
    socket.on("connect", () => {
      setSocketState({
        socketId: socket.id,
        username: "Temujin",
      });
    });
  }, [setSocketState]);

  /**
   * Listen to the message:receive event
   */
  React.useEffect(() => {
    socket.on("connect", () => {
      receiveMessage();
    });
  }, []);

  /**
   * Send the message to the server
   */
  function sendMessage(): void {
    // create the payload
    const payload: IMessagePayload = {
      sender_id: socketData.socketId,
      receiver_id: room.roomName ? room.roomName : "server",
      body: message,
    };

    // send message to the room if the user is joined to the room
    if (!room.isJoined && !room.roomName) {
      // send the payload to the server
      socket.emit("message:send", payload);
    } else {
      socket.emit("message:room", payload);
    }
    // update messages with the payload
    setMessages((prev) => [...prev, payload]);
    // reset the input field
    setMessage("");
  }

  /**
   * Listen to the incoming message
   */
  function receiveMessage(): void {
    socket.on("message:incoming", (payload) => {
      setMessages((prev) => [...prev, payload]);
    });
  }

  return (
    <>
      <Header socket={socket} />
      <main className="flex flex-col justify-between p-4 items-center h-screen overflow-hidden w-full">
        <MessageView messages={messages} />

        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex flex-row p-4 justify-center items-center gap-2 bg-white fixed bottom-0 left-0 right-0 h-[76px]"
        >
          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
            className="bg-gray-100 p-2 w-full rounded-md outline-none border-transparent border-2 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Send
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
