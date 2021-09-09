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
                roll: "user"
            }
            usuarios.push(usuario);
    
            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios, null, 2), "utf-8");
           return res.redirect('/users/login')

        }else{
            return res.render("users/register",{
                errores:errors.mapped(),
                usuarios,
                old: req.body
            })
        }
        
        
    }
}
     logout : (req,res) => {
         req.session.destroy();
         return res.redirect('/')
     }       


