<template>
    <div>
        <b-form v-if="show" @submit.prevent="onSubmit">
            <b-form-group label="Lastname" label-for="input-lastname">
                <b-form-input id="input-lastname" type="text" v-model="profileData.p_lastname" required />
            </b-form-group>
            <b-form-group label="Firstname" label-for="input-firstname">
                <b-form-input id="input-firstname" type="text" v-model="profileData.p_firstname" required />
            </b-form-group>
            <b-form-group label="Middlename" label-for="input-middlename">
                <b-form-input id="input-middlename" type="text" v-model="profileData.p_middlename" required />
            </b-form-group>
            <b-form-group label="More About Me" label-for="input-about-me">
                <b-form-textarea id="input-about-me" v-model="profileData.p_description" required />
            </b-form-group>
            <b-button type="submit" variant="primary">Update</b-button> &nbsp;
            <b-button @click="onCancel" variant="danger">Cancel</b-button>
        </b-form>
    </div>
</template>
<script>

import {mapActions} from 'vuex'

export default {
    name: 'profileForm',
    data(){
        return{
            show: true,
            profileData: {
                p_lastname: this.lastname,
                p_firstname: this.firstname,
                p_middlename: this.middlename,
                p_description: this.description,
                p_userid: this.userid,
            }
            
        }    
    },
    methods: {
        onSubmit(e){
            const {p_lastname,p_firstname,p_middlename,p_description,p_userid} = this.profileData
            this.updateProfile({
                lastname: p_lastname,
                firstname: p_firstname,
                middlename: p_middlename,
                description: p_description,
                userid: p_userid
            })
            // console.log('submitted')
            this.$router.push("/")
        },
        onCancel(e){
            this.$router.push("/")
        },
        ...mapActions([
            'updateProfile'
        ])
    },
    props:[
        'lastname',
        'firstname',
        'middlename',
        'description',
        'userid'
    ]
}
</script>