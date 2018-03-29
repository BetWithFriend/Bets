import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Register from '@/components/Register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
