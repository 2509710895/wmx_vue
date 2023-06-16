<template>
  <div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="testGo">测试一下go</button>
    <router-link :to="{name:'关于'}">去About页面</router-link>
    <router-link to="/home">去Home页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入组件

export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      msg: "Hello Vue",
    }
  },
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    testGo(){
      this.$router.go(3) // 后退或前进 n 步
    }
  },
  
}
</script>

<style></style>
