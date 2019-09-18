import Vue from 'vue'
import VueRouter  from 'vue-router'
import Home from '../components/nav/Home.vue'
import Register from '../components/nav/Register.vue'
import Profile from '../components/Profile.vue'

Vue.use(VueRouter )

export default new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/profile/:email',
            name: 'Profile',
            component: Profile
        }
    ]
})