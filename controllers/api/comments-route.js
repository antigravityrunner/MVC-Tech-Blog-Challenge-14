const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      body: req.body.commentBody,
      post_id: req.body.postId,
      author: req.session.userId,
    });

    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
