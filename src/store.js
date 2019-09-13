import Vue from 'vue'
import Vuex from 'vuex'
import * as api from './API/Query/LoginAPI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginLoading: false,
    loginError: null,
    loginSuccess: false,
    userData: {}
  },
  mutations: {
    isLoading: state => state.loginLoading = true,
    doneLoading: state => state.loginLoading = false,
    loginExeption: (state, errorMessage) => {
      state.loginError = errorMessage,
      state.loginSuccess = false,
      state.userData = {}
    },
    loginVerified: (state, data) => {
      state.loginSuccess = true,
      state.userData = data,
      state.loginError = null
    }
  },
  actions: {
    doLogin({commit}, loginCredentials) {
      commit('isLoading')

      api.postLogin(loginCredentials)
      .then(res => res.json())
      .then(res => {
       
        if(res.user.length <= 1){
          commit('loginExeption',res.error) // has error in backend validation
        }else{
          commit('loginVerified', res) // no error in backend validation
        }
      })
      .then(() => {
        commit('doneLoading')
      })
      .catch((err) => {
        commit('loginExeption',err.getMessage())
      })
    }
  }
})
