import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/slidebar'
import  Readio from  '@/components/readio'
import  Login from  '@/components/login'
import  Elding from  '@/components/elloading'
import Resume from '@/components/resume'
import Elployment from '@/components/elployment'
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
      component: Readio,children:[
        {
          path:'/readio',
          name:'resume',
          component:Resume
        },
        {
          path:'/elployment',
          name:'elployment',
          component:Elployment
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/loadin',
      name:'loagin',
      component:Elding
    }

  ]
})
