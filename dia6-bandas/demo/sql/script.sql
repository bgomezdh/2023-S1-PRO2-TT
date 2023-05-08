-- Crear base de dato
create schema test;
-- Usar base de dato
use test;
-- Crear tabla Movie
   create table movies (
   /* NOMBRE 				TIPO			RESTRICCIONES */
   id						int				unsigned primary key auto_increment,
   title					varchar(200) 	not null,
   director					varchar(200)	null,
   release_date				date,
   genre					varchar(100)
   );

   
   
-- Agregar una columna "rating"
alter table movies add rating decimal(3,1);

-- Modificar la columna "genre" para permitir valores nulos y cambiarle la Long a 50
alter table movies modify genre varchar(50) null;

-- Eliminar la columna "director"
alter table movies drop director;
