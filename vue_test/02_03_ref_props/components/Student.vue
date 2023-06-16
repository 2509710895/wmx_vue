<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ myAge }}</h2>
        <button @click="add">点我年龄+1</button>
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
            }
        },
        methods: {
            add() {
                this.myAge++
            }
        },
        // props:['name','age','sex'],// 简单接受
        // 接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String,
        // },
        props:{
            name:{
                type:String,
                required:true,
            },
            age:{
                type:Number,
                default:18,
            },
            sex:{
                type:String,
                required:true,
            }, 
        },
    }
</script>
    
