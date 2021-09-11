module.exports = (req,res,next) => {
    if(req.session.userLogin && req.session.userLogin.rol === "user" || req.session.userLogin.rol === "admin"){
        next()
    }else{
        res.redirect('login')
    }
}