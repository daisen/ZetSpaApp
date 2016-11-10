import Vue from 'vue'
import App from './App'
import router from './router.js'
/* eslint-disable no-new */
new Vue({
    el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')