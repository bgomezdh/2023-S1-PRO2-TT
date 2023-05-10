/* Modulo Propio */
const db = require('../database/models');
const op = db.Sequelize.Op;
const movie = db.Movie; //Alias del modelo

const movieController = {
  findAll: (req, res) => {

    let filtrado = {
      /* where: [{awards: 1}, {length: 120}],  */
      order: [['title','DESC']],
      limit: 20,
      offset: 0 
    };

    movie.findAll(filtrado)
    .then(function (result) {
        return res.render("movies", { listaPeliculas: result });   
    }).catch(function (err){
        console.log(err);
    });

  },
  show: (req, res) => {
    let busqueda = req.params.id;

    movie.findByPk(busqueda)
    .then(function(result) {
      return res.render('detalleMovies', {movie: result});
    })
    .catch((error) =>{
      console.log(error);
    });
  },
  busqueda: (req, res) =>{
    let busqueda = req.query.pelicula;
    
    movie.findAll({
      where: [
        /* {title: busqueda} */
        /* {title: {[op.like]: `%${busqueda}%`}} */
        {title: {[op.like]: "%" + busqueda + "%"}}
      ]
    })
    .then(function(result) {
        return res.render('busqueda', {listaPeliculas: result})
    })
    .catch(function(error) {
      console.log("Error");
    });
  }

}; 


module.exports = movieController;
