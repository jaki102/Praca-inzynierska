<template>
<div>
    <div class = "menu"><h1>Statystyki wypożyczeń</h1></div>
    <div class="wrapStatLoan">
        <div class = "wrapL">
            <div class = "device">
                <div>
                    <span>Sprzęt:</span>
                    <select v-model = "selected">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                    </select>
                </div>
                <div class = "status">
                    <div>
                        <span>Status:</span>
                        <span>Wypożyczone</span>
                    </div>
                    <div>
                        <span>Posiadacz:</span>
                        <span>Jakub Białek</span>
                    </div>
                </div>
            </div>
            <div>
                <span>Ilość wypożyczeń: </span>
                <span>2</span>
            </div>
            <div>
                <span>Ostatnie wypożyczenie:</span>
                <span>28.01.2018</span>
            </div>
            <div class="containStat">
                <table>
                    <tr class="header">
                        <th>Imię i nazwisko</th>
                        <th>Data wypożyczenia</th>
                    </tr>
                </table>
            </div>
        </div>
        <div class = "wrapP">
            <div class = "owners">
                <div>
                    <span>Użytkownik:</span>
                    <select v-model = "selected">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                    </select>
                </div>
                <div class = "deviceLoan">
                    <span>Aktualnie wypożyczony sprzęt</span>
                    <div class="loanNow">
                        <table>
                            <tr class="header">
                                <th>Kod</th>
                                <th>Nazwa</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <span>Historia wypożyczeń</span>
            </div>
            <div class="historyLoan">
                <table>
                    <tr class="header">
                        <th>Kod</th>
                        <th>Nazwa</th>
                        <th>Ilość wypożyczeń</th>
                        <th>Data ostatniego wypożyczenia</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
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