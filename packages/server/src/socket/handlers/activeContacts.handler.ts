import { IIOServer, ISocket } from "../../interfaces";

export async function activeContactsHandler(io: IIOServer, socket: ISocket) {
    const list: string[] = [];
    const ids = await io.allSockets();

    ids.forEach((id) => {
        list.push(id);
    });

    socket.emit(
        "active_contacts",
        list.filter((id) => id !== socket.id),
    );
}
