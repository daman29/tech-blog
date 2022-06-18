const router = require('express').Router();
const { Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
    const postData = await Post.findByPk(req.params.id,{
        include: [
        {
            model: Comment,
            attributes: ['comment_content', 'created_at'],
        }
    ]
    });

    console.log(postData);

    const post = await postData.map((val) => val.get({ plain: true }));

    res.render('post', {
        post,
        logged_in: req.session.logged_in
    });
})

module.exports = router;