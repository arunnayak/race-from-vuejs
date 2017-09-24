// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//  adding jquery
import jQuery from 'jquery'
global.jQuery = jQuery
//  adding bootstrap
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

import Sidebar from './components/sidebar/sidebar.vue'
import Topmenu from './components/topmenu/topmenu.vue'
import Header from './components/app-designer/list/header/header.vue'

// firebase configuration
let VueFire = require('vuefire')
Vue.use(VueFire)

Vue.config.productionTip = false

Vue.component('app-sidebar', Sidebar)
Vue.component('app-topmenu', Topmenu)
Vue.component('app-designer-header', Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Bootstrap }
})

