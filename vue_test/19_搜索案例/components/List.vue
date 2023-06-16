<template>
  <div>
    <div v-show="users.length" v-for="user in users" :key="user.login">
        <img :src="user.avatar_url" alt="">
        <div>{{ user.login }}</div>
    </div>
    <h1 v-show="isFirst">欢迎使用</h1>
    <h1 v-show="isLoading">加载中</h1>
    <h1 v-show="err">{{ err }}</h1>
  </div>
</template>

<script>
export default {
    name: "List",
    components: {
        
    },
    data() {
        return {
            users: [],
            isFirst: true,
            isLoading: false,
            err: ''     
        }
    },
    methods:{
        
    },
    mounted(){
        this.$bus.$on('updateListData',data => {
            console.log('List组件接收到了',data)
            // this.searchUsers(keyWord)
            this.users = data.users
            this.isFirst = data.isFirst || false
            this.isLoading = data.isLoading
            this.err = data.err
        })
    }
}
</script>

<style>

</style>