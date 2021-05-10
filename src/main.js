import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  render: h => h(App),
}).$mount('#app')
