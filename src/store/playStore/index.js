const playStore = {
    namespaced: true,
    state: {
        songIndex: 0,
        songId: 0,
        songStore: [],
        historySong: [],
        song: {}
    },
    getters: {
        getSongId: function (state) {
            return state.songId
        },
        getSongIndex : function (state) {
            return state.songIndex
        },
        getSongsLength : function (state) {
            return state.songStore.length
        },
        getSongByIndex: function (state) {
          return function (index) {
                return state.songStore[index]
          }
        },
    },
    mutations: {
        updateSongStore: function (state,songs) {
            state.songStore = songs;
        },
        setIndex: function(state,index){
          state.songIndex = index
        },
        setSongIndex: function (state,action) {
            if (action === 'next'){
                if (state.songIndex === state.songStore.length-1){
                    state.songIndex = 0;
                }else {
                    state.songIndex += 1;
                }

            }
            if (action === 'pre') {
               if (state.songIndex === 0){
                   state.songIndex = state.songStore.length -1;
               }else {
                   state.songIndex -= 1;
               }
            }
            if (action === 'start'){
                state.songIndex = 0;
            }
            console.log(state.songIndex)
            state.song =  state.songStore[state.songIndex]
            state.songId = state.songStore[state.songIndex].id
        },
        updateSongId: function (state,id) {
            state.songId = id;
        }
    },
    actions: {
        updateSongStore(context,songs){
            context.commit('updateSongStore',songs.songs);
            if (songs.action === 'current') {
                context.commit('setIndex',songs.index)
            }
            context.commit('setSongIndex',songs.action)

        },
        nextSong: function (context) {
            context.commit('setSongIndex','next')
        },
        preSong: function (context) {
           context.commit('setSongIndex','pre')
        },
        updateSongId(context,id){
            context.commit('updateSongId',id)
        },
    }
}
export default playStore;
