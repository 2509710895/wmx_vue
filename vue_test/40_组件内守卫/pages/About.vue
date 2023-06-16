<template>
  <div>
    <h1>Abount</h1>
  </div>
</template>

<script>
export default {
    name: "Abount",
    components: {},
    data() {
        return {
        msg: "Hello Vue",
        }
    },
    methods: {},
    mounted() {
        console.log("About mounted")
    },
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        console.log("About beforeRouteEnter",to.meta)
        if (to.meta?.isAuth) {
          if (localStorage.getItem('key') === 'wmx') {
            next()
          } else {
            alert('该页面需要登录才能访问')
            return
          }
        } else {
          next()
        }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log("About beforeRouteLeave")
        next()
    },

    beforeDestroy() {
        console.log("About beforeDestroy")
    }, 
}
</script>

<style>

</style>