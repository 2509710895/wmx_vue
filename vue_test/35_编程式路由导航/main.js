// 入口文件
import Vue from 'vue'
// 引入App.vue 根组件，是所有组件的父组件
import App from './App.vue'

// 引入路由器
import router from './router'
// 关闭生产环境提示
Vue.config.productionTip = false




// 创建Vue实例 -- vm
new Vue({
  // el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  },
  router
}).$mount('#app')

// new Vue({
//   el: '#app',
//   components: {
//       App
//   },
//   template: '<App></App>',// runtime 版本中没有模版解析器
// })
