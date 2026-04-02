const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Record = sequelize.define("Record", {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM("income", "expense"),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    },
    notes: {
        type: DataTypes.STRING
    }
});

module.exports = Record;