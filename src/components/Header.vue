<template>
    <div>
        <span>{{email}}</span>
        <b-nav tabs>
            <b-nav-item><Home/></b-nav-item>
            <b-nav-item><Register/></b-nav-item>
        </b-nav>
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
    }
}
</script>