import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    links: {
        fb: {
            type: String,
            required: true,
        },
        insta: {
            type: String,
            required: true,
        },
        twitter: {
            type: String,
            required: true,
        }
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

export const Doctors = mongoose.model('Doctors', doctorSchema);


