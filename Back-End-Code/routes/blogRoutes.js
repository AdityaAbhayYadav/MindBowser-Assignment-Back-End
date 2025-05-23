const express = require("express");
const { createBlog, getBlogs, deleteBlog } = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware); // All routes protected

router.post("/", createBlog);
router.get("/", getBlogs);
router.delete("/:id", deleteBlog);

module.exports = router;
