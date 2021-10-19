import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import song from './modules/song'
export default new Vuex.Store({
    modules:{
        song,
    }
});