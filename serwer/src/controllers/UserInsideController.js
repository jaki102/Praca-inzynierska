const {Customer} = require('../models')

module.exports = {
  async index  (req, res) {
    try {
      const customers = await Customer.findAll()
      res.send(customers)
      console.log(customers)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured trying to show customer.'
      })
    }
  },
  async post (req, res) {
    try {
      const customer = await Customer.create(req.body)
      res.send(customer)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show bla bla..'
      })
    }
  }
}
