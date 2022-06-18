const {Post} = require("../models");

const postData = [
    {
        post_title: "Javascript is the best",
        post_content: "anyone disagrees fight me",
        user_id: 1,
        created_at: '2022-06-12T04:00:00.000Z'
    },
    {
        post_title: "CSS is the best",
        post_content: "I just love coding CSS",
        user_id: 2,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;