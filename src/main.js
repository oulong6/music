import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import imageLazyLoading from '@/plugins/imageLazyLoading'
import '@/assets/icon-font/iconfont.css'
import  {Carousel,CarouselItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/ll'
import api from '@/api'
var moment = require('moment')
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(imageLazyLoading,{loading: 'loading', error: 'error'})
Vue.filter('dt',function (value) {
  return moment(value).format('mm:ss')
})
window.$vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
