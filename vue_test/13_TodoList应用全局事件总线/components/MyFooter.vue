<template>
    <div v-show="total">
        <div>
            <!-- <input type="checkbox" :checked="isAll" @change="handleAll"/> -->
            <input type="checkbox" v-model="isAll"/>
        </div>
        <span>
            <span>已完成{{ completedCount }}</span> / 全部 {{ total }}
        </span>
        <button @click="handleClear">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    props: {
        todos: {
            type: Array,
            required: true
        },
        // checkAll: {
        //     type: Function,
        //     required: true
        // },
        // clearCompleted: {
        //     type: Function,
        //     required: true
        // }
    },
    computed: {
        total() {
            return this.todos.length
        },
        completedCount() {
            return this.todos.filter(item => item.completed).length
        },
        isAll:{
            get() {
                return this.total === this.completedCount && this.total > 0
            },
            set(val) {
                console.log(val)
                // this.checkAll && this.checkAll(val)
                this.$emit('checkAll', val)
            }
        }
    },
    methods: {
        handleAll() {
            console.log(this.isAll,this);
            // this.checkAll && this.checkAll(!this.isAll)
            this.$emit('checkAll', !this.isAll)
        },
        handleClear() {
            if(confirm("确定清除已完成任务吗？")) {
                // this.clearCompleted && this.clearCompleted()
                this.$emit('clearCompleted')
            }
        }
    }
}
</script>

<style>

</style>