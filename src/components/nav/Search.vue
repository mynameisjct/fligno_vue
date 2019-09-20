<template>
    <div>
        <div class="searchBar">
            <b-input-group prepend="Search">
                <b-input v-model.lazy="toSearch" placeholder="feeling lucky.."/>
            </b-input-group>
            &nbsp;&nbsp;
            <b-form-select class="w-25" :options="toLimit" :value=3 v-model="limit">
            </b-form-select>
        </div>
        <SearchContainer v-if="show" :searchResults="results" :searchFields="fields"/>
    </div>
</template>
<script>

import SearchContainer from '../views/SearchContainer.vue'
import {mapState,mapActions} from 'vuex'

export default {
    name: 'search',
    components: {
        SearchContainer
    },
    data(){
        return {
            toSearch: '',
            toLimit: {1: 'Show only One',2: 'Show only Two', 3: 'Show only Three', 4: 'Show only Four', 5: 'Show only Five'},
            fields: ['email','lastname','firstname', 'middlename'],
            show: false,
            results: [],
            limit: 3,
        }
    },
    watch: {
        toSearch(value){
            this.performSearch(value)
        },
        searchResults(newValue, oldValue){
            this.results = newValue
        },
        limit(value){
            this.performSearch(this.toSearch)
        }
    },
    methods: {
        ...mapActions([
            'searchProfile'
        ]),
        performSearch(value){
            if(value.length > 2){
                this.show = true
                console.log(value,  " show", this.show)

                //perform search action
                this.searchProfile({
                    limit: this.limit,
                    name: value
                })
            }else{
                this.show = false
                this.toSearch = ''
            }
        }
    },
    computed: {
        ...mapState([
            'searchResults'
        ])
    }
}
</script>
<style scoped>
.searchBar {
    display: flex;
}
</style>