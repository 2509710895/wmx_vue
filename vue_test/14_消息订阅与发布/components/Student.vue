<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2 class="name">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ myAge }}</h2>
        <button @click="sendStudentName">发生姓名</button>
    </div>
</template>

<script>
    import pubsub from "pubsub-js"
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
        methods:{
            sendStudentName() {
                pubsub.publish("getStudentName", this.name)
                // this.$bus.$emit("getStudentName", this.name)
            },
        }
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

    
