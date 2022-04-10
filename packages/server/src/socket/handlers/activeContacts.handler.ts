import { IIOServer, ISocket } from "../../interfaces";

export async function activeContactsHandler(io: IIOServer, socket: ISocket) {
    // empty list for the ids
    const list: string[] = [];
    // get ids from the io server
    const ids = await io.allSockets();
    // map over the ids and push into the list
    ids.forEach((id) => {
        list.push(id);
    });

    // emit the active contacts event
    socket.emit(
        "active_contacts",
        list.filter((id) => id !== socket.id),
    );
}
