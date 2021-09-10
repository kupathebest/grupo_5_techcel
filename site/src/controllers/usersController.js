const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));
let usuarios = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'usuarios.json'), 'utf-8'));


module.exports = {
   
    login: (req, res) => {
        return res.render('users/login')
       

    },
    processLogin : (req,res) => {
        let errors = validationResult(req);
         
        if(errors.isEmpty()){
            const {email, recordar} = req.body;
            let usuario = usuarios.find(usuario => usuario.email === email);
            req.session.userLogin = {
                id : usuario.id,
                nombre : usuario.nombre,
                rol : usuario.rol
            }
            return res.redirect('/')
        }else{
            return res.render('users/login',{
                celulares,
                errores : errors.mapped()
                
            })
        }
       
    },
    register: (req, res) => {
        return res.render('users/register')
    },
 
    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const { nombre, apellido, email, password } = req.body

            let usuario = {
                id: usuarios[usuarios.length - 1] ? usuarios[usuarios.length - 1].id + 1 : 1,
                nombre: nombre.trim(),
                apellido: apellido.trim(),
                email: email.trim(),
                password: bcryptjs.hashSync(password, 10),
                rol: "user",
                avatar : "avatar_default.png"
            }
            usuarios.push(usuario);
    
            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios, null, 2), "utf-8");
            
            req.session.userLogin = {
                id : usuario.id,
                nombre : usuario.nombre,
                avatar : usuario.avatar,
                rol : usuario.rol
            }
            return res.redirect('/')

        }else{
            return res.render("users/register",{
                errores:errors.mapped(),
                usuarios,
                old: req.body
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
                    usuario.password = password1 ? bcryptjs.hashSync(password1, 10): usuario.password;
                    usuario.avatar = req.files ? req.files : usuario.avatar
                    
                }
            });
    
            fs.writeFileSync(path.join(__dirname,'..','data','usuarios.json'),JSON.stringify(usuarios,null,2),'utf-8');
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
        return res.redirect('/')
    }
}
    
           


