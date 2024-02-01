import express from "express";
import { getHomeData } from "../controller/userController.js";


const userRouters = express.Router();
userRouters.get("/api/home", getHomeData);

export { userRouters };
