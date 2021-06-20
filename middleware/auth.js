const isAuth = (req, res, next) => {
    const { userId } = req.session;
    if (userId) {
        next()
    } else {
        res.redirect('/login');
    }
}
module.exports = {
    isAuth
}