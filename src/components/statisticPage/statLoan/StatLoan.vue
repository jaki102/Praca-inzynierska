<template>
    <div>
        <div class = "menu"><h1>Statystyki wypożyczeń</h1></div>
        <span>Sprzęt:</span>
        <select v-model = "selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
        </select>
    </div>
</template>
<script>
// import LoanService from '@/services/LoanService'
// import Vue from 'vue'
// export default {
//     data () {
//         return{
//             loans: null
//         }
//     },
//     async mounted () {
//         this.loans = (await LoanService.loanRequest()).data
//     },

//     computed: {
//         test() {
//             debugger;
//         },

        
//     },

//     methods: {
//         getDate(date) {
//             const timezone = moment(date).add('1', 'hours')
//             return timezone.tz("Europe/Warsaw").format('YYYY-MM-DD, HH:mm:ss')
//         }
//     }
// }
</script>
<style lang="scss">
@import './StatLoan.scss';
</style>