import Vue from 'vue'
import VueRouter from 'vue-router'
import Logon from './components/Logon'
import Hello from './components/Hello'


Vue.use(VueRouter);

router.map({
    '/logon': {
        component: Logon
    },
    '/main': {
        component: Hello
    },
    '/test': {
        component: {
            template: '<p>测试页</p>'
        }
    }
})

/*router.redirect({
    '*': '/'
})*/


export default router

