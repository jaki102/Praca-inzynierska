import Api from '@/services/Api'

export default {
    StatDaysInfo () {
        return Api().get('mainStatistic')
    }
}
