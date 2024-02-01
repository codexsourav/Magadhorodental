import express from "express";
import { deleteVideo, getVideo, getVideos, newVideo, updateVideo } from "../controller/videosController.js";
import authMiddleware from "../middelware/authAdmin.js";

const videosRouters = express.Router();
videosRouters.get("/api/videos", getVideos);
videosRouters.get("/api/video/:id", getVideo);
videosRouters.post("/api/video", authMiddleware, newVideo);
videosRouters.put("/api/video/:id", authMiddleware, updateVideo);
videosRouters.delete("/api/video/:id", authMiddleware, deleteVideo);
export { videosRouters };
