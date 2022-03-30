import { config } from "./configs";
import { server } from "./server";

server.listen(config.PORT, () => {
    console.log(server.address());
});
