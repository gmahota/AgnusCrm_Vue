// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import store  from  './store'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

const  accessToken  =  localStorage.getItem('access_token')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] =  accessToken
}

// new  Vue({
// router,
// store,
// render:  h  =>  h(App)
// }).$mount('#app')
