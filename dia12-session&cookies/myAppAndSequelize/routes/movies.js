const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/* GET users listing. */
router.get('/all', movieController.findAll);

/* findByPk */
router.get('/id/:id', movieController.show);

/* findAll */
router.get('/busqueda', movieController.resultado);

/* Mostrar Form movie */
router.get('/register',movieController.showForm)

/* Guarda  Form movie */
router.post("/register", movieController.store)

/* Mostrar Form para Actualizar movie */
router.get("/update/:id", movieController.showFormUpdate)

/* Enviar actualización de movie*/
router.post("/update/:id", movieController.update)

/* Elimnar movie */
router.post("/delete", movieController.destroy)

module.exports = router;