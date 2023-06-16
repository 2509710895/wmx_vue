<template>
  <div>
    <Test />
    <Test2 />
    <Test3 />
    <Test4 />
  </div>
</template>

<script>
// 引入组件
import 'animate.css'
import Test from "./components/Test"
import Test2 from "./components/Test2"
import Test3 from './components/Test3'
import Test4 from './components/Test4'
export default {
  name: "App",
  components: {
    Test,
    Test2,
    Test3,
    Test4
  },
  data() {
    return {
      msg: "Hello Vue",
      todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  
    
    
}
</script>

<style></style>
