import React from "react";
import { IJoinReqPayload, ISocket } from "../interfaces";
import { useRecoilState } from "recoil";
import { roomState } from "../states";

interface Props {
  socket: ISocket;
}

export const Header: React.FC<Props> = ({ socket }) => {
  // room name state
  const [room, setRoom] = React.useState<string>("");
  // user name state
  const [user, setUser] = React.useState<string>("");
  // joined to a room status
  const [roomJoined, setRoomJoinedState] = useRecoilState(roomState);

  /**
   * Send the join request to the server
   */
  function sendJoinReq(): void {
    // create the payload
    const payload: IJoinReqPayload = { room, user };
    // updated the joined room state
    setRoomJoinedState({
      isJoined: true,
      roomName: payload.room,
    });
    // send the payload to the server
    socket.emit("room:join", payload);
  }

  React.useEffect(() => {
    setRoomJoinedState({
      isJoined: false,
      roomName: null,
    });
  }, [setRoomJoinedState]);

  return (
    <header className="fixed bg-white top-0 right-0 left-0 h-[60px] flex px-4 justify-start items-center">
      {!roomJoined.isJoined ? (
        <form
          action="submit"
          className="flex flex-row max-w-full justify-start items-center"
          onSubmit={(e) => {
            e.preventDefault();
            sendJoinReq();
          }}
        >
          <input
            type="text"
            name="room_name"
            placeholder="Room..."
            className="w-full p-2 bg-gray-100"
            value={room}
            onChange={(e) => {
              setRoom(e.currentTarget.value);
            }}
          />
          <input
            type="text"
            name="user_name"
            placeholder="User..."
            className="w-full p-2 bg-gray-100"
            value={user}
            onChange={(e) => {
              setUser(e.currentTarget.value);
            }}
          />
          <button type="submit" className="p-2 text-white bg-blue-500">
            Join
          </button>
        </form>
      ) : (
        <span className="block w-full h-full text-lg font-bold font-primary text-black">
          {roomJoined.roomName}
        </span>
      )}
    </header>
  );
};
