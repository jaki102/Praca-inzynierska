/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Tools = sequelize.define('Tools', {
    barcode: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'sprzet'
  })
  return Tools
}
