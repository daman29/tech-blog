require("dotenv").config();
// load mysql2 module
const Sequelize = require("sequelize");

// create database connection
let connection;

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}
// return the connection promise
module.exports = connection;
