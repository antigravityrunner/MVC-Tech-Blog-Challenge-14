const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/new", withAuth, async (req, res) => {
  res.render("newPost", {
    logged_in: req.session.loggedIn,
  });
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findOne({ where: { id: req.params.id } });

    res.render("viewPost", {
      logged_in: req.session.loggedIn,
      postTitle: postData.title,
      postBody: postData.body,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const postData = await Post.findOne({ where: { id: req.params.id } });

    res.render("editPost", {
      logged_in: req.session.loggedIn,
      postTitle: postData.title,
      postBody: postData.body,
      postId: postData.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
