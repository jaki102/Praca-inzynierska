<template>
    <div id="container">
        <table id="inside">
            <tr class="header">
                <th>Lp</th>
                <th>Imię</th>
                <th>Nazwisko</th>
            <tr v-for = "customer in inside"
            :key = "customer.id">
                <td>{{customer.id}}</td>
                <td>{{customer.name}}</td>
                <td>{{customer.surname}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import InsideService from '@/services/InsideService'
export default {
    data () {
        return{
            inside: null
        }
    },
    async mounted () {
        this.inside = (await InsideService.index()).data
    }
}

</script>
<style lang="scss">
@import './Test.scss';
</style>