<template>
    <h1>{{ sum }}</h1>
    <button @click="sum++">点我++</button>
</template>
  
<script>
import { 
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
} from 'vue'
export default {
    name: 'Demo',
    setup(props, context) {
        
        console.log('setup')
        let sum = ref(0)

        onBeforeMount(()=>{
            console.log('onBeforeMount')
        })

        onMounted(()=>{
            console.log('onMounted')
        })

        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate')
        })

        onUpdated(()=>{
            console.log('onUpdated')
        })

        onBeforeUnmount(()=>{
            console.log('onBeforeUnmount')
        })

        onUnmounted(()=>{
            console.log('onUnmounted')
        })

        return {
            sum
        }
        
    },
    // 生命周期
    // beforeCreate() {
    //     console.log('beforeCreate')
    // },
    // created() {
    //     console.log('created')
    // },
    // beforeMount() {
    //     console.log('beforeMount')
    // },
    // mounted() {
    //     console.log('mounted')
    // },
    // beforeUpdate() {
    //     console.log('beforeUpdate')
    // },
    // updated() {
    //     console.log('updated')
    // },
    // beforeUnmount() {
    //     console.log('beforeUnmount')
    // },
    // unmounted() {
    //     console.log('unmounted')
    // }
}
</script>
  
<style></style>
  