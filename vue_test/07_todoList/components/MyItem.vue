<template>
  <li>
    <input type="checkbox" :checked="data.completed" @change="handleClick(data.id)">
    <!-- <input type="checkbox" v-model="data.completed"> 双向数据绑定 -->
    <span>{{ data.title }}</span>
    <button @click="handleDelete(data.id)">删除</button>
  </li>
</template>

<script>
export default {
    name: "MyItem",
    props: {
        data: {
            type: Object,
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
    methods: {
        handleClick(id) {
            console.log(id)
            this.checkTodo && this.checkTodo(id)
        },
        handleDelete(id) {
            if(confirm("确定删除吗？")) {
                // console.log(id)
                this.deleteTodo && this.deleteTodo(id)
            }
        }
    },
    mounted() {
        console.log(this.data)
    }
}
</script>

<style>

</style>