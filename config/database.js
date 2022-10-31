const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelizeLocal = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,

    {
        host: "localhost",
        dialect: "postgres",
    }
);

const sequelize = sequelizeLocal;

module.exports = sequelize;
