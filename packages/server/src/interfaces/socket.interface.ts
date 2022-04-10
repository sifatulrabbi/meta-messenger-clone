import type { Server, Socket } from "socket.io";
import type { IMessagePayload } from "./messages.interface";

// client to server events interface
export interface IClientToServerEvents {
    "message:send": (payload: IMessagePayload) => void;
    // greeting event for test purpose
    greeting: (msg: string) => void;
}

// server to client events interface
export interface IServerToClientEvents {
    welcome: (message: string, id: string) => void;
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
