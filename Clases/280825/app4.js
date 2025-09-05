// let numeroUsuario=parseInt(prompt("Ingresa un numero mayoir a 14"));
// if(numeroUsuario>=14){
//     console.log("Si es");
// }else {
//     console.log("No lo es ")
// }

// let port = 1;

// if(port){
//     console.log("Definicion de puerto correto");

// }else{
//     console.log("Error de puerto");
// }

//3 variables , cual es mayor , cual es menor o si son iguales
//console.log();
let numeroComparacion1=parseInt(prompt("Ingresa primer numero"));
let numeroComparacion2=parseInt(prompt("Ingresa segundo  numero"));
let numeroComparacion3=parseInt(prompt("Ingresa tercer numero"));
console.log("Primer numero "+numeroComparacion1);
console.log("Segundo numero "+numeroComparacion2);
console.log("Tercer numero "+numeroComparacion3);
var compararigual= numeroComparacion1 == numeroComparacion2 && numeroComparacion2 == numeroComparacion3 &&numeroComparacion1 ==numeroComparacion3;

 console.log("El mayor es",Math.max(numeroComparacion1,numeroComparacion2,numeroComparacion3))
 console.log("El menor es",Math.min(numeroComparacion1,numeroComparacion2,numeroComparacion3))
if (compararigual) {
    console.log("Son iguales");
    
    
} else {
    console.log("No son iguales");
    
}
