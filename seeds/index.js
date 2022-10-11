const sequelize = require("../config/connection");
const {BlogPosts, User} = require("../models/");
const blogData = require("./blogData.json");
const userData = require("./userData.json")

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


  process.exit(0);
};

seedDatabase();