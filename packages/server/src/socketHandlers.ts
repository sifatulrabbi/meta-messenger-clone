import { IIOServer, ISocket } from "./interfaces";

export function socketHandlers(io: IIOServer, socket: ISocket) {
  console.log(`New user connected, ID: ${socket.id}`);

  // Listen to the message:send event and get the payload
  socket.on("message:send", (payload) => {
    console.log(payload);
    // send a reply to the user
    socket.emit("message:incoming", {
      receiver_id: "user_id_one",
      sender_id: "server",
      body: "Thanks for the message",
    });
  });

  // Listen to the room messages
  socket.on("message:room", (payload) => {
    socket.to(payload.receiver_id).emit("message:incoming", {
      sender_id: payload.sender_id,
      receiver_id: payload.receiver_id,
      body: payload.body,
    });
  });

  // Listen to the room:join event and get the payload
  socket.on("room:join", (payload) => {
    // join the user to the room
    socket.join(payload.room);
    // send a welcome message to the room
    socket.to(payload.room).emit("message:incoming", {
      sender_id: "server",
      receiver_id: payload.room,
      body: `${payload.user} joined the room!`,
    });
  });
}
