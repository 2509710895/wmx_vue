<template>
  <div class="app">
    我是APP
    
  </div>
</template>

<script>
import { 
  ref, 
  reactive, 
  toRefs,
  readonly,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from 'vue'
export default {
  name: 'App',
  components: {
    
  },
  setup(){
    let car = reactive({
      brand: '奔驰',
      price: 1000000
    })

    let sum = ref(0)

    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(car2))

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
