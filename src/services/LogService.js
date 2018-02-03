import Api from '@/services/Api'

export default {
    LogEvent () {
        return Api().get('history')
    }
}
