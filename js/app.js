console.log('elemnetos Vue')
console.log(Vue)

const estudiantes = [{ nombre: "alex", apellido: "moya" },
{ nombre: "christian", apellido: "charro" },
{ nombre: "alex3", apellido: "moya3" },
{ nombre: "alex4", apellido: "moy4" },
{ nombre: "", apellido: "moya5" }]

console.log(estudiantes)
console.table(estudiantes)

const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> Desde App.js</p>
    // <h6>{{1+1}}</h6>
    // <p>{{[1,2,3,4,5,6,7,8]}}</p>
    // <p>{{true?'Verdadero':'Falso'}}</p>
    // `
    methods: {
        cambiarMensaje() {//parentecis no es necesario si no hay argumentos
            console.log('se esta cambiando el mensaje')
            console.log(this.mensaje)
            mensaje = 'valor cambiado'
        },
        cambiarNumero() {
            this.valor++
            console.log(this.valor)
        },
        agregarEstudiante() {
            console.log("estudainte ingresado")
            const estu = { nombre: this.nombre, apellido: this.apellido2 }
            //this.lista.unshift(estu)}
            this.lista.push(estu)
        },

        presionandoTecla(event) {
            console.log("presionando")
            console.log(event.charCode)
        },

        presionandoTeclaDesestrcturado({charCode}) {
            console.log("presionando")
            console.log(charCode)
        },

        presionandoTeclaModificador() {
            console.log("presionando 2 ...........")
        },

        presionandoEnter(event) {
            if (event.charCode === 13) {
                const estu = { nombre: this.nombre, apellido: this.apellido2 }
                //this.lista.unshift(estu)}
                this.lista.push(estu)
            }else{
                console.log("no puedo")
            }
        }
    },
    watch: {

    },
    data() {
        return {
            mensaje: 'hola mundo desde Vue.JS',
            valor: 100,
            lista: estudiantes,
            nombre: null,
            apellido2: null
        }
    }
})


app.mount('#myApp')
