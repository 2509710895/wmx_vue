<template>
    <h1>{{ person }}</h1>
    <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
    <h1>薪资：{{ job.j1.gongzi }}</h1>
    <button @click="name += '~'">点我改变</button>
    <button @click="age++">点我改变</button>
    <button @click="job.j1.gongzi++">点我改变</button>
</template>
  
<script>
import { reactive, toRefs, } from 'vue'
export default {
    name: 'Demo',
    setup(props, context) {

        let person = reactive({
            name: 'wmx',
            age: 18,
            job: {
                j1: {
                    gongzi: 10000
                }
            }
        })

        let { age, name, job } = toRefs(person)
        

        return {
            person,
            age,
            name,
            job
        }
    }
}
</script>
  
<style></style>
  