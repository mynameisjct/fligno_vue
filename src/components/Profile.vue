<template>
    <div>
        <span v-if="profileData <= 0" >
            <h1>No Data to Load... </h1>
        </span>
        <span v-else>
            <ProfileForm 
                :lastname="profileData.lastname"
                :firstname="profileData.firstname"
                :middlename="profileData.middlename"
                :description="profileData.description"
                :userid="profileData.userid"
            />
        </span>
    </div>
</template>

<script>
import ProfileForm from './forms/ProfileForm.vue'
import {mapState, mapActions} from 'vuex'

export default {
    name: 'profile',
    components: {
        ProfileForm
    },
    data(){
        return{
            profileResults: {}
        }
    },
    methods: {
        ...mapActions([
            'getProfileThruEmail'
        ])
    },
    mounted(){
        this.getProfileThruEmail(this.$route.params.email)
    },
    computed: {
        ...mapState([
            'profileByEmail'
        ]),
        profileData(){
            if(Object.entries(this.profileByEmail).length === 0){
                return []
            }else{
                return this.profileByEmail // objects of profile
            }
        }
    },
    // watch: {
    //     profileByEmail(newValue, oldValue){
    //         console.log('new value: ', newValue, 'old value: ', oldValue)
    //         if(Object.entries(newValue).length === 0){
    //             this.profileResults = []
    //         }else{
    //             this.profileResults = newValue // objects of profile
    //         }
    //     }
    // }
}
</script>