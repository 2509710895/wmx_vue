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

    .hello-enter-active{
        animation: identifier 1s linear;
    }

    .hello-leave-active{
        animation: identifier 1s linear reverse;
    }

    @keyframes identifier {
        
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
        
    }
</style>

</style>