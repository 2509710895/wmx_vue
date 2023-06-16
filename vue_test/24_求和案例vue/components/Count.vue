<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
export default {
    name: "Category",
    props: {
        
    },
    data(){
        return {
            n:1,
            sum:0,
        }
    },
    methods:{
      increment(){
        this.sum += Number(this.n)
      },
      decrement(){
        this.sum -= Number(this.n)
      },
      incrementIfOdd(){
        if(this.sum % 2 !== 0){
          this.increment()
        }
      },
      incrementAsync(){
        setTimeout(() => {
          this.increment()
        }, 1000);
      }
    }
}
</script>

<style>

</style>