const estudiantes = [{ nombre: "", apellido: "", hobby: "", genero: "", pais: "" }]
console.log(estudiantes)

const app = Vue.createApp({
    methods: {

        ingresarEstudiante() {
            console.log("estudiante ingresado")
            const estu = {
                nombre: this.nombre, apellido: this.apellido, hobby: this.hobby
                , genero: this.genero, pais: this.pais
            }
            this.lista.push(estu)

            this.nombre = "";
            this.apellido = "";
            this.hobby = "";
            this.genero = "";
            this.pais = "";
        },

       
    },
    watch: {



    },

    data() {
        return {
            lista: estudiantes,
            nombre: null,
            apellido: null,
            hobby: null,
            genero: null,
            pais: null,

        }
    }
})

app.mount('#myApp')
