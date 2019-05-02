import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import services from '@/components/services'
import contact from '@/components/contact'
import details from '@/components/details'
import  Signup  from  '@/components/auth/Signup.vue'
import  Login  from  '@/components/auth/Login.vue'

Vue.use(Router)

export default new Router({
  mode:  'history',
  base:  process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    },
    {
    path:  '/signup',
    name:  'signup',
    component:  Signup
    },
    {
    path:  '/login',
    name:  'login',
    component:  Login
    }
  ]
})