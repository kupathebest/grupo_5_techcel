module.exports = (req,res,next) => {
    if(req.session.userLogin){
       if(req.session.userLogin.rol === "user" || req.session.userLogin.rol === "admin"){
        next()
       }
    }else{
        res.redirect('/')
    }
}