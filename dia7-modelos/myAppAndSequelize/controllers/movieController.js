/* Modulo Propio */
const db = require('../data/movies')

const movieController = {
  findAll: (req, res) => {
    let result = db.lista;  

    return res.render("movies", { listaPeliculas: result });   
  }

}; 

module.exports = movieController;
