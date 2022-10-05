const { constants } = require('buffer');
const BlogPosts  = require('../models/blogPost');

const router = require('express').Router();

router.get("/", async (req, res) => {
    const pageData = await BlogPosts.findAll().catch((err) => {
        res.json(err);
    });
    const blogs = pageData.map((valami) => valami.get({ plain: true }))
    console.log(blogs)
    res.render("homepage", blogs)

});

module.exports = router;