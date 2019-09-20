<template>
  <div id="app">
    <!-- <Login v-if="computed_userdata" @clicked="clickedFromChiled"/> use v-bind:prop_name to send prop to child,
                                                                    from child, use function $emit to get data emitted from child
                                                                    -->
  
    <Login v-if="computed_userdata" />
    <Header v-else v-bind:email="userData.user"/>
    <!-- <Header v-bind:email="userData.user"/> -->

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    Login,
    Header,
  },
  data: function(){
    return {
      email: this.userData
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
    ...mapGetters([
      'getUserLogin'
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
