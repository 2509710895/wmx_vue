<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            :appear="true"
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutDown"
        >
            <h1 v-show="isShow" key="1">我是学生</h1>
            <h1 v-show="isShow" key="2">我是老师</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name:"Test",
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style lang="css" scoped>
    h1{
        background-color: red;
    }
    
</style>

</style>