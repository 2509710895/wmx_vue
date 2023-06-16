<template>
    <div class="child">
        我是child
        <Son></Son>
    </div>
</template>
  
<script>
import Son from './Son2.vue';
export default {
    name: 'Child',
    components: {
        Son
    },
    setup() {


        return {     

        }
    }
}
</script>
  
<style scoped>
.child {
    background-color: hotpink;
    padding: 10px;
}
</style>
  