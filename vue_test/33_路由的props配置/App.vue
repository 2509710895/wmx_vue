<template>
  <div>
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
    
  },
  
}
</script>

<style></style>
