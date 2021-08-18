const express = require('express');
/*const { dirname } = require('path');*/
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));


app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views','index.html')));


app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/carrito',(req,res) => res.sendFile(path.join(__dirname, 'views','productCart.html')));
app.get('/detail',(req,res) => res.sendFile(path.join(__dirname, 'views','productDetail.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));
app.get('/about',(req,res) => res.sendFile(path.join(__dirname, 'views','about.html')));
app.get('/contactanos',(req,res) => res.sendFile(path.join(__dirname, 'views','contactanos.html')));
app.get('/envios',(req,res) => res.sendFile(path.join(__dirname,'views', 'envios.html' )));
app.get('/shop',(req,res) => res.sendFile(path.join(__dirname, 'views','shop.html')));
app.get('/comocomprar',(req,res) => res.sendFile(path.join(__dirname, 'views','comoComprar.html')));

app.get('/productos',(req,res) => res.sendFile(path.join(__dirname, 'views','productos.html'))); /*Nueva vista rama home/Melisa */

app.listen(port,() => console.log('Servidor corriendo en http://localhost:' + port))
