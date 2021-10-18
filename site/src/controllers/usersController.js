const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
/*let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));*/
let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'usuarios.json'), 'utf-8'));


module.exports = {
   
    login: (req, res) => {
        return res.render('users/login')
        
    },
    processLogin : (req,res) => {
        let errors = validationResult(req);
     
        if(errors.isEmpty()){
            const {email, recordar} = req.body;

            db.User.findOne({
                include : ['avatar'],
                where : {
                    email
                }
            }
            )
            .then(user => {
                
                req.session.userLogin = {
                    id : user.id,
                    name :user.name,
                    lastName : user.lastName,
                    avatar : user.avatar.file,
                    rolId : user.rolId
                }
                if(recordar){
                    res.cookie("techcelLogin", req.session.userLogin, {maxAge:1000 * 60 * 60 * 24})
                }    
                return res.redirect('/')
                             
            })
               .catch(error => console.log(error))
                   
                  
        }else{
            return res.render('users/login',{
                errores : errors.mapped()
                
            })
        }
    },
    register: (req, res) => {
        return res.render('users/register')
        
    },
 
    processRegister: (req, res) => {
        let errors = validationResult(req)
       
        if (errors.isEmpty()) {
            const { name, lastName, email, password } = req.body
            db.User.create({                
                name: name.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                password: bcryptjs.hashSync(password.trim(), 10),
                rolId:  2,
                avatarId : 1
            })
            .then(user => {
                db.User.findOne( {
                    include : ["avatar"],
                     where : {
                         email
                     }                  
                })
                .then(usuario => {
                   
                    req.session.userLogin = {
                        id : usuario.id,
                        name :usuario.name,
                        lastName : usuario.lastName,
                        avatar : usuario.avatar.file,
                        rolId : usuario.rolId,
                }
                return res.redirect('/')
                })   
            })
            .catch(error => console.log(error))
        }else{
            return res.render('users/register',{
                     errores :errors.mapped()
            })
        }
      
    },
    profile : (req,res) => {
        res.render('users/profile',{
            usuario: usuarios.find(usuarios => usuarios.id === +req.session.userLogin.id)
        })
    },
    update : (req,res) => {
        let errors = validationResult(req);
        
        let usuario = usuarios.find(usuario => usuario.id === +req.session.userLogin.id)

        if(errors.isEmpty()){
            
            const {nombre,password0,password1,apellido} = req.body;

            usuarios.forEach(usuario => {
                if(usuario.id === +req.session.userLogin.id){
                    usuario.nombre = nombre.trim();
                    usuario.apellido = apellido.trim();
                    usuario.password = password1 ? bcryptjs.hashSync(password1.trim(), 10): usuario.password;
                    usuario.avatar = req.file ? req.file.filename : usuario.avatar
                }
            });
    
            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios, null, 2), "utf-8");
            return res.redirect('/')
        }else{
            return res.render('users/profile',{
                usuario,
                errores : errors.mapped(),
            })
        }
 
     
       
    },
    logout : (req,res) => {
        req.session.destroy();
        res.clearCookie("techcelLogin");
        return res.redirect('/')
    }
}
    
           


