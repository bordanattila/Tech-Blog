const router = require('express').Router();
const { User, BlogPosts, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
    const pageData = await BlogPosts.findAll(
        { raw: true }
    ).catch((err) => {
        res.json(err);
    });

    res.render("main", {
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
    const user_id = req.session.userID;
    const pageData = await BlogPosts.findAll(
        { raw: true,
            where: {
            user_id: user_id,
        }}
    ).catch((err) => {
        res.json(err);
    });
    const userData = await User.findOne({
        raw: true,
        attributes: {
            exclude: [
                "password",
            ]
        },
        where: {
            id: user_id,
        }
    })
    res.render("dashboard", {
        loggedIn: req.session.loggedIn,
        blogs: pageData,
        username: userData.username,
    })
});

router.get("/homepagestart", withAuth, async (req, res) => {
    const pageData = await BlogPosts.findAll(
        { raw: true, }
    ).catch((err) => {
        res.json(err);
    });

    res.render("homepagestart", {
        loggedIn: req.session.loggedIn,
        blogs: pageData,
    })
    
});

router.get("/homepage/:id", withAuth, async (req,res) => {
    try {
        const blogData = await BlogPosts.findByPk(req.params.id, {
            raw: true,
            include: [
                {
                    model: User,
                    attributes: [
                        "username",
                    ]                   
                }
            ],
        });

        const commentData = await Comment.findAll( {
            
            where: {
                blog_id: req.params.id,
            },
            include: [
                {
                    model: User,
                    attributes: [
                        "username",
                    ]                   
                }
            ],
        });

        const comments = commentData.map((comment) => comment.get({plain: true}));

        req.session.save(() => {
            req.session.blog_id = blogData.id;
        })
        res.render("homepage", {
            blogUserName: blogData["user.username"],
            comments: comments,
            blogData, 
            loggedIn: req.session.loggedIn,
            
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get("/newblogpost", withAuth, async (req, res) => {
    res.render("newblogpost")
});

router.get("/logout", async (req, res) => {
    res.render("/")
});
module.exports = router;