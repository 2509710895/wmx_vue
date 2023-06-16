// 入口文件
import Vue from 'vue'
// 引入App.vue 根组件，是所有组件的父组件
import App from './App.vue'
// 引入插件
// 关闭生产环境提示
Vue.config.productionTip = false

// 创建Vue实例 -- vm
new Vue({
  // el: '#app',
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   components: {
//       App
//   },
//   template: '<App></App>',// runtime 版本中没有模版解析器
// })
