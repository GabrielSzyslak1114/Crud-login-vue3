<template>
  <h1>Registro</h1>
    <div class="alert alert-danger" v-if="error.tipo !== null">{{error.mensaje}}</div>
  <form @submit.prevent="procesarForm">
      <input class="form-control my-2" v-model.trim="email" type="email" placeholder="type email here..."
      :class="[error.tipo === 'email' ? 'is-invalid' : '']"
      >
      <input class="form-control my-2" v-model.trim="pass1" type="password" placeholder="password...">
      <input class="form-control my-2" v-model.trim="pass2" type="password" placeholder="password">
      <button class="btn btn-dark" type="submit" :disabled="bloquear">Registrar</button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
data(){
    return{
        email: '',
        pass1: '',
        pass2: ''
    }
},
    computed:{
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 6 && this.pass1 === this.pass2){
                return false
            }
            return true
        },
        ...mapState(['error'])
    },
    methods:{
        ...mapActions(['registrarUser']),
       async procesarForm(){
           await this.registrarUser({email: this.email, password: this.pass1})
           if (this.error.tipo !== null) {
               return
           }
            this.email = '';
            this.pass1 = '';
            this.pass2 = '';
        }
    }
}
</script>

<style>

</style>