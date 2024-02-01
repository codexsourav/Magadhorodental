import express from "express";
import { deleteContacts, getContacts, newContact } from "../controller/contactController.js";
import authMiddleware from "../middelware/authAdmin.js";

const contactRouter = express.Router();

contactRouter.get("/api/contacts", authMiddleware, getContacts);
contactRouter.post("/api/contact", newContact);
contactRouter.delete("/api/contact/:id", deleteContacts);

export { contactRouter };