<template>
    <div>
        <b-modal :id="id" :title="header">
            <p>{{message}}</p>
            <template v-slot:modal-footer="{ok}">
                <b-button size="lg" variant="success"  @click="ok()">
                    Okay
                </b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
export default {
    name: 'modal',
    data(){
        return {
            show: this.visible,
        }
    },
    props: ['id','message','header', 'footer', 'visible'],
    mounted(){
        console.log(this.props)
    }
}
</script>