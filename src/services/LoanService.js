import Api from '@/services/Api'

export default {
     loanRequest() {
        return Api().get('loan')
    }
}

