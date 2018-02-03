/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Log = sequelize.define('Log', {
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    in_out: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'log'
  })
  return Log
}
