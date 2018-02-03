/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('statDayUser', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
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
  });
};
