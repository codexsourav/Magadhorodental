import express from "express";
import { deleteBlog, getBlog, getBlogs, newBlog, updateBlog } from "../controller/blogsController.js";
const blogsRouters = express.Router();

blogsRouters.get("/api/blogs", getBlogs);
blogsRouters.get("/api/blog/:id", getBlog);
blogsRouters.post("/api/blog", newBlog);
blogsRouters.put("/api/blog/:id", updateBlog);
blogsRouters.delete("/api/blog/:id", deleteBlog);

export { blogsRouters };
