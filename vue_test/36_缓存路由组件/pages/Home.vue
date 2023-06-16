<template>
    <div>
      <h1>Home</h1>
      <router-link to="/home/news">去Home页面下的News</router-link>
      <router-link to="/home/message">去Home页面下的Message</router-link>
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </template>
  
  <script>
  export default {
      name: "Home",
      components: {},
      data() {
          return {
          msg: "Hello Vue",
          }
      },
      methods: {},
      mounted() {
          console.log("Home mounted")
      },
      beforeDestroy() {
          console.log("Home beforeDestroy")
      },
  }
  </script>
  
  <style>
  
  </style>