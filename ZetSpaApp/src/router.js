import Vue from 'vue'
import VueRouter from 'vue-router'
import Logon from './components/Logon'
import Hello from './components/Hello'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import MainPanel from './components/MainPanel'
import UserProfile from './components/UserProfile'

Vue.use(VueRouter)
var routes = [{
	path: '',
	redirect: "/logon"
}, {
	path: '/logon',
	component: Logon
}, {

	path: '/main',
	component: MainPanel,
	children: [
		{
			path: '',
			component: Dashboard,
			meta: {
				title: '主页'
			}
		},{
			path: 'dashboard',
			component: Dashboard,
			meta: {
				title: '主页'
			}
		}, {
			path: 'user',
			component: UserProfile,
			meta: {
				title: '用户信息'
			}
		}, {
			path: 'home',
			component: Home
		}, {
			path: 'test',
			component: {
				template: '<p>测试页</p>'
			}
		}
	]
}
]

const router = new VueRouter({
				routes
})
export default router