import express from "express";
import authMiddleware from "../middelware/authAdmin.js";
import { addFaq, deleteFaq, getFaq, getFaqs, updateFaq } from "../controller/faqController.js";
const faqRouters = express.Router();

faqRouters.get("/api/faqs", authMiddleware, getFaqs);
faqRouters.get("/api/faq/:id", authMiddleware, getFaq);
faqRouters.post("/api/faq", authMiddleware, addFaq);
faqRouters.put("/api/faq/:id", authMiddleware, updateFaq);
faqRouters.delete("/api/faq/:id", authMiddleware, deleteFaq);

export { faqRouters };
