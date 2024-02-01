// blog.js
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    keywords: {
        type: String,
        required: true,
    },
    description: {
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

export const Blogs = mongoose.model('Blogs', blogSchema);
