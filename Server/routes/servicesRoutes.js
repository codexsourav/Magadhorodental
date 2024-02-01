import express from "express";
import { deleteService, getService, getServices, newService, updateService } from "../controller/servicesController.js";
import authMiddleware from "../middelware/authAdmin.js";

const servicesRouter = express.Router();
servicesRouter.get("/api/services", getServices);
servicesRouter.get("/api/service/:id", getService);
servicesRouter.post("/api/service", authMiddleware, newService);
servicesRouter.put("/api/service/:id", authMiddleware, updateService);
servicesRouter.delete("/api/service/:id", authMiddleware, deleteService);
export { servicesRouter };
