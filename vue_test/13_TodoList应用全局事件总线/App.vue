<template>
  <div>
    <!-- <MyHeader :addTodo="addTodo"></MyHeader> -->
    <MyHeader @addTodo="addTodo"></MyHeader>
    <MyList :todos="todos"></MyList>
    <!-- <MyFooter :todos="todos" :checkAll="checkAll" :clearCompleted="clearCompleted"></MyFooter> -->
    <MyFooter :todos="todos" @checkAll="checkAll" @clearCompleted="clearCompleted"></MyFooter>
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
      todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
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
  },
  watch: {
    todos: {
      handler() {
        window.localStorage.setItem('todos_key', JSON.stringify(this.todos))
      },
      deep: true
    }
  },
  mounted() {
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('checkTodo', this.checkTodo)
  },
  beforeDestroy(){
    this.$bus.$off('deleteTodo')
    this.$bus.$off('checkTodo')
  }
}
</script>

<style></style>
