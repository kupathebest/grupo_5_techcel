module.exports = (req, res, next) => {
    if (req.session.userLogin2) {
        res.locals.userLogin = req.session.userLogin2
    } else if (req.session.userLogin) {
        res.locals.userLogin = req.session.userLogin
    }

    next()

}