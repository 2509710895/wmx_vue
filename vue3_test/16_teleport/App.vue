<template>
  <div class="app">
    我是APP
    <Child></Child>
  </div>
</template>

<script>
import Child from './components/Child.vue'
import {  
  reactive, 
  toRefs,
} from 'vue'
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
