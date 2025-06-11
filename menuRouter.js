import express from "express";
import { getMenu } from "./menuController.js"

const menuRouter = express.Router();
menuRouter.get("/menu", getMenu);

export default menuRouter;