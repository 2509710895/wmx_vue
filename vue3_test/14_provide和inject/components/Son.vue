<template>
    <div class="son">
        我是son,{{ brand }}-{{ price }}
    </div>
</template>
  
<script>
import { inject } from 'vue'
export default {
    name: 'Son',
    components: {

    },
    setup() {

        let car = inject('car')

        let { brand, price } = car

        return {     
            brand,
            price
        }
    }
}
</script>
  
<style scoped>
.son {
    background-color: pink;
    padding: 10px;
}
</style>
  