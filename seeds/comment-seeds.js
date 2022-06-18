const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "This is a comment",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: "How dare you say that?",
    user_id: 1,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;