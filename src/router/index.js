import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      rutaprotegida: true
    }
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue'),
    meta: {
      rutaprotegida: true
    }
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//to para tener acceso a una ruta/objeto, next para enviar al usuario a las paginas que estan o no extan protegidas
router.beforeEach((to, from, next)=>{
  if (to.meta.rutaprotegida) {
    //si la ruta es protegida y usuarioAuntenticado existe/es true, envialo a la pagina que desea, sino envialo al login
    if (store.getters.usuarioAuntenticado) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
