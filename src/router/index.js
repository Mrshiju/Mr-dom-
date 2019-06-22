import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  Readio from  '@/components/readio'
import  Login from  '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/readio',
      name: 'readio',
      component: Readio
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }

  ]
})
