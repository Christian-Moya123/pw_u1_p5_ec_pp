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


const combiarImagen = () => {
    var l1 = document.getElementById('idimagen1').src = 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Shigeru_Miyamoto_20150610_%28cropped_2%29.jpg'

}


const parsear = (id) => parseInt(document.getElementById(id).value);


function conceptosJS() {
    let var1 = 10
    let var1Texto = "texto1"
    console.log(var1);
    console.log(var1Texto)

    var var2 = 10
    var var2Texto = "texto2"
    console.log(var2);
    console.log(var2Texto)

    const const1 = 10
    const constTexto = "texto3"
    console.log(const1);
    console.log(constTexto)

    //declaracion de arreglos
    const diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    console.log(diasSemana)
    console.log(diasSemana[0])
    console.log(diasSemana[4])
    console.log(diasSemana[5])
    diasSemana[5] = "SABADO"
    console.log(diasSemana[5])

    diasSemana.push("domingo")
    console.log(diasSemana)
    diasSemana.unshift("feriado")
    console.log(diasSemana)

    const edades = [1, 2, 3, 4, 5]
    console.log(edades)
    const edades2 = [6, 7, 8]
    const edadesFinales = edades.concat(edades2)
    console.log(edadesFinales)

    for (const dia of diasSemana) {
        console.log(dia)
        if (dia === "martes") {
            console.log("martes dos por uno")
        }
    }

    //declaracion de objetos
    const estudainte = {
        nombre: "Alex",
        apellido: "Moya",
        edad: 122,
        genero: "masculino",
        ciudad: "Quito"
    }

    console.log(estudainte)
    console.log(estudainte.apellido)
    estudainte.nombre = "Daniel"
    console.log(estudainte.nombre)

    const persona = {
        nombre: "Alex2",
        apellido: "Moya2",
        edad: 122,
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "Rumipamba",
            numeracion: "oe3-855",
            barrio: "maraina de jesus"
        }
    }

    console.log(persona)
    console.log(persona.direccion)
    console.log(persona.direccion.callePrincipal)

    const pacientes = [
        {
            nombre: "Alex",
            apellido: "Moya",
            edad: 122,
            genero: "masculino",
            ciudad: "Quito"
        },
        {
            nombre: "AlexB",
            apellido: "MoyaB",
            edad: 122,
            genero: "masculino",
            ciudad: "Quito"
        },
        {
            nombre: "AlexC",
            apellido: "MoyaC",
            edad: 122,
            genero: "masculino",
            ciudad: "Quito"
        },
        {
            nombre: "AlexD",
            apellido: "MoyaD",
            edad: 122,
            genero: "masculino",
            ciudad: "Quito"
        },


    ]


    console.log(pacientes)
    console.table(pacientes)
    console.log(pacientes[0].nombre)
    pacientes[0].nombre = "Abel"
    console.log(pacientes[0].nombre)
    console.log(pacientes.pop())
    console.log(pacientes)

    //Desestructuracion arreglos
    const diasSemana2 = ["lunes", "martes", "miercoles", "jueves", "viernes"]
    const [dia1, dia2, dia3, dia4, dia5] = diasSemana2
    console.log(dia1)
    console.log(dia2)

    const [d1, d2, d3, d4, d5] = ["lunes", "martes", "miercoles", "jueves", "viernes"]
    console.log(d2)
    console.log(d4)

    //Desestructuracion objetos
    const vehiculo = {
        marca: "Toyota",
        modelo: "Prius",
        anio: 122,
    }


    const { marca, modelo, anio } = vehiculo;
    console.log(marca)
    console.log(modelo)

    const persona3 = {
        nombre: "Alex2",
        edad: 122,
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "Rumipamba",
            numeracion: "oe3-855",
        }
    }

    const { nombre, edad, direccion:{callePrincipal,calleSecundaria,numeracion}} = {
        nombre: "Alex233",
        edad: 122,
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "Rumipamba",
            numeracion: "oe3-855",
        }
    }

    console.log(nombre)
    console.log(numeracion)




}