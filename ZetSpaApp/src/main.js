// import Vue from 'vue'
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
var Main = new Vue({
  el: 'body',
  components: { App }
})

router.start(Main, '#app')
