<template>
  <div>
    <input type="text" placeholder="输入" v-model="keyWord"/>
    <button @click="search">搜索</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Search",
    components: {
        
    },
    data() {
        return {
            keyWord: ''      
        }
    },
    methods:{
        search(){
            // this.$emit('search',this.keyWord)
            console.log(this)
            this.$bus.$emit('updateListData',{
                isFirst: false,
                isLoading: true,
                err:'',
                users: []
            })
            this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('成功了',response.data)
                    // this.$bus.$emit('search',response.data.items)
                    this.$bus.$emit('updateListData',{
                        isFirst: false,
                        isLoading: false,
                        err:'',
                        users: response.data.items
                    })
                    // this.users = response.data.items
                },
                error => {
                    console.log('失败了',error.message)
                    this.$bus.$emit('updateListData',{
                        isFirst: false,
                        isLoading: false,
                        err:error.message,
                        users: []
                    })
                }
            )
        }
    }
}
</script>

<style>

</style>