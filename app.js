const express = require('express')
const session = require('./middleware/session');
const signup = require("./routes/signup")
const signin = require("./routes/signin")
const app = express();

app.use(session);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(3000, () => console.log('server is running in port 3000'))

database.sequelize.sync(); // sync database and sequelize
app.use('/signin', signin);
app.use('/signup', signup);
