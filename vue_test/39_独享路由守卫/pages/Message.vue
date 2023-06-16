<template>
    <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 跳转路由并携带 params 参数，to字符串写法 -->
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
            <!-- 跳转路由并携带 params 参数，to的对象写法 -->
            <router-link :to="{
                name:'详情',// 使用 params 时，to 的对象写法必须使用 name 属性
                query:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{ m.title }}
            </router-link>
            <button @click="pushShow(m)">push查看</button>
            <button @click="replaceShow(m)">replace查看</button>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
      name: "Message",
      components: {},
      data() {
          return {
            messageList:[
              {id:'001', title:'消息001'},
              {id:'002', title:'消息002'},
              {id:'003', title:'消息003'},
            ]
          }
      },
      methods: {
        pushShow(msg){
          this.$router.push({
            name:'详情',
            query:{
              id:msg.id,
              title:msg.title
            }
          })
        },
        replaceShow(msg){
          this.$router.replace({
            name:'详情',
            query:{
              id:msg.id,
              title:msg.title
            }
          })
        }
      }, 
  }
  </script>
  
  <style>
  
  </style>