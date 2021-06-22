const { Sequelize } = require("sequelize");
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

const { user,  healthJournal, scoreCard, doctor, consult } = require("./models.js");
database.user = user(sequelize, Sequelize);
database.healthJournal = healthJournal(sequelize, Sequelize);
database.scoreCard = scoreCard(sequelize, Sequelize);
database.doctor = doctor(sequelize, Sequelize);
database.consult = consult(sequelize, Sequelize);

database.user.hasMany(database.scoreCard)
database.scoreCard.belongsTo(database.user, {
    foreignKey:'userID'
})

database.user.hasMany(database.healthJournal)
database.healthJournal.belongsTo(database.user, {
    foreignKey:'userID'
})

database.doctor.belongsToMany(database.user, {through: database.consult, foreignKey:'doctorID', otherKey:'userID'})
database.user.belongsToMany(database.doctor, {through: database.consult, foreignKey:'userID', otherKey:'doctorID'})


module.exports = {
    database
}