<template>
  <div class="login">
    <div v-if="loginLoading" class="container-loading">
      <img src="../../public/loadmasks/loading.gif" alt="Loading Icon">
    </div>
    <p v-if="loginError">{{ loginError }}</p>
    <p v-if="loginSuccess">Login Successful</p>
    <form @submit.prevent="loginSubmit">
      <input type="email" placeholder="E-Mail" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button type="submit">Login</button>
      <b-link v-b-tooltip.hover title="Click to reset password whose email on the field above." @click="doResetPass">Reset Password</b-link>
    </form>
    <Modal id="resetmodal" :header="header" :message="message" />
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Modal from './modal/Modal.vue'

export default {
    name: 'login',
    props: ['login_prop'],
    methods: {
        loginSubmit(event){
						// this.$emit('clicked', 'Submitting Data') // this is the example for setting props to parent
						this.doLogin({
							email: this.email,
							password: this.password,
						})
				},
				...mapActions([
          'doLogin',
          'resetPassword'
        ]),
        doResetPass() {
          if(this.email.length > 0){
            this.resetPassword(this.email)
          }else{
            this.header = "Unknown Email"
            this.message = "Seems you forgot to provide email address"
            this.$bvModal.show("resetmodal")
          }
        }
		},
		data: function(){
			return{
				email:'',
        password: '',
        header: '',
        message: '',
			}
		},
		computed: {
			...mapState([
				'loginLoading',
				'loginError',
        'loginSuccess',
        'mailMessage',
      ]),
    },
    components: {
      Modal
    },
    watch: {
      mailMessage(newVal, oldVal){
        if(newVal !== undefined){
          this.message = newVal

          if(this.message.length > 5){
            this.header = "Error while ressting password"
            this.$bvModal.show("resetmodal")
          }else{
            this.header = "Please check your email"
            this.$bvModal.show("resetmodal")
          }
       }
      }
    },
}
</script>
<style scoped lang="scss">
  .login {
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    .container-loading {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,.3);
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    form {
      display: flex;
      flex-flow: column;
      *:not(:last-child) {
        margin-bottom: 1rem;
      }
      input {
        padding: .5rem;
      }
      button {
        padding: .5rem;
        background-color: lightgray;
        border: 1px solid gray;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: lightslategray;
        }
      }
    }
  }
</style>

<!--
OLD TEMPLATE

<template>
    <div>
        <p>Login Page {{login_prop}}</p>
        <button @click="onSubmit">Submit</button>
    </div>
</template>

-->