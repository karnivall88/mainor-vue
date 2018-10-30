import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Voting from '@/components/Voting'
import Calendar from '@/components/Calendar'
import Norms from '@/components/Norms'
import Login from '@/components/Login'
import Bills from "@/components/Bills"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/voting',
      name: 'voting',
      component: Voting
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/norms',
      name: 'norms',
      component: Norms
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/bills',
      name: 'bills',
      component: Bills
    }

  ]
})
