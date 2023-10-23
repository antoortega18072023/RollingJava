//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
let num3 = parseInt(prompt("ingrese el tercer numero"));

if (num1>num2 && num1>num3){
    console.log(num1 + " es el numero mas grande");
} else{
    if (num2>num3 && num2>num1){
        console.log(num2 + " es el numero mas grande");
    }
    else{
        console.log(num3 + " es el numero mas grande");
    }
}