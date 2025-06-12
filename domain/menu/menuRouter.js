import express from "express";
import { getMenu } from "../../presentation/menuController.js"

const menuRouter = express.Router();
menuRouter.get("/menu1", getMenu);

export default menuRouter;
