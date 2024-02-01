import mongoose from "mongoose";

export const connectDataBase = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://sourav:sourav404@cluster0.6aannpk.mongodb.net/magadhorodental");
        console.log("Database Connected");
        return db;
    } catch (error) {
        throw error;
    }
}