import { atom } from "recoil";

interface ISocketState {
  socketId: string;
  username: string;
}

export const socketState = atom<ISocketState>({
  key: "socketState",
  default: {
    socketId: "",
    username: "",
  },
});
