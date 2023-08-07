const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/new", withAuth, async (req, res) => {
  res.render("newPost");
});

module.exports = router;
