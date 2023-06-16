<template>
  <h1>一个人的信息</h1>
  <p>姓名：{{name}}</p>
  <p>年龄：{{age}}</p>
  <button @click="sayHi">点击</button>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  setup() {
    // 数据
    let name = 'wmx'
    let age = 18

    // 方法
    function sayHi() {
      console.log('hi')
    }

    return {
      name,
      age,
      sayHi
    }
  }
}
</script>

<style>

</style>
