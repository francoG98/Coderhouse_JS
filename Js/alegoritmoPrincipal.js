let inputs = document.querySelectorAll("input");

let formularioSet = document.getElementById("formularioSet");
formularioSet.addEventListener("submit", guardarDatosIngresados);

let nombreDJ = document.getElementById("Nombre del DJ").value;
let genero = document.getElementById("generos").value;
let duracionDelSet = document.getElementById("duracionDelSet").value;

let setData = {
   nombreDJ: nombreDJ,
   genero: genero,
   duracionDelSet: duracionDelSet
};

function guardarDatosIngresados(){
   localStorage.setItem("set", JSON.stringify(setData));
}

function cantidadDeCanciones(duracionDelSet, genero){
   switch(genero){
      case "Tech House":
         return Math.round(duracionDelSet/5);
         break;
      case "Melodic Techno":
         return Math.round(duracionDelSet/6);
         break;
      case "Psytrance":
         return Math.round(duracionDelSet/4);
         break;
      case "EDM":
         return Math.round(duracionDelSet/3);
         break; 
   }
   
}
class Set {
   constructor(nombreDJ, genero, duracionDelSet) {
      this.nombreDJ = nombreDJ.toUpperCase();
      this.genero = genero;
      this.duracionDelSet = duracionDelSet;
   }
   hablar(){
      console.log("Hola, soy el set de" + this.nombreDJ + " y duro" + this.duracionDelSet)
   }
}

const consultas = [];
consultas.push(new Set(nombreDJ, genero, duracionDelSet));

cantidadDeCanciones(duracionDelSet, genero); 
const setsDeTH = consultas.filter((el) => el.genero == "TechHouse");
const setsDeMT = consultas.filter((el) => el.genero == "Melodic Techno");
const setsDePsy = consultas.filter((el) => el.genero == "Psytrance");
const setsDeEDM = consultas.filter((el) => el.genero == "EDM");

