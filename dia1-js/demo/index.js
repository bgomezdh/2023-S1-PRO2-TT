let cafetera = {
    color : "Negra",
    marca : "LG",
    encender: function(){
        return "Encendida!!!";
    },
    prepararCafe: function(ingrediente1, ingrediente2) {
        let preparacion = `Estas mezclando ${ingrediente1} con ${ingrediente2}`
        return "Esta listo tu cafe, " + preparacion + " y lo hicistes en la cafetera de marca " + this.marca;
    }

}

let miArray = [ "Brian", "Miguel", "Ale"]


/* console.log(cafetera.color);

console.log("Hola mi nombre es " + miArray[0]); */

console.log(cafetera.prepararCafe("Agua", "Cafe"));