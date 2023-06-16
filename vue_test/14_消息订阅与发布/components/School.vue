<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    import pubsub from "pubsub-js"
    // 组件交互相关的代码 （数据、方法等等）
    export default {
        name: "MySchool",
        props: ["getSchoolName"],
        data() {
            return {
                name: "清华大学",
                address: "北京市海淀区"
            }
        },
        mounted() {
            // this.$bus.$on("getStudentName", (data) => {
            //     console.log("学生名：" + data);
            // })
            this.pubId = pubsub.subscribe("getStudentName", (msg, data) => {
                console.log("学生名：" + data,msg);
            })
        },
        beforeDestroy() {
            // this.$bus.$off("getStudentName");
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
    /* 组件的样式 */
    .demo{
        background-color: pink;
    }
</style>
    
