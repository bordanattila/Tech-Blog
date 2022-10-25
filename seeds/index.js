const sequelize = require("../config/connection");
const { BlogPosts, User, Comment } = require("../models/");
const blogData = require("./blogData.json");
const userData = require("./userData.json");
const comment = require("./commentData.json");
// const userComment = require("./usercommentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await BlogPosts.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(comment, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();