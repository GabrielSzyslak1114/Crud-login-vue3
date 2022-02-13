<template>
  <div class="navbar navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">
          Formularios
      </router-link>
      <div class="d-flex">
          <router-link v-if="usuarioAuntenticado" class="btn btn-dark" to="/">
            Tareas
          </router-link>

          <router-link v-if="!usuarioAuntenticado" class="btn btn-dark" to="/registro">
            Registro
          </router-link>

          <router-link v-if="!usuarioAuntenticado" class="btn btn-dark" to="/login">
            Ingreso
          </router-link>
          <button v-if="usuarioAuntenticado" class="btn btn-primary" @click="cerrarSesion">cerrar session</button>
      </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  methods: {
          ...mapActions(['cerrarSesion'])
  },
  computed:{
      ...mapGetters(['usuarioAuntenticado']),
  }
}
</script>

