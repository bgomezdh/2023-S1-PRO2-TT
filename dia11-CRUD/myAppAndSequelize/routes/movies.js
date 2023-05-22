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
router.get("/register", movieController.showForm) // Obtiene el formulario

/* Guarda  Form movie */
router.post("/register", movieController.store) // Envía los datos del formulario

/* Mostrar Form para Actualizar movie */
router.get("/update/:id", movieController.showFormUpdate) // Obtiene el formulario

// Enviar modificaciones de película
router.post("/update/:id", movieController.update) // Envía los datos del formulario

/* Elimnar movie */
router.post("/delete",movieController.borrar) // Envía directamente la PK del registro a BORRAR

module.exports = router;