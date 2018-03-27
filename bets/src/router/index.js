import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Table from '@/components/Table'
import Standings from '@/components/Standings'
import Predictions from '@/components/Predictions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/standings',
      name: 'Standings',
      component: Standings
    },
    {
      path: '/predictions',
      name: 'Predictions',
      component: Predictions
    }
  ]
})
