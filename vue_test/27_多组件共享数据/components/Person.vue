<template>
    <div>
        <h3>人员列表</h3>
        <h3>count:{{ sum }}</h3>
        <input v-model="name" type="text" placeholder="请输入名字">
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Person",
    computed:{
        ...mapState(["personList","sum"])
    },
    data(){
        return {
            name:''
        }
    },
    methods:{
        add(){
            this.$store.commit('ADD_PERSON',{id:Date.now().toString(),name:this.name})
            this.name = ''
        }
    }
}
</script>

<style>

</style>