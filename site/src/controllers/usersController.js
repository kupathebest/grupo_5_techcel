const fs = require('fs');
const path = require('path');
let celulares = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'celulares.json'), 'utf-8'));

module.exports = {
    login: (req, res) => {
        return res.render('users/login')
    },

    register: (req, res) => {
        return res.render('users/register')
    }
}