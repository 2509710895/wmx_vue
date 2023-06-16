<template>
  <div>
    <Search />
    <List />

  </div>
</template>

<script>
// 引入组件
import axios from 'axios'
import List from './components/List.vue'
import Search from './components/Search.vue'
export default {
  name: "App",
  components: {
    List,
    Search
  },
  data() {
    return {
      msg: "Hello Vue",
      
    }
  },
  methods:{
    
  }
}
</script>

<style></style>
