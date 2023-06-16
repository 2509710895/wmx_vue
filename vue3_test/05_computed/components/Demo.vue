<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName">
    <br>
    名：<input type="text" v-model="person.lastName">
    <br>
    全名：{{ person.fullName }}
</template>
  
<script>
import { computed, reactive } from 'vue'
export default {
    name: 'Demo',
    setup(props, context) {
        
        let person = reactive({
            firstName: '张',
            lastName: '三',
        })
        // 计算属性简写
        // person.fullName = computed(() => {
        //     return person.firstName + person.lastName
        // })
        // 完整写法
        person.fullName = computed({
            get() {
                return person.firstName + '-' + person.lastName
            },
            set(val) {
                let arr = val.split('')
                person.firstName = arr[0]
                person.lastName = arr[1]
            }
        })

        return {
            person,
        }
    }
}
</script>
  
<style></style>
  