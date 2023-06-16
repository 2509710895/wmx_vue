<template>
  <div class="app">
    我是APP,{{ brand }}-{{ price }}
    <Child></Child>
  </div>
</template>

<script>
import { ref, reactive, toRefs, provide } from 'vue'
import Child from './components/Child.vue';
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

    provide('car', car)

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
