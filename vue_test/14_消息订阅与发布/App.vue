<template>
  <div>
    <h1>{{ msg }},学生姓名是{{ studentName }}</h1>
    <School />
    <Student />
  </div>
</template>

<script>
// 引入组件
import School from "./components/School"
import Student from "./components/Student"
export default {
  name: "App",
  components: {
    School,
    Student
  },
  data() {
    return {
      msg: "Hello Vue",
      studentName: ""
    }
  },
}
</script>

<style></style>
