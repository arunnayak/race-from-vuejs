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

import Sidebar from './components/Sidebar/Sidebar.vue'

Vue.config.productionTip = false

Vue.component('app-sidebar', Sidebar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Bootstrap }
})

