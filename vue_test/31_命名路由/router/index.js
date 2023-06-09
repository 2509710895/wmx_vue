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
            name: '关于',
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
                    component: () => import('../pages/Message.vue'),
                    children: [
                        {
                            name: '详情',
                            path: 'detail',
                            component: () => import('../pages/Detail.vue'),
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给MessageDetail组件
                            // props: {a: 1, b: 'hello'}
                            // props的第二种写法，值为布尔值，若布尔值为true，则会把该路由组件收到的所有params参数，以props的形式传给MessageDetail组件
                            // props: true
                            // props的第三种写法，值为函数
                            // props($route) {
                            //     return {
                            //         id: $route.params.id,
                            //         title: $route.params.title
                            //     }
                            // }
                        }
                    ]
                },
            ]
        }
    ]
})

// 暴露路由器
export default router