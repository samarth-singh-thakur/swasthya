router.post('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).send({
        msg: "Good bye"
    })
});