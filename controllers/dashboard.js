const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { id: req.session.userId },
      order: [["createdAt", "ASC"]],
    });

    const allPosts = [];

    if (postData.length > 0) {
      allPosts = postData.map((project) => project.get({ plain: true }));
    }

    res.render("dashboard", {
      logged_in: req.session.loggedIn,
      posts: allPosts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
