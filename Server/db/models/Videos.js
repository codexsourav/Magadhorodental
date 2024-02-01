// video.js
import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

export const Videos = mongoose.model('Videos', videoSchema);


