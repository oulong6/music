const playerStore = {
    namespaced: true,
    state: {
        isShow: false,
        isPlay: false,
    },
    getters: {
        isShow(state){
            return state.isShow
        }
    },
    mutations: {
        triggerShow(state){
            state.isShow = !state.isShow
        },
        ChangePlay(state,isPlay){
            state.isPlay = isPlay
        }
    },
    actions: {
        triggerShow(context) {
            context.commit('triggerShow')
        },
        ChangePlay(context,isPlay){
           context.commit('ChangePlay',isPlay)
        }
    }
}
export default playerStore
