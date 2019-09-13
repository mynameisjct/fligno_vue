<template>
    <div>
        <p>THis is my Login Page {{message}}</p>
        <button @click='onSubmit'>Submit</button>
    </div>
</template>

<script>

    export default {
    name: 'login',
    components: {
    },
    data: function(){   
        return {
            showMain: 1,
            showLogin: 0,
            message: 'testing'
            }
    },
    methods: {
        onSubmit(e){
            alert('I am clicked!')
            this.$emit('showLogin', 'test data')
        }
    }
    }
</script>