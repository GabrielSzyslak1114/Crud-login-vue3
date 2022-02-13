<template>
  <h1 class="my-5">Ingreso de Usuarios</h1>
  <div class="alert alert-danger" v-if="error.tipo !== null">{{error.mensaje}}</div>
  <form @submit.prevent="procesarFormulario">
        <input 
            type="email" 
            placeholder="email"
            class="form-control my-2"
            v-model.trim="email"
            :class="[error.tipo === 'email' ? 'is-invalid' : '']"
        >
        <input 
            type="password" 
            placeholder="password"
            class="form-control my-2"
            v-model.trim="pass1"
        >
        <button 
            type="submit"
            class="btn btn-primary"
            :disabled="bloquear"
        >
        Ingresar
        </button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            email: '',
            pass1: '',
        }
    },
    computed: {
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 5){
                return false
            }
            return true
        }, 
        ...mapState(['error'])
    },
    methods: {
        ...mapActions(['ingresoUsuario']),
        //como es una peticion al servidor la funcion sera async
        async procesarFormulario(){
           await this.ingresoUsuario({email: this.email, password: this.pass1})
           //vamos a retornar nada para que no se ejecute el siguiente codigo que limpia los campos
            if (this.error.tipo !== null) {
                return
            }
            this.email = '';
            this.pass1 = '';
        }
    }
}
</script>