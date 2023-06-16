<template>
    <div>
      <h1>消息编号：{{ $route.params.id }}</h1>
      <h1>消息标题：{{ $route.params.title }}</h1>
    </div>
  </template>
  
  <script>
  export default {
      name: "Detail",
      components: {},
      data() {
          return {
          msg: "Hello Vue",
          }
      },
      methods: {},
      mounted() {
          console.log(this.$route)
      },
  }
  </script>
  
  <style>
  
  </style>