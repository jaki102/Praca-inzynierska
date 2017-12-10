import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LoginPage from '@/components/loginPage/LoginPage'
import Test from '@/components/test/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
