import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'

new Vue({
  el: '#app',
  router,
  render: r => r( App )
})
