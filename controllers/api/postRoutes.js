const router = require("express").Router();
const { Post } = require("../../models");
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

router.put('/:id', withAuth, async(req, res) => {

})

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const deletedPost = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        
    }
    
})

module.exports = router;
