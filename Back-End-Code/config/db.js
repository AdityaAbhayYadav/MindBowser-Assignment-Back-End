const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog_db", "root", "AdityaYadav@2000", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
