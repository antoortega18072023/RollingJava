
let numero = prompt("Introduce un número:");

numero = parseInt(numero);

var resultado = "El " + numero + " es divisible por ";

if (numero % 2 === 0) {
    resultado += "2, ";
}
if (numero % 3 === 0) {
    resultado += "3, ";
}
if (numero % 5 === 0) {
    resultado += "5, ";
}
if (numero % 7 === 0) {
    resultado += "7, ";
}

resultado = resultado.slice(0, -2);


if (resultado === "El " + numero + " es divisible por") {
    console.log("El " + numero + " no es divisible por 2, 3, 5 ni 7.");
} else {
    console.log(resultado + ".");
}
