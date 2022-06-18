const { User } = require("../models");

const userData = [
  {
    username: "damneet29",
    password: "password123",
  },
  {
    username: "mockuser",
    password: "password1234",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
