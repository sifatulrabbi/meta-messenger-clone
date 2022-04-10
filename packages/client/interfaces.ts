import type { Socket } from "socket.io-client";

export interface IMessage {
  sender_id: string;
  receiver_id: string;
  body: string;
  conversation_id: string;
  sent_at: Date;
  received_at: Date;
}

export interface IAuthState {
  isAuthenticated: boolean;
  user: null | any;
  token: null | string;
}

export interface IHeaderState {
  title: string;
  avatar: null | string;
  returnHome: boolean;
  info: boolean;
}

// user object interface
export interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  avatar?: string;
}

// active user interface
export type IActiveUser = Pick<IUser, "id" | "name">;

// interface for socketState's data
export interface ISocketState {
  activeUsers: IActiveUser[];
}

// interface of the payload of the message events of socket
export type IMessagePayload = Pick<
  IMessage,
  "sender_id" | "receiver_id" | "body"
>;

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

export type ISocket = Socket<IServerToClientEvents, IClientToServerEvents>;

// conversation interface
export interface IConversation {
  id: string;
  participants: [person_one: string, person_two: string];
  created_at: Date;
  messages: IMessage[];
}
