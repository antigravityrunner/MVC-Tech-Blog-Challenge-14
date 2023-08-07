const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.postTitle,
      body: req.body.postBody,
      author: req.session.userId,
    });

    res.status(200).json({ postId: dbPostData.id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.patch("/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.update(
      {
        title: req.body.postTitle,
        body: req.body.postBody,
      },
      {
        where: { id: req.params.id, author: req.session.userId },
      }
    );

    res.status(200).json({ postId: req.params.id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.destroy({
      where: { id: req.params.id, author: req.session.userId },
    });
    res.status(200).json({});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
