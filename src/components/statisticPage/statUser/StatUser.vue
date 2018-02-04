<template>
  <div class = "wrapper">
    <div>
        <div class = "menu"><h1>Statystyki użytkownika</h1></div>
        <div class = "user">
            <span>Użytkownik: </span>
            <select v-model = "selected"  @change = "selectUser">
                <option disabled value="">Please select one</option>
                <option v-for="user in users">{{user.imie}} {{user.nazwisko}}</option>
            </select>
        </div>
        <div class = "charts">
            <div>
                <vue-chart class = "bar-chart" type="bar" :data="chartData"></vue-chart>
            </div>
            <div>
                <span></span>
                <vue-chart class = "doughnut-chart" type="doughnut" :data="chartData2" ></vue-chart>
            </div>
        </div>
        </div>
  </div>
</template>
 
<script>
import VueChart from 'vue-chart-js'
import StatUserService from '@/services/StatUserService'
import Vue from 'vue'
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
        ]
        },
        users: null
  }),  

    async mounted () {
        const tempData = (await StatUserService.StatUserInfo()).data
        this.users = (await StatUserService.getUser()).data
        // this.chartData = this.mapChartMinutes(tempData)
        // this.chartData2 = this.mapChartQuantity(tempData)
    },

    methods: {
        selectUser(event){
            debugger;
            const nazwisko = event.target.nazwisko;
            const id = this.users.filter(user => user.nazwisko == nazwisko)[0].id;
            alert(id);
        },
        // mapChartMinutes(data) {
        //     const minutes = data.map(day => (day.minutes / 60).toFixed(1));
        //     this.chartData.datasets[0].data = minutes
        //     return data
        // },

        // mapChartQuantity(data) {
        //     const quantity = data.map(day => day.quantity);
        //     this.chartData2.datasets[0].data = quantity
        //     return data
        // }
    }
}
</script>
<style lang="scss">
@import './StatUser.scss';
</style>