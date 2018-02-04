import Api from '@/services/Api'

export default {
    getUser () {
        return Api().get('getUser')
    },
    StatUserInfo () {
        return Api().get('userStatistic')
    }
}
