import Blog from "../model/Blog.js";

export const getAllBlogs = async (req, res, next) => {
    let blogs
    try {
        blogs = await Blog.find();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    if (!blogs) {
        return res.status(404).json({ message: "No blogs found" });
    }
    return res.status(200).json({ blogs })


}

export const AddBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;
    const blog = new Blog({ title, description, image, user });
    try {
        await blog.save();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    return res.status(201).json({ blog });

}