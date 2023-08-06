const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({ order: [["createdAt", "ASC"]] });

    const allPosts = [];

    if (postData.length > 0) {
      allPosts = userData.map((project) => project.get({ plain: true }));
    }

    res.render("homepage", {
      logged_in: req.session.logged_in,
      posts: allPosts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
