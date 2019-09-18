<template>
    <div>
        <b-form @submit.prevent="onSubmit">
            <table id="table_style">
                <th>
                    <h3>Login Information</h3>
                    <tr>
                        <b-form-group label-for="input-email" description="We won't give away your email.">
                            <b-input-group size="sm" prepend="@">
                                <b-form-input @blur="onLostFocus" id="input-email" placeholder="email" type="email" v-model="loginCredentials.email" required />
                            </b-input-group>
                        </b-form-group>
                    </tr>
                    <tr>
                        <b-form-group label-for="input-password" >
                            <b-input-group size="sm" prepend="*">
                                <b-form-input id="input-email" placeholder="password" type="password" v-model="loginCredentials.password" required />
                            </b-input-group>
                        </b-form-group>
                    </tr>
                    <tr>
                        <b-form-group label-for="input-repassword" description="Re-type password">
                            <b-input-group size="sm" prepend="*">
                                <b-form-input id="input-email" placeholder="password" type="password" v-model="loginCredentials.retypePassword" required />
                            </b-input-group>
                        </b-form-group>
                    </tr>
                </th>

                <th>
                    <h3>Profile Information</h3>
                    <tr>
                        <b-form-group label-for="input-lastname">
                            <b-input-group size="sm" prepend="Lastname">
                                <b-form-input id="input-lastname" type="text" v-model="profileData.lastname" required />
                            </b-input-group>
                        </b-form-group>
                        <b-form-group label-for="input-firstname">
                            <b-input-group size="sm" prepend="Firstname">
                                <b-form-input id="input-firstname" type="text" v-model="profileData.firstname" required />
                            </b-input-group>
                        </b-form-group>
                        <b-form-group label-for="input-middlename">
                            <b-input-group size="sm" prepend="M.I. / MName">
                                <b-form-input id="input-mname" type="text" v-model="profileData.middlename" required />
                            </b-input-group>
                        </b-form-group>
                        <b-form-group label-for="input-about-me" label="More about me">
                            <b-input-group size="sm">
                                <b-form-textarea id="input-description" type="text" v-model="profileData.description" required />
                            </b-input-group>
                        </b-form-group>
                    </tr>
                </th>
            </table>
            <br/>
            <b-button type="submit" variant="primary">Save</b-button> &nbsp;
            <b-button @click="onCancel" variant="danger" >Cancel</b-button>
        </b-form>
        <Modal id="myid" :header="header" :message="errorMessage"/>
    </div>
</template>
<script>
import Modal from '../modal/Modal.vue'
import {mapState,mapActions} from 'vuex'

export default {
    name:'registerForm',
    components: {
        Modal
    },
    data(){
        return {
            loginCredentials: {
                email: '',
                password: '',
                retypePassword: '',
            },
            profileData: {
                firstname: '',
                lastname: '',
                middlename: '',
                description: '',
            },
            errorMessage: '',
            header: '',
            proceed: this.validation,
        }
    },
    computed: {
        ...mapState([
            'validation'
        ])
    },
    watch:{
        validation(newVal, oldVal){
            console.log('new: ',newVal, ' old: ', oldVal)
            this.proceed = newVal
        }
    },
    methods: {
        onLostFocus(e){
            this.emailValidation({email:this.loginCredentials.email})
        },
        onCancel(e){
            this.loginCredentials= {
                email: '',
                password: '',
                retypePassword: '',
            },
            this.profileData= {
                firstname: '',
                lastname: '',
                middlename: '',
                description: '',
            }
            this.$router.push('/') // redirect to home
        },
        onSubmit(e){
            // verify if passwords matched!
            if(this.verifyPassword(this.loginCredentials.password,this.loginCredentials.retypePassword)){
                // check for existing email
                
                if(this.proceed){
                    // if true, non-existent and perform save
                    
                    this.saveProfile({
                        email: this.loginCredentials.email,
                        password: this.loginCredentials.password,
                        lastname: this.profileData.lastname,
                        firstname: this.profileData.firstname,
                        middlename: this.profileData.middlename,
                        description: this.profileData.description
                    })

                    this.header = ""
                    this.errorMessage = "Saved!"
                    this.$bvModal.show("myid")
                }else{
                    this.header = "Error encountered while saving"
                    this.errorMessage = "Email address '" + this.loginCredentials.email + "' already exist!"
                    this.$bvModal.show("myid")

                    // revert validation to default
                    this.revertDefault()
                }
            }
            
        },
        verifyPassword(originalPass, retypePass){
            if(originalPass.length <= 0 || retypePass.length <= 0){
                this.errorMessage = "Empty Passwords"
                this.header = "Passwords must not be empty"
                this.$bvModal.show("myid")

                return false
            }else if(originalPass !== retypePass){
                this.errorMessage = "Passwords not matched"
                this.header = "Incorrect Passwords"
                this.$bvModal.show("myid")

                return false
            }else{
                return true
            }
            
        },
        ...mapActions([
            'emailValidation',
            'saveProfile',
            'revertDefault'
        ])
    },
    mounted(){
        this.proceed = this.validation
         console.log('checking in mount: ',this.proceed)
    }
}
</script>
<style scoped>
#table_style {
    border-spacing: 50px 0;
    border-collapse: separate;
    border: 1px dotted gray;
};
#footer_style {
    border: 1px solid black;
};
</style>