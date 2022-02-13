// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 引入所有组件会增加代码包体积，因此不推荐这种做法:
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import Vant from 'vant';
// import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api' // 自动附加在所有axios请求前面，则可以省略/api，直接写'/xxxx/xxx'。否则需要设置'/api/xxxx/xxx'
// Vue.use(ElementUI)
// Vue.use(Vant)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
