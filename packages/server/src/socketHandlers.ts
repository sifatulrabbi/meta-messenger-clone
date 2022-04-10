import { IIOServer, ISocket } from "./interfaces";

/**
 * Handler for message events
 */
function handleMessages(io: IIOServer, socket: ISocket): void {
  // Handle user sent messages
  socket.on("message:send", (payload) => {
    console.log(payload);
  });
}

/**
 * Handler for room events
 */
function handleRooms(io: IIOServer, socket: ISocket): void {
  // Handle join room request
  socket.on("room:join", (payload) => {
    console.log(payload);
  });
}

export function socketHandlers(io: IIOServer, socket: ISocket) {
  console.log(`New user connected, ID: ${socket.id}`);

  /**
   * Handle message events
   */
  handleMessages(io, socket);

  /**
   * Handle room events
   */
  handleRooms(io, socket);
}
