const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/new", withAuth, async (req, res) => {
  res.render("newPost", {
    logged_in: req.session.loggedIn,
  });
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: { id: req.params.id },
      include: [
        { model: User },
        { model: Comment, as: "comments", include: [{ model: User }] },
      ],
      plain: true,
    });

    var allComments = [];

    if (postData.comments.length > 0) {
      allComments = postData.comments.map((project) =>
        project.get({ plain: true })
      );
    }

    res.render("viewPost", {
      logged_in: req.session.loggedIn,
      postTitle: postData.title,
      postBody: postData.body,
      postId: postData.id,
      comments: allComments,
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
