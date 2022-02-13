<template>
  <table class="table">
      <thead>
          <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categorias</th>
              <th scope="col">Estado</th>
              <th scope="col">Numero</th>
              <th scope="col">Accion</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="tarea in tareas" :key="tarea.id">
              <th scope="row">{{tarea.id}}</th>
              <td>{{tarea.nombre}}</td>
              <td><span v-for="(item, index) in tarea.categorias" :key="index">
                  {{tarea.categorias.join(', ')}}
                  </span>
                </td>
              <td>{{tarea.estado}}</td>
              <td>{{tarea.numero}}</td>
              <td>
                  <button class="btn btn-danger btn-sm" @click="eliminarTarea(tarea.id)">Eliminar</button>
                  <router-link class="btn btn-warning btn-sm " 
                  :to="{name: 'Editar', 
                  params:{
                      id: tarea.id
                      } }"> 
                      Editar
                  </router-link>
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
 import {mapState} from 'vuex'
 import {mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['tareas'])
    },
    methods:{
        ...mapActions(['eliminarTarea'])
    }
   

}
</script>

<style>

</style>