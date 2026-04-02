const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("finance_db", "root", "Nagakeerthi@444", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;