<template>
    <h1>{{ sum }}</h1>
    <button @click="sum++">点我++</button>
    <h2>当前鼠标坐标为：x:{{ point.x }} y:{{ point.y }}</h2>
</template>
  
<script>
import { 
    ref,
} from 'vue'
import usePoint from '../hooks/usePoint'


export default {
    name: 'Demo',
    setup(props, context) {
        
        console.log('setup')
        let sum = ref(0)
        let point = usePoint()

        return {
            sum,
            point
        }
        
    },
}
</script>
  
<style></style>
  