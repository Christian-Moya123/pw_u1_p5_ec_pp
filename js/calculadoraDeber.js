var a;

function mostarPantalla (numero){
    document.getElementById('idlabel').innerHTML += numero
}

function limpiar(){
    document.getElementById('idlabel').innerHTML = ''
}

function calcular(){
    try {
        var expresion = document.getElementById('idlabel').innerHTML;
        var resultado = eval(expresion);
        
        document.getElementById('idlabel').innerHTML = "Resultado: " + resultado;
    } catch (error) {
        limpiar();
    }
}

