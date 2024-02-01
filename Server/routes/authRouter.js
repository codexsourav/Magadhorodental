import express from "express";
import { dashBordData, login } from "../controller/authController.js";
import authMiddleware from "../middelware/authAdmin.js";

const authRouter = express.Router();
authRouter.post("/api/login", login);
authRouter.get("/api/dashboard", authMiddleware, dashBordData);

export { authRouter };
