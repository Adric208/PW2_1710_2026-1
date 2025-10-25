
document.addEventListener('DOMContentLoaded', function () {
    let tablero = Array(9).fill(null); // celdas del tablero
    let jugadorActual = 1; // 1 o 2
    const simbolos = { 1: 'X', 2: 'O' };
    let bloqueo = false; // evita más movimientos cuando hay ganador o empate

    const estilo = document.createElement('style');
    estilo.textContent = `
        .contenedor-gato { font-family: Arial, sans-serif; max-width:320px; margin:20px auto; text-align:center; }
        .tablero { display:grid; grid-template-columns:repeat(3,1fr); gap:6px; margin:12px 0; }
        .celda { width:100px; height:100px; display:flex; align-items:center; justify-content:center; font-size:48px; cursor:pointer; background:#f2f2f2; border-radius:6px; user-select:none; }
        .celda:active { transform:scale(0.98); }
        .estado { margin-top:8px; font-weight:600; }
        .boton { margin-top:10px; padding:8px 12px; border:none; border-radius:6px; background:#0078d4; color:white; cursor:pointer; }
    `;
    document.head.appendChild(estilo);

    // Crear interfaz
    const contenedor = document.createElement('div');
    contenedor.className = 'contenedor-gato';

    const titulo = document.createElement('h2');
    titulo.textContent = 'Juego del Gato - 2 jugadores';
    contenedor.appendChild(titulo);

    const estadoElemento = document.createElement('div');
    estadoElemento.className = 'estado';
    estadoElemento.textContent = `Turno: Jugador ${jugadorActual} (${simbolos[jugadorActual]})`;
    contenedor.appendChild(estadoElemento);

    const tableroUI = document.createElement('div');
    tableroUI.className = 'tablero';
    contenedor.appendChild(tableroUI);

    // Crear 9 celdas
    for (let i = 0; i < 9; i++) {
        const celda = document.createElement('div');
        celda.className = 'celda';
        celda.dataset.indice = i;
        celda.addEventListener('click', manejarClic);
        tableroUI.appendChild(celda);
    }

    const botonReiniciar = document.createElement('button');
    botonReiniciar.className = 'boton';
    botonReiniciar.textContent = 'Reiniciar juego';
    botonReiniciar.addEventListener('click', reiniciarJuego);
    contenedor.appendChild(botonReiniciar);

    document.body.appendChild(contenedor);

    // Funciones del juego
    function manejarClic(evento) {
        const indice = Number(evento.currentTarget.dataset.indice);
        if (bloqueo) return;
        if (tablero[indice] !== null) return; // celda ocupada

        tablero[indice] = simbolos[jugadorActual];
        evento.currentTarget.textContent = simbolos[jugadorActual];

        const ganador = comprobarGanador();
        if (ganador) {
            estadoElemento.textContent = `¡Ganó Jugador ${jugadorActual} (${simbolos[jugadorActual]})!`;
            bloqueo = true;
            destacarGanador(ganador);
            return;
        }

        if (tablero.every(c => c !== null)) {
            estadoElemento.textContent = 'Empate';
            bloqueo = true;
            return;
        }

        // Cambiar turno
        jugadorActual = jugadorActual === 1 ? 2 : 1;
        estadoElemento.textContent = `Turno: Jugador ${jugadorActual} (${simbolos[jugadorActual]})`;
    }

    function comprobarGanador() {
        const combos = [
            [0,1,2],[3,4,5],[6,7,8], // filas
            [0,3,6],[1,4,7],[2,5,8], // columnas
            [0,4,8],[2,4,6]          // diagonales
        ];
        for (const combo of combos) {
            const [a,b,c] = combo;
            if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
                return combo; // devolver combinación ganadora
            }
        }
        return null;
    }

    function destacarGanador(combo) {
        // colorea las celdas ganadoras
        combo.forEach(i => {
            const celda = tableroUI.querySelector(`[data-indice="${i}"]`);
            if (celda) celda.style.background = '#b7f5b2';
        });
    }

    function reiniciarJuego() {
        tablero = Array(9).fill(null);
        jugadorActual = 1;
        bloqueo = false;
        estadoElemento.textContent = `Turno: Jugador ${jugadorActual} (${simbolos[jugadorActual]})`;
        const celdas = tableroUI.querySelectorAll('.celda');
        celdas.forEach(c => { c.textContent = ''; c.style.background = '#f2f2f2'; });
    }
});