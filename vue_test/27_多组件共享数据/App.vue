<template>
  <div>
    <Count />
    <Person />
  </div>
</template>

<script>
// 引入组件
import Count from './components/Count.vue'
import Person from './components/Person.vue'
export default {
  name: "App",
  components: {
    Count,
    Person
  },
  data() {
    return {
      msg: "Hello Vue",
    }
  },
  methods:{
    
  },
  mounted(){
    console.log(this)
  }
}
</script>

<style></style>
