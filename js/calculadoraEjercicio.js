var a;
var valores = [];


function mostarPantalla(numero) {
    document.getElementById('idlabel').innerHTML += numero
}

function limpiar() {
    document.getElementById('idlabel').innerHTML = ''
}

function calcular() {
    try {
        var expresion = document.getElementById('idlabel').innerHTML;
        var resultado = eval(expresion);

        document.getElementById('idlabel').innerHTML = "Resultado: " + resultado;
    } catch (error) {
        limpiar();
    }
}

function borrarUno(num) {
    try {
        valores.push(num);
        var contenido = documet.getElementById("idlabel").value;
        document.getElementById("idlabel").value = contenido.pop();
    } catch (error) {
        limpiar();
    }
}
