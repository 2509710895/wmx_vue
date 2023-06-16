<template>
    <div>
      <h1>News</h1>
      <ul>
        <li>
          <router-link to="/news/detail/1">News 1</router-link>
          <input type="text">
        </li>
        <li>
          <router-link to="/news/detail/2">News 2</router-link>
          <input type="text">
        </li>
        <li>
          <router-link to="/news/detail/3">News 3</router-link>
          <input type="text">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
      name: "News",
      components: {},
      data() {
          return {
          msg: "Hello Vue",
          }
      },
      methods: {}, 
      beforeDestroy() {
          console.log("News beforeDestroy")
      },
  }
  </script>
  
  <style>
  
  </style>