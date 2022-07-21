const router = require("express").Router();
const { Post, Comment } = require("../../models");
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async(req, res) => {
    try {
        const postData = await Post.create({
            post_title: req.body.title,
            post_content: req.body.content,
            user_id: req.session.user_id
        })

        res.status(200).json(postData)

    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/:id/comment', withAuth, async(req, res) => {
    try {
        const commentData = await Comment.create({
            comment_content: req.body.commentText,
            user_id: req.session.user_id,
            post_id: req.params.id
        })

        res.status(200).json(commentData)

    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', withAuth, async(req, res) => {
    try {
        const postData = await Post.update({
            post_title: req.body.title,
            post_content: req.body.content,
            user_id: req.session.user_id
        }, {
            where: {
                id: req.params.id
            }
        });

        res.render("dashboard", {
            logged_in: req.session.logged_in,
        })

    } catch (error) {
        res.status(500).json(error)        
    }
})

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const deletedPost = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(deletedPost)
    } catch (error) {
        res.status(500).json(error)
    }
    
})

module.exports = router;
