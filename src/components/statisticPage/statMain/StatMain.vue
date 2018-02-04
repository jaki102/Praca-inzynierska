<template>
  <div class = "wrapper">
    <div>
        <div class = "menu"><h1>Statystyki ogólne</h1></div>
        <div class = "charts">
            <div>
                <vue-chart class = "bar-chart" type="bar" :data="chartData"></vue-chart>
            </div>
            <div>
                <span>Liczba wejść w poszczególnych dniach tygodnia</span>
                <vue-chart class = "doughnut-chart" type="doughnut" :data="chartData2" ></vue-chart>
            </div>
        </div>
        </div>
  </div>
</template>
 
<script>
import VueChart from 'vue-chart-js'
import StatMainService from '@/services/StatMainService'
import Vue from 'vue'
import moment from 'moment'
export default {
  name: 'App',
 
  components: {
    VueChart
  },
 
  data: () => ({
    chartData: {
        labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd'],
        datasets: [
            {
                label: 'Zajętość laboratorium [ w godz.]',
                data: [2, 8, 3, 7, 3, 5, 0],
                backgroundColor: "#29b6f6"
            }
        ]
    },
        chartData2: {
        labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'So', 'Nd'],
        datasets: [
            {
                data: [2, 8, 3, 7, 3, 5, 0],
                backgroundColor: ["#29b6f6", "#ef5350", "#ffa726", "#26a69a", "#66bb6a", "#ab47bc", "#8d6e63"]
            }
        ],
        }
  }),  
    computed: {
        test() {
            debugger;
        }
    },

    async mounted () {
        const tempData = (await StatMainService.StatDaysInfo()).data
        this.chartData = this.mapChartMinutes(tempData)
        this.chartData2 = this.mapChartQuantity(tempData)
    },

    methods: {
        mapChartMinutes(data) {
            const minutes = data.map(day => (day.minutes / 60).toFixed(1));
            this.chartData.datasets[0].data = minutes
            return data
        },

        mapChartQuantity(data) {
            const quantity = data.map(day => day.quantity);
            this.chartData2.datasets[0].data = quantity
            return data
        }
    }

 
}
</script>
<style lang="scss">
@import './StatMain.scss';
</style>