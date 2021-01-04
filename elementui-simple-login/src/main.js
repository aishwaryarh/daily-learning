import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-default/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import { Input} from 'element-ui'

Vue.use(Input)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')