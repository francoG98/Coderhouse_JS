let nombreDJ = document.getElementById("nombreDJ").value;
let duracionDelSet = document.getElementById("duracionDelSet").value;
let genero = document.getElementById("generos").value;

class Set {
   constructor(nombreDJ, genero, duracionDelSet) {
      this.nombreDJ = nombreDJ.toUpperCase();
      this.genero = genero.toUpperCase();
      this.duracionDelSet = duracionDelSet;
   }
   hablar(){
      console.log("Hola, soy el set de" + this.nombreDJ + " y duro" + this.duracionDelSet)
   }
}

const consultas = [];
consultas.push(new Set(nombreDJ, genero, duracionDelSet));

cantidadDeCanciones(duracionDelSet, genero); 
const setsDeTH = consultas.filter((el) => el.genero == 1);
const setsDeMT = consultas.filter((el) => el.genero == 2);
const setsDePsy = consultas.filter((el) => el.genero == 3);
const setsDeEDM = consultas.filter((el) => el.genero == 4);

