import { server } from "../src/server";

describe("Server run test", () => {
    test("should listen to port 8080", (done) => {
        server.listen(8080);
        const addr = server.address() as any;
        expect(addr.port).toBe(8080);
        server.close(() => {
            done();
        });
    });
});
