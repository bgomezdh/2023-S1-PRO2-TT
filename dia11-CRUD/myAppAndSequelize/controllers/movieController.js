/* Modulo Propio */
const db = require("../database/models");
const movie = db.Movie; //Alias del modelo
let op = db.Sequelize.Op;

const movieController = {
  findAll: (req, res) => {
    let criterio = {
      /* where: [{awards: 1}, {length: 120}],
      order: [['title', 'DESC']],
      limit: 1 */
    };

    movie
      .findAll(criterio)
      .then(function (result) {
        return res.render("movies", { listaPeliculas: result });
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  show: (req, res) => {
    /* filtrar por primaryKey */
    let id = req.params.id; //4

    /* Crear relacion */
    let rel = {
      include: [{ association: "genre" }, { association: "actor" }],
    };

    /* let rel = {
      include: {
        all:true,
        nested: true
      }
    } */

    movie
      .findByPk(id, rel)
      .then(function (result) {
        console.log(result);
        return res.render("detalleMovies", {
          movie: result,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  resultado: (req, res) => {
    let busqueda = req.query.pelicula;

    movie
      .findAll({
        where: [
          /* { title: busqueda} */
          /*  {title: {[op.like]: `%${busqueda}%`}} */
          { title: { [op.like]: "%" + busqueda + "%" } },
        ],
      })
      .then(function (result) {
        return res.render("busqueda", { listaPeliculas: result });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  showForm: (req, res) => {
    return res.render("registerMovie");
  },
  store: (req, res) => {
    let info = req.body;
    movie
      .create(info)
      .then((result) => {
        return res.redirect("/movies/all");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  showFormUpdate:(req,res) => {
    let movieId = req.params.id;
    movie.findByPk(movieId)
    .then((result) => {
      console.log(result)
      return res.render("updateMovie", {movie: result})
    }).catch((err) => {
      console.log(err)
    });
    
},
update: (req, res) =>{
  let id = req.params.id;
  let info = req.body;
  let criterio = {
    where : [
      {id: id}
    ]
  }
  movie.update(info, criterio)
  .then((result) => {
    return res.redirect("/movies/id/" + id )
  }).catch((err) => {
    console.log(err);
  });

}, 
borrar: (req,res) => {
  let id = req.body.id;
  let criterio = {
    where : [{id : id}]
  };
  movie.destroy(criterio)
  .then((result) => {
    return res.redirect("/movies/all")
  }).catch((err) => {
    console.log(err);
  });
}
};

module.exports = movieController;
