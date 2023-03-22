const autos = require('../db/autos');

const productController = {
    index : function(req, res) {
        return res.render('products', {
            lista: autos.lista,
            mensaje: "Todos los autos",
            usados: true
        });
    },

    filtrarPorMarca : function(req, res) {
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
    }
    
    ,
    filtrarPorColor : function(req, res) {
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
            return res.render('products', {
                lista : resultado,
                mensaje: "Autos filtrados por el color " + color,
                usados: false
            })
        }
    },
    filtrarPorAnio: function(req, res) {
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
    }
}

module.exports = productController;