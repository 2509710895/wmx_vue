<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" :appear="true">
            <h1 v-show="isShow">我是学生</h1>
        </transition>
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
    /* 进入的起点,离开的终点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: all 1s linear;
    }
    /* 进入的终点 ,离开的起点*/
    .hello-enter-to,.hello-leave{
        transform: translateX(0px);
    }

    
</style>

</style>