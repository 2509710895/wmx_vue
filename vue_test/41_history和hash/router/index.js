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
    mode: 'history',
    // 配置路由和组件之间的应用关系
    routes: [
        {
            name: '关于',
            path: '/about',
            component: About,
            meta: {
                isAuth: true,
                title: '关于'
            }
        },
        {
            name: '主页',
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [
                {
                    name: '新闻',
                    path: 'news',
                    component: () => import('../pages/News.vue'),
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    },
                    // beforeEnter: (to, from, next) => {
                    //     console.log('beforeEach', to, from)
                    //     if (to.meta?.isAuth) {
                    //         if (localStorage.getItem('key') === 'wmx2') {
                    //             next()
                    //         } else {
                    //             alert('该页面需要登录才能访问')
                    //             return
                    //         }
                    //     } else {
                    //         next()
                    //     }
                    // }
                },
                {
                    name: '消息',
                    path: 'message',
                    component: () => import('../pages/Message.vue'),
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [
                        {
                            name: '详情',
                            path: 'detail',
                            component: () => import('../pages/Detail.vue'),
                            meta: {
                                isAuth: true,
                                title: '详情'
                            },
                            // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件 传的是死数据
                            // props: {a: 1, b: 'hello'}
                            // props的第二种写法，值为布尔值，若布尔值为true，则会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props: true
                            // props的第三种写法，值为函数
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        }
    ]
})

// 全局前置路由守卫 初始化的时候被调用，在跳转前执行
// router.beforeEach((to, from, next) => {
//     console.log('beforeEach', to, from)
//     if(to.meta?.isAuth) {
//         if(localStorage.getItem('key') === 'wmx2') {
//             next()
//         }else{
//             alert('该页面需要登录才能访问')
//             return 
//         }
//     }else{
//         next()
//     }
// })

// 全局后置路由守卫 初始化的时候被调用，在跳转后执行
// router.afterEach((to, from) => {
//     console.log('afterEach', to, from)
//     document.title = to.meta.title || 'wmx_vue'
// })

// 暴露路由器
export default router