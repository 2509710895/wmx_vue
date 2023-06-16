const personOptions = {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                context.commit('ADD_PERSON',res[0])
            })
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'},
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}

export default personOptions