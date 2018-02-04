/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const statUser = sequelize.define('statUser', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    dayOfWeek: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CountedTime: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    DailyEnterCount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'statDayUser'
  })
  return statUser
}
