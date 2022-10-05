const { BlogPosts } = require('../models');

const blogdata = [
    
    {
        "topic": "HTML",
        "username": "test1",
        "content": "this is awesome"
    },
    {
        "topic": "CSS",
        "username": "test2",
        "content": "this is also awesome"
    }
];

const seedBlog = () => BlogPosts.bulkCreate(blogdata);

module.exports = seedBlog;
