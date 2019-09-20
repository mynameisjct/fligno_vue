<script>

import {Line} from 'vue-chartjs'

export default {
    name: 'chart',
    extends: Line,
    data() {
        return {}
    },
    props:['chartData'],
    watch:{
        chartData(newValue, OldValue){
            this.chartRender(newValue)
        }
    },
    methods: {
        chartRender(payload){
            this.renderChart({
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                datasets: [
                    {
                        label: "Users",
                        data: [
                                payload.jan, 
                                payload.feb,
                                payload.mar, 
                                payload.apr,
                                payload.may, 
                                payload.jun,
                                payload.jul,
                                payload.aug,
                                payload.sep,
                                payload.oct,
                                payload.nov,
                                payload.dec
                        ],
                        backgroundColor: "transparent",
                        borderColor: "rgba(1, 116, 188, 0.50)",
                        pointBackgroundColor: "rgba(171, 71, 188, 1)"
                    }
                    ]
                },
                {
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                    display: true,
                    text: "History of Registered Users"
                    }
                }
            )
        }
    },
    mounted(){
        this.chartRender(this.chartData)
    }
}
</script>