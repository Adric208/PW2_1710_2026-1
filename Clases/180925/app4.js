var productos = [
  {nombre: 'Camisa', precio: 100},
  {nombre: 'Pantalón', precio: 200},
  {nombre: 'Zapatos', precio: 300},
  {nombre: 'Sombrero', precio: 400}
];

var carrito = [];
var opcion;

function menuPrincipal() {
  do {
    opcion = prompt(
      "Seleccione un producto para agregar al carrito:\n\n" +
      productos.map((p, i) => (i+1) + ". " + p.nombre + " - $" + p.precio).join("\n") +
      "\n" + (productos.length+1) + ". Ver Carrito y Total" +
      "\n" + (productos.length+2) + ". Actualizar Carrito" +
      "\n" + (productos.length+3) + ". Menú Administrador" +
      "\n" + (productos.length+4) + ". Salir"
    );

    if (opcion >= 1 && opcion <= productos.length) {
      let producto = productos[opcion - 1];
      carrito.push(producto);
      alert(producto.nombre + " agregado al carrito.");
    } else if (opcion == productos.length+1) {
      if (carrito.length === 0) {
        alert("El carrito está vacío.");
      } else {
        let lista = carrito.map((p, i) => (i+1) + ". " + p.nombre + " - $" + p.precio).join("\n");
        let total = carrito.reduce((suma, p) => suma + p.precio, 0);
        alert("Carrito:\n\n" + lista + "\n\nTotal: $" + total);
      }
    } else if (opcion == productos.length+2) {
      if (carrito.length === 0) {
        alert("El carrito está vacío.");
      } else {
        let lista = carrito.map((p, i) => (i+1) + ". " + p.nombre + " - $" + p.precio).join("\n");
        let eliminar = prompt("Seleccione el número del producto a eliminar:\n\n" + lista + "\n\n0. Cancelar");
        if (eliminar > 0 && eliminar <= carrito.length) {
          let eliminado = carrito.splice(eliminar - 1, 1);
          alert(eliminado[0].nombre + " eliminado del carrito.");
        }
      }
    } else if (opcion == productos.length+3) {
      var opcionAdmin;
      do {
        opcionAdmin = prompt(
          "=== MENÚ ADMINISTRADOR ===\n\n" +
          "1. Agregar producto al catálogo\n" +
          "2. Ver catálogo\n" +
          "3. Salir"
        );
        if (opcionAdmin == 1) {
          let nombre = prompt("Ingrese el nombre del producto:");
          let precio = parseFloat(prompt("Ingrese el precio del producto:"));
          if (nombre && !isNaN(precio)) {
            productos.push({nombre, precio});
            alert("Producto agregado correctamente.");
          } else {
            alert("Datos inválidos.");
          }
        } else if (opcionAdmin == 2) {
          alert("Catálogo actual:\n\n" + productos.map((p, i) => (i+1) + ". " + p.nombre + " - $" + p.precio).join("\n"));
        }
      } while (opcionAdmin != 3);
    } else if (opcion != productos.length+4) {
      alert("Opción no válida.");
    }

  } while (opcion != productos.length+4);

  alert("Gracias por su compra.");
}

menuPrincipal();
