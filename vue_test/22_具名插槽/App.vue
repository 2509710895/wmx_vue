<template>
  <div>
    <Category :listData="foods" title="食物">
      <h4 slot="center">食物</h4>
      <a slot="footer" href="">更多食物</a>
    </Category>
    <Category :listData="films" title="电影">
      <ul slot="center">
        <li v-for="item in films" :key="item">
            {{ item }}
        </li>
      </ul>
      <template slot="footer">
        <a href="">喜剧电影</a>
        <a href="">爱情电影</a>
      </template>
    </Category>
    <Category :listData="books" title="书籍">
      <div slot="center">书籍</div>
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
