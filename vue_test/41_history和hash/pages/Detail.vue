<template>
    <div>
      <h1>消息编号：{{ id }}</h1>
      <h1>消息标题：{{ title }}</h1>
    </div>
  </template>
  
  <script>
  export default {
      name: "Detail",
      components: {},
      props:['id','title'],
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