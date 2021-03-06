import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Vuesax from 'vuesax'
import VueMaterial from 'vue-material'

import '../src/assets/css/costum.css'
import 'vuesax/dist/vuesax.css'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'


Vue.config.productionTip = false
Vue.use(Vuesax, VueMaterial, {
  theme: {
    colors: {
      primary:'#5b3cc4',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)'
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
