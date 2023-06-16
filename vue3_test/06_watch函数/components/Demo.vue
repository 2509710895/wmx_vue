<template>
    <h1>求和为:{{ sum }}</h1>
    <button @click="sum++">点我++</button>
    <h1>{{ msg }}</h1>
    <button @click="msg +='!'">点我改变</button>
    <h1>姓名：{{ person.name }}</h1>
    <h1>年龄：{{ person.age }}</h1>
    <h1>薪资：{{ person.job.j1.gongzi }}</h1>
    <button @click="person.name += '~'">点我改变</button>
    <button @click="person.age++">点我改变</button>
    <button @click="person.job.j1.gongzi++">点我改变</button>
</template>
  
<script>
import { ref, watch, computed, reactive } from 'vue'
export default {
    name: 'Demo',
    setup(props, context) {
        
        let sum = ref(0)
        let msg = ref('hello')
        let person = reactive({
            name: 'wmx',
            age: 18,
            job: {
                j1: {
                    gongzi: 10000
                }
            }
        })
        // 监听 监听ref定义的一个响应式数据
        // watch(sum, (newVal, oldVal) => {
        //     console.log(newVal, oldVal)
        // },{immediate:true})

        // 监听 监听ref定义的多个响应式数据
        // watch([sum, msg], (newVal, oldVal) => {
        //     console.log(newVal, oldVal)
        // })

        // 监听reactive定义的一个响应式数据 
        // 注意：此处无法正确的获取到oldVal
        // 注意：强制开启了深度监听 (deep配置无效)
        watch(person, (newVal, oldVal) => {
            console.log(newVal, oldVal)
        },{deep:false})

        // 监听reactive所定义的一个响应式数据中的某个属性
        // watch(()=>person.age, (newVal, oldVal) => {
        //     console.log(newVal, oldVal)
        // })

        // 监听reactive所定义的一个响应式数据中的某些属性
        // watch([()=>person.age,()=>person.name], (newVal, oldVal) => {
        //     console.log(newVal, oldVal)
        // })

        // 特殊情况 此处由于监视的是 reactive 所定义的一个响应式数据中的某个属性，所以配置有效
        // watch(()=>person.job, (newVal, oldVal) => {
        //     console.log(newVal, oldVal)
        // },{deep:true})

        return {
            sum,
            msg,
            person
        }
    }
}
</script>
  
<style></style>
  