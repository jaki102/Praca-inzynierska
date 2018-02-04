import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LoginPage from '@/components/loginPage/LoginPage'
import RegisterPage from '@/components/registerPage/RegisterPage'
import Test from '@/components/test/Test'
import LoanPage from '@/components/loanPage/LoanPage'
import HistoryPage from '@/components/historyPage/HistoryPage'
import StatisticPage from '@/components/statisticPage/StatisticPage'
import StatLoan from '@/components/statisticPage/statLoan/StatLoan'
import StatMain from '@/components/statisticPage/statMain/StatMain'
import StatUser from '@/components/statisticPage/statUser/StatUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/loan',
      name: 'LoanPage',
      component: LoanPage
    },
    {
      path: '/history',
      name: 'HistoryPage',
      component: HistoryPage
    },
    {
      path: '/statistic',
      name: 'StatisticPage',
      component: StatisticPage
    },
    {
      path: '/loanStatistic',
      name: 'StatLoan',
      component: StatLoan
    },
    {
      path: '/mainStatistic',
      name: 'StatMain',
      component: StatMain
    },
    {
      path: '/userStatistic',
      name: 'StatUser',
      component: StatUser
    }
  ]
})
