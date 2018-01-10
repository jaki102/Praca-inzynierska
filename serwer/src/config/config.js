module.exports = {
  port: 3306,
  db: {
    database: 'inzynierka',
    user: 'inzynier',
    password: 'haslo12345',
    options: {
      dialect: 'mysql',
      host: '212.237.20.10'
    }
  },
  authentication: {
    jwtSecret: 'secret'
  }
}
