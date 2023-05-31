const db = require('../database/models');
const user = db.User;
const bcrypt = require('bcryptjs');

const userController = {
    create: function(req, res) {
        return res.render('registerUser')
    },
    store: function(req, res) {
        let errors = {};

        if (req.body.email == "") {
            errors.message = "El email está vacio";
            res.locals.errors = errors;
            return res.render('registerUser');

        } else if(req.body.password == ""){
            errors.message = "La clave está vacia";
            res.locals.errors = errors;
            return res.render('registerUser');
        } else {
            let info = req.body;

            let userStore = {
                name: info.name,
                email: info.email,
                password: bcrypt.hashSync(info.password, 10),
                remember_token: ""
            }

  
            user.create(userStore)
            .then(function(result) {
                return res.redirect('/users/login');
            })
            .catch(function(error) {
                console.log(error);
            }); 
        }

       
    },
    login: function(req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/movies/all');
        } else {
            return res.render('login');
        }
    },
    loginPost: function(req, res) {
        let emailBuscado = req.body.email;
        let pass = req.body.password;

        let filtrado = {
            where: [{email: emailBuscado}]
        };
        user.findOne(filtrado)
        .then((result) => {

            if (result != null) {
                let claveCorrecta = bcrypt.compareSync(pass, result.password)
                if (claveCorrecta) {
                    /* poner en session */
                    
                    req.session.user = result.dataValues;

                    if (req.body.rememberme != undefined) {
                        res.cookie('userId', result.id, {maxAge: 1000 * 60 * 15});
                    }
                   
                     return res.redirect('/movies/all');
                } else {
                    return res.send("Existe el mail y pero la password es incorrecta");
                }
            } else {
                return res.send("Noooo Existe el mail")
            }
            
        }).catch((err) => {
            console.log(err);
        });
       
    },
    logout: function(req, res) {
        res.clearCookie('userId');
        return res.render('login');
    },
};

module.exports = userController;