const express = require('express');
const router = express.Router();

const productController = require('../controllers/bandaController');

router.get('/', productController.index);

router.get('/detalle/:id', productController.show);


router.get('/genero/:genero', productController.genero);


module.exports = router;

