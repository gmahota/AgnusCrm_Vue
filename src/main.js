import Vue from 'vue'
import './plugins/vuetify'

import App from './App.vue'
import router from './routes'
import store from './store'

import vueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import VueJwtDecode from 'vue-jwt-decode'
import BootstrapVue from 'bootstrap-vue'


import axios from 'axios'

//import "bootswatch/dist/cosmo/_variables.scss"
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import "bootswatch/dist/cosmo/bootswatch.scss"

//From https://github.com/VladPavliuk/lucror-games-client/blob/feature/node-js-server/src/main.js
import AuthService from './plugins/Auth'

import './plugins/vuetify'

import "bootswatch/dist/cosmo/bootstrap.css"

//var jwt = require('jsonwebtoken');

        
Vue.use(BootstrapVue);
Vue.use(vueResource);
Vue.use(VeeValidate);
Vue.use(VueJwtDecode);

//> Use custom service
Vue.use(AuthService);

Vue.config.productionTip = false;
//Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
