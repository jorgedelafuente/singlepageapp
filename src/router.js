import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/Chat.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      redirect: '/',
      name: 'home-redirect'
    },
    {
      path: '/fixtures',
      name: 'fixtures',
      component: () => import('./views/Fixtures.vue')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('./views/Results.vue')
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('./views/Teams.vue')
    },
    {
      path: '/teams/:teamname',
      props: true,
      component: () => import('./components/Teaminfo.vue')
    },
    {
      path: '/venues',
      name: 'venues',
      component: () => import('./views/Venues.vue')
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
  }
})
