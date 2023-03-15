/* 1ra requerir todos los modulos necesarios para que funcione */
const express = require('express');
const router = express.Router();
const autos = require('../db/autos');


/* 2da crear las rutas con sus sufijos */
router.get('/', function(req, res) {
    return res.send(autos.lista);
});

/* Punto E */
router.get('/brand/:brand', function(req, res) {
    let brand = req.params.brand;
    let resultado = []; /*  mi array de filtrado */

    for (let i = 0; i < autos.lista.length; i++) {
        if (brand == autos.lista[i].marca) {
            resultado.push(autos.lista[i])
        }
    }

    if (resultado.length == 0) {
        return res.send('No hay datos para la marca ' + brand);
    } else {
        return res.send(resultado);
    }
});

/* punto F */
router.get('/color/:color', function(req, res) {
    let color = req.params.color;
    let resultado = [];

    for (let i = 0; i < autos.lista.length; i++) {
        /* black ==  "black" */
        if (color == autos.lista[i].color) {
            resultado.push(autos.lista[i])
        }
    }

    if (resultado.length == 0) {
        return res.send('No hay autos del color ' + color);
    } else {
        return res.send(resultado)
    }
});

/* Punto G */
router.get('/model/:model/:anio?', function(req, res) {
    let model = req.params.model;
    let anio  = req. params.anio;
    let resultado = []; /*  mi array de filtrado */

    for (let i = 0; i < autos.lista.length; i++) {
        if (anio == undefined) {
            if (model == autos.lista[i].modelo) {
                resultado.push(autos.lista[i])
            }
        } else {
            if (model == autos.lista[i].modelo && anio < autos.lista[i].anio) {
                resultado.push(autos.lista[i])
            }
        }
    }

    if (resultado.length == 0) {
        return res.send('No hay datos para el modelo ' + model);
    } else {
        return res.send(resultado);
    }
});

/* Exportar mi modulo propio */
module.exports = router;


/* 
    localhost:3000/products/
    localhost:3000/products/color/black
 */