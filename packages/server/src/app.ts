import * as express from "express";
import * as cors from "cors";
import helmet from "helmet";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(helmet());
