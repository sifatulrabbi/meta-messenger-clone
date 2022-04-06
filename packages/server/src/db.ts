import { Client } from "pg";

export const db = new Client();

export async function connectDb() {
    try {
        await db.connect();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
