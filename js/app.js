console.log('elemnetos Vue')
console.log(Vue)

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
        }
    },
    watch: {

    },
    data() {
        return {
            mensaje: 'hola mundo desde Vue.JS',
            valor: 100
        }
    }
})


app.mount('#myApp')
