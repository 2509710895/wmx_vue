<template>
  <Demo v-if="demoShow"></Demo>
  <br>
  <button @click="demoShow = !demoShow">切换</button>
</template>

<script>
import { ref } from 'vue'
import Demo from './components/Demo.vue';
export default {
  name: 'App',
  components: {
    Demo
  },
  setup(){
    let demoShow = ref(true)
    return {
      demoShow
    }
  }
}
</script>

<style>

</style>
