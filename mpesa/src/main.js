import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import axios from 'axios'
import jwt from 'jsonwebtoken'

import BootstrapVue from 'bootstrap-vue'

//import "bootswatch/dist/cosmo/_variables.scss"
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import "bootswatch/dist/cosmo/bootswatch.scss"

import "bootswatch/dist/cosmo/bootstrap.css"

//var jwt = require('jsonwebtoken');

        
Vue.use(BootstrapVue)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
