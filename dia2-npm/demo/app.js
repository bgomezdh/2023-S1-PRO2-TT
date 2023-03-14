/* Modulo Nativo */
const os = require('node:os');

/* console.log(os.version()); */

/* Modulos de terceros */
const moment = require('moment');

let fecha = moment().format();

/* console.log(fecha); */

/* Modulo Propio  - Le tengo que pasar como parametro la ruta del modulo */
const calculadora = require('./modules/calculadoraModule');

let operacion = calculadora.multiplicar(4, 8);

console.log(operacion);