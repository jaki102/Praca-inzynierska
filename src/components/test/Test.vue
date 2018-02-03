<template>
<div>
    <div class="access" v-if="permission">
        <div><h1>Teraz obecni</h1></div>
        <div class="container">
        <table class="inside">
            <tr class="header">
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Data wejścia</th>
            <tr v-for = "customer in inside"
            :key = "customer.id">
                <td>{{customer.name}}</td>
                <td>{{customer.surname}}</td>
                <td>{{getDate(customer.date)}}</td>
            </tr>
        </table>
    </div>
    </div>
    <div v-else class="access-denied">
        BRAK DOSTĘPU
    </div>
    </div>
</template>
<script>
import InsideService from '@/services/InsideService'
import moment from 'moment'
import 'moment-timezone'
export default {
    data () {
        return{
            inside: null,
             logs: null
        }
    },
    async mounted () {
        this.inside = (await InsideService.index()).data
    },

    computed: {
        permission(){
            return this.$store.getters.isUserLoggedIn
        }
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
@import './Test.scss';
</style>