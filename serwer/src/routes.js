const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const UserInsideController = require('./controllers/UserInsideController')
const LoansController = require('./controllers/LoansController')
const LogController = require('./controllers/LogController')
const StatDaysController = require('./controllers/StatDaysController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/test',
    UserInsideController.index)

  app.get('/loan',
    LoansController.loanRequest)

  app.get('/history',
    LogController.LogEvent)

  // app.get('/loanStatistic',
  //   LoansController.loanRequest)

  app.get('/mainStatistic',
    StatDaysController.StatDaysInfo)
}
