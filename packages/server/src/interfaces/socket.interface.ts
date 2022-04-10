import type { Server, Socket } from "socket.io";
import type { IMessagePayload } from "./messages.interface";

/**
 * room:join event's payload
 */
export interface IJoinRoom {
  name: string;
  user: string;
}

// client to server events interface
export interface IClientToServerEvents {
  // message event for sending message
  "message:send": (payload: IMessagePayload) => void;
  // greeting event for test purpose
  greeting: (msg: string) => void;
  /**
   * Room events
   */

  // join room event
  "room:join": (payload: IJoinRoom) => void;
}

// server to client events interface
export interface IServerToClientEvents {
  "message:incoming": (payload: IMessagePayload) => void;
  active_contacts: (list: string[]) => void;
}

// inter server interface
export interface IInterServerEvents {
  ping: () => void;
}

export interface ISocketData {
  name: string;
  id: string;
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
