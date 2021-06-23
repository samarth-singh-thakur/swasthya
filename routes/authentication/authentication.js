const { Router } = require('express');
const router = Router();
const { database } = require('../../models/export')
var crypto = require('crypto'); // to hash password 
const {
    v4: uuidv4,
} = require('uuid');

const user = database.user;
const Op = database.Sequelize.Op //operator

router.post('/signup', async (req, res) => {
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


router.post('/signin', async (req, res) => {
    let obj = req.body;
    obj.password = crypto.createHash('sha256').update(obj.password).digest('hex');
    console.log(obj, "\n")
    try {
        const loggedinUser = await user.findOne({
            where: { [Op.and]: [obj] }
        })
        if (loggedinUser) {
            console.log(loggedinUser.user_id)
            req.session.user_id = loggedinUser.user_id;
            res.status(200).send(loggedinUser);
        } else {
            res.status(404).send({
                msg: "Signup First"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({
            err
        });
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send({
        msg: "Good bye"
    })
});

module.exports = router;