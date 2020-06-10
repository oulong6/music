import Vue from 'vue'
import Vuex from 'vuex'
import playStore from "@/store/playStore";
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        playStore
    }
})
export default store;
