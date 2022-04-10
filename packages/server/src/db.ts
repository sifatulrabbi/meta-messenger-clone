import { Client } from "pg";

export const db = new Client();

export async function connectDb() {
  try {
    await db.connect();
    console.log("Connected to the database");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
