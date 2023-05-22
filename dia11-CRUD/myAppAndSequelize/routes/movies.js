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

/* Guarda  Form movie */

/* Mostrar Form para Actualizar movie */

/* Elimnar movie */

module.exports = router;