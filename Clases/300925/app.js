// Iniciamos con un arreglo para almacenar tareas
let tareas = [];

// Función para mostrar menú
function mostrarTareas() {
    return parseInt(prompt(`
        Bienvenido al simulador de tareas.
        Opciones disponibles:
        1.- Agregar tarea.
        2.- Ver todas las tareas.
        3.- Marcar tarea como completada o pendiente.
        4.- Eliminar tarea.
        5.- Salir.
    `));
}

// Función para agregar tareas
function agregarTarea() {
    let nombre = prompt("Introduce el nombre de la tarea a añadir.");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);
        alert("La tarea se ha agregado correctamente.");
    } else {
        alert("El nombre de la tarea no puede estar vacío.");
    }
}

// Función para eliminar tareas
function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
        return;
    }

    let numero = parseInt(prompt("Introduce el número de la tarea que deseas eliminar:"));
    if (numero > 0 && numero <= tareas.length) {
        let eliminada = tareas.splice(numero - 1, 1);
        alert(`La tarea "${eliminada[0].nombre}" se ha eliminado correctamente.`);
    } else {
        alert("Número de tarea inválido.");
    }
}

// Función para ver las tareas inscritas
function verTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
    } else {
        let mensaje = "Lista de tareas:\n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" : "Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

// Función para marcar como completa o pendiente una tarea
function marcarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para marcar.");
        return;
    }

    let numero = parseInt(prompt("Elige el número de la tarea que deseas modificar:"));
    if (numero > 0 && numero <= tareas.length) {
        let tarea = tareas[numero - 1];
        // Cambia el estado (si está completa la vuelve pendiente y viceversa)
        tarea.completado = !tarea.completado;

        if (tarea.completado) {
            alert(`La tarea "${tarea.nombre}" ha sido marcada como completada.`);
        } else {
            alert(`La tarea "${tarea.nombre}" ha sido marcada como pendiente.`);
        }
    } else {
        alert("Número de tarea inválido.");
    }
}

// Loop principal
var opIni;
do {
    opIni = mostrarTareas();

    if (opIni === 1) {
        agregarTarea();
    } else if (opIni === 2) {
        verTareas();
    } else if (opIni === 3) {
        marcarTarea();
    } else if (opIni === 4) {
        eliminarTarea();
    } else if (opIni === 5) {
        alert("Adios.");
        break;
    } else {
        alert("Seleccione una opción válida.");
    }

} while (opIni !== 5);
