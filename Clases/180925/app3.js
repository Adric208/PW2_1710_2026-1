var miCarro = new Object();
miCarro.marca = 'Toyota';
miCarro.modelo = 'supra';
miCarro.color = 'rojo';

console.log(miCarro);
//ejemplo de arreglo
/*
let frutas = ["Platano", "Manzana ", "Pera"];
console.log(frutas);
*/
/*
var miCarro =<{
    marca: 'Toyota',
    modelo: 'Surpra',
    color: 'Rojo'
}
console.log(miCarro)
*/

var perro = {
    nombre:'Shayla',
    color:'Sal pimienta',
    edad: 28,
    talla:'mediana',
    enemigos: ["Otro perro","Gatos","baños"]
}

console.log(perro);
//console.log(perro.color);
//console.log(perros,enemigos[1]);

perro.raza = 'schnauzer';

console.log(perro);

//leer
console.log(perro.edad);

//actualizar
perro.edad = 35;
console.log(perro.edad);

//eliminar

delete perro.edad;
console.log(perro);