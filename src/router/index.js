import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import appDesigner from '@/components/app-designer/app-designer'
import appGenerationPortal from '@/components/app-generation-portal/app-generation-portal'
import landing from '@/components/landing/landing'

import list from '@/components/app-designer/list/list'
import details from '@/components/app-designer/list/details/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landing
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/app-designer',
      name: 'appdesigner',
      component: appDesigner
    }, {
      path: '/app-generation-portal',
      name: 'appgenerationportal',
      component: appGenerationPortal
    }, {
      path: '/app-designer/list',
      name: 'list',
      component: list
    }, {
      path: '/app-designer/list/configure',
      name: 'details',
      component: details
    }
  ]
})

