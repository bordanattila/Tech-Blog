const BlogPosts = require("./blogPost");
const User = require("./user");
const Comment = require("./comments")
// const UserComment = require("./usercomment");

User.hasMany(BlogPosts, {
    foreignKey: "user_id",
});

BlogPosts.belongsTo(User, {
    foreignKey: "user_id",
});

BlogPosts.hasMany(Comment, {
    foreignKey: "blog_id",
});

Comment.belongsTo(BlogPosts, {
    foreignKey: "blog_id",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = {BlogPosts, User, Comment}