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
import { reactive, toRef, toRefs } from 'vue'
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

        // 通过toRef可以将一个响应式数据中的某个属性转换为一个ref
        // let age = toRef(person, 'age')
        // let name = toRef(person, 'name')
        // let gongzi = toRef(person.job.j1, 'gongzi')

        // 通过toRefs可以将一个响应式数据中的所有属性转换为ref
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
  