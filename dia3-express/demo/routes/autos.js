const express = require('express');
const router = express.Router();

/* Los sufijos */

/* /autos/detalle */

router.get('/detalle/id/:id?', function (req, res) {

    let idAuto = req.params.id;

    if (idAuto == undefined) {
        return res.send('No enviaste el id del auto por la URL');
    } else {
        return res.send('El detalle del auto numero ' + idAuto);
    }
});

router.get('/eliminar/id/:id?' ,  function (req, res) {
    let idAuto = req.params.id;

    if (idAuto == undefined) {
        return res.send('No enviaste el id del auto por la URL para eliminarlo');
    } else {
        return res.send('Se eliminó el auto con id numero ' + idAuto);
    }
})

module.exports = router;