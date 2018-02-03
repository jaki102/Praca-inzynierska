const {Debtor} = require('../models')
const {Tools} = require('../models')

Debtor.belongsTo(Tools, {foreignKey: 'barcode', targetKey: 'barcode'})
module.exports = {
  async loanRequest  (req, res) {
    try {
      const debtor = await Debtor.findAll({
        include: [{
          model: Tools
        }]
      })
      res.send(debtor)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to show debtors.'
      })
    }
  }
}
