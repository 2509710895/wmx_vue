<template>
  <div>
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，等待组件使用者使用 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Category",
    props: {
        listData:{
            type:Array,
            required:true
        },
        title:{
            type:String,
            required:true
        }
    },
}
</script>

<style>

</style>