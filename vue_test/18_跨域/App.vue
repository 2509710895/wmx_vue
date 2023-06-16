<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
// 引入组件
import axios from 'axios'
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      msg: "Hello Vue",
      todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  methods:{
    getStudents(){
      // jsonp 只能解决GET请求跨域问题
      axios.get('http://localhost:3000/api1/students').then(
        response => {
          console.log('成功了',response.data)
        },
        error => {
          console.log('失败了',error.message)
        }
      )
    }
  }
}
</script>

<style></style>
