<template>
  <ul>
    <MyItem
        :data="item" 
        v-for="item in todos" 
        :key="item.id"
    ></MyItem>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue"
export default {
    name: "MyList",
    components: {
        MyItem
    },
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
}
</script>

<style>

</style>