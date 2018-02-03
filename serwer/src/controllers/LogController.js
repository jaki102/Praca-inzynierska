const {Log} = require('../models')

module.exports = {
  async LogEvent  (req, res) {
    try {
      const log = await Log.findAll({ limit: 12, order: [['date', 'DESC']] })
      res.send(log)
      console.log(log)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show logs.'
      })
    }
  }
}
