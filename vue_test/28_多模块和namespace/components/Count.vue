<template>
  <div>
    <h1>当前求和为：{{ sum }},放大十倍：{{ bigSum }}</h1>
    <h3>人数：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementIfOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementAsync(n)">异步加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
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
      // ...mapState(['sum','personList']),
      ...mapState('countAbout',['sum']),
      ...mapState('personAbout',['personList']),
      ...mapGetters('countAbout',['bigSum'])
    },
    methods:{
      // increment(){
      //   this.$store.commit('INCREMENT',this.n)
      // },
      // decrement(){
      //   this.$store.commit('DECREMENT',this.n)
      // },
      ...mapMutations('countAbout',{
        increment:'INCREMENT',
        decrement:'DECREMENT'
      }),
      // ...mapMutations(['INCREMENT','DECREMENT']),

      // incrementIfOdd(){
      //   this.$store.dispatch('incrementIfOdd',this.n)
      // },
      // incrementAsync(){
      //   this.$store.dispatch('incrementAsync',this.n)
      // }

      // ...mapActions({
      //   incrementIfOdd:'incrementIfOdd',
      //   incrementAsync:'incrementAsync'
      // }),
      ...mapActions('countAbout',['incrementIfOdd','incrementAsync'])
    },
    
}
</script>

<style>

</style>