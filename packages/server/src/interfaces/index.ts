export * from "./socket.interface";
export * from "./messages.interface";

export type IDone<T> = (err: unknown, result?: T | null) => void;
