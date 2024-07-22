import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import BlogRouter from "./routes/blogRouter.js";
import cors from 'cors';


const app = express();
app.use(cors());
const port = 5000;
app.use(express.json())
app.use("/api/user", router)
app.use("/api/blog", BlogRouter)

mongoose.connect("mongodb+srv://mohamedabdelwahabelazab:UugPy6fhJSk3KQJt@cluster0.jidkpyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => app.listen(port))
    .then(() => console.log(`Connected to Database and listening on port ${port}`))
    .catch((err) => console.log(err));
