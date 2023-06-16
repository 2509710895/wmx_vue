<template>
  <div>
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，等待组件使用者使用 -->
    <slot name="center" :films="films"></slot>
  </div>
</template>

<script>
export default {
    name: "Category",
    props: {
        title:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            films:[
        "大话西游",
        "唐伯虎点秋香",
        "喜剧之王",
      ],
        }
    },
}
</script>

<style>

</style>