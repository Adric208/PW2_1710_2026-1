let carrito = []; // arreglo vacío para guardar frutas
let agregar = confirm("¿Quieres agregar una fruta al carrito?");

while (agregar) {
  let fruta = prompt("Ingresa el nombre de la fruta:");
  
  if (fruta) { 
    carrito.push(fruta); 
    console.log(fruta + " agregada al carrito.");
  } else {
    console.log("No ingresaste ninguna fruta.");
  }

  // preguntar de nuevo
  agregar = confirm("¿Quieres agregar otra fruta?");
}

// cuando el usuario dice que NO
console.log("------ Carrito final ------");
for (let i = 0; i < carrito.length; i++) {
  console.log((i+1) + ". " + carrito[i]);
}

if (carrito.length === 0) {
  console.log("No agregaste ninguna fruta.");
}
