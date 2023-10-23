//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));

if (num1>num2){
    console.log(num1+" es el numero mas grande");
} else{
    console.log (num2+ " es el numero mas grande");
}