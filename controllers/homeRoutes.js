const router = require('express').Router();
const BlogPosts = require('../models/blogPost');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    const pageData = await BlogPosts.findAll(
        { raw: true }
    ).catch((err) => {
        res.json(err);
    });

    res.render("homepage", {
        existingBlog: pageData,
        loggedIn: req.session.loggedIn,

    })

});

router.get("/login", async (req, res) => {
    res.render("login")
});

router.get("/signup", async (req, res) => {
    res.render("signup")
});

router.get("/dashboard", withAuth, async (req, res) => {
    res.render("dashboard", {
        loggedIn: req.session.loggedIn,
    })
});

router.get("/logout", async (req, res) => {
    res.render("homepage")
});

module.exports = router;