<template>
    <div>
        Year &nbsp;<b-form-select class="w-25" :options="years" :value=2019 v-model="selectedYear" @change="getYearlyReport">
        </b-form-select>
        <Chart v-bind:chartData="chartData"/>
    </div>
</template>
<script>

import Chart from '../views/Chart.vue'
import {mapState, mapActions} from 'vuex'

export default {
    name:'',
    components: {
        Chart
    },
    data(){
        return {
            chartData: {
                jan: 0,
                feb: 0,
                mar: 0,
                apr: 0,
                may: 0,
                jun: 0,
                jul: 0,
                aug: 0,
                sep: 0,
                oct: 0,
                nov: 0,
                dec: 0,
            },
            years: {2014:2014,2015:2015,2016:2016,2017:2017,2018:2018,2019:2019,2020:2020,2021:2021},
            selectedYear: 2019,
        }
    },
    computed: {
        ...mapState([
            'reports'
        ])
    },
    methods: {
        ...mapActions([
            'getYearlyReport',
        ]),
        getReports(){
            this.getYearlyReport(this.selectedYear)

            return(
                this.reports
            )
        }
    },
    watch: {
        reports(newValue,oldValue){
            this.chartData = {
                    jan: newValue.jan,
                    feb: newValue.feb,
                    mar: newValue.mar,
                    apr: newValue.apr,
                    may: newValue.may,
                    jun: newValue.jun,
                    jul: newValue.jul,
                    aug: newValue.aug,
                    sep: newValue.sep,
                    oct: newValue.oct,
                    nov: newValue.nov,
                    dec: newValue.dec
                }
            console.log('newvalue: ',newValue.sep, 'old value: ', oldValue.sep)
        }
    },
    mounted(){
        this.getReports()
    },
}
</script>