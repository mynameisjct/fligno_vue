export default {
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
    },
    fetchProfiles: (state,data) => {
      state.profileData = data,
      state.profileError = null
    },
    fetchProfilesError: (state,message) => {
      state.profileData = {},
      state.profileError = message,
      state.profileByEmail = {}
    },
    fetchProfileByEMail: (state, data) => {
      state.profileByEmail = data,
      state.profileError = null
    },
    resetProfileByEmail: (state,data) => {
      state.profileByEmail = data
    },
    validateEmail: (state,data) => {
      state.validation = data
    },
    saveProfile: (state,data) => {
      state.error = data
    },
    search: (state,data) => {
      state.searchResults = data
    },
    reports: (state,data) => {
      state.reports = data
    },
    resetpassword: (state,data) => {
      state.mailMessage = data
    }
}