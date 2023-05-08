/* Modulo Propio */
const db = require('../database/models');
const movie = db.Movie;

const movieController = {
  findAll: (req, res) => {
     
    movie.findAll()
    .then(function (result) {
      /* caso feliz */

      return res.render("movies", { listaPeliculas: result });   
    })
    .catch(function (error) {
      /* Caso con Errores */
    });
    
  }

}; 

module.exports = movieController;
