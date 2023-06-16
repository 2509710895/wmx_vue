<template>
    <div>
      <h1>消息编号：{{ $route.query.id }}</h1>
      <h1>消息标题：{{ $route.query.title }}</h1>
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