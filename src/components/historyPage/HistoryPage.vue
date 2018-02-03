<template>
    <div>
        <div class = "menu"><h1>Historia aktywności</h1></div>
        <div id="container">
            <table id="log" :class="test">
                <tr class="header">
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Aktywność</th>
                    <th>Data</th>
                <tr v-for = "log in logs"
                :key = "log.surname">
                    <td>{{log.name}}</td>
                    <td>{{log.surname}}</td>
                    <td>{{log.in_out}}</td>
                    <td>{{ getDate(log.date) }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import LogService from '@/services/LogService'
import Vue from 'vue'
import moment from 'moment'
import 'moment-timezone'
export default {
    data () {
        return{
            logs: null
        }
    },
    async mounted () {
        this.logs = (await LogService.LogEvent()).data
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
@import './HistoryPage.scss';
</style>