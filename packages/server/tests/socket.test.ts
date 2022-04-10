import { socket } from "../src/server";
import { io, Socket } from "socket.io-client";
import {
  IClientToServerEvents,
  IServerToClientEvents,
} from "../src/interfaces";

const port = 9999;
const serverUrl = `http://localhost:${port}`;
let client: Socket<IServerToClientEvents, IClientToServerEvents>;

beforeAll((done) => {
  socket.listen(port);
  client = io(serverUrl);
  done();
});

afterAll((done) => {
  socket.close();
  client.close();
  done();
});

describe("client and server communication", () => {
  describe("client", () => {
    test("should connect with the server socket", () => {
      const active = client.on("connect", () => {}).active;
      expect(active).toBe(true);
    });

    test("should be able to send message to the server", () => {
      const conn = client.emit("message", "Hello server");
      expect(conn.active).toBeTruthy();
    });
  });

  describe("server", () => {
    test("should get client's id upon connection", () => {
      socket.on("connect", (conn) => {
        expect(conn.id).toBeTruthy();
      });
    });

    test("should be able to send message to the client", () => {
      socket.on("connect", (conn) => {
        const success = conn.emit("welcome", "Welcome client");
        expect(success).toBe(true);
      });
    });

    test("should be able to read client emitted message", () => {
      socket.on("connection", (conn) => {
        conn.on("message", (msg) => {
          expect(msg).toBeTruthy();
        });
      });
    });
  });
});

describe("client to client communication", () => {
  let client2: Socket<IServerToClientEvents, IClientToServerEvents>;

  test("should be two user available", () => {
    client2 = io(serverUrl);
    expect(client2.active).toBe(true);
    expect(client.active).toBe(true);
  });

  describe("server as a middleman", () => {
    test("server should get the connect request", () => {
      client.emit("connect_req", client2.id);

      socket.on("connect", (conn) => {
        conn.on("connect_req", (userId) => {
          expect(userId).toBe(client2.id);
        });
      });
    });
  });
});
