import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import '@/assets/css/style.css'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Leagues from '@/components/Leagues'
import AddLeague from '@/components/AddLeague'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/leagues',
      name: 'Leagues',
      component: Leagues,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/leagues/add',
      name: 'add-league',
      component: AddLeague,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {

      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {

      next({
        path: '/dashboard',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;