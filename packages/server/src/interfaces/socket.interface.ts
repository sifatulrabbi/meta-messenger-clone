import type { Server, Socket } from "socket.io";
import type { IMessagePayload } from "./messages.interface";

// client to server events interface
export interface IClientToServerEvents {
    "message:send": (payload: IMessagePayload) => void;
}

// server to client events interface
export interface IServerToClientEvents {
    welcome: (message: string) => void;
    test: (...args: unknown[]) => void;
    "message:receive": (payload: IMessagePayload) => void;
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
export type ISocketServer = Server<
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
