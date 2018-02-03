const {StatDays} = require('../models')

module.exports = {
  async StatDaysInfo  (req, res) {
    try {
      const stat = await StatDays.findAll()
      res.send(stat)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show statistics.'
      })
    }
  }
}
