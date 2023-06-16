<template>
  <h1>一个人的信息</h1>
  <p>姓名：{{name}}</p>
  <p>年龄：{{age}}</p>
  <p>工作：{{job.type}}，{{job.salary}}</p>
  <button @click="change">修改信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  components: {
    
  },
  setup() {
    // 数据
    let name = ref('wmx')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    // 方法
    function change() {
      name.value = 'wmx2'
      age.value = 19
      job.value.type = '后端工程师'
      job.value.salary = '20k'
    }

    return {
      name,
      age,
      job,
      change
    }
  }
}
</script>

<style>

</style>
