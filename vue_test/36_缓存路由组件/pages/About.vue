<template>
  <div>
    <h1>Abount</h1>
  </div>
</template>

<script>
export default {
    name: "Abount",
    components: {},
    data() {
        return {
        msg: "Hello Vue",
        }
    },
    methods: {},
    mounted() {
        console.log("About mounted")
    },
    beforeDestroy() {
        console.log("About beforeDestroy")
    }, 
}
</script>

<style>

</style>