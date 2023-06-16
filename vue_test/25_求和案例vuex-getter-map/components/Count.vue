<template>
  <div>
    <h1>当前求和为：{{ sum }},放大十倍：{{ bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">当前求和为奇数再加</button>
    <button @click="incrementAsync">异步加</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: "Category",
    props: {
        
    },
    data(){
        return {
            n:1,
            
        }
    },
    computed:{
      ...mapState(['sum']),
      ...mapGetters(['bigSum'])
    },
    methods:{
      increment(){
        // this.$store.dispatch('increment',this.n)
        this.$store.commit('INCREMENT',this.n)
      },
      decrement(){
        // this.$store.dispatch('decrement',this.n)
        this.$store.commit('DECREMENT',this.n)
      },
      incrementIfOdd(){
        // if(this.$store.state.sum % 2 !== 0){
        //   this.increment()
        // }
        this.$store.dispatch('incrementIfOdd',this.n)
      },
      incrementAsync(){
        // setTimeout(() => {
        //   this.increment()
        // }, 1000);
        this.$store.dispatch('incrementAsync',this.n)
      }
    },
    
}
</script>

<style>

</style>