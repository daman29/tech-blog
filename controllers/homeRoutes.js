const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });



    let newUser = false;

    if (postData.length === 0) {
      newUser = true;
      res.render("dashboard", {
        newUser,
        logged_in: req.session.logged_in,
      });
    }else{
      const posts = postData.map((post) => post.get({ plain: true }));
      const username = posts[0].user.username;
      res.render("dashboard", {
        posts,
        logged_in: req.session.logged_in,
        username,
        newUser,
      });

    }

    
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/new-post", withAuth, (req, res) => {
  res.render("new-post", {
    logged_in: req.session.logged_in,
  });
})

router.get('/edit-post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
    });

    const post = postData.get({ plain: true });
    res.render("edit-post", {
      post,
      logged_in: req.session.logged_in,
    })

  } catch (error) {
    res.status(400).json(error);    
  }
})

module.exports = router;
