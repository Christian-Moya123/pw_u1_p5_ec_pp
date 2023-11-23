function sumarNumerosCompleto() {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value)

    console.log("funcion sumar numero uno:" + n1)
    console.log("funcion sumar numeros dos:" + n2)
    var resultado = n1 + n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado
   
}

function restarNumeros (){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value)

    console.log("funcion sumar numero uno:" + n1)
    console.log("funcion sumar numeros dos:" + n2)
    var resultado = n1 - n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado
   
}

function multiplicacionNumeros (){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value)

    console.log("funcion sumar numero uno:" + n1)
    console.log("funcion sumar numeros dos:" + n2)
    var resultado = n1 * n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado
   
}

function divisionNumeros (){
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value)

    console.log("funcion sumar numero uno:" + n1)
    console.log("funcion sumar numeros dos:" + n2)
    var resultado = n1 / n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado
   
}

function cambioImgane(){
    var l1 = document.getElementById('idimagen1').src='https://upload.wikimedia.org/wikipedia/commons/1/1d/Shigeru_Miyamoto_20150610_%28cropped_2%29.jpg'
}