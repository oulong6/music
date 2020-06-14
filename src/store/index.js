import Vue from 'vue'
import Vuex from 'vuex'
import playStore from "@/store/playStore";
import player from '@/store/player'
import test from '@/store/test'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        playStore,
        player,
        test
    }
})
export default store;
