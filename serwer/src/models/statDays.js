/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const StatDays = sequelize.define('StatDays', {
    dayOfWeek: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    minutes: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'statDays'
  })
  return StatDays
}
