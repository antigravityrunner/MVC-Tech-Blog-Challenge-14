const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [["createdAt", "ASC"]],
      include: [{ model: User, as: "user" }],
    });

    var allPosts = [];

    if (postData.length > 0) {
      allPosts = postData.map((project) => project.get({ plain: true }));
    }

    console.log(allPosts);

    res.render("homepage", {
      logged_in: req.session.loggedIn,
      posts: allPosts,
    });
  } catch (err) {
    console.log(err);
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

router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("register");
});

module.exports = router;
