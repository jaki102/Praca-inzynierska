/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('statLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dayOfWeek: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    minutes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    godz_wej: {
      type: DataTypes.TIME,
      allowNull: true
    },
    godz_wyj: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'statLog'
  })
}
