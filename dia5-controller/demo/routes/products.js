/* 1ra requerir todos los modulos necesarios para que funcione */
const express = require('express');
const router = express.Router();

/* requerir el modulo propio del controller */
const productController = require('../controllers/productController')

/* 2da crear las rutas con sus sufijos */
router.get('/', productController.index);

/* Punto E */
router.get('/brand/:brand', productController.filtrarPorMarca );

/* punto F */
router.get('/color/:color', productController.filtrarPorColor);

/* Punto G */
router.get('/model/:model/:anio?', productController.filtrarPorAnio);

/* Exportar mi modulo propio */
module.exports = router;


/* 
    localhost:3000/products/
    localhost:3000/products/color/black
 */