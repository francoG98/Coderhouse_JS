
const opcionSalir = 5;
let nombreDJ = prompt('Como es tu nombre?');
let duracionDelSet = parseInt(prompt('Cuantos minutos tiene que durar el set?'));
let genero = parseInt(prompt("Cual género pensas tocar ? \n 1- Tech House, \n 2- Melodic Techno, \n 3- Psytrance, \n 4- EDM, \n 5- SALIR"));

function cantidadDeCanciones(duracionDelSet, genero){
   while (genero != opcionSalir){
      switch (genero){
         case 1:
            alert("Hola " + nombreDJ + ", tu set de Tech House debe tener aproximadamente " + duracionDelSet / 6 + " canciones. Gracias!");
            genero= parseInt(prompt("Que deseas hacer ? Elegir otro género para tu set ? \n 1- Tech House, \n 2- Melodic Techno, \n 3- Psytrance, \n 4- EDM o \n 5- SALIR"));
            break;
         case 2:
            alert("Hola " + nombreDJ + ", tu set de Melodic Techno debe tener aproximadamente " + duracionDelSet / 7 + " canciones. Gracias!");
            genero= parseInt(prompt("Que deseas hacer ? Elegir otro género para tu set ? \n 1- Tech House, \n 2- Melodic Techno, \n 3- Psytrance, \n 4- EDM o \n 5- SALIR"));
            break;
         case 3:
            alert("Hola " + nombreDJ + ", tu set de Psytrance debe tener aproximadamente " + duracionDelSet / 5 + " canciones. Gracias!");
            genero= parseInt(prompt("Que deseas hacer ? Elegir otro género para tu set ? \n 1- Tech House, \n 2- Melodic Techno, \n 3- Psytrance, \n 4- EDM o \n 5- SALIR"));
            break;
         case 4:
            alert("Hola " + nombreDJ + ", tu set de EDM debe tener aproximadamente " + duracionDelSet / 4 + " canciones. Gracias!");
            genero= parseInt(prompt("Que deseas hacer ? Elegir otro género para tu set ? \n 1- Tech House, \n 2- Melodic Techno, \n 3- Psytrance, \n 4- EDM o \n 5- SALIR"));
            break;
         default:
            alert("Por favor elegir un género. \n 1- Tech House , \n 2- Melodic Techno , \n 3- Psytrance, \n 4- EDM, \n 5- SALIR");
            genero = parseInt(prompt("Cual género pensas tocar ? \n 1- Tech House , \n 2- Melodic Techno , \n 3- Psytrance, \n 4- EDM, \n 5- SALIR)"))
            break;
      }}
   alert("Gracias por su visita, vuelva pronto!");   
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
console.log( consultas.length );
 
