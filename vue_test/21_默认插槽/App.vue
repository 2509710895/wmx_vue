<template>
  <div>
    <Category :listData="foods" title="食物">
      <h4>食物</h4>
    </Category>
    <Category :listData="films" title="电影">
      <ul>
        <li v-for="item in films" :key="item">
            {{ item }}
        </li>
      </ul>
    </Category>
    <Category :listData="books" title="书籍">
      <div>书籍</div>
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
      foods:[
        "龙虾",
        "鱼",
        "螃蟹",
      ],
      films:[
        "大话西游",
        "唐伯虎点秋香",
        "喜剧之王",
      ],
      books:[
        "西游记",
        "三国演义",
        "水浒传",
      ],
    }
  },
  methods:{
    
  }
}
</script>

<style></style>
