<template>
  <!-- <Demo></Demo> -->
  <input type="text" v-model="keyWord">
  <h1>{{ keyWord }}</h1>
</template>

<script>
import { ref, customRef } from 'vue'
import Demo from './components/Demo.vue';
export default {
  name: 'App',
  components: {
    Demo
  },
  setup(){
    // let keyWord = ref('') // 通过ref创建一个响应式数据

    function myRef(value,delay = 500){
      let timer = null
      return customRef((track, trigger) => {
        return {
          get(){
            console.log('get', value);
            track() // 通知Vue追踪value的改变
            return value
          },
          set(newValue){
            console.log('set', newValue);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() // 通知Vue去更新界面
            }, delay);
          }
        }
      })
    }

    let keyWord = myRef('a') // 通过ref创建一个响应式数据
    return {
      keyWord
    }
  }
}
</script>

<style>

</style>
