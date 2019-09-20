<template>
    <div>
        <b-table stripped hover :items="searchResults" :fields="searchFields">
            <template v-slot:cell(email)="data">
                <router-link :to="`/profile/${data.value}`">{{data.value}}</router-link>
            </template>
        </b-table>
    </div>
</template>
<script>
export default {
    name: 'searchContainer',
    props: [
        'searchResults',
        'searchFields'
    ],
    data() {
        return{  
        }
    }
}
</script>