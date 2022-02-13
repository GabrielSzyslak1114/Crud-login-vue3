<template>
  <h1>Editar: {{tarea.nombre}}</h1>
    <form @submit.prevent="updateTarea(tarea)">
        <Input :tarea="tarea"/>
    </form>

</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input.vue'
export default {
  components: { Input },
computed: {
    ...mapState(['tarea'])
},
methods: {
    ...mapActions(['rutaTarea', 'updateTarea'])
},

created(){
    this.rutaTarea(this.$route.params.id)
}
}
</script>

<style>

</style>