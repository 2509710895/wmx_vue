<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="log">点我提示学校名</button>
    </div>
</template>

<script>
    // 组件交互相关的代码 （数据、方法等等）
    export default {
        name: "MySchool",
        data() {
            return {
                name: "清华大学",
                address: "北京市海淀区"
            }
        },
        methods: {
            log() {
                alert(this.name)
            },
            showName() {
                alert(this.name)
            }
        }
    }
</script>

<style scoped>
    /* 组件的样式 */
    .demo{
        background-color: pink;
    }
</style>
    
