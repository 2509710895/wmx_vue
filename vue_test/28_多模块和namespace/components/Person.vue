<template>
    <div>
        <h3>人员列表</h3>
        <h3>count:{{ sum }}</h3>
        <input v-model="name" type="text" placeholder="请输入名字">
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <h4>列表中第一个人的名字：{{ firstPersonName }}</h4>
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
        // ...mapState(["personList","sum"])
        // ...mapState('personAbout',['personList']),
        // ...mapState('countAbout',['sum'])
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    data(){
        return {
            name:''
        }
    },
    methods:{
        add(){
            this.$store.commit('personAbout/ADD_PERSON',{id:Date.now().toString(),name:this.name})
            this.name = ''
        },
        addWang(){
            this.$store.dispatch('personAbout/addPersonWang',{id:Date.now().toString(),name:this.name})
        }
    }
}
</script>

<style>

</style>