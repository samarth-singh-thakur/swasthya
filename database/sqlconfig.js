module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1234",
    DATABASE: "sampark",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
};