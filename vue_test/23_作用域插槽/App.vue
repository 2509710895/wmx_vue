<template>
  <div>
    <Category title="电影">
      <template slot="center" scope="{films}">
        <ul>
          <li v-for="item in films" :key="item">
              {{ item }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="电影">
      <template slot="center" scope="{films}">
        <ol>
          <li v-for="item in films" :key="item">
              {{ item }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="电影">
        <template
          slot="center"
          slot-scope="{films}"
        >
          <h4 v-for="item in films" :key="item">
            {{ item }}
          </h4>
        </template>
    </Category>

  </div>
</template>

<script>
// 引入组件
import axios from 'axios'
import Category from './components/Category.vue';
export default {
  name: "App",
  components: {
    Category
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
