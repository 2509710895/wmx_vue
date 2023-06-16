// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 引入 countOptions
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)

// 创建 store 对象
const store = new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

// 暴露 store
export default store