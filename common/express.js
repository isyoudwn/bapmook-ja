import express from "express";
import menuRouter from "./menuRouter.js";

const app = express();

app.use("/menu", menuRouter);

export default app;
