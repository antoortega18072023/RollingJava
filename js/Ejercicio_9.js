//Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("ingrese una frase");
let vocales ="";

for (let i = 0; i < frase.length; i++) {
    let caracter = frase.substring(i, i + 1);
    if ("aeiou".indexOf(caracter) !== -1) {
        vocales += caracter;
    }
}

console.log("Las vocales en la frase son: " + vocales);