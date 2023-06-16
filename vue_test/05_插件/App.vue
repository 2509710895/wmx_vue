<template>
  <div>
    <School ref="school"></School>
    <Student></Student>
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
      msg: "Hello Vue"
    }
  },
  methods: {
  }
}
</script>

<style></style>
