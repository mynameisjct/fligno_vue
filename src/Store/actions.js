import * as loginAPI from '../API/Query/LoginAPI'
import * as profileAPI from '../API/Query/ProfileAPI'
import * as validationAPI from '../API/Query/ValidationAPI'
import * as emailAPI from '../API/Query/EmailAPI' 

export default {

  /* LOGIN ACTION*/
    doLogin({commit}, loginCredentials) {
        commit('isLoading')
  
        loginAPI.postLogin(loginCredentials)
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
      },

    /* PROFILE ACTION*/
      getProfiles({commit},payload){
        commit('isLoading')
  
        profileAPI.getProfileData(payload)
        .then(res => res.json())
        .then(res => {
          
          commit('fetchProfiles',res)
        })
        .then(() =>{
          commit('doneLoading')
        })
        .catch((err) =>{
          console.log(err.getMessage())
          commit('fetchProfilesError',err.getMessage())
        })
      },

      getProfileThruEmail({commit},payload){
        commit('isLoading')

        profileAPI.getProfileOnEmail(payload)
        .then(res => res.json())
        .then(res => {
          console.log('fetching profiles by email')
          commit('fetchProfileByEMail', res)
        })
        .then(() => {
          commit('doneLoading')
        })
        .catch((ex) =>{
          commit('fetchProfilesError', ex.getMessage())
        })
      },

      resetGetProfileByEmail({commit}){
        commit('resetProfileByEmail', {})
      },

      updateProfile({commit},payload){
        commit('isLoading')

        profileAPI.updateProfile(payload)
        .then(res => res.json())
        .then(res => {
          console.log('updated')
        })
        .then(() => {
          commit('doneLoading')
        })
        .catch((ex) => {
          commit('fetchProfilesError', ex.getMessage())
        })
      },

      saveProfile({commit}, payload){
        commit('isLoading')

        profileAPI.saveProfile(payload)
        .then(res => res.json())
        .then(res => {
          commit('saveProfile',null) //edit backend if decided to add error message feature using res.error
        })
        .then(() => {
          commit('doneLoading')
        })
        .catch((ex) =>{
        })
      },

      searchProfile({commit},payload){
        commit('isLoading')

        profileAPI.searchProfile({},payload)
        .then(res => res.json())
        .then(res => {
          commit('search',res)
        })
        .then(() => {
          commit('doneLoading')
        })
        .catch((ex) => {

        })
      },

      searchReset({commit}){
        commit('search',[])
      },

      deleteProfile({commit},payload){
        commit('isLoading')

        profileAPI.deleteProfile(payload)
        .then(res => res.json())
        .then(res => {
          // res returning res.message and res.error
          // commit delete action
        })
        .then(() => {
          commit('doneLoading')
        })
        .catch(() => {})
      },

      getYearlyReport({commit},payload){
        commit('isLoading')

        profileAPI.getYearlyReport(payload)
        .then(res => res.json())
        .then(res => {
          commit('reports',res)
        })
        .then(() => {
          commit('doneLoading')
        })
        .catch((ex) => {})
      },

      restYearlyReport({commit}){
        commit('reports',{})
      },

      /** VALIDATION */

      emailValidation({commit}, payload){
        commit('isLoading')

        validationAPI.validateEmail(payload)
        .then(res => res.json())
        .then(res => {
          // console.log('validation' ,res.validation)
          commit('validateEmail', res.validation)
        })
        .then(() => {
          commit('doneLoading')
        })
        .catch((ex) => {
          console.log('error')
        })
      },

      revertDefault({commit}){
        commit('validateEmail', true)
      },

      /** EMAIL SENDING */

      resetPassword({commit}, payload){
        commit('isLoading')

        emailAPI.doResetPassword(payload)
        .then(res => res.json())
        .then(res => {
          commit('resetpassword',res.message)
        })
        .then(() => {
          commit('doneLoading')
        })
        .catch((ex) => {})
      }
}