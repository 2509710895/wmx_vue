<template>
  <div>
    <h1>{{ msg }},学生姓名是{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现， -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子向父传递数据 v-on或@ -->
    <Student v-on:myMethods="getStudentName"></Student>
    <!-- <Student @myMethods="getStudentName"></Student> -->
    <!-- 使用ref 组件上直接绑定事件都会认为是自定义事件，需要添加 .native 修饰符 -->
    <!-- <Student ref="student" @click.native="show"></Student> -->
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
  methods: {
    // 内部应该使用了 bind 绑定 this
    getSchoolName(name) {
      console.log("学校名：" + name);
    },
    getStudentName(name) {
      console.log("学生名：" + name);
      this.studentName = name;
    }
  },
  mounted() {
    // 通过$refs获取组件实例
    console.log(this.$refs.student);
    this.$refs.student.$on("myMethods", this.getStudentName);
    // this.$refs.student.$once("myMethods", this.getStudentName); // 一次性
  }
}
</script>

<style></style>
