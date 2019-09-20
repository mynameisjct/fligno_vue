<template>
    <div>
        <span id="user">Welcome <b>{{email}}</b>! <b-link @click="logout">SIGN OUT</b-link></span>
        <!-- <b-nav tabs>
            <b-nav-item><Home/></b-nav-item>
            <b-nav-item><Register/></b-nav-item>
        </b-nav> -->
        <b-nav tabs>
            <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item ><router-link to="/register">Register</router-link></b-nav-item>
            <b-nav-item ><router-link to="/search">Search</router-link></b-nav-item>
            <b-nav-item ><router-link to="/reports">Reports</router-link></b-nav-item>
        </b-nav>
        <br/>
        <b-container>
            <router-view/>
        </b-container>
    </div>
</template>

<script>

import Home from './nav/Home.vue'
import Register from './nav/Register.vue'

export default {
    name: 'Header',
    props:['email'],
    components: {
        Home,
        Register
    },
    data: function(){
        return{
            home_focus: 'active',
            register_focus: 'inactive'
        }
    },
    methods: {
        homeFocus: function(){

        },
        async logout(){
            await localStorage.clear();
            await window.location.reload();
        }
    }
}
</script>
<style type="text/css">
#user {
    position: absolute;
    top: 0;
    left: 0
}
</style>
