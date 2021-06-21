const { Router } = require('express');
const router = Router();
const { database } = require('../models/export')
var crypto = require('crypto'); // to hash password 
const user = database.user;
const Op = database.Sequelize.Op;

router.post('/', async (req, res) => {
    let obj = req.body;
    obj.password = crypto.createHash('sha256').update(obj.password).digest('hex');
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
                msg: "Signin First"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({
            err
        });
    }
});
module.exports = router;