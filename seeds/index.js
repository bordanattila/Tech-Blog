const sequelize = require('../config/connection');
const BlogPosts = require('../models/blogPost');
const blogData = require('./seeds.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await BlogPosts.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();