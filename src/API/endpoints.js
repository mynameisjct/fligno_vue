// LOGIN ENDPOINTS

export const login = {
    get: function(){
        return(
            'login'
        )
    },
    post: function(){
        return(
            'newlogin'
        )
    },
    test: function(){
        return(
            'newlogin'
        );
    }
}

// REGISTER ENDPOINTS
export const register = {
    save: function() {
        return(
            'register'
        )
    },
    uploadProfilePicture: function() {
        return(
            'profile/picture_upload'
        )
    },
    uploadCoverPhoto: function() {
        return(
            'profile/cover_upload'
        )
    }
}

// picture endpoints 
export const picture = {
    cover: function(params) {
        return(
            'get/cover_base_path/' + params
        )
    },
    profile: function(params) {
        return(
            'get/profile_base_path/' + params
        )
    }
}

//server-side validation
export const validation = {
    email: function(){
        return(
            'validate/email'
        )
    }
}

// get all registered profiles
export const profiles = {
    all: function(){
        return(
            'profile/all'
        )
    },
    delete: function(){
        return(
            'delete/profile'
        )
    },
    update: function(){
        return (
            'profile/update'
        )
    },
    byEmail: function(payload){
        return(
            'get/profile/' + payload // where payload is email
        )
    },
    save: function() {
        return(
            'profile/save'
        )
    },
    search: function(payload){
        return(
            'profile/search/' + payload.limit + '/' + payload.name
        )
    },
    reports: function(payload){
        return(
            'profile/reports/monthly/' + payload // where payload is year
        )
    }
}

export const email = {
    resetpassword: function(payload) {
        return(
            'resetpassword/' + payload
        )
    }
}