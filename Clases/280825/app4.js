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

console.log("El primer numero es: ",numero1);
console.log("El segundo numero es: ",numero2);
console.log("El tercer numero es: ",numero3);
let mayor = numero1;
if (numero2 > mayor) { 
  mayor = numero2;
}
if (numero3 > mayor) { 
  mayor = numero3;
}
console.log("\nEl mayor es:", mayor);
let menor = numero1;
if (numero2 < menor) { 
  menor = numero2;
}
if (c < menor) {
  menor = numero3;
}
console.log("El menor es:", menor);
if (numero1 === numero2 && numero2 === numero3) { 
  console.log("Los 3 numeros son iguales");
} else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) { 
  console.log("Hay 2 son iguales");
} else { 
  console.log("No hay numeros iguales"); 
}