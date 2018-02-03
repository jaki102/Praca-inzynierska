<template>
    <div>
        <div class = "menu"><h1>Rejestr wypożyczeń</h1></div>
        <div id="container">
            <table id="loan" :class="test">
                <tr class="header">
                    <th>Użytkownik</th>
                    <th>Sprzęt</th>
                    <th>Opis urządzenia</th>
                    <th>Data wypożyczenia</th>
                <tr v-for = "debtor in loans"
                :key = "debtor.userName">
                    <td>{{debtor.userName}}</td>
                    <td>{{debtor.Tool.name}}</td>
                    <td>{{debtor.Tool.description}}</td>
                    <td>{{ getDate(debtor.date) }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import LoanService from '@/services/LoanService'
import Vue from 'vue'
// Vue.use(require('vue-moment'))
import moment from 'moment'
import 'moment-timezone'
export default {
    data () {
        return{
            loans: null
        }
    },
    async mounted () {
        this.loans = (await LoanService.loanRequest()).data
    },

    computed: {
        test() {
            debugger;
        },

        
    },

    methods: {
        getDate(date) {
            const timezone = moment(date).add('1', 'hours')
            return timezone.tz("Europe/Warsaw").format('YYYY-MM-DD, HH:mm:ss')
        }
    }
}

</script>
<style lang="scss">
@import './LoanPage.scss';
</style>