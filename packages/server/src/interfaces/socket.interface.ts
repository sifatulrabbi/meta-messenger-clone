import type { Server, Socket } from "socket.io";
import type { IMessagePayload } from "./messages.interface";

export interface IJoinReqPayload {
  room: string;
  user: string;
}

// client to server events interface
export interface IClientToServerEvents {
  // message event for sending message
  "message:send": (payload: IMessagePayload) => void;
  // send message in the rooms
  "message:room": (payload: IMessagePayload) => void;
  // join room event
  "room:join": (payload: IJoinReqPayload) => void;
}

// server to client events interface
export interface IServerToClientEvents {
  // send message to the client event
  "message:incoming": (payload: IMessagePayload) => void;
  active_contacts: (list: string[]) => void;
}

// inter server interface
export interface IInterServerEvents {
  ping: () => void;
}

export interface ISocketData {
  name: string;
}

// socket server interface for using throughout the application
export type IIOServer = Server<
  IClientToServerEvents,
  IServerToClientEvents,
  IInterServerEvents,
  ISocketData
>;

// socket (event) interface for using throughout the application
export type ISocket = Socket<
  IClientToServerEvents,
  IServerToClientEvents,
  IInterServerEvents,
  ISocketData
>;
