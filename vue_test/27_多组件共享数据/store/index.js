// 该文件用于创建 Vuex 中最为核心的 store

// 引入 Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 准备 actions--用于响应组件中的动作
const actions = {
    // increment(context,value){
    //     context.commit('INCREMENT',value)
    // },
    // decrement(context,value){
    //     context.commit('DECREMENT',value)
    // },
    incrementIfOdd(context,value){
        if(context.state.sum % 2){
            context.commit('INCREMENT',value)
        }
    },
    incrementAsync(context,value){
        setTimeout(() => {
            context.commit('INCREMENT',value)
        }, 1000);
    }
}

// 准备 mutations--用于操作数据（state）
const mutations = {
    INCREMENT(state,value){
        // console.log('mutations中的increment被调用了');
        state.sum += value
    },
    DECREMENT(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
}

// 准备 state--用于存储数据
const state = {
    sum:0,
    personList:[
        {id:'001',name:'张三'},
    ]
}

// 准备 getters--用于将 state 中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

// 创建 store 对象
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

// 暴露 store
export default store