import mongoose from 'mongoose';

export const servicesSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

export const Services = mongoose.model('Services', servicesSchema);
