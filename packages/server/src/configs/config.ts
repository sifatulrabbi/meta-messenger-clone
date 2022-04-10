import * as dotenv from "dotenv";
import * as fs from "fs";

// check for the .env files locally
// if .env.local does not exist then it will stop the app and throw an error
if (fs.existsSync(".env.local")) {
    dotenv.config({ path: ".env.local" });
} else if (fs.existsSync(".env.example")) {
    dotenv.config({ path: ".env.example" });
} else {
    console.log("No ENV file found");
    process.exit(1);
}

export const config = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: parseInt(process.env.PORT || "8080", 10),
    IO_PORT: parseInt(process.env.IO_PORT || "8081"),
};
