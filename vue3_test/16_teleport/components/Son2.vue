<template>
    <div class="son">
        我是son
        <Dialog></Dialog>
    </div>
</template>
  
<script>
import Dialog from './Dialog.vue';
export default {
    name: 'Son',
    components: {
        Dialog
    },
    
}
</script>
  
<style scoped>
.son {
    background-color: pink;
    padding: 10px;
}
</style>
  