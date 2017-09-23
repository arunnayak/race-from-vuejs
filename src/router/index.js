import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import AppDesigner from '@/components/AppDesigner/AppDesigner'
import AppGenerationPortal from '@/components/AppGenerationPortal/AppGenerationPortal'
import Landing from '@/components/Landing/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/app-designer',
      name: 'AppDesigner',
      component: AppDesigner
    }, {
      path: '/app-generation-portal',
      name: 'AppGenerationPortal',
      component: AppGenerationPortal
    }, {
      path: '/',
      name: 'Landing',
      component: Landing
    }
  ]
})

