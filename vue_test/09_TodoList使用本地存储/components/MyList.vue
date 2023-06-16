<template>
  <ul>
    <MyItem
        :checkTodo="checkTodo" 
        :deleteTodo="deleteTodo"
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
        },
        checkTodo: {
            type: Function,
            required: true
        },
        deleteTodo: {
            type: Function,
            required: true
        }
    },
}
</script>

<style>

</style>