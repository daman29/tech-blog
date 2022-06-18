const { User } = require("../models");

const userData = [
  {
    username: "damneet29",
    password: "password123",
  },
  {
    username: "mockuser",
    password: "password123",
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
