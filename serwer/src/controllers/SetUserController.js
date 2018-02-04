const {Access} = require('../models')

module.exports = {
  async getUser  (req, res) {
    try {
      const access = await Access.findAll({
        attributes: ['id', 'imie', 'nazwisko']
      })
      res.send(access)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show statistics.'
      })
    }
  }
}
