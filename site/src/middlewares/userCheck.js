module.exports = (req,res,next) => {
    if(req.session.userLogin){
       if(req.session.userLogin.rolId === 2 || req.session.userLogin.rolId === 1 ){
        next()
       }
    }else{
        res.redirect('/')
    }
}