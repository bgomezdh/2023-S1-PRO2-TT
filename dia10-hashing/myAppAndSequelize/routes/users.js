var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Para obtener un formulario de crear un usuario*/
router.get('/register', userController.create);

/* Para crear un usuario en la tabla y redirigirlo al login */
router.post('/register', userController.store)

/* Para obtener un formulario para mostrar el login */
router.get('/login', userController.login)

/* para loguear al usuario y redirigirlo al index */
router.post('/login', userController.loginPost)

module.exports = router;
