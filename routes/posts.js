const express = require("express");
const postsController = require("./../controllers/posts");
const auth = require("./../middlewares/auth");
const restrictTo = require("./../middlewares/restrictTo");

const router = express.Router();

// Any authenticated user (user/admin) can create a post
router.post("/", auth, postsController.createPost);

// Any authenticated user (user/admin) can get all posts
router.get("/", auth, postsController.getPosts);

// Any authenticated user (user/admin) can get a post by ID
router.get("/:id", auth, postsController.getPost);

// Only admin can update a post
router.patch("/:id", auth, restrictTo("admin"), postsController.updatePost);

// Only admin can delete a post
router.delete("/:id", auth, restrictTo("admin"), postsController.deletePost);

module.exports = router;
