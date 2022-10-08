const router = require('express').Router();
const BlogPosts = require('../models/blogPost');

router.get("/", async (req, res) => {
    const pageData = await BlogPosts.findAll(
        { raw: true }
    ).catch((err) => {
        res.json(err);
    });

    res.render("homepage", {
        existingBlog: pageData,
        // logeddIn: req.session.loggedIn,
    })

});

router.get("/login", async (req, res) => {
    res.render("login")
})

router.get("/signup", async (req, res) => {
    res.render("signup")
})

module.exports = router;