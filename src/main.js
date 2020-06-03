import Vue from 'vue'
import App from './App.vue'
import '@/assets/icon-font/iconfont.css'
import  {Carousel,CarouselItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/ll'
import api from '@/api'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(Carousel)
Vue.use(CarouselItem)
window.$vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')
