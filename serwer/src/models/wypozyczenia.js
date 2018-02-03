/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Debtor = sequelize.define('Debtor', {
    barcode: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    userName: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'wypozyczenia'
  })
  return Debtor
}
