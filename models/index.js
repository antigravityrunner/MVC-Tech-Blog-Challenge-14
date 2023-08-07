const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "author",
});

Post.belongsTo(User, {
  foreignKey: "author",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "author",
});

User.hasMany(Comment, {
  foreignKey: "author",
});

module.exports = { User, Post, Comment };
