const { Router } = require('express');
const router = Router();
const { database } = require('../models/export')
var crypto = require('crypto'); // to hash password 
const {
    v4: uuidv4,
} = require('uuid');

const user = database.user;
// const Op = database.sequelize.Op //operator

router.post('/', async (req, res) => {
    let obj = req.body;
    obj.password = crypto.createHash('sha256').update(obj.password).digest('hex'); //hashing the password for storing in the database
    obj.user_id = uuidv4();
    try {
        let { email } = obj; //checking for existing user
        let found = await user.findOne({
            where: { email }
        })
        if (found) res.status(500).send({ msg: "Create the account with different Email ID" });
        else {
            try {
                const nuser = obj;
                const newUser = await user.create(nuser);
                res.status(200).send(newUser);
            }
            catch (err) {
                console.log(err)
                res.status(500).send({ msg: "some Internal error!" })
            }
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: "Internal error!" })
    }
})

module.exports = router;