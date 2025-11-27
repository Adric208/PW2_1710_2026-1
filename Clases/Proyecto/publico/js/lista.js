// Guarda la fila actualmente en edición
let filaEditando = null;

// Guarda el ID original antes de cambiarlo
let idOriginal = null;


// Edita la fila
// Convierte la fila en inputs para permitir edición
function editarFila(id) {

    // Evita editar otra fila mientras una está activa
    if (filaEditando && filaEditando.dataset.id != id) {
        return alert("Primero guarda o cancela la edición actual.");
    }

    const fila = document.querySelector(`tr[data-id='${id}']`);
    filaEditando = fila;

    const celdas = fila.querySelectorAll(".campo");

    // Guarda el estado original para restaurarlo si cancelan
    fila.dataset.original = JSON.stringify(
        Array.from(celdas).map(td => td.textContent)
    );

    // Guarda el ID original por si lo cambian
    idOriginal = celdas[0].textContent;

    // Convierte cada celda en un input editable
    celdas.forEach(td => {
        td.innerHTML = `<input class="form-control form-control-sm" value="${td.textContent.trim()}">`;
    });

    // Reemplaza botones por Guardar/Cancelar
    fila.querySelector(".acciones").innerHTML = `
        <button class="btn btn-success btn-sm" onclick="guardarFila(${id})">Guardar</button>
        <button class="btn btn-secondary btn-sm" onclick="cancelarEdicion()">Cancelar</button>
    `;
}


// Boton Cancelar edicion
// Restaura los valores originales y botones normales
function cancelarEdicion() {

    if (!filaEditando) return;

    const valores = JSON.parse(filaEditando.dataset.original);
    const celdas = filaEditando.querySelectorAll(".campo");

    // Regresa cada celda a su texto original
    celdas.forEach((td, i) => {
        td.textContent = valores[i];
    });

    // Restaura los botones de acción
    const id = filaEditando.dataset.id;
    filaEditando.querySelector(".acciones").innerHTML = `
        <button class="btn btn-warning btn-sm" onclick="editarFila(${id})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="eliminarFila(${id})">Eliminar</button>
    `;

    filaEditando = null;
}



// Envia datos editados al servidor con validación local y los guarda
function guardarFila(id) {

    // Obtiene todos los inputs de la fila
    const inputs = filaEditando.querySelectorAll("input");

    // --- VALIDACIÓN DE CAMPOS VACÍOS ---
    for (let i of inputs) {
        if (i.value.trim() === "") {
            return alert("Ningún campo puede quedar vacío.");
        }
    }

    // Construye el objeto con los datos nuevos
    const datos = {
        id: parseInt(inputs[0].value),
        nombre: inputs[1].value.trim(),
        ocupacion: inputs[2].value.trim(),
        edad: parseInt(inputs[3].value),
        promedio: parseFloat(inputs[4].value)
    };

    // --- VALIDACIONES DE NÚMEROS ---
    if (isNaN(datos.id)) return alert("El ID debe ser un número válido.");
    if (isNaN(datos.edad)) return alert("La edad debe ser un número válido.");
    if (isNaN(datos.promedio)) return alert("El promedio debe ser un número válido.");

    if (datos.id < 0) return alert("El ID no puede ser negativo.");
    if (datos.edad < 0) return alert("La edad no puede ser negativa.");
    if (datos.promedio < 0) return alert("El promedio no puede ser negativo.");
    if (datos.promedio > 10) return alert("El promedio no puede ser mayor a 10.");

    // Validación de ID duplicado en la tabla (antes de enviar al servidor)
    if (datos.id != idOriginal) {
        const ids = [...document.querySelectorAll("tr[data-id]")].map(f => f.dataset.id);
        if (ids.includes(String(datos.id))) {
            return alert("Ese ID ya existe. No puede duplicarse.");
        }
    }

    // --- ENVÍA DATOS AL SERVIDOR ---
    fetch(`/editar/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    })
    .then(res => res.json())
    .then(resp => {

        // Si el backend devuelve error, mostrarlo
        if (resp.error) return alert(resp.error);

        // Recargar para ver cambios aplicados
        location.reload();
    });
}



// Pide confirmación y redirige a la ruta de eliminación
function eliminarFila(id) {
    if (!confirm("¿Eliminar este registro?")) return;
    window.location.href = `/eliminar/${id}`;
}
