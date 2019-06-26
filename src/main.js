// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import axios from  'axios'
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles'
import  live2d from  'live2d-vue'
import  live2d4vue from  'live2d4vue'
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(element)
Vue.use(live2d)
Vue.use(live2d4vue)
/* eslint-disable no-new */
Vue.prototype.$axios = axios;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
