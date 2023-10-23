//comentario de una linea

/*comentario
de varias
lineas*/

//declarar una variable (var - let - const)
let anioActual = 2023;
const url = "https://universe.rollingcodeschool.com/live/videos/64b5c70978c18f053461e4b5";

//asi pongo mensajes en consola
console.log ("este es un mensaje en consola");
console.log (anioActual);
console.log (url);
console.log("Año: "+ (anioActual+2)); //concatenar un texto con una variable

//modificar el contenido de una variable
anioActual=2024; // no pongo el let directamente la llamo
console.log(anioActual);

// url="otro valor"; 
// no se puede cambiar el valor d una constaste
console.log(url);

document.write("<h1>Prueba de <br>titulo</h1>");
document.write("Año: "+anioActual + "<br>");
document.write("año "+anioActual);

//alertas - ventanas emergentes-
// alert("esto es una ventana de alerta");

//prompt es para ingresar
let color = prompt("ingrese un color");
console.log(color);

//solicitar al usuario un numero, y el numero indicado por el usuario multiplicarlo por 15

let numeroSeleccionado = parseInt(prompt ("ingrese un numero de 1 a 100"))

console.log(numeroSeleccionado);
console.log(numeroSeleccionado + 15);

//trasnformas lo que ingresa el usuario
//parseInt("10") devuelve 10
//parseFloat("10.5")devuelve 10.5
//lo puedo poner en el console o cuadno lopido


