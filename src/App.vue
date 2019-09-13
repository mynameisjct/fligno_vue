<template>
  <div id="app">
    <Login v-show="computed_userdata" @clicked="clickedFromChiled"/> <!-- use v-bind:prop_name to send prop to child,
                                                                    from child, use function $emit to get data emitted from child-->
    <div v-show="showNav">
      <Header/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import {mapState, mapActions} from 'vuex';

export default {
  name: 'app',
  components: {
    Login,
  },
  data: function(){
    return {
      login: 'load login from parent',
      showNav: false
    }
  },
  methods: {
    clickedFromChiled(value){
      // this.showLogin = value
      console.log(value) // value from child
    }
  },
  computed: {
    ...mapState([
      'userData'
    ]),
    computed_userdata: function(){
      if(Object.entries(this.userData).length === 0){
        return true
      }else{
        // return this.userData.user
        return false
      }
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
