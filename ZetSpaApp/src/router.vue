<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Logon from './components/Logon'
import Hello from './components/Hello'
import Home from './components/Home'
Vue.use(VueRouter)
var routes = [
        {path:'/logon', component: Logon},
        {path:'/home', component: Home},
        {path:'/test', component: { template: '<p>测试页</p>' }}
        ]

const router = new VueRouter({routes})
export default router
</script>