<template>
  <li>
    <input type="checkbox" :checked="data.completed" @change="handleClick(data.id)">
    <!-- <input type="checkbox" v-model="data.completed"> 双向数据绑定 -->
    <span v-show="!data.isEditing">{{ data.title }}</span>
    <input 
        v-show="data.isEditing" 
        type="text" 
        :value="data.title" 
        @blur="handleBlur(data,$event)"
        ref="editInput"
    >
    <button @click="handleEdit(data)">编辑</button>
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
    },
    methods: {
        handleClick(id) {
            console.log(id)
            // this.checkTodo && this.checkTodo(id)
            this.$bus.$emit('checkTodo', id)
        },
        handleDelete(id) {
            if(confirm("确定删除吗？")) {
                // console.log(id)
                // this.deleteTodo && this.deleteTodo(id)
                this.$bus.$emit('deleteTodo', id)
            }
        },
        handleEdit(todo){
            console.log(todo);
            todo.isEditing = !todo.isEditing;
            this.$nextTick(() => {
                this.$refs.editInput.focus()
            })
        },
        handleBlur(todo,e){
            todo.isEditing = !todo.isEditing;
            // this.editTodo && this.editTodo()
            if(e.target.value.trim().length === 0) {
                alert("输入不能为空")
                return
            }
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
        }
    },
    mounted() {
        console.log(this.data)
    }
}
</script>

<style>

</style>