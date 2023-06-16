<template>
  <div>
    <MyHeader :addTodo="addTodo"></MyHeader>
    <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
    <MyFooter :todos="todos" :checkAll="checkAll" :clearCompleted="clearCompleted"></MyFooter>
  </div>
</template>

<script>
// 引入组件
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      msg: "Hello Vue",
      todos:[
        {id:'1', title:"吃饭", completed:false},
        {id:'2', title:"睡觉", completed:false},
        {id:'3', title:"打豆豆", completed:true},
      ]
    }
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj)
    },
    checkTodo(id) {
      this.todos.forEach(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id)
      console.log(this.todos)
    },
    checkAll(completed) {
      this.todos.forEach(item => {
        item.completed = completed
      })
    },
    clearCompleted() {
      this.todos = this.todos.filter(item => !item.completed)
    }
  }
}
</script>

<style></style>
