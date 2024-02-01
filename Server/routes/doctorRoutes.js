import express from "express";
import { deleteDoctor, getDoctor, getDoctors, newDoctor, updateDoctor } from "../controller/doctorsController.js";
import authMiddleware from "../middelware/authAdmin.js";

const doctorRoutes = express.Router();

doctorRoutes.get("/api/doctors", getDoctors);
doctorRoutes.get("/api/doctor/:id", getDoctor);
doctorRoutes.post("/api/doctor", authMiddleware, newDoctor);
doctorRoutes.put("/api/doctor/:id", authMiddleware, updateDoctor);
doctorRoutes.delete("/api/doctor/:id", authMiddleware, deleteDoctor);

export { doctorRoutes };
