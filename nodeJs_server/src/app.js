import express from "express";
import router from "./router/product";
import router2 from "./router/auth";
import router3 from "./router/cart";
import { connectDB } from "./config/db";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/", router);
app.use("/", router2);
app.use("/", router3);

export const viteNodeApp = app;
