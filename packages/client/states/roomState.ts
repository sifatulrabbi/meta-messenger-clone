import { atom } from "recoil";

interface IRoomState {
  isJoined: boolean;
  roomName: string | null;
}

export const roomState = atom<IRoomState>({
  key: "roomState",
  default: {
    isJoined: false,
    roomName: null,
  },
});
