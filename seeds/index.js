const sequelize = require('../config/connection');
const {BlogPosts} = require('../models/');
const blogData = require('./seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await BlogPosts.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();