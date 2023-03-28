const data = require('../db/bandas.js')

const bandaController = {
    index: function (req, res) {
        
        return res.render('bandas', {lista: data.lista})
    },
    show: function (req, res) {
        let parametro = req.params.id;
        let resultado = []

        for (let i = 0; i < data.lista.length; i++) {
            if (parametro == data.lista[i].id ) {
                resultado.push(data.lista[i])
            }
        }

        return res.render('bandas', {lista: resultado})
    },
    genero: function (req, res) {
        let parametro = req.params.genero;
        let resultado = []

        for (let i = 0; i < data.lista.length; i++) {
            if (parametro == data.lista[i].genero ) {
                resultado.push(data.lista[i])
            }
        }

        return res.render('bandas', {lista: resultado})
    },
}

module.exports = bandaController;