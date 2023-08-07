const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashboard = require("./dashboard");
const post = require("./posts");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/", dashboard);
router.use("/posts", post);

module.exports = router;
