const {statUser} = require('../models')

module.exports = {
  async StatUserInfo  (req, res, cos) {
    try {
      const userInfo = await statUser.findAll({
        where: {
          id: 1
        }
      })
      res.send(userInfo)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show statistics.'
      })
    }
  }
}
