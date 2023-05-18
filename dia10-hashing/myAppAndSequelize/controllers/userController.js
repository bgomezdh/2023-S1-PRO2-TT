const db = require('../database/models')

const bcrypt = require('bcryptjs');

const userController = {
    create: function(req, res) {
        return res.render('registerUser');
    },
    login: function(req, res) {
        return res.render('login');
    },
    store: function(req, res) {
        let info = req.body;

        let userSave = {
            name: info.name,
            email: info.email,
            password: bcrypt.hashSync(info.password, 10),
            remember_token: ""
        }

        db.User.create(userSave)
        .then(function(result) {
            return res.redirect('/users/login');
        })
        .catch(function(error) {
            console.log(error);
        });
        
    },
    loginPost: function(req, res) {
        let emailBuscado = req.body.email;
        let pass = req.body.password;

        let filtro = {
            where: [
                {email: emailBuscado}
            ]
        }

        db.User.findOne(filtro)
        .then((result) => {
            if (result != null) {

                let claveCorrecta = bcrypt.compareSync(pass, result.password);

                if (claveCorrecta) {
                    return res.send('Existe el mail buscado y su contraseña es correcta');
                } else {
                    return res.send('Existe el mail buscado y pero su contraseña es incorrecta');
                }
               
            } else {
                return res.send('Nooooo Existe el mail buscado');
            }
        }).catch((err) => {
            console.log(err);
        });
    }
};

module.exports = userController;