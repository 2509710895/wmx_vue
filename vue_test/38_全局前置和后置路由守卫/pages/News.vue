<template>
    <div>
      <h1>News</h1>
      <ul>
        <li :style="`opacity:${opacity}`">
            欢迎学习Vue
        </li>
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
            opacity: 1,
          }
      },
      methods: {}, 
    //   mounted() {
    //       console.log("News mounted")
    //       this.timer = setInterval(() => {
    //           this.opacity -= 0.1
    //           if (this.opacity <= 0) {
    //               this.opacity = 1
    //           }
    //       }, 100)
    //   },
    //   beforeDestroy() {
    //       console.log("News beforeDestroy")
    //         clearInterval(this.timer)
    //   },
      activated(){
        this.timer = setInterval(() => {
            console.log("@");
            this.opacity -= 0.1
            if (this.opacity <= 0) {
                this.opacity = 1
            }
        }, 100)
      },
      deactivated() {
        clearInterval(this.timer)
      },
  }
  </script>
  
  <style>
  
  </style>