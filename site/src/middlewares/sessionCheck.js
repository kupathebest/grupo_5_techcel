module.exports = (req,res,next) => {
    if(req.session.userLogin){
        res.redirect('/users/profile')
    }else{
        next()
    }
}