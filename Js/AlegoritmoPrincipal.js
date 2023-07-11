let nombreDJ = prompt('Como es tu nombre?');
let genero = prompt("Cual género pensas tocar ? (Elegir entre 'Tech House', 'Melodic Techno', 'Psytrance', 'EDM')");
let duracionDelSet = prompt('Cuantos minutos tiene que durar el set?');

function cantidadDeCanciones(duracionDelSet, genero){
   if (genero == "Tech House"){
    let resultado = duracionDelSet / 6;
    return alert("Hola " + nombreDJ + ", tu set de " + genero + " debe tener aproximadamente " + resultado + " canciones. Gracias!")} 
   else if (genero == "Melodic Techno"){
    let resultado = duracionDelSet / 7;
    return alert("Hola " + nombreDJ + ", tu set de " + genero + " debe tener aproximadamente " + resultado + " canciones. Gracias!")}
   else if (genero == "Psytrnace"){
    let resultado = duracionDelSet / 5;
    return alert("Hola " + nombreDJ + ", tu set de " + genero + " debe tener aproximadamente " + resultado + " canciones. Gracias!")}
   else if (genero == "EDM"){
    let resultado = duracionDelSet / 4;
    return alert("Hola " + nombreDJ + ", tu set de " + genero + " debe tener aproximadamente " + resultado + " canciones. Gracias!")}
   else {
    return alert("Por favor escribir el genero como figura en los ejemplos.")
   }
}
cantidadDeCanciones(duracionDelSet, genero); 
