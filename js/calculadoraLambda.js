const sumar = (n1, n2) => n1 + n2

const sumarCompleto = () => {
   
    var resultado = parsear('idnumero1') + parsear('idnumero2');
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado
} 

const restarCompleto = () => {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value)

    console.log("funcion sumar numero uno:" + n1)
    console.log("funcion sumar numeros dos:" + n2)
    var resultado = n1 - n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado
} 


const multiplicarCompleto = () => {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value)

    console.log("funcion sumar numero uno:" + n1)
    console.log("funcion sumar numeros dos:" + n2)
    var resultado = n1 * n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado
} 

const divisionNumeros = () => {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value)

    console.log("funcion sumar numero uno:" + n1)
    console.log("funcion sumar numeros dos:" + n2)
    var resultado = n1 / n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado
} 


const combiarImagen =() =>{
    var l1 = document.getElementById('idimagen1').src='https://upload.wikimedia.org/wikipedia/commons/1/1d/Shigeru_Miyamoto_20150610_%28cropped_2%29.jpg'

}


const parsear = (id) => parseInt(document.getElementById(id).value);


function conceptosJS(){
    let var1 =10
    let var1Texto = "texto1"
    console.log(var1);
    console.log(var1Texto)
    
    var var2 = 10
    var var2Texto = "texto2"
    console.log(var2);
    console.log(var2Texto)
 
    const const1 =10
    const constTexto = "texto3"
    console.log(const1);
    console.log(constTexto)

    //declaracion de arreglos
    const diasSemana =["lunes", "martes", "miercoles", "jueves", "viernes"];
    console.log(diasSemana)
}