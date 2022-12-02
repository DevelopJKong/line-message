import express from "express";
import { getHome, postLineMessage } from "../controllers/globalController.js";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.post("/channel", postLineMessage);

export default globalRouter;
