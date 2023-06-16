<template>
  <div class="todo-header">
    <input type="text" placeholder="shuru" @keyup.enter="add" v-model="value">
  </div>
</template>

<script>
export default {
    name: "MyHeader",
    // props: {
    //     addTodo: {
    //         type: Function,
    //         required: true
    //     }
    // },
    data() {
        return {
            value: ""
        }
    },
    methods: {
        add() {
            if (this.value.trim().length === 0) {
                return
            }
            const obj = {
                id: `${Date.now()}`,
                title: this.value,
                completed: false
            }
            // console.log(this.value)
            // this.addTodo && this.addTodo(obj)
            this.$emit('addTodo', obj)
            this.value = ""
        }
    }
}
</script>

<style>

</style>