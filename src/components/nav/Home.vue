<template>
    <div>
        <h1>Currently Registered Profiles</h1>

        <b-table stripped hover :items="computed_profiledata" :fields="fields" class="table_container">
            <template v-slot:cell(email)="data">
                <router-link :to="`/profile/${data.value}`">{{data.value}}</router-link>
            </template>
        </b-table>
        
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

export default {
    name:'home',
    data: function(){
        return{
            // data here
            fields: ['email','lastname','firstname', 'middlename',]
        }
    },
    methods: {
        ...mapActions([
            'getProfiles'
        ])
    },
    mounted(){
        this.getProfiles()
    },
    computed: {
        ...mapState([
            'profileData'
        ]),
        computed_profiledata: function(){
            if(Object.entries(this.profileData).length === 0){
                return []
            }else{
                return this.profileData
            }
        },
    }
    
}
</script>