// 该文件用于创建路由器
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 声明使用插件
Vue.use(VueRouter)

// 创建路由器
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: () => import('../pages/News.vue')
                },
                {
                    path: 'message',
                    component: () => import('../pages/Message.vue')
                },
            ]
        }
    ]
})

// 暴露路由器
export default router