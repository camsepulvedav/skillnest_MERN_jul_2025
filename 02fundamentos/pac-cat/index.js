let tablero = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

function dibujarTablero () {
    let salida = ""
    for (let i = 0; i < tablero.length; i++);{
        salida = salida + "<div class = 'fila'>"
    }
        document.getElementById('mundo').innerHTML = salida
    }

    dibujarTablero()