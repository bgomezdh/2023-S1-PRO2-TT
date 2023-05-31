/* Es una funcion que recibe 2 parametros */
module.exports = function(sequelize, dataTypes) {

    /* Crear 3 variables */
    let alias = "Movie"; /* Un apodo para requerirlo en los controllers */

    /* mapeo exacto de cada una de las columnas */
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type: dataTypes.STRING,
        },
        rating:{
            type: dataTypes.DECIMAL,
        },
        awards:{
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATE,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        genre_id:{
            type: dataTypes.INTEGER,
        },
    }

    /* Obj literal paa configurar la tabla */
    let config = {
        tableName: 'movies',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const Movie = sequelize.define(alias, cols, config);

   /* Crear relaciones */
   Movie.associate = function(models) {
    /*        pertenece a    */
        Movie.belongsTo(models.Genre , {
            as: "genre",
            foreingKey : "genre_id"
        }),
        Movie.belongsToMany( models.Actor , {
            as: "actor",
            through: "actor_movie",
            foreingKey: "movie_id",
            otherKey: "actor_id",
            timestamps:  false
        } )
   };

    return Movie;
};