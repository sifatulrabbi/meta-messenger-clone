export interface IClientToServerEvents {
    message: (message: string) => void;
    send_message: (user_id: string, message: string) => void;
    connect_req: (user_id: string) => void;
}

export interface IServerToClientEvents {
    welcome: (message: string) => void;
}

export interface IInterServerEvents {
    ping: () => void;
}

export interface ISocketData {
    name: string;
    id: string;
}
