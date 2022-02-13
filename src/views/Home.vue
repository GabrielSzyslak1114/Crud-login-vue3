<template>

  <h1 class="my-5">Formularios con Vue.js</h1>

  <form @submit.prevent="procesarFormulario">
    <Input :tarea="tarea" />
  </form>
  <hr>
  <Tabla/>

</template>

<script>

import Input from '../components/Input'
import Tabla from '../components/Tabla.vue'
import {mapActions} from 'vuex'
const shortid = require('shortid')
export default {
  name: 'Home',
  components: {
    Input, Tabla
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
  methods: {
    ...mapActions(['setTareas', 'cargarLocalStorage']),
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim() === ""){
        console.log('Campo vacío')
        return
      }
      console.log('no está vacio')

      // generar id
     this.tarea.id = shortid.generate()

      
      // envian los datos
      this.setTareas(this.tarea)
      // limpiar datos
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
      }
    }
  },
      created(){
      this.cargarLocalStorage()
    }

}
</script>
