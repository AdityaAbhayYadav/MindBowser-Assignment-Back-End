const Blog = require("../models/blogModel");

// Create Blog
exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = await Blog.create({ title, content, userId: req.user.id });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get All Blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ where: { userId: req.user.id } });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findOne({ where: { id, userId: req.user.id } });
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    await blog.destroy();
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
