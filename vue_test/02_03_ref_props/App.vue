<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上一个DOM</button>
    <School ref="school"></School>
    <Student 
      name="李四"
      sex="男"
      :age="19"
    ></Student>
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
    showDOM() {
      console.log(this.$refs.title) // 获取h1标签
      console.log(this.$refs.btn) // 获取button标签
      console.log(this.$refs.school) // 获取School组件对象
    }
  }
}
</script>

<style></style>
