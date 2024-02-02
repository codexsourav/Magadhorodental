import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    qus: {
        type: String,
        required: true,
    },
    ans: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});

export const Faqs = mongoose.model('Faq', faqSchema);
