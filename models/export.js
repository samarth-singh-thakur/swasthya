const { Sequlize, Sequelize } = require("sequelize");
const { DataTypes } = require("Sequelize");
const databaseConfig = require("../database/sqlconfig");

const sequelize = new Sequelize(databaseConfig.DATABASE, databaseConfig.USER, databaseConfig.PASSWORD, {
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: databaseConfig.pool.max,
        min: databaseConfig.pool.min,
        acquire: databaseConfig.pool.acquire,
        idle: databaseConfig.pool.idle
    }
});

database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;