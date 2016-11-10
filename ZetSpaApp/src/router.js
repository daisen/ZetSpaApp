import Vue from 'vue'
import VueRouter from 'vue-router'
import Logon from './components/Logon'
import Hello from './components/Hello'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import MainPanel from './components/MainPanel'
import UserProfile from './components/UserProfile'
import Customer from './components/Customer'
import Business from './components/Business'
import Commodity from './components/Commodity'
import Finnance from './components/Finnance'
import Technician from './components/Customer'

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
			path: 'customer',
			component: Customer,
			meta: {
				title: '会员管理'
			}
		}, {
			path: 'commodity',
			component: Commodity,
			meta: {
				title: '商品管理'
			}
		}, {
			path: 'technician',
			component: Technician,
			meta: {
				title: '技师管理'
			}
		}, {
			path: 'finnance',
			component: Finnance,
			meta: {
				title: '财务管理'
			}
		}, {
			path: 'business',
			component: Business,
			meta: {
				title: '营业查询'
			}
		}
	]
}
]

const router = new VueRouter({
				routes
})
export default router