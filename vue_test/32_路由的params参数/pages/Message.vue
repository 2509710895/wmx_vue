<template>
    <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 跳转路由并携带 params 参数，to字符串写法 -->
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
            <!-- 跳转路由并携带 params 参数，to的对象写法 -->
            <router-link :to="{
                name:'详情',// 使用 params 时，to 的对象写法必须使用 name 属性
                params:{
                    id:m.id,
                    title:m.title
                }
            }">
                {{ m.title }}
            </router-link>
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
      methods: {}, 
  }
  </script>
  
  <style>
  
  </style>