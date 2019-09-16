import Vue from 'vue'
import VueRouter  from 'vue-router'
import Home from '../components/nav/Home.vue'
import Register from '../components/nav/Register.vue'

Vue.use(VueRouter )

export default new VueRouter ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/Register',
            component: Register
        }
    ]
})