const router = require('express').Router();
const { Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {

    const postData = await Post.findByPk(req.params.id,{
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    });

    const commentData = await Comment.findAll({
        where: {
            post_id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })

    console.log(postData);
    console.log(commentData);

    const post = postData.get({ plain: true });
    const comments = commentData.map((val) => val.get({ plain: true }));

    res.render('post', {
        post,
        comments,
        logged_in: req.session.logged_in
    });
})

module.exports = router;