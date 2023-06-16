<template>
  <div class="app">
    我是APP
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <div>加载中...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from './components/Child.vue' // 静态导入
import {  
  reactive, 
  toRefs,
  defineAsyncComponent
} from 'vue'

const Child = defineAsyncComponent(() => import('./components/Child.vue')) // 异步导入

export default {
  name: 'App',
  components: {
    Child
  },
  setup(){
    let car = reactive({
      brand: '奔驰',
      price: 1000000
    })

    let { brand, price } = toRefs(car)

    return {
      brand,
      price
    }
  }
}
</script>

<style scoped>
.app{
  background-color: red;
  padding: 10px;
}
</style>
