import express from "express";
import { AddBlog, getAllBlogs } from "../controllers/BlogController.js"

const BlogRouter = express.Router();
BlogRouter.get("/", getAllBlogs);
BlogRouter.post("/add", AddBlog);

export default BlogRouter;