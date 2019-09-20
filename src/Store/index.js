import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({
        userData: state.userData // retain state for userData
    })
})

const getters = {
    getUserLogin(state) {
        return state.userData
    }
}

export default new Vuex.Store({state,mutations,actions,plugins: [vuexLocal.plugin],getters})
