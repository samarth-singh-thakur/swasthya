const session = require('express-session')
const connectRedis = require('connect-redis')
const { redisClient } = require('../database/sessionRedis')
const RedisStore = connectRedis(session);

module.exports = session({
    secret: "ohwowow",
    key: "cookie",
    saveUninitialized: false,
    resave: false,
    store: new RedisStore({
        client: redisClient
    }),
    cookie: {
        maxAge: 1000000
    }
})