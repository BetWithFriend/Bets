import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import '@/assets/css/style.css'

import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import Leagues from '@/components/Leagues'
import AddLeague from '@/components/AddLeague'
import ViewLeague from '@/components/ViewLeague'
import {
  sharedSettings,
  fetchUser
} from '@/components/sharedSettings'

Vue.use(sharedSettings);
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
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
      path: '/leagues/:leagueId',
      name: 'ViewLeague',
      component: ViewLeague,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/leagues/add',
      name: 'AddLeague',
      component: AddLeague,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {

  const firebaseUser = firebase.auth().currentUser
  console.log('1')
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('2')
    if (firebaseUser) {
      console.log('3')
      if (sharedSettings.currentUser) {
        console.log('4')
        next();
      } else {
        console.log('5')
        fetchUser(firebaseUser.uid)
        .then(() => {
          console.log('6')
          next({
            path: '/dashboard',
            query: {
              redirect: to.fullPath
            }
          });
      })
    }
   } else {
      console.log('7')
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    console.log('8')
    if (firebase.auth().currentUser) {
      console.log('9')
      if (sharedSettings.currentUser) {
        console.log('10')
        next({
          path: '/dashboard',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        console.log('11')
        fetchUser(firebaseUser.uid)
        .then(() => {
          console.log('12')
          next({
            path: '/dashboard',
            query: {
              redirect: to.fullPath
            }
          });
      })
    }
   } else {
      console.log('13')
      // Proceed to route
      next();
    }
  } else {
    console.log('14')
    // Proceed to route
    next();
  }
});

export default router;
