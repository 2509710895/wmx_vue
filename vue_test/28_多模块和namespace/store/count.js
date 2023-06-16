const countOptions = {
    namespaced:true,
    actions:{
        incrementIfOdd(context,value){
            if(context.state.sum % 2){
                context.commit('INCREMENT',value)
            }
        },
        incrementAsync(context,value){
            setTimeout(() => {
                context.commit('INCREMENT',value)
            }, 1000);
        }
    },
    mutations:{
        INCREMENT(state,value){
            // console.log('mutations中的increment被调用了');
            state.sum += value
        },
        DECREMENT(state,value){
            state.sum -= value
        },
    },
    state:{
        sum:0,
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}

export default countOptions