const test = {
    namespaced: true,
    state: ()=> {
        return {
            test: 'test'
        }
    },
    mutations: {
        test(state,arg){
            state.test = arg
        }
    }
}
export  default  test
