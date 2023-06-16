<template>
    <button @click="isShow=true">点我弹窗</button>
    <Teleport to="body">
        <div v-if="isShow" class="mark">
            <div class="dialog">
            我是dialog
            <p>一些内容</p>
            <p>一些内容</p>
            <p>一些内容</p>
            <button @click="isShow=false">关闭弹窗</button>
        </div>
        </div>
    </Teleport>
    <!-- <div v-if="isShow" class="dialog">
        我是dialog
        <p>一些内容</p>
        <p>一些内容</p>
        <p>一些内容</p>
        <button @click="isShow=false">关闭弹窗</button>
    </div> -->
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Dialog',
    components: {

    },
    setup() {
        let isShow = ref(false)

        return {     
            isShow
        }
    }
}

</script>

<style scoped>

    .mark{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dialog {
        width: 300px;
        height: 300px;
        background-color: green;
        padding: 10px;
    }
</style>