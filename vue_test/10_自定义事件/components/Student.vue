<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2 class="name">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ myAge }}</h2>
        <button @click="add">点我年龄+1</button>
        <button @click="sendStudentName">传学生名</button>
        <button @click="unbind">解绑事件</button>
    </div>
</template>

<script>
    // 组件交互相关的代码 （数据、方法等等）
    // 解析时，先将 props 中的数据解析出来，再解析 data 中的数据
    export default {
        name: "MyStudent",
        data() {
            return {
                msg: "我是学生",
                myAge:this.age,
                name:"wmx",
                sex:"男",
                myAge:18,
            }
        },
        methods: {
            add() {
                this.myAge++
            },
            sendStudentName() {
                this.$emit("myMethods", this.name)
            },
            unbind() {
                this.$off("myMethods", this.getStudentName) // 解绑一个事件
                this.$off(["myMethods", "myMethods2"]) // 解绑多个事件
                this.$off() // 解绑所有事件
            },
            death(){
                this.$destroy() // 销毁组件后，组件中的数据不会被销毁，但是组件中的自定义事件会被销毁
                // 原生事件不会被销毁
            }
        },
    }
</script>

<style scoped lang="less">
    .demo {
        background-color: #f40;
        .name{
            color: #fff;
        }
    }
</style>

    
